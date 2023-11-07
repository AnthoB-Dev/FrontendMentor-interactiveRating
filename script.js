const rateLabels = document.querySelectorAll(".rateLabel");
const submitBtn = document.querySelector("#button");
const form = document.querySelector("#element");

rateLabels.forEach((label) => {
   label.addEventListener("click", () => {
      const activeLabel = document.querySelector(".rateLabel.active");
      if(activeLabel) {
         activeLabel.classList.remove("active");
      }
      label.classList.add("active");
   });
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let note = document.querySelector("input[name='rating']:checked");
   if(!note) {
      note = document.querySelector("#rate3");
   } 
   submitBtn.classList.toggle("activeBtn")

   setTimeout(() => {
      submitBtn.classList.toggle("activeBtn")
      printThanks(note.value);
   }, 500);
})

const printThanks = function(note) {
   const formChildNodes = form.childNodes; 
   for (let i = formChildNodes.length - 1; i > 0 ; i--) {
      formChildNodes[i].remove();
   }
   form.remove();

   const divThanks = document.createElement("div");
   const illuThanks = document.createElement("img");
   const divNote = document.createElement("div");
   const pNote = document.createElement("p");
   const title = document.createElement("h1");
   const parag = document.createElement("p");

   divThanks.id = "thanks";
   illuThanks.id = "illuThanks";
   illuThanks.src = "assets/images/illustration-thank-you.svg";
   divNote.id = "note";
   pNote.innerText = "You selected " + note + " out of 5";
   title.id = "title";
   title.innerText = "Thank you!";
   parag.className = "paragraph";
   parag.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

   divThanks.append(illuThanks);
   divNote.append(pNote);
   divThanks.append(divNote);
   divThanks.append(title);
   divThanks.append(parag);
   document.querySelector("#background").append(divThanks);
}


window.addEventListener("load", () => {
   const rate3 = document.querySelector("#rate3");
   rate3.click();
   rate3.nextElementSibling.click();
})