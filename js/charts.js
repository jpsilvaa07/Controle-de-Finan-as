let chart;

function renderChart() {
  const ctx = document.getElementById("financeChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Receitas", "Despesas"],
      datasets: [{
        data: [Transactions.incomes(), Transactions.expenses()],
        backgroundColor: ["#2ecc71", "#e74c3c"]
      }]
    }
  });
}