
window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';

    var minute = 0;
    var sec = 59;
    const timer = setInterval(function() {
      document.getElementById("time").innerHTML = 0 + ":" + sec;
      sec--;

      if (sec == 00) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "1.00";
        calculateScore();
      }
    }, 1000);

  });



  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1,
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the only continent with land in all four hemispheres?',
      o: ['Africa', 'Australia', 'Asia', 'Europe'],
      a: 0,
    },
    {
      q: 'What is the capital of Ireland?',
      o: ['Limerick', 'Belfast', 'Derry', 'Dublin'],
      a: 3,
    }
  ];



  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {

    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor= 'green';
        }

        if (radioElement.checked && quizItem.o[i] == quizItem.o[quizItem.a]) {
            score++;
        }
      }
    });
    console.log(score);
    const scoreElement = document.querySelector('#score');
    scoreElement.innerHTML = "Your score is "+score;
  };

  const submit = document.querySelector('#btnSubmit');
  submit.addEventListener('click', calculateScore);
  // call the displayQuiz function
  displayQuiz();
  const reset = document.querySelector('#btnReset');
  reset.addEventListener('click', function (){
    window.location.reload();
  });

});
