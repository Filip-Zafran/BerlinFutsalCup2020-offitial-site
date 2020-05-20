  const cupDetailsBttn = document.getElementById("cupDetailsBttn");
  cupDetailsBttn.addEventListener("click", toggleSideBar1);

function toggleSideBar1() {
  var x = document.getElementById("cupDetails");
  if (x.style.display === "none") {
    x.style.display = "block",
    cupDetailsBttn.style.backgroundColor = "white",
    cupDetailsBttn.style.color = "red",
    cupDetailsBttn.style.fontWeight = "normal";
      } else {
    x.style.display = "none";
  cupDetailsBttn.style.backgroundColor = "red",
    cupDetailsBttn.style.color = "white",
    cupDetailsBttn.style.fontWeight = "bold";
  }
} 


  const paymentDetailsBttn = document.getElementById("paymentDetailsBttn");
  paymentDetailsBttn.addEventListener("click", toggleSideBar2);

function toggleSideBar2() {  
  var x = document.getElementById("paymentDetails");
  if (x.style.display === "none") {
    x.style.display = "block",
    cupDetailsBttn.style.backgroundColor = "white",
    cupDetailsBttn.style.color = "red",
    cupDetailsBttn.style.fontWeight = "normal";
      } else {
    x.style.display = "none";
  cupDetailsBttn.style.backgroundColor = "red",
    cupDetailsBttn.style.color = "white",
    cupDetailsBttn.style.fontWeight = "bold";
  }
} 

  const locationBttn = document.getElementById("locationBttn");
  locationBttn.addEventListener("click", toggleSideBar3);


function toggleSideBar3() {  
  var x = document.getElementById("location");
  if (x.style.display === "none") {
    x.style.display = "block",
    cupDetailsBttn.style.backgroundColor = "white",
    cupDetailsBttn.style.color = "red",
    cupDetailsBttn.style.fontWeight = "normal";
      } else {
    x.style.display = "none";
  cupDetailsBttn.style.backgroundColor = "red",
    cupDetailsBttn.style.color = "white",
    cupDetailsBttn.style.fontWeight = "bold";
  }
} 

      const appFormBttn = document.getElementById("appFormBttn");
    appFormBttn.addEventListener("click", toggleSideBar4);

  function toggleSideBar4() {    
  var x = document.getElementById("appForm");
  if (x.style.display === "none") {
    x.style.display = "block",
    cupDetailsBttn.style.backgroundColor = "white",
    cupDetailsBttn.style.color = "red",
    cupDetailsBttn.style.fontWeight = "normal";
      } else {
    x.style.display = "none";
  cupDetailsBttn.style.backgroundColor = "red",
    cupDetailsBttn.style.color = "white",
    cupDetailsBttn.style.fontWeight = "bold";
  }
} 