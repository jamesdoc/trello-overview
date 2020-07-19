import 'alpinejs'

window.filters = () => {
  return {
    filter: {
      person: [],
      board: []
    },

    togglePersonFilter(id) {
      if (this.filter.person.includes(id)) {
        this.filter.person = this.filter.person.filter(personId => personId !== id);
      } else {
        this.filter.person.push(id);
      }
    },

    toggleBoardFilter(id) {
      if (this.filter.board.includes(id)) {
        this.filter.board = this.filter.board.filter(boardId => boardId !== id);
      } else {
        this.filter.board.push(id);
      }
    },

    boardVisible(boardId) {
      if (this.filter.board.length == 0) {
        return true;
      }

      if (this.filter.board.includes(boardId)) {
        return true;
      }

      return false;
    },

    memberVisible(memberId) {
      if (this.filter.person.length == 0) {
        return true;
      }

      if (this.filter.person.includes(memberId)) {
        return true;
      }

      return false;
    },

    cardVisible(boardId, memberIds) {

      // There are no filters- everything is visible
      if (this.filter.person.length == 0 && this.filter.board.length == 0) {
        return true;
      }

      // Is the board in the filter?
      if (this.filter.board.includes(boardId)) {
        return true;
      }

      // Is the member in the filter?
      let memberFound = false;
      memberIds.forEach(memberId => {
        if (this.filter.person.includes(memberId)) {
          memberFound = true;
        }
      });

      return memberFound;
    }
  };
}