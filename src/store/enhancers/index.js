import {compose} from 'redux';

import chromeDevTools from './chromeDevTools';
import middleware from './middleware';

export default compose(
    middleware, 
    chromeDevTools
);