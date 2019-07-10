//alert("hello")
const reset = () => {
    up = 0 ; 
    down = 0 ;
    right = 0 ;
    left = 0 ;
}

function onup(){
    reset() ;
    up = 1 ;
    left = 0 ; right = 0 ;
    console.log("upp") ;
}

function ondown(){
    reset() ;
    down = 1 ;
    left = 0 ; right = 0 ;
    console.log("upp") ;
}

function onleft(){
    reset() ;
    left = 1 ;
    up = 0 ; down = 0 ;
    console.log("upp") ;
}

function onright(){
    reset() ;
    right = 1 ;
    up = 0 ; down = 0 ;
    console.log("upp") ;
}