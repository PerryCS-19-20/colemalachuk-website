// multiplication table creator
function buildTable() {
    // Remove the multiplication table if it already exists.
    var timesTable = document.getElementById("timesTable");
    if (timesTable != null) {
        timesTable.parentNode.removeChild(timesTable);
    }
    
    // Create a table for the multiplication table
    var timesTable = document.createElement("table");
    timesTable.id = "timesTable";
    
    // Add the table to the document's body
    var body = document.body;
    body.appendChild(timesTable);
    
    // Get the table width and height
    var width = document.getElementById("tableWidth").value;
    var height = document.getElementById("tableHeight").value;
// Fill in the multiplication table
    for (var th = 0; th < height; th++) {
        var tableRow = document.createElement("tr");
        timesTable.appendChild(tableRow);
        for (var cell = 0; cell < width; cell++) {
            var tableData;
            if (th == 0) {
                var tableData = document.createElement("th");
                tableRow.appendChild(tableData);
                tableData.textContent = cell;
            } else {
                if (cell == 0) {
                    var tableData = document.createElement("th");
                    tableRow.appendChild(tableData);
                    tableData.textContent = th;
                } else {
                    var tableData = document.createElement("td");
                    if ((cell + 1) % 3 == 0) {
                        tableData.style.color = "#4dc3ff";
                    }
                    ;
                    var ans = th * cell;
                    tableRow.appendChild(tableData);
                    tableData.textContent = ans;
                }
            }
        }
    }
}