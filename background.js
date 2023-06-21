document.addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "A") {
      event.preventDefault();
      window.open(target.href, "_blank");
    }
  });
  