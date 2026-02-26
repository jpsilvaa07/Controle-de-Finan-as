const Transactions = {
  all: Storage.get(),

  add(transaction) {
    this.all.push(transaction);
    App.reload();
  },

  remove(index) {
    this.all.splice(index, 1);
    App.reload();
  },

  incomes() {
    return this.all
      .filter(t => t.type === "income")
      .reduce((acc, t) => acc + Number(t.amount), 0);
  },

  expenses() {
    return this.all
      .filter(t => t.type === "expense")
      .reduce((acc, t) => acc + Number(t.amount), 0);
  },

  total() {
    return this.incomes() - this.expenses();
  }
};