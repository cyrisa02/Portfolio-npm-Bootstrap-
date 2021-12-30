let balls = document.getElementsByClassName("ball");

document.onmousemove = function () {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

function openPage() {
  const a = document.getElementById("search1").value;

  if (a === "CV") {
    window.open("/cv/cyril-gourdon.pdf");
  }

  if (a === "Bootstrap") {
    window.open("/intranet/intranet.html");
  }

  if (a === "flexbox") {
    window.open("/flexbox/defi.html");
  }

  if (a === "Grid") {
    window.open("/grid/defi.html");
  }
}
