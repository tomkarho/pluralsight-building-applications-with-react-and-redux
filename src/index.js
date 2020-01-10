import React from 'react';
import {render} from "react-dom";


function Hey() {
    return <p>Heya</p>
}

render(<Hey />, document.getElementById('app'));
