class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    const new_list = $('<ul></ul>')
    for (let i = 0; i < 3; i++) {
      new_list.append($('<li></li>'))
    }
    this.$el.append(new_list);
  }

  render() {

  }

  clickTower() {

  }
}

module.exports = HanoiView;