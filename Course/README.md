# Broke-To-Boss
A financial literacy website that provide accessible education to all people.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            background-color: #f8f9fa; /* Light gray background */
        }
        h1 {
            text-align: center;
            color: #2c3e50; /* Dark blue-gray */
        }
        h2 {
            margin-top: 10px;
            color: #34495e; /* Darker gray */
        }
        form {
            margin-top: 10px;
        }
        .section {
            background-color: #ffffff; /* White background for sections */
            border-radius: 8px; /* Rounded corners */
            padding: 20px; /* Space inside the gray box */
            margin-bottom: 20px; /* Space between sections */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        }
        .content-box {
            background-color: #e8f5e9; /* Light green for content box */
            border: 1px solid #82c2a2; /* Light green border */
            border-radius: 5px; /* Rounded corners */
            padding: 10px; /* Space inside the content box */
            display: inline-block; /* Fit around content */
            margin-top: 10px; /* Space above each box */
        }
        .form-container {
            display: flex; /* Flexbox layout */
            gap: 20px; /* Space between form and info */
        }
        .user-info {
            flex: 1; /* Take available space */
            border: 1px solid #82c2a2; /* Border for distinction */
            border-radius: 5px; /* Rounded corners */
            padding: 10px; /* Space inside the user info box */
            background-color: #ffffff; /* White background for user info */
        }
        .button {
            background-color: #82c2a2; /* Green button */
            color: #ffffff; /* White text */
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #82c2a2; /* Darker green on hover */
        }
        .delete-account {
            color: #d32f2f; /* Dark red for delete account */
            margin-top: 40px;
            font-size: 18px;
            border: none;
            background: none;
            cursor: pointer;
        }
        .back-link {
            display: inline-block;
            margin-top: 15px;
            text-decoration: none;
            color: #82c2a2; /* Green link */
            background-color: #ffffff;
            border: 1px solid #82c2a2; /* Green border */
            padding: 10px 15px; /* Padding for the button */
            border-radius: 4px;
            transition: background-color 0.3s, color 0.3s; /* Smooth transition */
        }
        .back-link:hover {
            background-color: #82c2a2; /* Change background on hover */
            color: #ffffff; /* Change text color on hover */
        }
    </style>
</head>
<body>

<h1>Account Settings</h1>

<div>
    <button class="button" onclick="scrollToSection('info')">Info</button>
    <button class="button" onclick="scrollToSection('privacy')">Privacy Policy</button>
    <button class="button" onclick="confirmDelete()">Delete Account</button>
</div>

<div class="section">
    <h2 id="info">User Information</h2>
    <p>Please provide your details:</p>
    <div class="form-container">
        <form id="infoForm">
            <label for="username">Name:</label><br>
            <input type="text" id="username" name="username" required><br><br>
            
            <label for="phone">Phone Number:</label><br>
            <input type="tel" id="phone" name="phone" required><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <button type="submit" class="button">Submit</button>
        </form>

        <!-- User Info Display Section -->
        <div class="user-info">
            <h3>Your Information:</h3>
            <div class="content-box">
                <p id="displayUsername"></p>
                <p id="displayPhone"></p>
                <p id="displayEmail"></p>
            </div>
        </div>
    </div>
</div>

<div class="section">
    <h2 id="privacy">Privacy Policy</h2>
    <div class="content-box">
        <p>By using our services, you agree to our terms: Your contact information may be stored on this website. 
            This is an educational program. The services on this website are not financial advice, and cannot be used to justify legal action. 
            This website and its creators are not liable for financial decisions and their impact on the clients.
        </p>
    </div>
</div>

<div class="section">
    <h2 id="delete">Delete Account</h2>
    <p class="delete-account">Are you sure you want to delete your account?</p>
    <button class="delete-account" onclick="confirmDelete()">Delete Account</button>
</div>

<!-- Back to Homepage Link -->
<a class="back-link" href="index.html">Back to Homepage</a>

<script>
    // Load saved information from localStorage
    window.onload = function() {
        const savedName = localStorage.getItem('username');
        const savedPhone = localStorage.getItem('phone');
        const savedEmail = localStorage.getItem('email');

        if (savedName) document.getElementById('username').value = savedName;
        if (savedPhone) document.getElementById('phone').value = savedPhone;
        if (savedEmail) document.getElementById('email').value = savedEmail;

        // Display saved information
        displayUserInfo(savedName, savedPhone, savedEmail);
    };

    // Save information to localStorage
    document.getElementById('infoForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);

        // Display the user info
        displayUserInfo(username, phone, email);

        alert("Information saved!");
    };

    function displayUserInfo(username, phone, email) {
        document.getElementById('displayUsername').innerText = `Name: ${username}`;
        document.getElementById('displayPhone').innerText = `Phone: ${phone}`;
        document.getElementById('displayEmail').innerText = `Email: ${email}`;
    }

    function scrollToSection(section) {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }

    function confirmDelete() {
        const confirmation = confirm("Are you sure you want to delete your account?");
        if (confirmation) {
            alert("Your account has been deleted.");
        }
    }
</script>

</body>
</html>
