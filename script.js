// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// Function to apply saved preferences
function applyPreferences() {
  const name = localStorage.getItem("name");
  const bgColor = localStorage.getItem("background-color");
  const textColor = localStorage.getItem("foreground-color");

  if (name) {
    document.getElementById("greeting").textContent = `Welcome back, ${name}!`;
  }

  if (bgColor) {
    document.body.style.backgroundColor = bgColor;
  }

  if (textColor) {
    document.body.style.color = textColor;
  }
}

// Function to save preferences
function savePreferences(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const name = document.getElementById("name").value;
  const bgColor = document.getElementById("background-color").value;
  const textColor = document.getElementById("foreground-color").value;

  // Store preferences in localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("background-color", bgColor);
  localStorage.setItem("foreground-color", textColor);

  // Apply the preferences immediately
  applyPreferences();

  // Notify the user that preferences were saved
  alert("Your preferences have been saved!");
}

// Set up event listener on the form
document
  .getElementById("preferences-form")
  .addEventListener("submit", savePreferences);

// Apply preferences when the page loads
document.addEventListener("DOMContentLoaded", applyPreferences);
