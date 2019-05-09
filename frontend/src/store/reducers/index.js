import { combineReducers } from 'redux';

import modal from './modal';
import restaurants from './restaurant';

export default combineReducers({
    modal,
    restaurants,
});
