/*Table generation */ {
    
}

/*Sorting System */   {
    
    document.addEventListener('DOMContentLoaded' ,(event) =>{
    const idSort = document.querySelector("#idSort");
    const nameSort = document.querySelector("#nameSort");
    const rateSort = document.querySelector("#rateSort") ;
    let arrow = false ;


//Sort table by ID
    idSort.addEventListener('click',()=>{
        console.log("ID Sort") ;

        //Ascending order sort
        if(!arrow){
            $('#idSort > #icon').removeClass('bi bi-arrow-bar-down small-icon') ;
            $('#idSort > #icon').addClass('bi bi-arrow-bar-up small-icon');
            arrow = !arrow ;
        }
        //Descending order sort
        else{
            $('#idSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
            $('#idSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
            arrow = !arrow;
        }
            

    });

//Sort table by name 
    nameSort.addEventListener('click',()=>{
        console.log("Name Sort") ;

        //Ascending order sort
        if(!arrow){
            $('#nameSort > #icon').removeClass('bi bi-arrow-bar-down small-icon') ;
            $('#nameSort > #icon').addClass('bi bi-arrow-bar-up small-icon');
            arrow = !arrow ;
        }
        //Descending order sort
        else{
            $('#nameSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
            $('#nameSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
            arrow = !arrow;
        }

        
//Sort table by Rating
    rateSort.addEventListener('click',()=>{
        console.log("Rate Sort") ;

        //Ascending order sort
        if(!arrow){
            $('#rateSort > #icon').removeClass('bi bi-arrow-bar-down small-icon') ;
            $('#rateSort > #icon').addClass('bi bi-arrow-bar-up small-icon');
                arrow = !arrow ;
            }
        //Descending order sort
        else{
            $('#rateSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
            $('#rateSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
            arrow = !arrow;
            }
            

    });
    });
    
});
}

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
    
    
    
    }
