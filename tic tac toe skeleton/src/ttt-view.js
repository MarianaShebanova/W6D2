class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on('click', (e)=>{ 
      let target = $(e.target);
      this.makeMove(target);    
    });
  }

  makeMove($square) {
    let row = Math.floor($square.index() / 3);
    let col = $square.index() % 3;
    this.game.playMove([row, col]);
    $square.append(this.game.currentPlayer)
    if (this.game.isOver()) {
      if (this.game.winner()) {
        alert(`${this.game.currentPlayer} has won!`);
      } else {
        alert('NO ONE WINS!');
      }
    }
  }

  setupBoard() {
    const new_list = $('<ul></ul>')
    for (let i = 0; i < 9; i++) {
      new_list.append($('<li></li>'))
    }
    this.el.append(new_list);
  }
}

module.exports = View;
