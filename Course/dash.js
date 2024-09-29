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
<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', () => {
  const chatHistory = document.querySelector('.chat-history');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', async () => {
      const userMessage = userInput.value;
      appendMessage('You', userMessage);
      userInput.value = ''; // Clear input

      const reply = await getChatbotResponse(userMessage);
      appendMessage('Bob', reply);
  });

  function appendMessage(role, text) {
      const message = document.createElement('li');
      message.textContent = `${role}: ${text}`;
      chatHistory.appendChild(message);
  }

  async function getChatbotResponse(message) {
      const apiKey = 'AIzaSyCPoerJ2e0F0dWT1O9KUocz9CEG3yMJPyY'; // Replace with your API key
      const response = await fetch('https://your-gemini-api-endpoint', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
              prompt: message,
              // Include any other necessary parameters here
          }),
      });

      const data = await response.json();
      return data.reply; // Adjust based on actual response structure
  }
});



=======
>>>>>>> 507b0bd9e72c1db348d641c9886fc02728e84ee5
