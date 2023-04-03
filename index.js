const buttonLetters = ['w', 'a', 's', 'd', 'j', 'k', 'l'];


let total = document.querySelectorAll('.drum').length;


for (let i = 0; i < total; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    const buttonLetter = buttonLetters[i];
    playSound(buttonLetter);
  });
}

function playSound(letter) {
  const audio = new Audio(`sounds/${letter}.mp3`);
  audio.play();
}


document.addEventListener('keydown', function(event) {
    const keyLetter = event.key;
    if (buttonLetters.includes(keyLetter)) {
      playSound(keyLetter);
    }
  });
  
  function playSound(letter) {
    const audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
  }