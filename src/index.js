const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.info(`Express server running on port ${port}`)
});
