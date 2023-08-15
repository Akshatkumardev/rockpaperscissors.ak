let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

document.body

document.body.addEventListener('keydown', (event) => {
  if(event.key==='r'){
    playgame('rock')
  }else if(event.key ==='p'){
    playgame('paper')
  }else if(event.key === 's'){
    playgame('scissors')
  }
});

updatescore();

let isautoplaying = false;
let intervalid;

function autoplay(){
  if (!isautoplaying){

    intervalid = setInterval(function(){
      const playermove = pickcomputermove(); 
      playgame(playermove);
    },200);
    isautoplaying = true;
  }else{
    clearInterval(intervalid);
    isautoplaying = false;
  }
}

function playgame(playermove){
    pickcomputermove();
  
  let result = '';
  if (playermove === 'scissors'){
    if (computermove === 'rock') {
      result = 'You lose';
    }else if (computermove === 'paper') {
      result = 'You win';
    }else if (computermove === 'scissors') {
      result = 'Tie';
    }
  } else if (playermove === 'paper'){
    if (computermove === 'rock') {
      result = 'You win';
    }else if (computermove === 'paper') {
      result = 'Tie'
    }else if (computermove === 'scissors') {
      result = 'You lose';
    }
  } else if (playermove === 'rock'){
    if (computermove === 'rock') {
      result = 'Tie';
    }else if (computermove === 'paper') {
      result = 'You lose';
    }else if (computermove === 'scissors') {
      result = 'You win';
    }
  }

  if (result ==='You win'){
    score.wins += 1;
  }else if (result === 'You lose'){
    score.loses += 1;
  }else if (result ==='Tie'){
    score.ties +=1
  }


  localStorage.setItem('score', JSON.stringify(score));

  updatescore();

  document.querySelector('.js-result')
   .innerHTML = result;

  document.querySelector('.js-moves')
   .innerHTML =  `You
   <img class="moveimage" src = "images/${playermove}-emoji.png">
   <img class="moveimage" src = "images/${computermove}-emoji.png">
    Computer`;

  }

  function updatescore(){
    document.querySelector('.js-score')
     .innerHTML = `Wins : ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}`;
  }

  let computermove = '';
  function pickcomputermove(){
    const randomnumber = Math.random();

  if (randomnumber >= 0 && randomnumber < 1/3){
    computermove = 'rock';
  }else if (randomnumber >= 1/3 && randomnumber <2/3) {
    computermove = 'paper';
  }else if (randomnumber >2/3 && randomnumber <= 1){
    computermove = 'scissors';

  }

  return computermove;

}