/*Dark Mode */    {
    document.addEventListener('DOMContentLoaded', function() {
        let isDarkMode = false; // Initialize dark mode state
    
        const darkButton = document.querySelector("#darkmode");
    
        darkButton.addEventListener('click', function() {
            console.log("Dark mode button pressed.");
    
            if (!isDarkMode) {
                darkModeEnable();
                console.log("Dark Mode");
                isDarkMode = true;
                sessionStorage.setItem("mode", "dark");
            } else {
                lightModeEnable();
                console.log("Light Mode");
                isDarkMode = false;
                sessionStorage.setItem("mode", "light");
            }
        });
    
        function darkModeEnable() {
            const darkmode = document.querySelector("body");
            const button = document.querySelector("#darkmode");
            const table = document.querySelector("#contents");
            const menu = document.querySelector("#menu");
    
            darkmode.style.backgroundColor = "#2d2e40";
            darkmode.style.color = "#fcf3f6";
    
            button.innerHTML = "Light Mode";
            button.style.backgroundColor = "#ffffff";
            button.style.color = "#000000";
    
            if (table !== null) {
                table.style.color = "#ffffff";
            }
    
            menu.style.backgroundColor = "#2d2e40";
        }
    
        function lightModeEnable() {
            const lightmode = document.querySelector("body");
            const button = document.querySelector("#darkmode");
            const table = document.querySelector("#contents");
            const menu = document.querySelector("#menu");
    
            lightmode.style.backgroundColor = "#faffffd8";
            lightmode.style.color = "#000000";
    
            button.innerHTML = "Dark Mode";
            button.style.backgroundColor = "#000000";
            button.style.color = "#ffffff";
    
            if (table !== null) {
                table.style.color = "#000000";
            }
    
            menu.style.backgroundColor = "#ffffff";
        }
    
        // Check the Dark mode session parameter to set initial mode
        function checkDarkMode() {
            if (sessionStorage.getItem("mode") === "dark") {
                darkModeEnable();
                isDarkMode = true;
            } else {
                lightModeEnable();
                isDarkMode = false;
            }
        }
    
        // Initial check on page load
        checkDarkMode();
    });
    
}

/*Table generation */ {
    $(document).ready(function() {

        // Function to generate the table
        function generateTable(data) {
                //Create table
                const $table = $(`<table class="table text-center" id="contents">
                    <thead>
                        <tr>
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
                        </tr>
                    </thead>
                </table>`);
            const $tbody = $('<tbody></tbody>');

                //Create table data
                data.forEach(item => {
                    const $row = $(`<tr>
                                    <td data-type="gameID" >${item.id}</td>
                                    <td data-type="gameName" >${item.name}</td>
                                    <td data-type="gameRating">${item.rating}</td>
                                    <td>
                                    <button class="edit" onclick="showEdits(this)">Edit</button>
                                        <div id= "editButton" class="d-none">
                                            <button class="editEntry">
                                                <i class="bi bi-pencil-square"></i>
                                            </button>
                                            <button class = "deleteEntry">
                                            <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                </td>
                                </tr>`);

                    $tbody.append($row);
                });

                $table.append($tbody);

        return $table;
        }

    
        // Table data array
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
    
        // Append the generated table to the page
        $('#table').append(generateTable(tableData));
    
        // Event listener for the Add New button
        $("#newEdit").click(function() {
            $("#additionForm").fadeIn("", function() {
                $(this).toggleClass("d-none");
            });
        });
    
        // Event listener for form submission
        $("#additionForm").on("submit", function(event) {
            event.preventDefault();     //Prevent the page from refreshing
    
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
                                <button class="edit" onclick="showEdits(this)">Edit</button>
                                    <div id= "editButton" class="d-none">
                                        <button class="editEntry">
                                            <i class="bi bi-pencil-square"></i>
                                        </button>
                                        <button class = "deleteEntry">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </td>
                        </tr>`);
    
            $("table tbody").append($row) ;
            
            //Clear Form for a new Entry
            $("#gameName").val('');
            $("#gameRating").val('');
                
    });

    });
    
    //Edit Entry
    
    function showEdits(button){

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
    $(document).ready(function(){

        // Edit Entry
        $("table").on("click", ".editEntry", function(){ //Listen on the table to ensure new entries get handled
            var row = $(this).closest("tr");
            var gameID = row.find("td[data-type=gameID]").text(); 
    
            let newGameName = prompt("Enter the new game name");
            let newGameRating = prompt("Enter the new rating");
    
            // Sanitize inputs
            newGameName = sanitizeInput(newGameName);
            newGameRating = sanitizeRating(newGameRating);
    
            // Update table row with sanitized inputs
            row.find("td[data-type=gameName]").text(newGameName); 
            row.find("td[data-type=gameRating]").text(newGameRating);
        });
    
        // Delete Entry (Event delegation)
        $("table").on("click", ".deleteEntry", function(){
            var row = $(this).closest("tr");
            row.hide();
        });
    
        function sanitizeInput(input) {
            // Remove leading and trailing whitespace
            input = input.trim();
            // Escape HTML characters
            input = escapeHtml(input);
            return input;
        }
    
        function escapeHtml(unsafe) {
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
    
        function sanitizeRating(rating) {
            // Validate rating format
            if (/^\d+(\.\d)?$/.test(rating)) { 
                // Convert to float and limit to one decimal place
                rating = parseFloat(rating).toFixed(1);
                if (parseFloat(rating) > 10) {
                    rating = "10";
                }
            } else {
                rating = "0"; 
            }
            return rating;
        }
    
    });
    


    //Delete Entry
    $(document).ready(function(){

        $("table tbody tr td .deleteEntry").click(function(){
    
            var row = $(this).closest("tr");
            var gameID = row.find("td[data-type=gameID]").text(); 
    
            row.hide();
            });
    
    }) ;

}
/*Sorting System */ {

    $(document).ready(function() {
        // Array to store rows
        let rowsArray = [];
    
        // Iterate over each table row in tbody
        $("table tbody tr").each(function(index) {
            let $row = $(this);
            let gameID = $row.find("td[data-type=gameID]").text();
            let gameName = $row.find("td[data-type=gameName]").text();
            let gameRating = $row.find("td[data-type=gameRating]").text();
    
            // Create object for row data
            let rowData = {
                id: gameID,
                name: gameName,
                rating: gameRating
            };
    
            rowsArray.push(rowData);
        });
    
    //Sorting algorithm
    
    function sortRows(type,order){      //Type of sorting and order

    }

    //Sort by Id

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

                console.log("ID Ascending Order") ;
                sortRows("ID","Ascending");
                
            }

            //Descending Order
            else {
                $('#idSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#idSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow ;

                console.log("ID Descending Order") ;
                sortRows("ID","Descending");

            }
            
            })


    //Sort by Name
                  

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

                console.log("Name Ascending Order") ;
                sortRows("Name","Ascending");

            }

            //Descending Order
            else {
                $('#nameSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#nameSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow ;

                console.log("Name Descending Order") ;
                sortRows("Name","Descending");
            }
            
        })

    //Sort by Rating


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

                console.log("Rating Ascending Order") ;
                sortRows("Rating","Ascending");
            
            }

            //Descending Order
            else {
                $('#rateSort > #icon').removeClass('bi bi-arrow-bar-up small-icon') ;
                $('#rateSort > #icon').addClass('bi bi-arrow-bar-down small-icon') ;
                arrow = !arrow ;

                console.log("Rating Descending Order") ;
                sortRows("Rating","Descending");
            
            }
            
        })
   

    });
    }

/*Live filtering search function */{

}

