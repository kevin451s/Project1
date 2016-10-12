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
$('input').on('click', function() {
  console.log(this.value)
  if(output == this.value) {
    console.log('You got it right!')
  } else {
    console.log('wrong')
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
// //Working Code
//   $('input').addEventListener('click', function() {
//     if($('#q1').class = 'active') {
//       $('#q1').addClass('hidden').removeClass('active')
//       $('#q2').removeClass('hidden').addClass('active')
//     }
//   })
// document.getElementById('q2').addEventListener('click', function() {
//   if($('#q2').class = 'active') {
//     $('#q2').addClass('hidden').removeClass('active')
//     $('#q3').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q3').addEventListener('click', function() {
//   if($('#q3').class = 'active') {
//     $('#q3').addClass('hidden').removeClass('active')
//     $('#q4').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q4').addEventListener('click', function() {
//   if($('#q4').class = 'active') {
//     $('#q4').addClass('hidden').removeClass('active')
//     $('#q5').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q5').addEventListener('click', function() {
//   if($('#q5').class = 'active') {
//     $('#q5').addClass('hidden').removeClass('active')
//     $('#q6').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q6').addEventListener('click', function() {
//   if($('#q6').class = 'active') {
//     $('#q6').addClass('hidden').removeClass('active')
//     $('#q7').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q7').addEventListener('click', function() {
//   if($('#q7').class = 'active') {
//     $('#q7').addClass('hidden').removeClass('active')
//     $('#q8').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q8').addEventListener('click', function() {
//   if($('#q8').class = 'active') {
//     $('#q8').addClass('hidden').removeClass('active')
//     $('#q9').removeClass('hidden').addClass('active')
//   }
// })
// document.getElementById('q9').addEventListener('click', function() {
//   if($('#q9').class = 'active') {
//     $('#q9').addClass('hidden').removeClass('active')
//     $('#q10').removeClass('hidden').addClass('active')
//   }
// })
