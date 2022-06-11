const more = document.querySelector(".more");
const showMorebtn = document.querySelector(".showMore");
const btnReadMore = document.querySelector(".btnReadMore");
const btnSoft = document.querySelector(".btnSoft");

btnReadMore.addEventListener("click", showMore);
btnSoft.addEventListener("click", showMoreSec);


function showMore() {
  if (more.hasAttribute("hidden")) {
    more.removeAttribute("hidden");
    btnReadMore.textContent = "Hide";
  } else {
    more.setAttribute("hidden", true);
    btnReadMore.textContent = "Show more";
  }
}
function showMoreSec() {
    if (showMorebtn.hasAttribute("hidden")) {
        showMorebtn.removeAttribute("hidden");
        btnSoft.textContent = "Hide";
    } else {
        showMorebtn.setAttribute("hidden", true);
        btnSoft.textContent = "Show more";
    }
  }