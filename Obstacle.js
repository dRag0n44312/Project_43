class Obstacle {
    constructor(){
        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.width = 40;
        this.speed = 3;

        this.highlight = false;
    }

    
    hits(bird){
        if(bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.width){
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    display(){
        fill(0,161,0);
        if(this.highight){
            fill("red");
        }
        rect(this.x, 0, this.width, this.top);
        rect(this.x, height-this.bottom, this.width, this.bottom);
    }

    update(){
        this.x -= this.speed;
    }
}