const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Route to serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});