class Node{
    constructor(nodes){
        this.nodes = nodes ;
    }

    test(){
        nodes.map( node => {
            ctx.beginPath() ;
            ctx.rect(node.x , node.y , 10 , 10 ) ;
            ctx.fillStyle = "white" ;
            ctx.fill() ;
            ctx.closePath() ;
        }) ;
    }   
}