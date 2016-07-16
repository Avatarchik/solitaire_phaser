class PlayingCard {

    static CARD_WIDTH = 72;
    static CARD_HEIGHT = 100;

    faceValue: number;
    suit: string;
    cardSprite: Phaser.Sprite;
    cardName:string;
    spriteIndex:number;
    visible:boolean;

    constructor(faceValue: number, suit: string, xPos: number, yPos: number, visible: boolean) {
        this.faceValue = faceValue;
        this.suit = suit;
        this.cardName = CardConstants.CARD_MAP[this.faceValue];
        this.spriteIndex = this.faceValue;
        this.visible = visible == null ? false : visible;
    }


    getFaceValue(): number {
        return this.faceValue;
    }

    getSuit(): string {
        return this.suit;
    }

    getCardName():string{
        return this.cardName;
    }

    getVisible():boolean{
        return this.visible;
    }

    isRed():boolean{
        return cardUtils.isRed(this.suit);
    }

    setCardSprite(cardSprite: Phaser.Sprite) {
        this.cardSprite = cardSprite;
    }

    setVisible(visible:boolean){
        this.visible = visible;
        if(!visible){ //Show card back
            this.spriteIndex = CardConstants.CARD_BACK;
            this.cardSprite.frame = CardConstants.CARD_BACK;
        }else{ //else show face value.
            this.spriteIndex = this.faceValue;
            this.cardSprite.frame = CardConstants.CARD_MAP[this.faceValue];
        }
    }

    getSprite():Phaser.Sprite{
        return this.cardSprite;
    }

}