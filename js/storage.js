const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("devfinance:transactions")) || [];
  },

  set(transactions) {
    localStorage.setItem("devfinance:transactions", JSON.stringify(transactions));
  }
};