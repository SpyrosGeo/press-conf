const nextButton = document.querySelector(".next-button");
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const mitsotakis = document.querySelector(".mitsotakis")
const samos = document.querySelector(".scream-sound")
// const uiLevel = document.querySelector(".ui-level")
// const uiMessage = document.querySelector(".ui-message")


const collisionCheck = (value) => {
  if (value === "maze-border") {
    alert("Mitsotakis closed the gates..:(");
  }
  if (value === "finish") {
      nextButton.style.opacity =1;
      nextButton.style.pointerEvents = 'all';
      levelOne.style.display ="none";
      levelOne.style.pointerEvents="none";
  }
  if (value==="end-game"){
      samos.play()
      mitsotakis.style.display='block'

  }
};
window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextButton.addEventListener('click',()=>{
    levelOne.style.display="none"
    levelTwo.style.display="block"
    nextButton.style.opacity = 0
    nextButton.style.pointerEvents ="none";
})