class Map{
    constructor(block){
        this.block = block ;
    }

    renderSinglBlock(block){
        // block : height , width , x , y
        ctx.beginPath() ;
        ctx.rect(block.x , block.y , block.width , block.height) ;
        ctx.fillStyle = "blue" ;
        ctx.fill() ;
        ctx.closePath() ;
    }

    render(){
        this.block.map(x => {
            this.renderSinglBlock(x) ;
        }) ;
    }
}