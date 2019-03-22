let canvas = document.querySelector("#canvas") ;
let ctx = canvas.getContext('2d') ;

let mapBlocks = [
    {x :0 , y : 0 , height : 30 , width : canvas.width} ,
    {x :0 , y : canvas.height - 30 , height : 30 , width : canvas.width} , 
    {x : 0 , y : 0 , height : canvas.height , width : 30} , 
    {x : canvas.width - 30 , y : 0 , height : canvas.height , width : 30} , 
    {x : 100 , y : 80 , height : 30 , width :80} ,
    {x : 240 , y : 80 , height : 30 , width :80} ,
    {x : canvas.width - 170 , y : 80 , height : 30 , width :80} ,
    {x : canvas.width - 320 , y : 80 , height : 30 , width :80} ,
    {x : canvas.width / 2 - 20 , y : 20 , height : 100 , width : 40 } ,

    {x : 100 , y : 160 , height : 30 , width :80} ,
    {x : 240 , y : 160 , height : 30 , width :120} ,
    {x : canvas.width - 170 , y : 160 , height : 30 , width :80} ,
    {x : canvas.width - 360 , y : 160 , height : 30 , width :120} ,

    {x : 150 , y : 190 , height :100 , width : 30} ,
    {x : 630 , y : 190 , height :100 , width : 30} ,
    {x : 30 , y : 250 , height : 40 , width : 70} ,
    {x : 710 , y : 250 , height : 40 , width : 70} ,
    {x : 300 , y : 250 , height : 40 , width : 200} ,
    {x : 80 , y : 370 , height : 40 , width : 250} ,
    {x : 480 , y : 370 , height : 40 , width : 250} ,
    {x : 380 , y : 280 , height :240 , width : 40} ,

    {x : 220 , y : 250 , height :140 , width : 30} ,
    {x : 550 , y : 250 , height :140 , width : 30}
] ;


const trajectory1 = [
    {direction : "left" , magnitude : 300} ,
    {direction : "down" , magnitude : 90} ,
    {direction : "left" , magnitude : 100}  ,
    {direction : "up" , magnitude : 90} ,
    {direction : "left" , magnitude : 290} ,
    {direction : "down" , magnitude : 180} ,
    {direction : "right" , magnitude : 70} ,
    {direction : "down" , magnitude : 100} ,
    {direction : "left" , magnitude : 70} ,
    {direction : "down" , magnitude : 210} ,
    {direction : "right" , magnitude : 400} ,
    {direction : "up" , magnitude : 230} ,
    {direction : "right" , magnitude : 80} ,
    {direction : "up" , magnitude : 100} ,
    {direction : "right" , magnitude : 80 } ,
    {direction : "up" , magnitude : 80} ,
    {direction : "right" , magnitude : 120} ,
    {direction : "up" , magnitude : 70}
] ;


let trajectory2 = [
    {direction : "down" , magnitude : 100} ,
    {direction : "right" , magnitude : 380} ,
    {direction : "up" , magnitude : 90 } ,
    {direction : "left" , magnitude : 380}
] ;


let trajectory3 = [
    {direction : "right" , magnitude : 690} ,
    {direction : "left" , magnitude : 690} 
] ;

let trajectory4 = [
    {direction : "down" , magnitude : 120} ,
    {direction : "left" , magnitude : 300} ,
    {direction : "up" , magnitude : 120} ,
    {direction : "right" , magnitude : 80} ,
    {direction : "up" , magnitude : 80} ,
    {direction : "left" , magnitude : 240} ,
    {direction : "down" , magnitude : 80} ,
    {direction : "right" , magnitude : 80} ,
    {direction : "down" , magnitude : 120} ,
    {direction : "left" , magnitude : 300} ,
    {direction : "up" , magnitude : 120} ,
    {direction : "right" , magnitude : 130} ,
    {direction : "up" , magnitude : 100} ,
    {direction : "right" , magnitude : 420} ,
    {direction : "down" , magnitude : 120} ,
    {direction : "right" , magnitude : 120} ,
] ;