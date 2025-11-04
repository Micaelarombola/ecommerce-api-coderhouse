const express = require('express');
const productsRouter = require('./src/routes/products.router');
const cartsRouter = require('./src/routes/carts.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/', (req, res) => res.send({ status: 'ok', message: 'ecommerce-api running' }));

const PORT = 8080;
app.listen(PORT, () => console.log(`✅ Server listening on http://localhost:${PORT}`));
