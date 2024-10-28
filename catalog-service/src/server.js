const express = require('express')
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const app = express();
const routes = require('./routes');

app.use((req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
});

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`catalog service running on port ${PORT}`);
});
