const  house = document.querySelector(".house"),
compound = document.querySelector(".compound"),
compound2 = document.querySelector(".compound2"),
  state = document.querySelector(".state");


compound.addEventListener("click", addActive);

//compound2.addEventListener("click", removeActive);

//state.addEventListener("click", removeActive);




function addActive() {
    compound.classList.toggle("active");
    
    if (compound.classList.contains("active")) {
      house.classList.add("active");
      state.classList.add("active");
  } else {
    house.classList.remove("active");
    state.classList.remove("active");
  }
  }
  
  function removeActive() {
    state.classList.remove("active");
    compound.classList.remove("active");
    house.classList.remove("active");
  }