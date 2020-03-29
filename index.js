var sidebar = document.querySelectorAll(".sidebar .sidebarButtons button");
var sidebarButtons = document.querySelectorAll(".sidebar .tabPanel1");

function showPanel(panelIndex, colorCode) {
  sidebar.forEach(function(node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  sidebar[panelIndex].style.backgroundColor = "colorCode";
  sidebar[panelIndex].style.color = "black";
  sidebarButtons.forEach(function(node) {
    node.style.display = "none";
  });
  sidebarButtons[panelIndex].style.display = "block";
  sidebarButtons[panelIndex].style.backgroundColor = "colorCode";
}

showPanel(0, "blue");

// explanation
// https://www.youtube.com/watch?v=PzSxehu4G78
