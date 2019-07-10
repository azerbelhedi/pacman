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
        ctx.arc(coin.x , coin.y , 4  , 0 , Math.PI*2 ,true) ;
        //
        let localColors = ["red" , "orange" , "yellow" , "orange"]
        let localColor = localColors[Math.floor(Math.random() * 4)]
        //
        ctx.fillStyle = localColor ;
        ctx.fill() ;
        ctx.closePath() ;
    }

    init(){
        score = 0 ;
        for(let y = 45 ; y < this.height - 200  ; y += 20){
            for(let x = 5 ; x < this.width ; x += 20){
                let imgData = ctx.getImageData(x , y, this.width , this.height);
                let blue = imgData.data[2];
                //console.log(blue) ;
                if(!blue){
                    let localColors = ["#d1743f" , "#db3b1f" , "#d97a16" , "#e3b624"]
                    let localColor = localColors[Math.floor(Math.random() * 4)]
                    console.log(localColor)
                    let coin = {x : x , y : y , color : localColor , state : 1 }
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
                    document.querySelector("#eat").volume = 1 ;
                    document.querySelector("#eat").play() ;
                    score ++ ;
                    document.querySelector("#score").innerHTML = score 
                    console.log(score)
                    if(this.eated == this.coins.length){
                        document.querySelector("#eat").pause() ;
                        document.querySelector("#win").play() ;
                        alert("**you won**") ;
                        
                        this.init() ;
                    }
                }
            }
        });
    }
}