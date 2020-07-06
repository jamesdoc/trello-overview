const dayjs = require('dayjs');

module.exports = {

  cardsInList: (cards, listName) => {
    return cards.filter(card => card.list == listName);
  },

  shortDate: (dateObj) => {
    return dayjs(dateObj).format('D MMMM');
  },

};
