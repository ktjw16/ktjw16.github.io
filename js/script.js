if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({behavior: "smooth"})
  })
}

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
  document.getElementById("footer").style.width = "100%";
  document.getElementById("sidenav").style.position = "relative";
  document.getElementById("footer").style.position = "relative";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("footer").style.width = "0";
} 

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