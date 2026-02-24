function changeText() {
    var paragraph = document.getElementById("demo");
    paragraph.innerHTML = "You clicked the button! JavaScript changed this text.";
    paragraph.style.color = "red";
    paragraph.style.borderColor = "red";
}

 function userName(name) {
    
    name = prompt("What's your username?");

    if (name !== null && name !== "") {
        console.log("Hello, " + name + "!");
    } else {
        console.log("User canceled or didn't enter a name.");
    }

 }

 // Function to make a round number from a input
 function roundNumber(number) {
// Create a input in the screen and storege the answer on 'number' variable
    var number = prompt("Enter a number");
// Pickup the answer which is a string and convert to a number using de 'Number' function
    var roundNumberValue = Number(number);
//Check if the answer is a number or a string
    if (Number.isNaN(roundNumberValue) === true) {
        alert("Please! Put a valid number!")
// If the answer is a string they will return 'NaN' and will not pass for the other function
    } else {
//Here they pickup your number and use the 'Math.round' to convert in a round number
        alert("Your round number is " + Math.round(roundNumberValue))
    }
    
 }

 function roundNumberById() {
  // Get the input element by its ID
  const numberInputField = document.getElementById('numberInput');

  // Get the value entered by the user
  const number = numberInputField.value;
  console.log(typeof number, number);
  
  var roundNumberValue = Number(number);

  console.log(typeof roundNumberValue, roundNumberValue);



  // Display the greeting (e.g., using an alert or updating the page)
  alert("Hello, " + number);
}