import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    next();
})

app.get('/', (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.sendFile(path.join(import.meta.dirname, '../frontend/dist/index.html'));
})


app.get('/:name', (req, res, next) => {
    const filename = req.params.name;

    res.set('Content-Type', 'text/javascript');
    res.status(200);
    res.sendFile(path.join(import.meta.dirname, `../frontend/dist/${filename}`));
})

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log('Press Ctrl+C to quit.');
});
