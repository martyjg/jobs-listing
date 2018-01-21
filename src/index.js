// import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    // Matches client request with our list of routes
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        const slug = req.path.split('/').slice(-1)[0];
        return route.loadData ? route.loadData(store, slug) : null;
    });
    
    // not really promises
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
