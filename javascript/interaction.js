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

function openModal(imgNum) {
  document.body.classList.add("stop-scrolling");
  switch(imgNum) {
    case 1:
      document.getElementById("imgContainerModal").src = "../img/Jujutsu_High.png";
      document.getElementById("caption").innerHTML = "Tokyo High";
      break;
    case 2:
      document.getElementById("imgContainerModal").src = "../img/TiendaDiscos.png";
      document.getElementById("caption").innerHTML = "Tienda de Discos";
      break;
    case 3:
      document.getElementById("imgContainerModal").src = "../img/UbicaTec.png";
      document.getElementById("caption").innerHTML = "UbicaTec";
      break;
    default:
      // code block
  }
  document.getElementById("imgModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}