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
    console.log("upp") ;
}

function ondown(){
    reset() ;
    down = 1 ;
    console.log("upp") ;
}

function onleft(){
    reset() ;
    left = 1 ;
    console.log("upp") ;
}

function onright(){
    reset() ;
    right = 1 ;
    console.log("upp") ;
}