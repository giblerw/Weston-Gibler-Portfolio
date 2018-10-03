// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { render } from "react-dom";
// import "styles/_global-styles";

import App from './App';

render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
