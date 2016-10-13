var questions = [
{
  question: "Why did Jenson Button have to run to the podium after winning the 2009 race at Monaco?",
  answer: "c",
  choices: ['CSS', 'a cool thing', ' He mistakenly parked his victorious Brawn in the pit lane instead of on the pit straight, as is traditional for the top three finishers in Monaco', 'fourth answer']
},
{
  question: "Which legendary driver famously cheated death after crashing his Lancia into the harbour in 1955?",
  answer: "d",
  choices: ['random', 'rando', 'cool', 'Alberto Ascari']
},
{
  question: "How many times have Williams won in Monaco - three, six or ten?",
  answer: "b",
  choices: ['rand', '3 times (1980, 1983, 2003)', 'opti', 'alkj']
},
{
  question: "Who celebrated his 2010 and 2012 victories at Monaco by backflipping into a swimming pool?",
  answer: "a",
  choices: ["Red Bull's Mark Webber", 'Mark Anthony', 'Tony Stark', 'Michael Schumacher']
},
{
  question: "Which world champion famously likened driving at Monaco to 'riding a bicycle around your living room'?",
  answer: "c",
  choices: ['Lil Uzi', 'Steve Jobs', 'Nelson Piquet', 'Bill Gates']
},
{
  question: "At which corner did Michael Schumacher controversially 'park' his Ferrari during qualifying in 2006?",
  answer: "b",
  choices: ['turn 4', 'Rascasse', 'tribute', 'the corner']
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
$('#current-question').text(questions[0].question)
console.log($('.answer-text'))
$('.answer-text').eq(0).text(questions[0].choices[0])
$('.answer-text').eq(1).text(questions[0].choices[1])
$('.answer-text').eq(2).text(questions[0].choices[2])
$('.answer-text').eq(3).text(questions[0].choices[3])

var num = 0
var currentQuestion = questions[num]
var output = currentQuestion.answer
$('.input').on('click', function() {
  console.log(this.value)
  if(output == this.value) {
    alert('You got it right!')
  } else {
    alert('wrong')
  }


  var index = Math.floor(Math.random() * questions.length)
  $('#current-question').text(questions[index].question)
  $('.answer-text').eq(0).text(questions[index].choices[0])
  $('.answer-text').eq(1).text(questions[index].choices[1])
  $('.answer-text').eq(2).text(questions[index].choices[2])
  $('.answer-text').eq(3).text(questions[index].choices[3])

  output = questions[index].answer
})

$('#startGame').on('click', function() {
  $('#intro').addClass('hidden')
  $('#gameboard').removeClass('hidden')
})

var questions2 = [
  {
    question: "Who was the first European rider to race a Japanese factory machine outside Japan? What year?",
    answer: "a",
    choices: ['Liverpudlian Ray Fay in 1960 on a Suzuki 250 at the IOM', 'Rand', 'asldfj', 'ajshdf']
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
    question: "GP has been a world championship since 1949. Only one track has hosted a GP every year the World Championship has existed. What track and where?",
    answer: "a",
    choices: ['Assen in Holland', 'ButtonWillow Raceway', 'Mazda Raceway Laguna Seca', 'Lime Rock Park']
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
$('#current-question2').text(questions2[0].question)
console.log($('.answer-text2'))
$('.answer-text2').eq(0).text(questions2[0].choices[0])
$('.answer-text2').eq(1).text(questions2[0].choices[1])
$('.answer-text2').eq(2).text(questions2[0].choices[2])
$('.answer-text2').eq(3).text(questions2[0].choices[3])

var num2 = 0
var currentQuestion2 = questions2[num2]
var output2 = currentQuestion2.answer
$('.input2').on('click', function() {
  console.log(this.value)
  if(output2 == this.value) {
    //alert('You got it right!')
    $('#q2').addClass('right')
    setTimeout(function() {
      $('#q2').removeClass('right')
    }, 200)
  } else {
    $('#q2').addClass('wrong')
    setTimeout(function() {
      $('#q2').removeClass('wrong')
    }, 200)
  }

  var index2 = Math.floor(Math.random() * questions.length)
  $('#current-question2').text(questions2[index2].question)
  $('.answer-text2').eq(0).text(questions2[index2].choices[0])
  $('.answer-text2').eq(1).text(questions2[index2].choices[1])
  $('.answer-text2').eq(2).text(questions2[index2].choices[2])
  $('.answer-text2').eq(3).text(questions2[index2].choices[3])

output = questions2[index2].answer
})

/* Function to start game board 2 */
$('#startGame2').on('click', function() {
  $('#intro').addClass('hidden')
  $('#gameboard2').removeClass('hidden')
})
