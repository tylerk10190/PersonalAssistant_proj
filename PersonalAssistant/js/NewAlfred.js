﻿
//const messageRecognition = new window.SpeechRecognition();
var min = 0;
var max = 4;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function alfredTalk(userInput)
{
    if (userInput == null) {

        var userInput = document.getElementsByName("userMessage")[0].value;
        document.getElementById("userResponse").innerHTML = userInput;
    }
    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("greetings")) {
            var AlfredGreetingsDictionary =
            {
                0: "Hello there. How can I help you today?",
                1: "Hi. It is my pleasure to assist you. Please let me know how I can help.",
                2: "Hello.",
                3: "Hi! I hope that you are well today. How can I assist you?",
                4: "Hello. I am here to assist you. Please let me know if there is something I can do for you."
            };
            let thisNumber = getRandomInt(min, max);
            document.getElementById("alfredResponse").innerHTML = AlfredGreetingsDictionary[thisNumber];
            saySomething(AlfredGreetingsDictionary[thisNumber]);
    }
    else if ((userInput.includes("create") || userInput.includes("add") || (userInput.includes("new") && (userInput.includes("event") || userInput.includes("meeting")))) && (userInput.includes("schedule") || userInput.includes("calendar"))) {

        document.getElementById("alfredResponse").innerHTML = "No problem. Just a moment while I get a pen.";
        saySomething("No problem. Just a moment while I get a pen.")
    }
 
}

    function saySomething(alfredResponse) {
        var message = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        //message.default = false;
        //message.voice = voices[5];
        message.voiceURI = "native";
        message.volume = 1;
        message.rate = 1;
        message.pitch = 0.8;
        message.text = alfredResponse;
        message.lang = 'en-US';
        speechSynthesis.speak(message);
    }

    //function hearSomething(userResponse) {
    //    messageRecognition.onresult = (event) => {
    //        var speechToText = event.results[0][0].transcript;
    //    }
    //    messageRecognition.start();
    //    messageRecognition.continuous = true;

    //}



    //(function ($) {
    //    function processForm(e) {
    //        var dict = {
    //            Title: this["title"].value,
    //            Director: this["director"].value,
    //            Genre: this["genre"].value
    //        };

    //        $.ajax({
    //            url: '',
    //            dataType: 'json',
    //            type: 'post',
    //            contentType: 'application/json',
    //            data: JSON.stringify(dict),
    //            success: function (data) {
    //                $("#my-table tr").remove()
    //                makeTable();
    //            },
    //            error: function (errorThrown) {
    //                console.log(errorThrown);
    //            }
    //        });
    //    }