$(document).ready(function () {
  $('#salaryForm').on('submit', function (event) {
      event.preventDefault();
      var values = {};

      var formObject = $('#salaryForm').serializeArray();

      console.log($('#salaryForm').serializeArray());

      //appends object to DOM in .container - need to pull each object individually?
      $('.container').append('<div class="new-employee"></div>');
      var $el = $('.container').children().last();

      $el.append('<p>Info:' + formObject + '</p>');

      //strips form - creates an object with form info
      $.each($('#salaryForm').serializeArray(), function (i, field) {
        values[field.name] = field.value;
      });

      //clears out the form
      $('#salaryForm').find('input[type=text]').val('');
      employeeArray.push(values);
      totalEmployeeSalary();
    });

  totalEmployeeSalary();

});

var employeeArray = [];

//loops through employeesalary adding salaries with each submit
function totalEmployeeSalary() {
  var employeeSalary = 0;
  for (var i = 0; i < employeeArray.length; i++) {
    var employee = employeeArray[i];
    employeeSalary += parseInt(employee.employeesalary);
  }

  console.log(employeeSalary);

  //divides totalEmployeeSalary by 12 to get monthly salary - attaches to <p> shown in DOM
  $('.total-employee-salary').text('Total Monthly Salary Paid: $' + Math.round(employeeSalary / 12));
}
