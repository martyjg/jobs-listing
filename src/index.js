import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { loadData } from './client/actions';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    // Matches client request with our list of routes
    // Populate server store
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return store.dispatch(loadData());
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

});

app.listen(3333, () => {
    console.log('listening on port 3333');
});
