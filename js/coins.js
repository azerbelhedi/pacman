class Coins{
    constructor(width , height ){
        this.coins = [] ;
        this.width = width ;
        this.height = height ;
        this.init() ;
        console.log(this.coins) ;
        this.eated = 0 ;
    }

    render(coin){
        ctx.beginPath() ;
        ctx.arc(coin.x , coin.y , 5  , 0 , Math.PI*2 ,true) ;
        ctx.fillStyle = coin.color ;
        ctx.fill() ;
        ctx.closePath() ;
    }

    init(){
        for(let y = 60 ; y < this.height - 200  ; y += 60){
            for(let x = 65 ; x < this.width ; x += 60){
                let imgData = ctx.getImageData(x , y, this.width , this.height);
                let blue = imgData.data[2];
                //console.log(blue) ;
                if(!blue){
                    let coin = {x : x , y : y , color : 'red' , state : 1 }
                    this.render(coin) ;
                    this.coins.push(coin)
                }
            }
        }
    }
    update(){
        this.coins.map(x => {
            if(x.state == 1 ){
                this.render(x) ;
            }
        })
    }

    eat(jarjar){
        let i = 0 ;
        this.coins.map(oneCoin => {
            i++ ;
            if(oneCoin.state == 1 ){
                if(oneCoin.x <= jarjar.x + 15 && oneCoin.x >= jarjar.x - 15 && oneCoin.y >= jarjar.y - 15 && oneCoin.y <= jarjar.y + 15 ){
                    //console.log("eat");
                    oneCoin.state = 0 ;
                    this.eated ++ ;
                    if(this.eated == this.coins.length){
                        alert("**you won**") ;
                        this.init() ;
                    }
                }
            }
        });
    }
}