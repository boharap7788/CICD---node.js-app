const express = require('express');
const app = express();
const port = 3000;

// Define a route handler for the root URL
app.get('/', (req, res) => {
  // Adding HTML with animated text
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animated Node.js App</title>
      <style>
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animated-text {
          font-size: 24px;
          font-family: Arial, sans-serif;
          animation: fadeInOut 3s linear infinite;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Animated Node.js App!</h1>
        <p class="animated-text">This text is animated using CSS!</p>
      </div>
    </body>
    </html>
  `;
  res.send(htmlResponse);
});

// Start the server and listen on the defined port
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server; // Export the server instance
