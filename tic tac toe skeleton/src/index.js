const View = require('./ttt-view.js')
const Game = require('../../tic tac toe node solution/game.js')

  $(() => {
    container = $('.ttt');
    game = new Game();
    view = new View(game, container);
  });
