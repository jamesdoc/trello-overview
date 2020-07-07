module.exports = {

  meta: {
    name: "Trello Overview",
    description: "A simple tool for displaying cards across multiple Trello boards…",
  },

  // Trello board IDs
  // https://trello.com/b/H3ImVSBv/board-slug
  trelloBoardIds: [
    'H3ImVSBv',
    'DdcFqmdv'
  ],

  // Trello lists to import…
  trelloLists: [
    'To Do',
    'Doing',
    'Done'
  ],

  // Theme colors… ala Tailwind
  // https://tailwindcss.com/docs/customizing-colors/
  themeColors: {
    primary: {
      lighter: '#5f98c2',
      light: '#4888b9',
      default: '#036aa7',
      dark: '#386581',
      darker: '#42526e'
    },

    background: {
      lighter: '#f4f5f7',
      light: '#ebecef',
      default: '#dddfe2',
      dark: '#5f6d84',
      darker: '#192b4d'
    }
  }

};
