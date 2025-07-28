const ctx = document.getElementById('currencyChart').getContext('2d');
let chart;
let labels = [];
let data = [];

async function fetchCurrencyRate() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/INR');
  const json = await response.json();
  const usdRate = json.rates.USD;
  const now = new Date();
  labels.push(now.toLocaleTimeString());
  data.push(usdRate);
  if (labels.length > 20) {
    labels.shift();
    data.shift();
  }
}

async function updateChart() {
  await fetchCurrencyRate();
  chart.data.labels = labels;
  chart.data.datasets[0].data = data;
  chart.update();
}

function initChart() {
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'INR to USD Exchange Rate',
        data: data,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointRadius: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Time' }},
        y: { title: { display: true, text: 'Rate (USD)' }}
      }
    }
  });
}

window.onload = async () => {
  initChart();
  await updateChart();
  setInterval(updateChart, 3000);
};
