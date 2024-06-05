function toggleNavOverlay() {
  var x = document.getElementById("sidenav");
  var y = document.getElementById("footer");
  if (x.className === "nav") {
    x.className += " overlay";
  } else {
    x.className = "nav";
  }
  
  if (y.className === "foot") {
    y.className += " overlay";
  } else {
    y.className = "foot";
  }
}