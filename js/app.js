// grab element with id of #roll-dice and listen
// for click event
// when click event occurs "call" the rollDice function
document.getElementById('roll-dice').onclick = rollDice

function rollDice () {
  // randomly generate number from 1 to 6 and store
  // values in variables (randomDie1 & randomDie2)
  const randomDie1 = generateRandomDie()
  const randomDie2 = generateRandomDie()

  // dynamically generate class names
  // that correspond to the random numbers
  const firstDieClass = `dice dice-${randomDie1}`
  const secondDieClass = `dice dice-${randomDie2}`

  console.log(`randomDie1: ${randomDie1}`)
  console.log(`randomDie2: ${randomDie2}`)

  console.log(`firstDieClass: ${firstDieClass}`)
  console.log(`secondDieClass: ${secondDieClass}`)

  updatePage(firstDieClass, secondDieClass)
}

// specify function only responsible for
// generating random numbers
function generateRandomDie () {
  return Math.floor(Math.random() * 6) + 1
}

// specify function only responsible for
// updating our page
function updatePage (firstClass, secondClass) {
  // dynamically apply new class names to the dom (html page)
  document.getElementById('first-die').className = firstClass
  document.getElementById('second-die').className = secondClass
}
