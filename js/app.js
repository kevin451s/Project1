var questions = [
{
  question: "Why did Jenson Button have to run to the podium after winning the 2009 race at Monaco?",
  answer: "c",
  choices: ['He was disqualifed', 'His car caught fire.', ' He mistakenly parked his victorious Brawn in the pit lane instead of on the pit straight, as is traditional for the top three finishers in Monaco', 'His Team mate crashed and need to swap cars.']
},
{
  question: "Which legendary driver famously cheated death after crashing his Lancia into the harbour in 1955?",
  answer: "d",
  choices: ['Jenson Button', 'Sebastian Vettel', 'Kimi Raikkonen', 'Alberto Ascari']
},
{
  question: "How many times have Williams won in Monaco?",
  answer: "b",
  choices: ['10 times', '3 times', '6 times', '9 times']
},
{
  question: "Who celebrated his 2010 and 2012 victories at Monaco by backflipping into a swimming pool?",
  answer: "a",
  choices: ["Red Bull's Mark Webber", 'Mark Anthony', 'Tony Stark', 'Michael Schumacher']
},
{
  question: "Which world champion famously likened driving at Monaco to 'riding a bicycle around your living room'?",
  answer: "c",
  choices: ['Alberto Ascari', 'Juan Manuel Fargio', 'Nelson Piquet', 'Phil Hill']
},
{
  question: "At which corner did Michael Schumacher controversially 'park' his Ferrari during qualifying in 2006?",
  answer: "b",
  choices: ['turn 4', 'Rascasse', 'The Hammerhead', 'the corner']
},
{
  question: "The great Jim Clark took four pole positions in Monaco, but how many times did he win there?",
  answer: "a",
  choices: ['zero', 'one', 'three', 'five']
},
{
  question: "By how much did McLaren's Ayrton Senna out-qualify team mate Alain Prost to claim pole at Monaco in 1988 - 0.4s, 0.8s or 1.4s?",
  answer: "b",
  choices: ['0.4s', '1.4s', '0.8s', '1s']
},
{
  question: "What did McLaren fail to do for the only time in their history at Monaco in 1983?",
  answer: "a",
  choices: ['They failed to qualify either of their cars for the race', 'They did nothing', 'They didnt exist yet', 'No one knew about McLaren']
},
{
  question: "Graham Hill earned the nickname 'Mr Monaco' for his five wins in the Principality, but who did he score the majority of his victories there with - BRM or Lotus?",
  answer: "a",
  choices: ['BRM', 'Lotus', 'McLaren', 'Mercedes']
}
]
var results = 0

$('#current-question').text(questions[0].question)
console.log($('.answer-text'))
$('.answer-text').eq(0).text(questions[0].choices[0])
$('.answer-text').eq(1).text(questions[0].choices[1])
$('.answer-text').eq(2).text(questions[0].choices[2])
$('.answer-text').eq(3).text(questions[0].choices[3])

var num = 0
var currentQuestion = questions[num]
var output = currentQuestion.answer
questions.shift()

$('.input').on('click', function() {
  console.log(this.value)
  if(output == this.value) {
    // alert('You got it right!')
    $('#q1').addClass('right')
    setTimeout(function() {
      $('#q1').removeClass('right')
    }, 200)
    results++
  } else {
    $('#q1').addClass('wrong')
    setTimeout(function() {
      $('#q1').removeClass('wrong')
    }, 200)
  }

if(questions.length == 0) {
  alert("You got " + results + "/10")
} else {

    var index = Math.floor(Math.random() * questions.length)
    $('#current-question').text(questions[index].question)
    $('.answer-text').eq(0).text(questions[index].choices[0])
    $('.answer-text').eq(1).text(questions[index].choices[1])
    $('.answer-text').eq(2).text(questions[index].choices[2])
    $('.answer-text').eq(3).text(questions[index].choices[3])

    output = questions[index].answer
    questions.splice(index, 1)
  }
})

$('#startGame').on('click', function() {
  $('#intro').addClass('hidden')
  $('#gameboard').removeClass('hidden')
})

var questions2 = [
  {
    question: "Who was the first European rider to race a Japanese factory machine outside Japan?",
    answer: "a",
    choices: ['Liverpudlian Ray Fay on a Suzuki 250', 'Daniel Craig on a Ducati SuperSport', 'Ewan McGregor', 'Javier Bardem']
  },
  {
    question: "Who was the oldest rider to win a Moto GP in the 990 era?",
    answer: "b",
    choices: ['Allen Iverson', 'Troy Bayliss', 'Ken Bone', 'Michael Schumacher' ]
  },
  {
    question: "Moto GP has had races on all but one continent - which continent hasn't been visited?",
    answer: "c",
    choices: ['Europe', 'Asia', 'Antarctica', 'North America']
  },
  {
    question: "In 2004 Rossi won his first title on a Yamaha. How many podiums did the other Yamaha riders achieve that year?",
    answer: "d",
    choices: ['One', 'Two', 'Three', 'Zero']
  },
  {
    question: "GP has been a world championship since 1949. Only one track has hosted a GP every year the World Championship has existed. What track?",
    answer: "a",
    choices: ['Assen', 'ButtonWillow Raceway', 'Mazda Raceway Laguna Seca', 'Lime Rock Park']
  },
  {
    question: "In the entire history of GP only two riders have become champion without falling off for an entire season. Rossi is one - Who is the other rider?",
    answer: "c",
    choices: ['Alexander Wang', 'Givenchy', 'Sito Pons', 'Mr. Completely']
  },
  {
    question: "In Moto GP 990 2005 who was the only rider to score points in every race of the year?",
    answer: "a",
    choices: ['Collin Edwards', 'Bruce Wayne', 'Rza', 'Kiz Whalifa']
  },
  {
    question: "In the 990 era in Moto GP two riders have won on both a Honda and a Yamaha.",
    answer: "d",
    choices: ['The Stooges', 'Kanye and Kim', 'Shaq and Kobe', 'Rossi and Biagi']
  },
  {
    question: "What rider in what year started from pole in only his second 990 level race?",
    answer: "a",
    choices: ['Casey Stoner 2006', 'Will Smith 2002', 'Ashton Kutcher 2010', 'Mila Kunis 2007']
  },
  {
    question: "Only Geoff Duke, Val Rossi and one other rider won titles on different makes of motorcycles. Of the three only Rossi and the un-named rider won on two successive years. Who was the third rider?",
    answer: "d",
    choices: ['Geoff Duke', 'Val Rossi', 'Based God', 'Eddie Lawson']
  }
]
var results2 = 0


$('#current-question2').text(questions2[0].question)
console.log($('.answer-text2'))
$('.answer-text2').eq(0).text(questions2[0].choices[0])
$('.answer-text2').eq(1).text(questions2[0].choices[1])
$('.answer-text2').eq(2).text(questions2[0].choices[2])
$('.answer-text2').eq(3).text(questions2[0].choices[3])

var num2 = 0
var currentQuestion2 = questions2[num2]
var output2 = currentQuestion2.answer
questions2.shift()
$('.input2').on('click', function() {
  console.log(this.value)
  if(output2 == this.value) {
    //alert('You got it right!')
    $('#q2').addClass('right')
    setTimeout(function() {
      $('#q2').removeClass('right')
    }, 200)
    results2++
  } else {
    $('#q2').addClass('wrong')
    setTimeout(function() {
      $('#q2').removeClass('wrong')
    }, 200)
  }

  if(questions2.length == 0) {
    alert("You got this" + results2 + "/10")
  } else {

    var index2 = Math.floor(Math.random() * questions2.length)
    $('#current-question2').text(questions2[index2].question)
    $('.answer-text2').eq(0).text(questions2[index2].choices[0])
    $('.answer-text2').eq(1).text(questions2[index2].choices[1])
    $('.answer-text2').eq(2).text(questions2[index2].choices[2])
    $('.answer-text2').eq(3).text(questions2[index2].choices[3])

    output = questions2[index2].answer
    questions2.splice(index2, 1)
  }
})

/* Function to start game board 2 */
$('#startGame2').on('click', function() {
  $('#intro').addClass('hidden')
  $('#gameboard2').removeClass('hidden')
})
