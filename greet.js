var nameElem = document.querySelector('.nameInput');
var greetBtn = document.querySelector('.btnGreeting');
var messageElem = document.querySelector('.greeting-message');
var counterElem = document.querySelector('.counter');

function Greeting(storedData) {
  var name = "";
  var lang = "";
  var nameList = {};

  function setName(value) {
    if (value != "")
      name = value;
  }

  function setLanguage(value) {
    lang = value;
  }

  function namesMap() {
    if (storedData)
      nameList = storedData;

    if (nameList[name] == undefined)
      nameList[name] = 0;
  }

  function getName(){
    return name;
  }

  function getLanguage(){
    return lang;
  }

  function getNames(){
    return nameList;
  }

  function getNamesLength(){
    return Object.keys(nameList).length;
  }

  function sayGreeting() {
    if (lang === "isixhosa")
      return "Molo, " + name;
    else if (lang === "english")
      return "Hello, " + name;
    else if (lang === "afrikaans")
      return "More, " + name;
  }

  return {
    name:       setName,
    language:   setLanguage,
    names:      getNames,
    mapNames:   namesMap,
    counter:    getNamesLength,
    greet:      sayGreeting,
    //get name and languageRadio
    userName:   getName,
    userLang:       getLanguage
  }
}

let storedUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
var greeting = Greeting(storedUsers);

function processGreeting() {
  // get user inputs
  let checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
  if (checkedRadioBtn) {
    greeting.language(checkedRadioBtn.value);
  }
  greeting.name(nameElem.value.trim());
  //Update local map
  greeting.mapNames();
  //update local storage
  localStorage.setItem('users', JSON.stringify(greeting.names()));
  // update display element
  messageElem.innerHTML = greeting.greet();
  counterElem.innerHTML = "Greetings: " + greeting.counter();
}
greetBtn.addEventListener('click', processGreeting);
