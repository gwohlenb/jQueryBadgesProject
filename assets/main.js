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

      var courseList = $('<div />', { 'class': 'course' })
        .appendTo($('#badges'));

      $('<h3 />', { text: course.title })
        .appendTo(courseList);

      $('<img />', { src: course.badge })
        .appendTo(courseList);

      $('<a />', { 'class': 'btn btn-primary', target: '_blank', href: course.url, text: 'See Course' })
        .appendTo(courseList);
     })
   }
});
