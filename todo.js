/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const todoList = () => {
  let all = [];
  //list = []
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt = [];
    for (var i = 0; i < todos.all.length; i++) {
      if (todos.all[i].dueDate == yesterday) {
        dt.push(todos.all[i]);
      }
    }
    return dt;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt = [];
    for (var i = 0; i < todos.all.length; i++) {
      if (todos.all[i].dueDate == today) {
        dt.push(todos.all[i]);
      }
    }
    return dt;
    //return dt;
    //console.log(todos.all)
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt = [];
    for (var i = 0; i < todos.all.length; i++) {
      if (todos.all[i].dueDate == tomorrow) {
        dt.push(todos.all[i]);
      }
    }
    return dt;
  };
  const toDisplayableList = (temp) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    // = Object.fromEntries(list)

    var s = "";
    for (var j = 0; j < temp.length; j++) {
      if (temp[j].dueDate == today) {
        if (temp[j].completed) {
          s = s + "[x] " + temp[j].title + "\n";
        } else {
          s = s + "[ ] " + temp[j].title + "\n";
        }
      } else if (temp[j].dueDate == yesterday) {
        s = s + "[ ] " + temp[j].title + " " + yesterday + "\n";
      } else {
        s = s + "[ ] " + temp[j].title + " " + tomorrow + "\n";
      }
    }
    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;


const { all,add, markAsComplete,overdue,dueToday,dueLater,toDisplayableList } = todoList();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
