$(document).ready(function () {
  let loadMoreBtn = document.getElementById('more-btn')
  let currentItem = 6;

  loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll(".container-fluid_1 .row .col")];
    for (var i = currentItem; i < currentItem + 6; i++) {
      boxes[i].style.display = "inline-block";
    }
    currentItem += 6;

    if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = "none";
    }
  };

//search sscript

  var search = document.getElementById('search-bar')

  search.addEventListener('change',(e) =>{
    let searchValue = e.target.value;
    let data = document.querySelectorAll("[data-search='famous-people']")
    data.forEach((item)=>{
      if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
        item.style.display = "inline-block";
      } else {
        item.style.display = "none";
      }
    })
  })
});