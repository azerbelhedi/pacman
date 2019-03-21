let left , right , up , down ;
left = 0 ;
right = 0 ;
up = 0 ;
down = 0 ;

let map = new Map(mapBlocks) ;
map.render() ;

let jarjar = new JarJar(400 , 540 , 'yellow') ;
jarjar.render() ;

let coins = new Coins(canvas.width , canvas.width) ;
//coins.update() ;

document.addEventListener('keydown' , function(e){
    //console.log(e.code) ;
    if(e.code == "ArrowLeft"){
        left = 1 ; 
    }else if(e.code == "ArrowRight"){
        right = 1 ;
    }else if(e.code == "ArrowUp"){
        up = 1 ;
    }else if(e.code == "ArrowDown"){
        down = 1 ;
    }
}) ;

document.addEventListener('keyup' , function(e){
    //console.log(e.code) ;
    if(e.code == "ArrowLeft"){
        left = 0 ; 
    }else if(e.code == "ArrowRight"){
        right = 0 ;
    }else if(e.code == "ArrowUp"){
        up = 0 ;
    }else if(e.code == "ArrowDown"){
        down = 0 ;
    }
}) ;

setInterval(function(){
    // render map
    // update jarjar
    // handle event
    ctx.clearRect(0 , 0 , canvas.width , canvas.height) ;
    map.render() ;
    coins.update() ;
    jarjar.update(right-left , down - up) ;
    coins.eat({x : jarjar.x , y : jarjar.y}) ;
    jarjar.border(mapBlocks) ;
    //test() ;
} , 10) ;


function test(){
ctx.beginPath() ;
ctx.rect(10 , 10 , 50 , 50) ;
ctx.fillStyle = 'red' ;
ctx.fill() ;
ctx.closePath() ;
}