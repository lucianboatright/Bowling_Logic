

describe ('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#bowl', function(){
    // beforeEach(function(){
    //   game = new Game();
    // });
    it('test that first score is added to game', function(){
      game.bowl(7);
      expect(game.getFrame()).toEqual(7);
    });

    it('test that first and second score is added to game', function(){
      game.bowl(7);
      game.bowl(3);
      expect(game.getFrame()).toEqual(10);
    });
  });

  describe('Game with all gutter bowls',function(){
    // beforeEach(function(){
    //   game = new Game();
    // });

    it('0 on all rolls',function(){
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });
  });

  describe('Game with all bowls as 1', function(){
    it('can roll all 2', function(){
      rollMany(2, 20);
      expect(game.score()).toBe(40);
    });
  });

  describe('spare check', function(){
    it('can roll a spare', function(){
      game.bowl(5);
      game.bowl(5);
      game.bowl(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    });
  });

  describe('strike', function(){
    it('can a strike be rolled', function(){
      game.bowl(10);
      game.bowl(4);
      game.bowl(2);
      rollMany(0, 16);
      expect(game.score()).toBe(22)
    })
  })

  describe('max', function(){
    it('can score max 300', function(){
      rollMany(10,12);
      expect(game.score()).toBe(300)
    })
  })

  var rollMany = function(pins, bowls){
    for (var i = 0; i < bowls; i++){
      game.bowl(pins);
    }
  };
});

    // it('test for fames sent to game array', function(){
    //   var frame = new Frame();
    //   frame.bowl(3);
    //   frame.bowl(4);
    //   frame.bowl(5);
    //   frame.bowl(5);
    //   expect(this.showBoard).toBe[[3,4],[5,5]];
    // });



