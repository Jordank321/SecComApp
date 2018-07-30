import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './RootReducer';

export default function configureStore(){
    return createStore(
        RootReducer,
        compose(
            applyMiddleware(thunkMiddleware),
            window['devToolsExtension'] ? window['devToolsExtension']() : (f) => f)
    );
}