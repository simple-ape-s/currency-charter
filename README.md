# Real-Time INR to USD Currency Chart

This is a simple web application that displays a live, updating line chart of the **INR to USD** exchange rate. It fetches real-time currency exchange data from a free public API and visualizes it using Chart.js in a modern, dark-themed interface.

## Features

- Real-time exchange rate updates every 3 seconds.
- Interactive line chart rendered using Chart.js.
- Clean, modern design with dark blue background and custom fonts.
- Simple setup using Visual Studio Code with Live Server.

## Getting Started

### Prerequisites

- Visual Studio Code installed.
- Live Server extension installed (recommended for live preview).

### Installation and Running

1. Clone this repository:

2. Open the project folder in Visual Studio Code:


3. Open `index.html` and start Live Server (right-click the file and select **Open with Live Server**).

4. View the live real-time INR to USD chart in your browser.

## How It Works

- The app fetches exchange rates from [ExchangeRate-API](https://www.exchangerate-api.com).
- It extracts the USD rate relative to INR.
- Chart.js updates the line chart dynamically to reflect the latest rates.

## File Overview

- `index.html`: Main page with canvas for the chart.
- `style.css`: Dark theme styling and fonts.
- `app.js`: JavaScript logic for fetching data and updating the chart.

## Customization

- To track different currency pairs, update the API endpoint in `app.js`.
- You can adjust update intervals by changing the timer delay in `app.js`.

## License

This project is open-source and free to use.

---

Feel free to contribute or raise issues if you need help or want to add features!


