let score = 0 ;

let left , right , up , down ;
left = 0 ;
right = 0 ;
up = 0 ;
down = 0 ;


let map = new Map(mapBlocks) ;
map.render() ;

let jarjar = new JarJar(600 , 490 , 'yellow') ;
jarjar.render() ;

let coins = new Coins(canvas.width , canvas.width) ;
//coins.update() ;

//let vader1 = new Vader(730 , 40 , 'green' , trajectory1) ;
//let vader2 = new Vader(200 , 120 , "pink" , trajectory2) ;
//let vader3 = new Vader(50 , 540 , "violet" , trajectory3) ;
//let vader4 = new Vader(730 , 300 , "white" , trajectory4) ; 

let droideka1 = new Droideka(nodes[0].x , nodes[0].y , nodes[1] , "green" , "yellow") ;
let droideka2 = new Droideka(nodes[10].x , nodes[0].y , nodes[11] , "yellow" , "green") ;
let droideka3 = new Droideka(nodes[20].x , nodes[20].y , nodes[23] , "white" , "red") ;
let droideka4 = new Droideka(nodes[41].x , nodes[41].y , nodes[40] , "white" , "green") ;
let droideka5 = new Droideka(nodes[52].x , nodes[52].y , nodes[53] , "green" , "red") ;
let droideka6 = new Droideka(nodes[62].x , nodes[62].y , nodes[61] , "yellow" , "red") ;

let droideka7 = new Droideka(nodes[46].x , nodes[46].y , nodes[45] , "yellow" , "red") ;


let wou7ouch = [] ;
const clones = () => {
    for(let i = 0 ; i < 120 ; i++){
        let wa7ch = new Droideka(nodes[62].x , nodes[62].y , nodes[61] , "violet" , "red") ;
        wou7ouch.push(wa7ch) ;
    
        wa7ch = new Droideka(nodes[10].x , nodes[10].y , nodes[9] , "red" , "yellow") ;
        wou7ouch.push(wa7ch) ;
    
        wa7ch = new Droideka(nodes[52].x , nodes[52].y , nodes[47] , "white" , "green") ;
        wou7ouch.push(wa7ch) ;
    
        wa7ch = new Droideka(nodes[0].x , nodes[0].y , nodes[1] , "green" , "red") ;
        wou7ouch.push(wa7ch) ;
    }
}


let node = new Node(nodes)  ;

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
    //vader1.update(trajectory1) ;
    droideka1.update() ;
    droideka2.update() ;
    droideka3.update() ;
    droideka4.update() ;
    droideka5.update() ;
    droideka6.update() ;
    droideka7.update() ;
    wou7ouch.map(wa7ch => {
        wa7ch.update() ;
    })
    //vader2.update(trajectory2) ;
    //vader3.update(trajectory3) ;
    //vader4.update(trajectory4) ;
    //droideka1.render() ;
    //droideka2.render() ;
    dead(jarjar , [droideka3 , droideka2 , droideka1 , droideka4 , droideka5 , droideka6 , droideka7]) ;
    dead(jarjar , wou7ouch) ;
    //node.test() ;
    //console.log(trajectory1) ;
    //test() ;
} , 10) ;


function test(){
    ctx.beginPath() ;
    ctx.rect(10 , 10 , 50 , 50) ;
    ctx.fillStyle = 'red' ;
    ctx.fill() ;
    ctx.closePath() ;
}