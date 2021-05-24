// FCC Challenge 5: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

const currUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
};

function checkCashRegister(price, cash, cid) {
    let changeDue = Math.round((cash - price) * 100);
    let changeDueCheck = changeDue;
    let change = [];
    let status = "";

    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while (changeDue >= currUnit[curr] && currSum > 0) {
        amount += currUnit[curr];
        changeDue -= currUnit[curr];
        currSum -= currUnit[curr];
        }
        if (amount !== 0) {
        change.push([curr, amount / 100]);
        }
    });

    if (changeDue > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (changeDue == 0 && changeDueCheck == cidSum) {
        status = "CLOSED";
        change = cid;
    } else {
        status = "OPEN";
    }
    return {"status": status, "change": change};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);