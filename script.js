const playsound = function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const div = document.querySelector(`#${e.code[3]}`);
  if(!audio) return;
  div.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const removetransition = function(e){
  if(e.propertyName!=='transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.drum-beats');
keys.forEach(key => {
  key.addEventListener('transitionend',removetransition)
});

window.addEventListener("keydown",playsound);
