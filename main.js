
var quiz_questions = ["What time is it in NYC?", "What time is it in Bejing?", "What time is it in LA?"];
var body = $('body')
var div = $('<div>')
var button = $('button')
var ul = $('<ul>')
var li = $('<li>')

$( document ).ready(function() {
  body.append(div) 
  div.append(ul) 

	button.click(function() {
		var question = quiz_questions[Math.floor(Math.random()*quiz_questions.length)];
			
			ul.append(li)
			li.append(question)

	})

    

});