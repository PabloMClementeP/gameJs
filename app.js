
window.addEventListener("load", ()=>{

    // canvas setup
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500


    class InputHandler
    {
        constructor(game){
            this.game = game;
            
            window.addEventListener('keydown', e=>{
                // if arrowup or arrowdown pressed and it's not present in the array it's inserted
                if(((e.key === "ArrowUp") || (e.key === "ArrowDown")) 
                    && this.game.keys.indexOf(e.key) === -1){
                    this.game.keys.push(e.key);
                }
            });
            
            window.addEventListener('keyup', e=>{
                
                if(this.game.keys.indexOf(e.key) > -1){
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
                }
            });
        }

    }

    class Projectile
    {

    }

    class Particle
    {

    }

    class Player
    {
        constructor(game){
            this.game = game;
            this.width = 50;
            this.height = 50;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
            this.maxSpeed = 3;
        }

        update(){
            if(this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
            else if(this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
            else this.speedY = 0;
            this.y += this.speedY;
        }

        draw(context){
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Enemy
    {

    }

    class Layer
    {

    }

    class Background
    {

    }

    class UI
    {

    }

    class Game
    {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.keys = [];
        }

        update(){
            this.player.update();
        }

        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate(){
        // clear screen
        ctx.clearRect(0,0, canvas.width, canvas.height);

        // update & draw game calling game instance
        game.update();
        game.draw(ctx);

        // loop game
        requestAnimationFrame(animate);
    }

    animate();

});