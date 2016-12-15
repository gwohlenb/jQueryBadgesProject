$(document).ready(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/gregw1.json',
    dataType: 'jsonp',
    success: function(response) {
      addTheCourses(response.courses.completed);
    }
  }); 

  function addTheCourses(coursesCompleted) { // Declared function

    coursesCompleted.forEach(function(course) {

      $("#badges");

      var course = $('<div />', { 'class': 'course' })
        .appendTo($('#badges'));

      $('<h3 />', { text: course:title })
        .appendTo($('#badges'));

      $('<img />', { src: course:badge })
        .appendTo($('#badges'));

      $("<a />, { 'class': 'btn btn-primary', target: '_blank', href: 'text:url', text: 'See Course' })
        .appendTo($('#badges'));

       console.log("Add the courses");
       return course;
     }
   }
});
