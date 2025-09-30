document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const textOnlyPattern = /^[A-Za-z\s]+$/;

  // Check all required fields
  if (!name || !email || !subject || !message) {
    alert("All fields are required.");
    return;
  }

  // Validate name and subject (only characters and spaces)
  if (!textOnlyPattern.test(name)) {
    alert("Name must contain only letters and spaces.");
    return;
  }

  if (!textOnlyPattern.test(subject)) {
    alert("Subject must contain only letters and spaces.");
    return;
  }

  // Validate message (minimum 10 characters, only letters and spaces)
  if (message.length < 10 || !/^[A-Za-z\s.,!?']+$/.test(message)) {
    alert("Message must be at least 10 characters and use valid characters.");
    return;
  }

  // Validate email
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Success
  alert("Thank you! Your message has been sent.");
  this.reset();
});
