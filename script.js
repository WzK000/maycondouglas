//Hover Links
const linkedinHover = document.getElementsByClassName("lkd");
const dribbleHover = document.getElementsByClassName("dbr");

//Copy Email
// JavaScript code to handle the button click event
const copyButton = document.getElementById("copyButton");
const copyMessage = document.getElementById("copyMessage");

copyButton.addEventListener("click", () => {
  // Replace 'your_email@example.com' with your actual email address
  const emailToCopy = "oi@maycondouglas.com";

  // Create a temporary textarea element to copy the email address
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = emailToCopy;

  // Append the textarea to the document
  document.body.appendChild(tempTextarea);

  // Select and copy the email address
  tempTextarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea from the document
  document.body.removeChild(tempTextarea);

  // Show the "email copied!" message
  copyMessage.style.display = "inline";

  // Hide the message after a short delay (e.g., 3 seconds)
  setTimeout(() => {
    copyMessage.style.display = "none";
  }, 1500);
});
