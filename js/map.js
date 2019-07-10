class Map{
    constructor(block){
        this.block = block ;
        this.state = "open"
        
        // this.closeDoors()
        // this.openDoors()
    }

    renderSinglBlock(block){
        // block : height , width , x , y
        let color
        block.color ? color = block.color : color = "rgb(28, 28, 102)"
        ctx.beginPath() ;
        ctx.rect(block.x , block.y , block.width , block.height) ;
        ctx.fillStyle = color ;
        ctx.fill() ;
        ctx.closePath() ;
    }

    render(){
        this.block.map(x => {
            this.renderSinglBlock(x) ;
        }) ;
    }

    closeDoors(){
        // this.block[21].color = "yellow" 
        this.block[21].x -= 50
        this.block[21].width += 100

        // this.block[22].color = "yellow"
        this.block[22].x -= 60
        this.block[22].width += 100

        // this.block[23].color = "yellow"
        this.block[23].height += 50

        // this.block[8].color = "yellow"
        this.block[8].width += 60

        // this.block[10].color = "yellow"
        this.block[10].width += 70
        this.block[10].x -= 70

        // this.block[24].color = "yellow"
        this.block[24].y -= 170
        this.block[24].height += 170

        this.block[25].y -= 170
        this.block[25].height += 170
    }

    openDoors(){
        // this.block[21].color = "yellow" 
        this.block[21].x += 50
        this.block[21].width -= 100

        // this.block[22].color = "yellow"
        this.block[22].x += 60
        this.block[22].width -= 100

        // this.block[23].color = "yellow"
        this.block[23].height -= 50

        // this.block[8].color = "yellow"
        this.block[8].width -= 60

        // this.block[10].color = "yellow"
        this.block[10].width -= 70
        this.block[10].x += 70

        // this.block[24].color = "yellow"
        this.block[24].y += 170
        this.block[24].height -= 170

        this.block[25].y += 170
        this.block[25].height -= 170
    }

}