/**
 * Define a one-to-many dependency between objects so that when one object
 * changes state, all its dependents are notified and updated automatically.
 *
 * In JS world: It is a function, which will be called aft er another function.
 */

let observers = [];

function add(observer) {
  observers = [...observers, observer];
}

function notify(user) {
  observers.forEach((observer) => {
    observer(user);
  });
}

function addMoney(user, amount) {
  // eslint-disable-next-line no-param-reassign
  user.balance += amount;

  if (amount > 100) {
    notify(user);
  }
}

add((user) => console.log("Send to FBI:", user));
add((user) => console.log("Block user:", user));

const user = {
  name: "iamsasha1994",
  balance: 0,
};

addMoney(user, 200);
