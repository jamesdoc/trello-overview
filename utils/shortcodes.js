module.exports = {

  svgIcon: (icon, cls) => {
    return `<svg class="${cls}">
      <use xlink:href="/svg/sprite.svg#${icon}"></use>
    </svg>`;
  }

};
