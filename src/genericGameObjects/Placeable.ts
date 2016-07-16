
/**
 * Basic class with getters/setters of x/y/z positions
 */
class Placeable {
    xPos: number;
    yPos: number;
    zPos: number;

    constructor(xPos: number, yPos: number, zPos?: number) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.zPos = zPos == null ? 0 : zPos;
    }


    getX(): number {
        return this.xPos;
    }

    setX(xPos: number) {
        this.xPos = xPos;
    }

    getY(): number {
        return this.yPos;
    }

    setY(yPos:number) {
        this.yPos = yPos;
    }

    getZ(): number {
        return this.xPos;
    }

    setZ(zPos:number) {
        this.zPos = zPos;
    }
}