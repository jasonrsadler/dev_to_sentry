import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BodyAttribute } from 'react-body-attribute';

ReactDOM.render(
<BodyAttribute bodyID='PageBody'>
<Main />
</BodyAttribute>,
 document.getElementById('root'));
