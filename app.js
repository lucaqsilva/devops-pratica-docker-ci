const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Erro Proposital' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
  });
}

module.exports = app;
