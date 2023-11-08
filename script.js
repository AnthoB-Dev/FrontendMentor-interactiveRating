const form = document.querySelector("#element");
const rateLabels = document.querySelectorAll(".rateLabel");
const submitBtn = document.querySelector("#button");

// Put the active class on the user's selected rating, removes it from the non selected
rateLabels.forEach((label) => {
   label.addEventListener("click", () => {
      const activeLabel = document.querySelector(".rateLabel.active");
      
      activeLabel ? activeLabel.classList.remove("active") : false;
      label.classList.add("active")
   });
});

// EL on submit of the form, prints an error if no rating is selected, else put some CSS on button
// and calls 2 functions after 500ms
form.addEventListener("submit", (e) => {
   e.preventDefault();
   let note = document.querySelector("input[name='rating']:checked");

   if(!note) {
      printError(1);

   } else {
      submitBtn.classList.toggle("activeBtn")
   
      setTimeout(() => {
         submitBtn.classList.toggle("activeBtn")
         removeForm();
         printThanks(note.value);
      }, 500);
   }
})

// Function to delete the form and it's child nodes to replace it by the "thanks" part
// it just loop on each of the form nodes and remove() them, then removing the form itself
const removeForm = function() {
   const formChildNodes = form.childNodes; 
   for (let i = formChildNodes.length - 1; i > 0 ; i--) {
      formChildNodes[i].remove();
   }
   form.remove();
}

// Function displaying an error based on an error code
const printError = function(errorCode) {
   let errorMsg = "Error : ";
   switch (errorCode) {
      case 1:
         errorMsg = errorMsg + "Please select a rating before submiting";
         break;
   }
   
   const divError = document.createElement("div");
   divError.className = "error";
   divError.innerText = errorMsg;

   // Prevents unlimited appends of the same div if one's currently displayed by checking if there is already one in the dom
   !document.querySelector(".error") ? form.append(divError) : false;
}

// Function displaying the "thanks" part. Creates needed html elements, filling them and adding them to the dom.
const printThanks = function(note) {
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