let name = prompt("Enter your first name.")
let letters = prompt("Enter the state you live in (ie. NE or FL).")
let fahren = prompt("Enter the temperature in Fahrenheit today.")
let sentence = ["wear a warm coat, hat, scarf and gloves.", "Wear a warm coat, but you wont need a hat, scarf or gloves.", "Wear your warmest coat, a warm hat, a scarf, and warm gloves.", "Wear a warm coat, hat and gloves. Maybe a scarf too."]
if (fahren <= 32) {
console.log(`${name}, ${sentence[0]}`);
} else if (fahren >= 32 && fahren <= 50 && letters =='NE') {
  console.log(`${name}, ${sentence[1]}`);
} else if (fahren >= 32 && fahren <= 50 && letters == 'FL') {
  console.log(`${name}, ${sentence[2]}`);
} else if (fahren >= 50 && fahren <= 70) {
  console.log(`${name}, ${sentence[3]}`);
default:
  console.log(`${name}, have a nice day`)