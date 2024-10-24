// JavaScript for handling subscription form submission
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload on form submit
  
    // Get form data
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
  
    // Simple validation
    if (firstname && email) {
      // Mockup for successful subscription (you can replace this with actual API call)
      document.getElementById("subscribeMessage").textContent = `Thank you, ${firstname}! You've been successfully subscribed with ${email}.`;
      document.getElementById("subscribeMessage").style.color = "green";
  
      // Optionally clear the form
      document.getElementById("subscribeForm").reset();
    } else {
      // Handle errors
      document.getElementById("subscribeMessage").textContent = "Please fill in both your name and email.";
      document.getElementById("subscribeMessage").style.color = "red";
    }
  });
  