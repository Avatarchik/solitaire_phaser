///<reference path='../genericGameObjects/Placeable.ts' />
class Deck extends Placeable{

    game: Phaser.Game;
    deck: PlayingCard[];
    deckSprite: Phaser.Sprite;
    flatDeck:boolean;
    constructor(game: Phaser.Game,xPos,yPos,zPos?:number,flatDeck?:boolean) {
        super(xPos,yPos,zPos);
        this.game = game;
        this.flatDeck = flatDeck == null ? false : flatDeck;
    }

    /**
     * Generates a brand new, 52 card deck
     */
    initDeck():void{

        this.deck = new Array();

        for (var i = 0; i < CardConstants.DECK_SIZE; i++) {
            var suit = cardUtils.getSuit(i);
            var faceValue = cardUtils.getFaceValue(i);

            this.deck.push(new PlayingCard(faceValue, suit, 0, 0, null));
            var cardSprite = this.game.add.sprite(
                this.getX(),0, 'cards');
            cardSprite.frame = i;
            cardSprite.inputEnabled = true;
            cardSprite.input.enableDrag(true);
            this.deck[i].setCardSprite(cardSprite);
            this.deck[i].getSprite().y = this.getY() + (i * this.getOffsetY());
        }
    }


    addCard(card:PlayingCard){
        this.deck.push(card);
        card.getSprite().x = this.getX();
        card.getSprite().y = this.calcYPosition();
    }

    popCard(): PlayingCard{
        return this.deck.pop();
    }

    private calcYPosition(){
        for(var i = 0; i < this.deck.length; i++){
            console.log(this.deck[i]);
        }
        if(this.deck.length != 0){
            var cardSprite = this.deck[this.deck.length-1].getSprite();
            return cardSprite.y - this.getOffsetY();
        }else{
            return this.getY();
        }
    }

    private getOffsetY():number{
        return this.flatDeck ? CardConstants.FLAT_DECK_CARD_VERTICAL_OFFSET : CardConstants.CARD_VERTICAL_OFFSET;
    }
}