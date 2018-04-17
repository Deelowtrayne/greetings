var nameElem = document.querySelector('.nameInput');
var greetBtn = document.querySelector('.btnGreeting');
var clearBtn = document.querySelector('.btnClear');
var messageElem = document.querySelector('.greeting-message');
var counterElem = document.querySelector('.counterVal');

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

  function resetMap() {
    nameList = {};
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
    userLang:   getLanguage,
    reset:      resetMap
  }
}

let storedUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
var greeting = Greeting(storedUsers);
// ensure counter shows the right value onload
counterElem.innerHTML = Object.keys(storedUsers).length;

function processGreeting() {
  // get user inputs
  let checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");

  // update display element
  if (nameElem.value === "" || !checkedRadioBtn) {
    messageElem.innerHTML = "Insert a name and select language";
    messageElem.style.color = 'red';
  }
  else {
    greeting.language(checkedRadioBtn.value);
    greeting.name(nameElem.value.trim());
    greeting.mapNames();
    //update local storage
    localStorage.setItem('users', JSON.stringify(greeting.names()));

    messageElem.innerHTML = greeting.greet();
    counterElem.innerHTML = greeting.counter();
    messageElem.style.color = 'inherit';
    // Clear the name input
    nameElem.value = "";
  }
}

function clearData() {
  localStorage.clear();
  greeting.reset();
  messageElem.innerHTML = "Insert a name and select language";
  counterElem.innerHTML = greeting.counter();
}

// Event listeners
clearBtn.addEventListener('click', clearData);
greetBtn.addEventListener('click', processGreeting);
