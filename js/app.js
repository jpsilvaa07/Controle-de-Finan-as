const App = {
  init() {
    Transactions.all.forEach((transaction, index) => {
      this.addTransactionToDOM(transaction, index);
    });

    this.updateBalance();
    renderChart();
    Storage.set(Transactions.all);
  },

  reload() {
    document.getElementById("transactionList").innerHTML = "";
    this.init();
  },

  addTransactionToDOM(transaction, index) {
    const li = document.createElement("li");
    li.innerHTML = `
      ${transaction.description} - R$ ${transaction.amount}
      <button onclick="Transactions.remove(${index})">X</button>
    `;
    li.style.opacity = "0";
    document.getElementById("transactionList").appendChild(li);
    setTimeout(() => {
    li.style.transition = "opacity 0.3s ease";
    li.style.opacity = "1";
  }, 50);
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerText =
      "R$ " + Transactions.incomes().toFixed(2);

    document.getElementById("expenseDisplay").innerText =
      "R$ " + Transactions.expenses().toFixed(2);

    document.getElementById("totalDisplay").innerText =
      "R$ " + Transactions.total().toFixed(2);
  }
};

document.getElementById("transactionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const transaction = {
    description: document.getElementById("description").value,
    amount: document.getElementById("amount").value,
    type: document.getElementById("type").value
  };

  Transactions.add(transaction);
  this.reset();
});

App.init();