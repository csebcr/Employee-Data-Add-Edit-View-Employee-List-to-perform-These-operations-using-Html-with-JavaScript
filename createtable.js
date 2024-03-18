 function buildTableViaJavascriptString(tableElement, headers, keys, personData) {
        var tableStr = "<tr>";
        for(var i in headers) {
            tableStr += "<th>"+headers[i]+"</th>";
        }

        tableStr += "</tr>";
        for(var i in personData) {
            tableStr += "<tr>";
            person = personData[i];
            for(var j in keys) {
                tableStr += "<td>"+(person[keys[j]] === undefined ? "" : person[keys[j]])+"</td>";
            }
             tableStr += "</tr>"
        }
        if(tableElement) {
            tableElement.innerHTML = tableStr;
        } else {
            return tableStr;
        }
    }

    function buildTableViaJavascriptString(tableElement, columnList, personData) {
            var tableStr = "<tr>";
            for(var i in columnList) {
                tableStr += "<th>"+columnList[i].label+"</th>";
            }

            tableStr += "</tr>";
            for(var i in personData) {
                tableStr += "<tr>";
                person = personData[i];
                for(var j in columnList) {
                    if(columnList[j].type === "SELECT") {
                        let selectVal = (person[columnList[j].name] === undefined ? "" : person[columnList[j].name]);
                        if(selectVal) {
                            if(selectVal === "others") {
                                let key = columnList[j].name+"_other";
                                 selectVal = (person[key] === undefined ? "" : person[key]);
                            } else {
                                selectVal = columnList[j]["options"][selectVal];
                            }
                        }
                         tableStr += "<td>"+selectVal+"</td>";

                    } else {
                    tableStr += "<td>"+(person[columnList[j].name] === undefined ? "" : person[columnList[j].name])+"</td>";
                    }
                }
                 tableStr += "</tr>"
            }
            if(tableElement) {
                tableElement.innerHTML = tableStr;
            } else {
                return tableStr;
            }
        }

    function buildTableViaDOM1(tableElement, headers, keys, personData) {
        table.innerHTML = "";
        //To insert header row
        var row = table.insertRow();
        for (var key in keys) {
            //creating th (table header) element
            var th = document.createElement("th");
            th.innerHTML = keys[key];
            row.appendChild(th);
        }

        for (var i = 0; i < personData.length; i++) {
            var person = personData[i];
            var row = table.insertRow();
            for(var j =0; j<keys.length; j++) {
               var cell = row.insertCell(j);
               cell.innerHTML = person[keys[j]] === undefined ? "" : person[keys[j]];
            }
        }
    }



    function viewPerson(id) {
        // Implement logic to view person data based on ID
        // Example: Redirect to a new page with the person data
        window.location.href = 'view_person.html?id=' + id;
    }

    function editPerson(id) {
        // Implement logic to edit person data based on ID
        // Example: Redirect to a new page for editing
        window.location.href = 'edit_person.html?id=' + id;
    }

    /*function buildTableViaDOM2(headers, keys, personData) {

            var table = document.getElementById("myTable");
            table.innerHTML = "";
            //To insert header row
            var row = table.insertRow();
            for (var key in keys) {
                //creating th (table header) element
                var th = document.createElement("th");
                th.innerHTML = keys[key];
                row.appendChild(th);
            }

            for (var i = 0; i < personData.length; i++) {
                var person = personData[i];
                var row = table.insertRow();
                for(var j =0; j<keys.length; j++) {
                    var cell = row.insertCell(j);
                    cell.innerHTML = (person[keys[j]] == undefined) ? "" : person[keys[j]];
                    //row.insertCell(j).innerHTML = person[keys[j]];
                }
            }
    }*/
