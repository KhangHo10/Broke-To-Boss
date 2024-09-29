document.addEventListener('DOMContentLoaded', () => {
  const courseLinks = document.querySelectorAll('.course-link');

  courseLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior

          // Simulate course completion
          markCourseAsCompleted(link);
      });
  });
});

function markCourseAsCompleted(link) {
  const checkmark = link.nextElementSibling; // Get the checkmark span
  checkmark.style.display = 'inline'; // Show the checkmark

  // You can also store the completion status in local storage if needed
  const completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
  const courseName = link.textContent.trim();

  if (!completedCourses.includes(courseName)) {
      completedCourses.push(courseName);
      localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
  }

  console.log(`Completed: ${courseName}`);
}
