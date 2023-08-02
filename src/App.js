import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // Pseudo code: If the word begins with a vowel, we want to add "way" to the end.

      // turn eachWord into lowercase
      let eachWordLC = eachWord.toLowerCase() 

      // if (eachWordLC[0] === "a" || eachWordLC[0] === "e" || eachWordLC[0] === "i" || eachWordLC[0] === "o" || eachWordLC[0] === "u") {
      //   eachWordLC = eachWordLC + "way"
      // }
      //#############################################################################################################################################
      // condition to check if first character of word has a vowel
      if (vowelsArray.includes(eachWordLC.charAt(0))){
        //executes if true: reassign and return eachWordLC to append "way"
        return eachWordLC = eachWordLC + "way"
          
      }
       
      // condition to check if first 2 characters === qu
      if(eachWordLC.substring(0, 2) === "qu" ){
        //executes if true: return a string after "qu" and append "quay"
        return eachWordLC = eachWordLC.slice(2) + "quay"

      }
      // if above conditions not met
      // set a flag for no vowels
      let hasVowel = false
      //iterates through each characters
      for (let i = 0; i < eachWordLC.length; i++) {
      //checks if each characters has a vowel
        if (vowelsArray.includes(eachWordLC[i])) {
          //flag is now true and break out of loop and move on to next block of code
          hasVowel = true
          break;
        }
      }
      //if word has no vowels AND there's a y
      if (!hasVowel && eachWordLC.includes("y")) {
        //find index of y
        let indexOfY = eachWordLC.indexOf("y")
        // add y to beginning of word up to y and append ay
        return eachWordLC = "y" + eachWordLC.substring(0, indexOfY) + "ay"
        
      }
      // if word has vowels (conditions checked and flagged to true at line 62 and 64)
      if (hasVowel) {
        // assign a first vowel index to 0 (doesn't matter what number since it will be changed)
        let firstVowelIndex = 0
        // iterates through each letter of the word
        for (let i = 0; i < eachWordLC.length; i++) {
          // condition to check location at i for vowel
          if (vowelsArray.includes(eachWordLC[i])) {
            // when vowel is found at index i, assign that index to firstVowelIndex and break out of for-loop
            firstVowelIndex = i
            break
          }
        }
        // return all characters starting at firstVowelIndex + all characters from first index up to firstVowelIndex + ay
        return eachWordLC.slice(firstVowelIndex) + eachWordLC.slice(0, firstVowelIndex) + "ay";
      }
      //################################################################################################################################################
      //Pseudo code: 
      // input "quit"
      // output: "itquay"
      // process: if starts with 'qu' move to end of word and 'ay'

      // if (eachWordLC.substring(0, 2) === "qu") {
      //   eachWordLC = eachWordLC.slice(2) + "quay"
      // }

      //psuedo code:
      // input: why, by, shy, spy
      // output: ywhay, ybay, yshay, yspay
      // process: if the vowel is 'y' we want to move the starting letter(s) to after the 'y' and add 'ay'
      // vowel checker (a, e, i, o, u) 
      // if none found then check for 'y'
      // move letters before 'y' to back
      // add 'ay' to end

      
      // if (!eachWordLC.includes("a") && !eachWordLC.includes("e") && !eachWordLC.includes("i") && !eachWordLC.includes("o") && !eachWordLC.includes("u") && eachWordLC.includes("y")) { 
      //   let indexOfY = eachWordLC.indexOf("y")
      //   console.log(indexOfY)
      //   eachWordLC = "y" + eachWordLC.substring(0, indexOfY) + "ay"
      // }

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWordLC
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Bao, Megan, and Graham!</footer>
    </div>
  )
}

export default App
