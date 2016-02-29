$(document).ready(function () {
  $('#salaryForm').on('submit', function (event) {
      event.preventDefault();
      var values = {};

      var formObject = $('#salaryForm').serializeArray();

      console.log($('#salaryForm').serializeArray());

      $('.container').on('click', '.delete', deleteClick);

      //strips form - creates an object with form info
      $.each($('#salaryForm').serializeArray(), function (i, field) {
        values[field.name] = field.value;
      });

      //clears out the form
      $('#salaryForm').find('input[type=text]').val('');
      employeeArray.push(values);

      totalEmployeeSalary();
      appendFormInfo();
      counter++;
    });

  totalEmployeeSalary();

});

var employeeArray = [];

//loops through employeesalary adding salaries with each submit
function totalEmployeeSalary() {
  var employeeSalary = 0;
  for (var i = 0; i < employeeArray.length; i++) {
    var employee = employeeArray[i];
    employeeSalary += Math.round(parseInt(employee.employeesalary) / 12);
  }

  console.log(employeeSalary);

  //divides totalEmployeeSalary by 12 to get monthly salary - attaches to <p> shown in DOM
  $('.total-employee-salary').text('Total Monthly Salary Paid: $' + employeeSalary);
}

var counter = 0;

function appendFormInfo() {
  var employee = employeeArray[counter];
  var allInfo = employee.firstname + ', ' + employee.lastname + ', ' + employee.employeeid + ', ' + employee.jobtitle + ', ' + employee.employeesalary;

  $('.container').append('<div class="new-employee"></div>');
  var $el = $('.container').children().last();

  $el.append(allInfo);
  $el.append("<button class='delete'>Delete</button>");
}

function deleteClick() {
  $(this).parent().remove();
}
