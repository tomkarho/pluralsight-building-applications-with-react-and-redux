import React from 'react';
import {render} from "react-dom";

function Hey() {
    // This is compiled to React.createElement(...) calls
    return <p>Heya</p>
}

render(<Hey />, document.getElementById('app'));
