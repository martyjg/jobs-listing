import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    // we do this to send the public bundle.js back to client after they have received the inital home HTML
    // we don't need to specify the path directory to the bundle js because of setting the static file before
    // the client gets the HTML and then sees the script tag and then retrieves that bundle.js
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
