var contentNav = document.getElementById("content-nav");
var links = contentNav.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function toggleText() {
    const points = document.getElementById("points");
    const moreText = document.getElementById("moretxtUT");
    const button = document.getElementById("moreButton");
  
    const isHidden = moreText.style.display === "none";
  
    moreText.style.display = isHidden ? "inline" : "none";
    points.style.display = isHidden ? "none" : "inline";
    button.innerHTML = isHidden ? "Show Less" : "Show More";
 }