// Get references to DOM elements
const h1 = document.getElementById("firstheading");
const Firstbutton = document.getElementById("Firstbutton");
const Secondbutton  = document.getElementById("Secondbutton");
const input = document.getElementById("nameinput");
const greeting = document.getElementById("greeting");

Firstbutton.addEventListener("click",()=>{h1.textContent="Goodmorning"})
Secondbutton.addEventListener("click", () => {
  const name = input.value.trim(); // get typed name
  if (name) {
    greeting.textContent = `Hey ${name}, Hope your day goes well`;
    const img = document.createElement("img");
    img.src = "good morning buddy.gif"; // cute GIF
    img.style.width = "200px";
    img.style.display = "block";
  img.style.margin = "20px auto";


    // Append image to the greeting paragraph
    greeting.appendChild(img);

  } else {
    greeting.textContent = "Please enter your name first 😊";
  }
});

  

