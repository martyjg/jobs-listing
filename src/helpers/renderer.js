import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import { ServerStyleSheet } from 'styled-components';

export default (req, store) => {
    const sheet = new ServerStyleSheet();
    const content = renderToString(sheet.collectStyles(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    ));
    const styleTags = sheet.getStyleTags();

    return `
        <html>
            <head>
                ${styleTags}
                <style>
                    body {margin: 0;}
                    * {font-family: Arial, Helvetica, sans-serif; color: #171515;}
                    ul {list-style: none; padding-left: 0; margin: 0;}
                    a {color: #171515;text-decoration: none;}
                </style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
};
