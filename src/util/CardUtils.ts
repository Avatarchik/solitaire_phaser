var cardUtils = (function () {
    cardUtils = cardUtils || {};
    cardUtils.getSuit = function (val: number) {
        return CardConstants.SUITS[val / CardConstants.CARDS_PER_SUIT];
    };

    cardUtils.getFaceValue = function (val: number) {
        return val % CardConstants.CARDS_PER_SUIT;
    };

    cardUtils.isRed = function (suit: string) {
        if (suit === CardConstants.SUITS[0] || suit === CardConstants.SUITS[1]) {
            return true;
        }
        return false;
    }

    return cardUtils;
} ());