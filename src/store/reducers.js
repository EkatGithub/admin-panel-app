import { combineReducers } from 'redux';
import { ordersReducer as orders} from './orders';
import { searchReducer as search} from './search';
import {paginationReducer as pagination} from './pagination';
export const reducers = combineReducers({
    orders,
    search,
    pagination,
})
