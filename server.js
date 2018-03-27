const express = require('express');
const app = express();
app.listen(5000, () => {
  console.log('servidor encendido');
});
app.use(express.static('public'));