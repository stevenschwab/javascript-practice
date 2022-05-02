// Write function below
const factorial = num => {
    let result = 1;
    for (let i = num; i > 1; i--) {
      result = result * i;
    }
    return result;
  }
  
  console.log(factorial(6));

// Write function below
const subLength = (word, char) => {
    const occurrences = [];
    let idx = word.indexOf(char);
    while (idx != -1) {
      occurrences.push(idx);
      idx = word.indexOf(char, idx + 1);
    };
    if (occurrences.length > 2 || occurrences.length < 2) {
      return 0;
    } else {
      return (occurrences[1] - occurrences[0]) + 1;
    }
  }

// Write function below
const groceries = anArray => {
    let newArray = [];
    if (anArray.length > 2) {
      let idx = 0;
      while (idx !== anArray.length -   1) {
      newArray.push(anArray[idx].item);
      idx++;
    };
    return newArray.join(', ') + ' and ' + anArray[idx].item;
    } else if (anArray.length === 2) {
      return anArray[0].item + ' and ' + anArray[1].item;
    } else {
      return `${anArray[0].item}`;
    }
  }
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
   
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  // returns 'Bread and Butter'
   
  console.log(groceries( [{item: 'Cheese Balls'}] ));
  // returns 'Cheese Balls'