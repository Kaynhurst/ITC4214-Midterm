document.addEventListener('DOMContentLoaded' ,(event) =>{

    //Dark mode button
    const darkbutton = document.querySelector("#darkmode") ;
    const lightbutton = document.querySelector("#lightmode") ;

    //Dark mode button
    darkbutton.addEventListener('click',() => {
       darkModeEnable() ;
       console.log("Dark Mode.") ;
    }) ;

     //Light mode button
    lightbutton.addEventListener('click' ,() =>{
        lightModeEnable();
        console.log("Light Mode.") ;
    });
});


function darkModeEnable (){
    const darkmode = document.querySelector("body") ;
    darkmode.style.backgroundColor= "red" ;
}

function lightModeEnable(){
    const lightmode = document.querySelector("body") ;
    lightmode.style.backgroundColor = "green" ;
}