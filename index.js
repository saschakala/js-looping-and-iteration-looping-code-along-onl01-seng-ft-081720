// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
const event = "surprise"

function writeCards(names, event) {
    let birthday =[];
    for (let i= 0; i < names.length; i++) {
    birthday[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return birthday;
  }

  function countDown(number) {
        while (number > -1) {
            console.log(number--)
        }
  }
