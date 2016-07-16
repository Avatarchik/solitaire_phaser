var gameContainer:SolitaireGame;

class SolitaireGame {
	game: Phaser.Game;
	deck: Deck;
	deckSprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(1024, 768, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
	}



    preload() {
		this.game.stage.backgroundColor = 0xB20059;
		this.game.load.image('background', 'assets/backgrounds/debug-grid.png')
		this.game.load.spritesheet('cards', 'assets/sprites/Deck-72x100x16.gif', 
            PlayingCard.CARD_WIDTH, 
            PlayingCard.CARD_HEIGHT, 
            CardConstants.DECK_SIZE);
	}


	update(){

	}

	create() {
		var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
		logo.anchor.setTo(0.5, 0.5);
		gameContainer.loadFinished();
	}

	loadFinished(){
		this.deck = new Deck(this.game,10,10,0,false);
		this.deck.initDeck();
		this.deck.shuffleDeck();
	}
}

window.onload = () => {
	gameContainer = new SolitaireGame();
}
