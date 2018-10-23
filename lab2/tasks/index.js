/**
 *  Task1: Declare one of the following, and console.log() each one:
 *
 *  * Integer
 *  * Boolean
 *  * String
 *  * Date
 *  * undefined
 *  * Array of strings
 *  * Object with properties
 */

// TODO:

function task1() {
  let a = 1;
  let b = false
  let c = "abc"
  let d = new Date()
  let e = undefined
  let f = ["1", "2", "3"]
  let g = {
    one: 1,
    two: 2
  }
  let things = [a,b,c,d,e,f,g]
  for (var el in things) {
    console.log(things[el])
  }
}


/**
 *  Task2: Declare one of the following, and console.log() each one:
 *
 *  * Integer
 *  * Boolean
 *  * String
 *  * Date
 *  * undefined
 *  * Array of strings
 *  * Object with properties
 */

// TODO:

/**
 * Task3: Prompt the user for his name. Save it to a variable and console.log() it
 *
 * Hint: you have to use document.addEventListener('DOMContentLoaded') to call your function
 */

// TODO:

function task3() {
  document.addEventListener('DOMContentLoaded', ()=>{
    let name = prompt("Give me your name", "Press Cancel for anonimity")
    console.log(name)
  })
}


/**
 * Task4: Make a function that, when called, shows an alert to the user after 5 seconds
 */

// TODO:
function task4() {
  setTimeout(() => {
    alert("5 seconds passed")
  }, 5*1000);
}

/**
 * Task5: Make a function that, given a number X, generates an array of random numbers of length X
 */

// TODO:

function task5(x) {
  return Array.apply(null, Array(x)).map(function() {
    return Math.round(Math.random() * 100);
});
}

/**
 * Task6: Write a function that gets the maximum value from a random array generated with the previous function
 */

// TODO:

function task6(arr) {
  return Math.max(...arr)
}

/**
 * Task7: This function gets two strings and removes all occurences of the first one in the other. What is wrong with it ?
 */

function removeString(remove, mainString) {
  while (mainString.indexOf(remove) >= 0) {
    mainString = mainString.replace(remove, '')
  }
  return mainString
}


/**
 * Task8: How does this function work ?
 */

function wtf () {
  [][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]
  [([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])
  [!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])
  [+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+
  [+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])
  [+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+
  (!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+
  (!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])
  [!+[]+!+[]+[+[]]])()
}



// task1()
// task3()
// task4()
// console.log(task5(10))
// console.log(task6(task5(10)))
// console.log(removeString("a", "abaca"))
// console.log(wtf()) // Se genereaza literele pentru ceva asemanator cu [].filter(constructor(alert(1))); Se face prin obfuscarea codului, poate fi folosit ca cod malicios.