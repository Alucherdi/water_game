class WaterFlow {
    constructor() {
        this.particles = []
        this.particles.push(new WaterParticle())
    }

    
    handleCicle() {
        this.particles.push(new WaterParticle())
        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update()
            this.particles[i].show()

            if (this.particles[i].alpha <= 0) 
                this.particles.splice(i, 1)
        }

        fill(255)
        ellipse(100, 600, 30, 30)
    }
}

class WaterParticle {
    constructor() {
        this.x = 100
        this.y = 600
        this.vx = random(-1, 1)
        this.vy = random(-10, -5)
        this.alpha = 255
    }

    update() {
        this.x += this.vx
        this.y += this.vy
        this.alpha -= 3
    }

    show() {
        noStroke()
        fill(255, this.alpha)
        ellipse(this.x, this.y, 16)
    }
}