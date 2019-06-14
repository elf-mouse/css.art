const DICES = [
  'rotateX(180deg)',
  'rotateY(90deg)',
  'rotateX(-90deg)',
  'rotateX(90deg)',
  'rotateY(-90deg)',
  'rotateY(0deg)'
];

const dice = document.querySelector('.dice');

const rollDice = () => {
  return Math.floor(Math.random() * 5);
};

document.getElementById('run').addEventListener('click', () => {
  dice.style.transform = '';
  dice.classList.add('run');

  setTimeout(() => {
    let x = rollDice();
    console.log(x);
    dice.style.transform = DICES[x];
    dice.classList.remove('run');
  }, 3000);
});
