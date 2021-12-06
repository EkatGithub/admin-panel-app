import { combineReducers } from 'redux';
import { ordersReducer as orders} from './orders';
import { searchReducer as search} from './search';

export const reducers = combineReducers({
    orders,
    search,
})