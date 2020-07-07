const { trelloBoardIds, trelloLists } = require("../config.js");
const axios = require("axios");
const fs = require("fs");
const cards = [];
let cachedMembers = [];
const cachedBoards = [];
let iteration = 1;

const outputPath = `${__dirname}/../src/_data/`;

let log = function(message) {
  if (process.env.ELEVENTY_ENV === "production") return;
  console.log(message);
};

const cardLookup = (endpoint) => {
  return axios
    .get(endpoint)
    .then(response => {

      // Get an array of the board's lists that we care about
      let lists = response.data.lists.filter(list => trelloLists.includes(list.name));

      // Format the members array
      let members = response.data.members.map(({
        confirmed,
        memberType,
        avatarUrl,
        activityBlocked,
        idMemberReferrer,
        nonPublic,
        nonPublicAvailable,
        ...keepAttrs}
      ) => {
        {
          return {
            // Store the avatar URL… 50.png is also an option
            avatar: `https://trello-members.s3.amazonaws.com/${keepAttrs['id']}/${keepAttrs['avatarHash']}/170.png`,
            ...keepAttrs
          }
        }
      });

      // We're going to create a JSON file for members as well as cards…
      if (cachedMembers.length === 0) {
        cachedMembers = members;
      } else {
        members.forEach(member => {
          if (!cachedMembers.some((m) => m.id === member.id)) {
            cachedMembers.push(member);
          }
        });
      }

      // And a list of the boards that we're pulling in…
      cachedBoards.push({
        id: response.data.id,
        name: response.data.name,
        desc: response.data.desc,
        url: response.data.url
      });

      // Loop through each card on the board
      response.data.cards.forEach(item => {

        // Skip card if not in the given lists (see config.js)
        let cardWanted = (list) => item.idList === list.id;
        if (!lists.some(cardWanted)) {
          return;
        }

        // We're only interested in the list name for this card
        listName = lists.find(list => list.id === item.idList).name;

        // Fish out the member info
        cardMembers = []
        item.idMembers.forEach(memberId => {
          cardMembers.push(members.find(member => member.id === memberId));
        });

        cards.push({
          id: item.id,
          board: {
            id: response.data.id,
            name: response.data.name,
            url: response.data.url
          },
          list: listName,
          name: item.name,
          url: item.url,
          position: item.pos,
          dueDate: item.due,
          // labels: item.labels,
          // cover: item.cover,
          members: cardMembers
        });
        log(`✅ ${item.name}`);
      });

      // When we have got all the data from the boards, store it to JSON
      if (trelloBoardIds.length == iteration) {
        writeData(cards, 'cards.json');
        writeData(cachedMembers, 'members.json');
        writeData(cachedBoards, 'boards.json');
        return;
      }

      iteration++;
    })
    .catch(error => console.log("Error :", error));
};

// Write the card data out as JSON…
const writeData = (data, file) => {
  let fileDestination = outputPath + file;
  fs.writeFile(fileDestination, JSON.stringify(data, null, '\t'), err => {
    if (err) {
      console.log(err);
      return;
    }
    log(`Data saved to: ${fileDestination}`);
  });
}

// Actually do the work…
trelloBoardIds.forEach(boardId => {
  trelloBoardUrl = `https://api.trello.com/1/boards/${boardId}?cards=all&members=all&checklists=all&lists=all`;
  cardLookup(trelloBoardUrl);
});
