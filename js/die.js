let death = 0 ;

const deathProtocol = () => {
    if(death == 0 ){
        death = 1 ;
        document.querySelector("#begin").pause() ;
        document.querySelector("#hard").pause() ;
        document.querySelector("#death").play() ;
        alert("-_-  Game Over -_-") ;
        location.reload() ;
    }
}

const dead = (edge , blocks) =>{
    //ifs
    // jarjar : left , right , up , down
    // block : x , y , height , width 
    blocks.map(block => {
        let jarjar = {
            left : {x : edge.x - 15 , y : edge.y} ,
            right : {x : edge.x + 15 , y : edge.y} ,
            up : {x : edge.x , y : edge.y -15} ,
            down : {x : edge.x , y : edge.y + 15} 
        } ;
    
        if( jarjar.right.x >= block.x && jarjar.right.x <= block.x + 5 &&
            (jarjar.up.y >= block.y && jarjar.up.y <= block.y + block.height ||
            jarjar.down.y >= block.y  && jarjar.down.y <= block.y + block.height )){
                deathProtocol() ;
        }
        else if(jarjar.down.y >= block.y && jarjar.down.y <= block.y + 5 &&
           ( (jarjar.right.x >= block.x && jarjar.right.x <= block.x + block.width) ||
            jarjar.left.x >= block.x && jarjar.left.x <= block.x + block.width)){
                deathProtocol() ;
        }
        else if(jarjar.up.y <= block.y + block.height && jarjar.up.y >= block.y + block.height - 5 &&
            ( jarjar.right.x >= block.x && jarjar.right.x <= block.x + block.width || 
            jarjar.left.x >= block.x && jarjar.left.x <= block.x + block.width)){
                deathProtocol() ;
        } 
        else if(jarjar.left.x <= block.x + block.width && jarjar.left.x >= block.x + block.width - 5 && 
            (jarjar.up.y >= block.y && jarjar.up.y <= block.y + block.height ||
            jarjar.down.y >= block.y  && jarjar.down.y <= block.y + block.height )){
                deathProtocol() ; 
        }
        else{
            return false ;
        }
    }) ;
} 