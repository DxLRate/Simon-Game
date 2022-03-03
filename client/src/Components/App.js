
import React from 'react';
import { useState } from 'react';
import Header from "./Header";
import Element from "./Element";
import Box from "./box";
function App() {
    const buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var started = false;
    var level = 0;
    const [levelNum, setLevelNum] = useState("Press A Key to Start");
    const [gameOver, setGameOver] = useState(false);
    function keyPressHandler(event){
        console.log(event.key);
        if (!started) {
            setLevelNum("Level "+level);
            nextSequence();
            started = true;
        }
    }
    function clickHandler(key){
        var userChosenColour = key;
        userClickedPattern.push(userChosenColour);
      
        playSound(userChosenColour);
        animatePress(userChosenColour);
      
        checkAnswer(userClickedPattern.length-1);
    }
    function checkAnswer(currentLevel) {

        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
          if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
        } else {
          playSound("wrong");
          
          setGameOver(true);
          <Header
           title = "Game Over, Press Any Key to Restart"
          />
          setTimeout(function () {
            setGameOver(false);
          }, 200);
    
          startOver();
        }
    }
    function nextSequence() {
        userClickedPattern = [];
        level++;
        setLevelNum("Level "+level);
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        <Box 
         color = {randomChosenColour}
         fade = "show"
        />
        setTimeout(function(){
            <Box 
         color = {randomChosenColour}
         fade = "hide"
        />
        },1000)
        setTimeout(function(){
            <Box 
         color = {randomChosenColour}
         fade = "show"
        />
        },1000)
        
        playSound(randomChosenColour);
    }
      
    function animatePress(currentColor) {
        <Box 
         color = {currentColor}
         press="true"
        />
        setTimeout(function () {
            <Box 
         color = {currentColor}
         press="false"
        />
        },1000)
    }
      
    function playSound(name) {
        var audio = new Audio("/sounds/" + name + ".mp3");
        audio.play();
    }
      
    function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
    }
    const events = new KeyboardEvent('keypress', {
        key: 'enter',
      });
      
    return (
        <div onKeyPress={keyPressHandler} className={gameOver?"game-over":""}>
        <Header
          title = {levelNum}
        />
        {
      console.log(events)}
        <Element
         onClick = {clickHandler}
         />
         
        </div>
    );
}

export default App;