/*Dark Mode */    {
    
    document.addEventListener('DOMContentLoaded' ,(event) =>{
        
        let checkMode = true ;
        //Dark mode button
        const darkbutton = document.querySelector("#darkmode") ;
        
    
        darkbutton.addEventListener('click',() => {
            console.log("Dark mode button pressed.") ;
            if(!checkMode){
                $(document).ready(lightModeEnable());
                console.log("Light Mode") ;
                isDarkMode = true ;

                //Set a session parameter to track dark mode
                sessionStorage.setItem("mode","light") ;
            }
            else{
                $(document).ready(darkModeEnable());
                console.log("Dark Mode") ;
                isDarkMode = false ;

                //Set a session parameter to track dark mode
                sessionStorage.setItem("mode","dark") ;
            }
    
            checkMode = !checkMode ;
            });
    
        });
    
     
    function darkModeEnable (){
    
        // Dark mode element constants
        const darkmode = document.querySelector("body") ;
        const button = document.querySelector("#darkmode") ;
        const table =document.querySelector("#contents") ;
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

    //Check the Dark mode session parameter to convert the next page into dark mode if it is

        function checkDarkMode(){
            if (sessionStorage.getItem("mode") == "dark"){
                darkModeEnable();
            }
            else{
                console.log('Light Mode detected') ;
                lightModeEnable() ;
            }
        }
}

/*Table generation */ {

$(document).ready(function(){
    const tableData = [
        { id: 1, name: "Assassin's Creed III", rating: 6.7 },
        { id: 2, name: "Persona 5 Royal", rating: 8.9 },
        { id: 3, name: "Fallout : New Vegas", rating: 7.4 },
        { id: 4, name: "Watch Dogs 2", rating: 9.2 },
        { id: 5, name: "Minecraft", rating: 10 },
        { id: 6, name: "Call of Duty: Blacks Ops 4", rating: 3.8 },
        { id: 7, name: "Hades", rating: 10 },
        { id: 8, name: "Fortnite", rating: 2.3 },
        { id: 9, name: "Cyberpunk 2077", rating: 7.2 },
        { id: 10, name: "Bloodborne", rating: 10 }
    ];
    
    // Function to generate the table
            function generateTable(data) {


                //Create table
                const $table = $('<table class="table text-center" id="contents"></table>');
                const $thead = $('<thead></thead>');
                const $headerRow = $('<tr></tr>');

                //Create header rows
                $headerRow.append('<th scope="col">ID <button id="idSort" class="sort"><i id ="icon" class="bi bi-arrow-bar-down small-icon"></i></button></th>');
                $headerRow.append('<th scope="col">Name <button id="nameSort" class="sort"><i id ="icon" class="bi bi-arrow-bar-down small-icon"></i></button></th>');
                $headerRow.append('<th scope="col">Rating <button id="rateSort" class="sort"><i id ="icon" class="bi bi-arrow-bar-down small-icon"></i></button></th>');
                $headerRow.append('<th scope="col">Edit</th>');

                $thead.append($headerRow);
                $table.append($thead);
        
                const $tbody = $('<tbody></tbody>');

                //Create table data
                data.forEach(item => {
                    const $row = $('<tr></tr>');

                    $row.append(`<td>${item.id}</td>`);
                    $row.append(`<td>${item.name}</td>`);
                    $row.append(`<td>${item.rating}</td>`);
                    $row.append('<td><button class="edit">Edit</button></td>');

                    $tbody.append($row);
                });

                $table.append($tbody);
                
                return $table;
            }
            
            


            // Insert the table into the page
            $('#table').append(generateTable(tableData));
            checkDarkMode();

    //Add entry to table

        function newEntry(){
            
            $document.querySelector("#additionForm").submit();
            console.log("Name is :",gameName," and the rating is:",gameRating) ;
        }

        $("#newEdit").click(function(){
            //Show or hide the new Entry Form            
            $("#additionForm").toggleClass("d-none");
            
         });

        
});

}

/*Sorting System */ {

    //Sort by Id
    $(document).ready(function(){

        let arrow = true ; //Arrow points down for an descending order
        $("#idSort").click(function(){

            //Ascending Order
            if(arrow){
                $('#idSort > #icon').removeClass('bi bi-arrow-bar-down small-icon') ;
                $('#idSort > #icon').addClass('bi bi-arrow-bar-up small-icon') ;
                arrow = !arrow ;


                //Reset the other buttons
                $('#nameSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#nameSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                $('#rateSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#rateSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;

            }

            //Descending Order
            else {
                $('#idSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#idSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow ;
            }
            
            })
    });

    //Sort by Name
        $(document).ready(function(){
                  
        let arrow = true ; //Arrow points down for an descending order

        $("#nameSort").click(function(){
            
            //Ascending Order
            if(arrow){
                $('#nameSort > #icon').removeClass('bi bi-arrow-bar-down small-icon') ;
                $('#nameSort > #icon').addClass('bi bi-arrow-bar-up small-icon') ;
                arrow = !arrow ;

                $('#idSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#idSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                $('#rateSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#rateSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;

            }

            //Descending Order
            else {
                $('#nameSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#nameSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow ;
            }
            
        })
    });

    //Sort by Rating

    $(document).ready(function(){

        let arrow = true ; //Arrow points down for an descending order

        $("#rateSort").click(function(){
            
            //Ascending Order
            if(arrow){
                $('#rateSort > #icon').removeClass('bi bi-arrow-bar-down small-icon') ;
                $('#rateSort > #icon').addClass('bi bi-arrow-bar-up small-icon') ;
                arrow = !arrow ;

                $('#nameSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#nameSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                $('#idSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#idSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
            
            }

            //Descending Order
            else {
                $('#rateSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#rateSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow ;
            }
            
        })
    })


}
