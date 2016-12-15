$(document).ready(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/gregw1.json',
    dataType: 'jsonp',
    success: function(response) {
	for (key in response.courses.completed) {

	  $("#badges").after("<div class='course'>")
                      .after("<h3>" + response.courses.completed[key].title + "</h3>")
                      .after("<img src=" + response.courses.completed[key].badge + ">")
                      .after("<a class='btn btn-primary' target='_blank' href=" + response.courses.completed[key].url + ">See Course</a>")
                      .after("</div>");  

	  console.log("made additions to DOM");
        }
    }
  });
});
