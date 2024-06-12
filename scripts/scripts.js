let isDarkMode = false ;

document.addEventListener('DOMContentLoaded' ,(event) =>{

    //Dark mode button
    const darkbutton = document.querySelector("#darkmode") ;
    let checkMode = false ;

    darkbutton.addEventListener('click',() => {
        if(checkMode){
            lightModeEnable();
            console.log("Light Mode") ;
            isDarkMode = false ;
        }
        else{
            darkModeEnable();
            console.log("Dark Mode") ;
            isDarkMode = true ;
        }
        
        checkMode = !checkMode ;
    }
    );

});


function darkModeEnable (){
    const darkmode = document.querySelector("body") ;
    const button = document.querySelector("#darkmode") ;
    const table = document.querySelector("#contents") ;

    darkmode.style.backgroundColor= "#2D2E40" ;
    darkmode.style.color= "#FCF3F6" ;
    
    button.innerHTML = "Light Mode" ;
    button.style.backgroundColor = "#ffff" ;
    button.style.color = "#000000" ;
    table.style.color = "white" ;
}   

function lightModeEnable(){
    const lightmode = document.querySelector("body") ;
    const button = document.querySelector("#darkmode") ;
    const table = document.querySelector("#contents") ;

    lightmode.style.backgroundColor = "#ffff" ;
    lightmode.style.color = "#000000" ;

    button.innerHTML = "Dark Mode" ;
    button.style.backgroundColor = "#000000" ;
    button.style.color = "#ffff";
    table.style.color = "black" ;

}

//Check the Dark mode settings to convert the next page into dark mode if it is
function checkDarkMode(){
    if (isDarkMode){
        console.log("It's Dark Mode") ;
    }
    else {
        console.log("It's Light Mode") ;
    }
}