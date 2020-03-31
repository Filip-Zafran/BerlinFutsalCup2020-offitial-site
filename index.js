var tabButtons = document.querySelectorAll(".tabCont .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabCont .tabPanel1");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = "colorCode";
  tabButtons[panelIndex].style.color = "black";
  buttonContainer.forEach(function(node) {
    node.style.display = "none";
  });
  buttonContainer[panelIndex].style.display = "block";
  buttonContainer[panelIndex].style.backgroundColor = "colorCode";
}

showPanel(0, "blue");

// explanation
// https://www.youtube.com/watch?v=PzSxehu4G78
