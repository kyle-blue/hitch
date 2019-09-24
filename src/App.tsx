import React from "react";
import ReactDom from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducer from "./reducers/index";
import "@babel/polyfill";

import "./scss/index_main.scss";


class App extends React.Component {
    private store;
    private storeEnhancers;


    constructor(props) {
        super(props);
        this.storeEnhancers = compose(
            applyMiddleware(thunk),
            // @ts-ignore //
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        );
        this.store = createStore(allReducer, this.storeEnhancers);
    }


    render(): React.ReactElement {
        return (
            <Provider store={this.store} />
        );
    }
}

ReactDom.render(<App />, document.getElementById("app"));
