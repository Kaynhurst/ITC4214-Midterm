/*Dark Mode */    {
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
    const menu = document.querySelector("#menu") ;

    darkmode.style.backgroundColor= "#2D2E40" ;
    darkmode.style.color= "#FCF3F6" ;
    
    button.innerHTML = "Light Mode" ;
    button.style.backgroundColor = "#FFFF" ;
    button.style.color = "#000000" ;
    
    //Check if there is a table on the page.
    if (table != null){
        table.style.color = "#FFFFFF" ;
    }

    menu.style.backgroundColor= "#2D2E40" ;
}   


function lightModeEnable(){

    const lightmode = document.querySelector("body") ;
    const button = document.querySelector("#darkmode") ;
    const table = document.querySelector("#contents") ;
    const menu = document.querySelector("#menu") ;

    lightmode.style.backgroundColor = "#FFFF" ;
    lightmode.style.color = "#000000" ;

    button.innerHTML = "Dark Mode" ;
    button.style.backgroundColor = "#000000" ;
    button.style.color = "#FFFF";

    //Check if there is a table on the page.
    if (table != null){
        table.style.color = "#000000" ;
    }
   
    menu.style.backgroundColor = "#FFFF" ;

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
}



/*Sorting System */{
    
}