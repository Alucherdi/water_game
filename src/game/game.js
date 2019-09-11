class Game {
    constructor() {
        this.waterFlow = new WaterFlow()
    }
    
    handleCicle() {
        background(0)
        this.waterFlow.handleCicle()
    }
}