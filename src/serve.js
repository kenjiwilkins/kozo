import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use('/my-app', express.static(path.join(__dirname, 'dist/vue-app')));

app.get('/my-app/*', (req, res) => {
  console.log(path.join(__dirname, 'dist/vue-app', 'index.html'))
  res.sendFile(path.join(__dirname, 'dist/vue-app', 'index.html'));
});

app.get("/", (req, res) => {
  res.send("Hello World");
}
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});