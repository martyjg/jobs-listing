// renders our react app server side and returns a strings
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    // we do this to send the public bundle.js back to client after they have received the inital home HTML
    // we don't need to specify the path directory to the bundle js because of setting the static file before
    // the client gets the HTML and then sees the script tag and then retrieves that bundle.js
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
