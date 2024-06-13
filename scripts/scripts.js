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
        });

    });

 
function darkModeEnable (){

    // Dark mode element constants
    const darkmode = document.querySelector("body") ;
    const button = document.querySelector("#darkmode") ;
    const table = document.querySelector("#contents") ;
    const menu = document.querySelector("#menu") ;

    darkmode.style.backgroundColor= "#2d2e40" ;
    darkmode.style.color= "#fcf3f6" ;
    
    button.innerHTML = "Light Mode" ;
    button.style.backgroundColor = "#ffffff" ;
    button.style.color = "#000000" ;
    
    //Check if there is a table on the page.
    if (table != null){
        table.style.color = "#ffffff" ;
    }

    menu.style.backgroundColor= "#2d2e40" ;
}   
}

function lightModeEnable(){

    // Light mode element constants
    const lightmode = document.querySelector("body") ;
    const button = document.querySelector("#darkmode") ;
    const table = document.querySelector("#contents") ;
    const menu = document.querySelector("#menu") ;


    lightmode.style.backgroundColor = "#faffffd8" ;
    lightmode.style.color = "#000000" ;

    button.innerHTML = "Dark Mode" ;
    button.style.backgroundColor = "#000000" ;
    button.style.color = "#ffffff";

    //Check if there is a table on the page.
    if (table != null){
        table.style.color = "#000000" ;
    }

    menu.style.backgroundColor = "#ffffff" ;

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




/*Sorting System */{
    
    document.addEventListener('DOMContentLoaded' ,(event) =>{
        const idsort = document.querySelector("#idsort") ;
        let arrow = false ;

        idsort.addEventListener('click',()=>{
            console.log("ID Sort") ;

            if(!arrow){
                $('#idicon').removeClass('bi bi-arrow-bar-down small-icon') ;
                $('#idicon').addClass('bi bi-arrow-bar-up small-icon');
                arrow = !arrow ;
            }
            else{
                $('#idicon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#idicon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow;
            }
            

        });

    });
}

/*Table generation */ {
    
}