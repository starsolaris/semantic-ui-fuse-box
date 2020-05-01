import React from "react";
import ReactDOM from "react-dom";
import {Button} from "semantic-ui-react";
import Some from "./Some";

import 'semantic-ui-less/semantic.less'

ReactDOM.render(
  <div>
    <Button primary>Primary</Button>
    <Some/>
  </div>,
  document.getElementById("root")
);
