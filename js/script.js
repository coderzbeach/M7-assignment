// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
document.addEventListener("DOMContentLoaded", function() {
    const addForm = document.getElementById("addForm");
    const employeesTable = document.getElementById("employees");
    const empCountOutput = document.getElementById("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;

// ADD EMPLOYEE
 addForm.addEventListener("submit", function(event) {
          
    // PREVENT FORM SUBMISSION      
    event.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const extension = document.getElementById("extension").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeesTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const extensionCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const departmentCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.textContent = id;
    nameCell.textContent = name;
    extensionCell.textContent = extension;
    emailCell.textContent = email;
    departmentCell.textContent = department;

    // CREATE A DELETE BUTTON
    let deleteBtn = document.createElement('button')
    
    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'Delete'
    let textDelete = document.createTextNode('Delete')
    
    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    
    // APPEND DELETE BUTTON TO LI
    li.appendChild(deleteBtn)
    
    // ADD CLICK EVENT LISTENER TO DELETE BUTTON
    deleteBtn.addEventListener('click', function() {
        if (confirm("Are you sure you want to delete this employee?")) {
            
            // REMOVE THE ENTIRE ROW
            employeesTable.deleteRow(newRow.rowIndex);
            
            // DECREMENT THE EMPLOYEE COUNT
            empCount--;
            
            // UPDATE THE DISPLAYED EMPLOYEE COUNT
            updateEmployeeCount();
        }
    });
    
    // RESET THE FORM
    addForm.reset()
   
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    updateEmployeeCount(); // UPDATE DISPLAYED EMPLOYEE COUNT
});

employeesTable.addEventListener('click', (e) => {
    // CHECK IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('Delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            // REMOVE THE ENTIRE ROW
            const row = e.target.closest('tr');
            employeesTable.deleteRow(row.rowIndex);
            // DECREMENT THE EMPLOYEE COUNT
            empCount--;
            // UPDATE THE DISPLAYED EMPLOYEE COUNT
            updateEmployeeCount();
        }
    }
});

// FUNCTION TO UPDATE DISPLAYED EMPLOYEE COUNT
function updateEmployeeCount() {
    empCountOutput.textContent = empCount;
}
});