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


