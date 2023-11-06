const rateLabels = document.querySelectorAll(".rateLabel");

rateLabels.forEach((label) => {
   label.addEventListener("click", () => {
      const activeLabel = document.querySelector(".rateLabel.active");
      if(activeLabel) {
         activeLabel.classList.remove("active");
      }
      label.classList.add("active");
   });
});

window.addEventListener("load", () => {
   const rate3 = document.querySelector("#rate3");
   rate3.click();
   rate3.nextElementSibling.click();
})
