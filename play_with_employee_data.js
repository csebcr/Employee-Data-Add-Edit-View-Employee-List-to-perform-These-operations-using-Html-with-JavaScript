//Object keys should follow Camel Case (employeeType) or Snake Case (employee_type)
var employees = [

  {
    "id":1,
    "name":"Bhavaniprasad",
    "age":22,
    "gender":"male",
    "address":"Rayapedu",
    "education":"B.Tech",
    "experience":4,
    "salary":50000,
    "employee_type":"private",
    "doj":"2020-01-20",
    //"operation": "<a href='getemployeedata.html?id=1' onClick=viewEmployee(1)>View</a> | <a href='getemployeedata.html?id=1&op=edit'>Edit</a>"
    "operation": "<a href='#' onClick=viewEmployee(1)>View</a> | <a href='#' onClick=editEmployee(1)>Edit</a>  | <a href='#' onClick=deleteEmployee(1)>Delete</a>"
  },
  {
    "id":2,
    "name":"KMK",
    "age":30,
    "gender":"male",
    "address":"Rayapedu",
    "education":"MCA",
    "experience":2,
    "doj":"2020-06-04",
    "salary":50000,
    "employee_type":"govt",
    //"operation":"<a href='getemployeedata.html?id=2'>View</a> | <a href='getemployeedata.html?id=2&op=edit'>Edit</a>"
    "operation": "<a href='#' onClick=viewEmployee(2)>View</a> | <a href='#' onClick=editEmployee(2)>Edit</a>  | <a href='#' onClick=deleteEmployee(2)>Delete</a>"
  },
  {
    "id":3,
    "name":"Vinay Kumar",
    "age":25,
    "gender":"male",
    "address":"Talvaipadu",
    "education":"Degree",
    "experience":3,
    "salary":50000,
    "employee_type":"others",
    "employee_type_other":"xyz",
    "doj":"2021-02-15",
    //operation": "<a href='getemployeedata.html?id=3'>View</a> | <a href='getemployeedata.html?id=3&op=edit'>Edit</a>"
    "operation": "<a href='#' onClick=viewEmployee(3)>View</a> | <a href='#' onClick=editEmployee(3)>Edit</a>  | <a href='#' onClick=deleteEmployee(3)>Delete</a>"
  },
  {
      "id":4,
      "name":"Susmitha",
      "age":22,
      "gender":"female",
      "address":"Talvaipadu",
      "education":"B.tech",
      "experience":2,
      "doj":"2020-06-04",
      "salary":50000,
      "employee_type":"private",
      //"operation":"<a href='getemployeedata.html?id=4'>View</a> | <a href='getemployeedata.html?id=4&op=edit'>Edit</a>"
      "operation": "<a href='#' onClick=viewEmployee(4)>View</a> | <a href='#' onClick=editEmployee(4)>Edit</a>  | <a href='#' onClick=deleteEmployee(4)>Delete</a>"
    }
];


var columnList = [
    {"name": "id",
      "label": "Id",
      "type":"INTEGER"
    },
     {"name": "name",
      "label": "Name",
      "type":"STRING"
    },
    {"name": "age",
      "label": "Age",
      "type":"INTEGER"
    },
    {"name": "gender",
    "label": "Gender",
    "type":"STRING"
    },
    {"name": "address",
    "label": "Address",
    "type":"STRING"
    },
    {"name": "education",
    "label": "Education",
    "type":"STRING"
    },
    {"name": "experience",
        "label": "Experience",
        "type":"INTEGER"
        },
        {"name": "doj",
        "label": "DOJ",
        "type":"DATE"
        },
        {"name": "salary",
        "label": "Salary",
        "type":"CURRENCY"
        },
        {"name": "employee_type",
            "label": "Employee Type",
            "type":"SELECT",
            "options" : {"govt":"Government", "private":"Private", "others":"Others"}
            },
            {"name": "operation",
            "label": "Operation",
            "type":"STRING"
            }

];

//var headers = ["Id","Name", "Age", "Gender", "Address", "Education", "Experience", "DOJ", "Salary", "employee_type", "Operation"];
//var keys = ["id", "name", "age", "gender", "address", "education", "experience", "doj", "salary", "employee_type",  "operation"];



   function getEmployeeData() {
       var empId = parseInt(document.getElementById("emp_id").value);
       var resultElement = document.getElementById("employee_details");
       renderEmployeeById(resultElement, empId);
   }

   function renderEmployeeById(resultElement, empId) {
       var employee = employees.find(emp => emp.id === Number(empId));

       if (employee) {
           displayEmployeeData(resultElement, employee);
       } else {
           resultElement.innerHTML = "<h2>No employee found with Id: " + empId + " </h2>";
       }
   }

function displayEmployeeData(resultElement, employee) {
   resultElement.innerHTML = `
       <h2>Employee Details:</h2>
       <table>
           <tr>
               <th>ID</th>
               <td>${employee.id}</td>
           </tr>
           <tr>
               <th>Name</th>
               <td>${employee.name}</td>
           </tr>
           <tr>
               <th>Age</th>
               <td>${employee.age}</td>
           </tr>
           <tr>
               <th>Gender</th>
               <td>${employee.gender}</td>
           </tr>
           <tr>
               <th>Address</th>
               <td>${employee.address}</td>
           </tr>
           <tr>
               <th>Education</th>
               <td>${employee.education}</td>
           </tr>
           <tr>
               <th>Years of Experience</th>
               <td>${employee.experience}</td>
           </tr>
           <tr>
               <th>Date of Joining</th>
               <td>${employee.doj}</td>
           </tr>
           <tr>
               <th></th>
               <td><a href='#' onClick="backToList()">Back to List...</a></td>
           </tr>
       </table>
   `;
}

function renderEmployeeEditForm(htmlElementToRender, empId, operation) {
    var employee = employees.find(emp => emp.id === Number(empId));

    if (employee && (operation === "EDIT" || operation === "VIEW")) {
        var disableStr = operation === "VIEW" ? "disabled" : "";
        htmlElementToRender.innerHTML =`
        <h1>${operation} Form</h1>

        <form id="employeeForm">
         <label for="emp_id">Id:</label>
        <input type="text" id="emp_id" value="${employee.id}" disabled style="display:${employee.id ? 'block' : 'none' };">
        <label for="emp_name">Name:</label>
        <input type="text" id="emp_name" value="${employee.name}" required ${disableStr}>

        <label for="emp_age">Age:</label>
        <input type="number" id="emp_age" value="${employee.age}" required ${disableStr} >

        <label for="emp_gender">Gender:</label><br>
        <input type="radio" id="male" name="gender" ${employee.gender === 'male' ? 'CHECKED' : '' } value="male" ${disableStr}>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" ${employee.gender === 'female' ? 'CHECKED' : ''} value="female" ${disableStr}>
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" ${employee.gender === 'other' ? 'CHECKED' : '' } value="other" ${disableStr}>
        <label for="other">Other</label><br>

        <label for="emp_address">Address:</label>
        <textarea id="emp_address" required ${disableStr} >${employee.address}</textarea>

        <label for="emp_education">Education:</label>
        <input type="text" id="emp_education"  value="${employee.education}" required ${disableStr}>

        <label for="emp_experience">Years of Experience:</label>
        <input type="number" id="emp_experience" value="${employee.experience}" required ${disableStr}>

        <label for="emp_doj">Date of Joining:</label>
        <input type="date" id="emp_doj" value="${employee.doj}"  required ${disableStr}>

        <label for="emp_salary">Salary:</label>
        <input type="text" id="emp_salary" value="${employee.salary}" required pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" ${disableStr}>

        <label for="emp_type">Employee:</label>
        <select id="emp_type" onchange="showOtherTextBox()" ${disableStr}>
        <option value="private" ${employee.employee_type === 'private' ? 'selected' : '' }>Private</option>
         <option value="govt" ${employee.employee_type === 'govt' ? 'selected' : '' } >Government</option>
         <option value="others" ${employee.employee_type === 'others' ? 'selected' : '' } >Others</option>
        </select><br><br>

        <div id="employee_type_other_control" style="display:${employee.employee_type === 'others' ? 'block' : 'none' };">
         <label for="otherType">Specify Employee Type:</label>
         <input type="text" id="employee_type_other" value="${employee.employee_type_other}" ${disableStr}>
        </div><br>

        <input type="button" value="Submit" onClick="upsertEmployee('${operation}')" style="display:${operation === 'VIEW' ? 'none' : 'block'};"></br>

        <input type="button" value="${operation === 'VIEW' ? 'Back to List' : 'Cancel'}" onClick="cancelOperation()">
        </form>

        <div id="employee_details"></div>
        `;

    }
    else if (operation === "ADD") {
            htmlElementToRender.innerHTML =`
            <h1>Add Form</h1>

            <form id="employeeForm">
            <input type="text" id="emp_id" disabled style="display:none;">
            <label for="emp_name">Name:</label>
            <input type="text" id="emp_name"  required>

            <label for="emp_age">Age:</label>
            <input type="number" id="emp_age" required>

            <label for="emp_gender">Gender:</label><br>
            <input type="radio" id="male" name="gender" value="male" required>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label><br>

            <label for="emp_address">Address:</label>
            <textarea id="emp_address" required></textarea>

            <label for="emp_education">Education:</label>
            <input type="text" id="emp_education"  required>

            <label for="emp_experience">Years of Experience:</label>
            <input type="number" id="emp_experience"  required>

            <label for="emp_doj">Date of Joining:</label>
            <input type="date" id="emp_doj" required>

            <label for="emp_salary">Salary:</label>
            <input type="text" id="emp_salary"  required pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$">

            <label for="emp_type">Employee:</label>
            <select id="emp_type" onchange="showOtherTextBox()">
            <option value="private">Private</option>
             <option value="govt"  >Government</option>
             <option value="others"  >Others</option>
            </select><br><br>

            <div id="employee_type_other_control" style="display:none;">
             <label for="otherType">Specify Employee Type:</label>
             <input type="text" id="employee_type_other">
            </div><br>

            <input type="button" value="Submit" onClick="upsertEmployee('${operation}')" style="display:${operation === 'VIEW' ? 'none' : 'block'};"></br>

            <input type="button" value="${operation === 'VIEW' ? 'Back to List' : 'Cancel'}" onClick="cancelOperation()">
            </form>

            <div id="employee_details"></div>
            `;

    }
     else {
    htmlElementToRender.innerHTML = "<h2>No employee found with Id: " + empId + " </h2>";
    }
}

function showOtherTextBox() {
    var selectBox = document.getElementById("emp_type");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var otherTypeBox = document.getElementById("employee_type_other_control");
    if (selectedValue === "others") {
        otherTypeBox.style.display = "block";
    } else {
        otherTypeBox.style.display = "none";
    }
}

function viewEmployee(empId) {
    //document.getElementById("employee_edit_form").style.display = "none";
    document.getElementById("employee_table").style.display = "none";
     document.getElementById("add_employee").style.display = "none";
    /* var employeeDetails = document.getElementById("employee_view");
    employeeDetails.style.display = "block";
    renderEmployeeById(employeeDetails, empId);*/
    var employeeEditForm = document.getElementById("employee_edit_form");
    employeeEditForm.style.display = "block";
    renderEmployeeEditForm(employeeEditForm, empId, "VIEW");
}

function editEmployee(empId) {
    document.getElementById("employee_table").style.display = "none";
     document.getElementById("add_employee").style.display = "none";
    var employeeEditForm = document.getElementById("employee_view");
    employeeEditForm.style.display = "none";
    var employeeEditForm = document.getElementById("employee_edit_form");
    employeeEditForm.style.display = "block";
    renderEmployeeEditForm(employeeEditForm, empId, "EDIT");
}

function backToList() {
    document.getElementById("employee_edit_form").style.display = "none";
    document.getElementById("employee_view").style.display = "none";
    var myTable = document.getElementById("employee_table");
    myTable.style.display = "block";
    document.getElementById("add_employee").style.display = "block";
    buildTableViaJavascriptString(myTable, columnList, employees);
}

function getDummyEmployeeObject() {
    var employee = {
         name: '',
         age: null,
         address: '',
         education: '',
         experience:  0,
         salary: 0,
         doj: '',
         gender:'',
         employee_type:'',
         employee_type_other:''
        };
        return employee;
}

function upsertEmployee(operation) {
    var employee = {
     id : document.getElementById("emp_id").value,
     name: document.getElementById("emp_name").value,
     age: parseInt(document.getElementById("emp_age").value),
     address: document.getElementById("emp_address").value,
     education: document.getElementById("emp_education").value,
     experience: parseInt(document.getElementById("emp_experience").value),
     salary: Number(document.getElementById("emp_salary").value),
     doj: document.getElementById("emp_doj").value,
     gender:document.querySelector("input[type='radio'][name=gender]:checked").value,
     employee_type:document.getElementById("emp_type").value,
     employee_type_other:document.getElementById("employee_type_other").value
    };

    if(operation === "ADD") {
        let employeeIds = employees.map((obj) => { return parseInt(obj.id) });
        employeeIds.sort(function(a, b){return b - a});
        let empId = employeeIds.length > 0 ? parseInt(employeeIds[0])+1 : 1;
        employee.id = empId;
        employee.operation ="<a href='#' onClick=viewEmployee("+empId+")>View</a> | <a href='#' onClick=editEmployee("+empId+")>Edit</a> | <a href='#' onClick=deleteEmployee("+empId+")>Delete</a>";
        employees.push(employee);
    } else {
        let keysToUpdate =  ["name", "age", "gender", "address", "education", "experience", "doj", "salary", "employee_type", "employee_type_other"];
        for(var i  = 0; i < employees.length; i++) {
            if(employees[i]["id"] === Number(employee.id)) {
                keysToUpdate.forEach(function(value, index) {
                    employees[i][value] = employee[value];
                  });
                break;
            }
        }

    }
    backToList();
}

function addEmployee() {
    document.getElementById("employee_table").style.display = "none";
     document.getElementById("add_employee").style.display = "none";
    var employeeEditForm = document.getElementById("employee_view");
    employeeEditForm.style.display = "none";
    var employeeEditForm = document.getElementById("employee_edit_form");
    employeeEditForm.style.display = "block";
    renderEmployeeEditForm(document.getElementById("employee_edit_form"), '', "ADD")
}

function deleteEmployee(empId) {
    let indexToDeleteEmployee = null;
    for(var i  = 0; i < employees.length; i++) {
        if(employees[i]["id"] === Number(empId)) {
            indexToDeleteEmployee = i;
            break;
        }
    }
    if(indexToDeleteEmployee > -1) {
        employees.splice(indexToDeleteEmployee, 1);
        backToList();
    }
}

function cancelOperation() {
    backToList();
}




