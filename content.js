// Function to add target="_blank" to all links and prevent default behavior
function addTargetBlank(event) {
  event.preventDefault();

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.target = "_blank";
  });
}

// Execute the function when the page finishes loading
window.addEventListener("DOMContentLoaded", addTargetBlank);



