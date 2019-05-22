import { combineReducers } from 'redux';

import address from './address';
import modal from './modal';
import order from './order';
import restaurants from './restaurant';

export default combineReducers({
    address,
    modal,
    order,
    restaurants,
});
