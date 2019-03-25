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

let nodes = [
    {x : 730 , y : 50 , neigh : [3 , 1]} , // 0 
    {x : 590 , y : 50 , neigh : [0 , 2]} , // 1
    {x : 450 , y : 50 , neigh : [1 , 5]} , // 2
    {x : 730 , y : 130 , neigh : [4 , 0 , 34]} , // 3
    {x : 590 , y : 130 , neigh : [5 , 3 , 1 , 17]} , // 4
    {x : 450 , y : 130 , neigh : [6 , 2 , 4]} ,// 5
    {x : 390 , y : 130 , neigh : [5 , 7 , 15]} ,// 6
    {x : 340 , y : 130 , neigh : [6 , 8]} , //7
    {x : 340 , y : 50 , neigh : [7 , 9]} , //8
    {x : 190 , y : 50 , neigh : [8 , 10 , 12]} , // 9
    {x : 60 , y : 50 , neigh : [9 , 11]} , //10 
    {x : 60 , y : 130 , neigh : [10 , 12 , 18]} , //11 
    {x : 190 , y : 130 , neigh : [11 , 9 , 7 , 13]} , // 12
    {x : 190 , y : 210 , neigh : [12 , 14 , 22]} , // 13
    {x : 270 , y : 210 , neigh : [13 , 15 , 26] } , // 14
    {x : 390 , y : 210 , neigh : [14 , 6 , 16]} , // 15
    {x : 520 , y : 210 , neigh : [15 , 17 , 30]} , //16
    {x : 590 , y : 210 , neigh : [4 , 16 , 37]} , //17
    {x : 60 , y : 210 , neigh : [11 , 19]} , // 18
    {x : 110 , y : 210 , neigh : [18 , 21]} , //19
    {x : 60 , y : 300 , neigh : [21]} , // 20
    {x : 110 , y : 300 , neigh : [19 , 20 , 22 , 24]} , //21
    {x : 190 , y : 300 , neigh : [21 , 13 , 25]} , //22
    {x : 60 , y : 335 , neigh : [20 , 24 , 42]} , //23
    {x : 110 , y : 335 , neigh : [21 , 23 , 25]} , //24
    {x : 190 , y : 335 , neigh : [24 , 22]} , //25
    {x : 270 , y : 300 , neigh : [14 , 27 , 28]} , //26
    {x : 270 , y : 335 , neigh : [26 , 29]} , //27
    {x : 340 , y : 300 , neigh : [26 , 29]} , //28
    {x : 340 , y : 335 , neigh : [28 , 27 , 46]} , //29
    {x : 520 , y : 300 , neigh : [16 , 31 , 33]} , //30
    {x : 430 , y : 300 , neigh : [30 , 32]} , // 31
    {x : 430 , y : 335 , neigh : [31 , 33 , 68]} , //32
    {x : 520 , y : 335 , neigh : [30 , 32]} , //33
    {x : 730 , y : 210 , neigh : [3 , 35]} , //34
    {x : 670 , y : 210 , neigh : [34 , 36]} , //35
    {x : 670 , y : 300 , neigh : [35 , 37 , 39 , 41]} , //36
    {x : 590 , y : 300 , neigh : [36 , 17 , 38]} , //37
    {x : 590 , y : 335 , neigh : [37 , 39]} , //38
    {x : 670 , y : 335 , neigh : [36 , 38 , 40]} , //39
    {x : 730 , y : 335 , neigh : [39 , 41 , 72]} , //40
    {x : 730 , y : 300 , neigh : [40 , 36]} , //41
    {x : 60 , y : 420 , neigh : [23 , 43 , 47]} , //42
    {x : 140 , y : 420 , neigh : [42 , 44 , 48]} , //43
    {x : 220 , y : 420 , neigh : [43 , 45 , 49]} , //44
    {x : 280 , y : 420 , neigh : [44 , 46 , 50]} , //45
    {x : 340 , y : 420 , neigh : [45 , 29 , 51]} , //46
    {x : 60 , y : 480 , neigh : [42 , 48 , 52]} , //47
    {x : 140 , y : 480 , neigh : [47 , 43 , 49 , 53]}, // 48
    {x : 220 , y : 480 , neigh : [44 , 48 , 50 , 54]} , // 49
    {x : 280 , y : 480 , neigh : [45 , 49 , 51 , 55]}, // 50
    {x : 340 , y : 480 , neigh : [50 , 46 , 56]} , //51
    {x : 60 , y : 530 , neigh : [47 , 53]} , // 52
    {x : 140 , y : 530 , neigh : [52 , 48 , 54]} , // 53
    {x : 220 , y : 530 , neigh : [49 , 53 , 55]} , //54
    {x : 280 , y : 530 , neigh : [54 , 50 , 56]} , //55
    {x : 340 , y : 530 , neigh : [55 , 51]} , //56

    {x : 390 , y : 530 , neigh : [56 , 58]} , // 57
    {x : 430 , y : 530 , neigh : [57 , 59 , 67]} , //58
    {x : 500 , y : 530 , neigh : [58 , 60 , 66]} ,//59
    {x : 580 , y : 530 , neigh : [59 , 61 , 65]} , //60
    {x : 660 , y : 530 , neigh : [60 , 62 , 64]} , //61
    {x : 730 , y : 530 , neigh : [61 , 63]} , //62
    {x : 730 , y : 480 , neigh : [62 , 64 , 72]} , //63
    {x : 660 , y : 480 , neigh : [61 , 63 , 65 , 71]} , //64
    {x : 580 , y : 480 , neigh : [64 , 60 , 66 , 70]} , // 65
    {x : 500 , y : 480 , neigh : [65 , 59 , 67 , 69]} , //66
    {x : 430 , y : 480 , neigh : [66 , 58 , 68]} , //67
    {x : 430 , y : 420 , neigh : [67 , 32 , 69]} , //68
    {x : 500 , y : 420 , neigh : [68 ,66 , 70]} , //69
    {x : 580 , y : 420 , neigh : [69 , 65 , 71]} , //70
    {x : 660 , y : 420 , neigh : [70 , 64 , 72]} , //71
    {x : 730 , y : 420 , neigh : [71 , 63 , 40]} // 72
] ;  