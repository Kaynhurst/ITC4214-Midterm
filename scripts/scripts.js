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
        { id: 1, name: "Assassin's Creed III", rating: 6},
        { id: 2, name: "Persona 5 Royal", rating: 8 },
        { id: 3, name: "Fallout : New Vegas", rating: 7},
        { id: 4, name: "Watch Dogs 2", rating: 9},
        { id: 5, name: "Minecraft", rating: 10 },
        { id: 6, name: "Call of Duty: Blacks Ops 4", rating: 3},
        { id: 7, name: "Hades", rating: 10 },
        { id: 8, name: "Fortnite", rating: 2},
        { id: 9, name: "Cyberpunk 2077", rating: 7},
        { id: 10, name: "Bloodborne", rating: 10 }
    ];
    
    // Function to generate the table
            function generateTable(data) {


                //Create table
                const $table = $('<table class="table text-center" id="contents"></table>');
                const $thead = $('<thead></thead>');

                const $headerRow = $(`<tr>
                    <th scope="col">ID 
                        <button id="idSort" class="sort">
                            <i id ="icon" class="bi bi-arrow-bar-down small-icon"></i>
                        </button>
                    </th>

                    <th scope="col">Name 
                        <button id="nameSort" class="sort">
                            <i id ="icon" class="bi bi-arrow-bar-down small-icon"></i>
                        </button>
                    </th>

                    <th scope="col">Rating 
                        <button id="rateSort" class="sort">
                            <i id ="icon" class="bi bi-arrow-bar-down small-icon"></i>
                        </button>
                    </th>
                </tr>`);

                $thead.append($headerRow);
                $table.append($thead);
        
                const $tbody = $('<tbody></tbody>');

                //Create table data
                data.forEach(item => {
                    const $row = $(`<tr>
                                    <td data-type="gameID" >${item.id}</td>
                                    <td data-type="gameName" >${item.name}</td>
                                    <td data-type="gameRating">${item.rating}</td>

                                    <td>
                                        <button class="edit" onclick="editEntry(this)">Edit</button>
                                        <div id= "editButton" class="d-none">
                                            <i class="bi bi-pencil-square"></i>
                                            <i class="bi bi-trash"></i>
                                        </div>
                                    </td>
                                </tr>`);

                    $tbody.append($row);
                });

                $table.append($tbody);
                
                return $table;
            }
            
            // Insert the table into the page
            $('#table').append(generateTable(tableData));
            checkDarkMode();
});



    //Add entry to table

    $("#newEdit").click(function(){
        //Show or hide the new Entry Form            
        $("#additionForm").fadeIn("300",function(){
            $(this).toggleClass("d-none") ;
        }); 

            
                
    });
    
    $("#additionForm").on("submit",function(event){
        event.preventDefault() ;    //Prevent the page from refreshing

        const newGame = $("#gameName").val();
        const newRating = $("#gameRating").val();

        let tableID = $("table tbody tr td[data-type='gameID']").map(function() {
            return parseInt($(this).text());
        }).get();

        let newID = (Math.max(...tableID)) + 1 ;

        const $row = $(`<tr>
                        <td data-type="gameID">${newID}</td>
                        <td data-type="gameName" >${newGame}</td>
                        <td data-type="gameRating" >${newRating}</td>

                        <td>
                            <button class="edit" onclick="editEntry(this)">Edit</button>
                            <div id= "editButton" class="d-none">
                                <i class="bi bi-pencil-square"></i>
                                <i class="bi bi-trash"></i>
                            </div>
                        </td>
                    </tr>`);

        $("table tbody").append($row) ;
        
        //Clear Form for a new Entry
        $("#gameName").val('');
        $("#gameRating").val('');
        
    }); 

    //Edit Button

    function editEntry(button){

        const editButton = button.nextElementSibling;
        $(document).ready(function(){

        //Hide or show the edit elements
        if($(editButton).hasClass("d-none")) {

            $(editButton).animate(300,function(){
                $(this).removeClass("d-none").addClass("d-inline-block");
            });

        } else {
            $(editButton).fadeIn("slow",function(){
                $(this).removeClass("d-inline-block").addClass("d-none");
            });

        }
        });
    }

    /* Animation Effects for edit Button
    $(document).on('mouseenter', '.edit', function() {
        const editButton = $(this).next('.editButton');
        editButton.removeClass('d-none').hide().fadeIn(300).addClass('d-inline-block');
    });

    $(document).on('mouseleave', '.editButton', function() {
        $(this).fadeOut(300, function() {
            $(this).removeClass('d-inline-block').addClass('d-none');
        });
    });
    */
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

/*Live filtering search function */{

}