import { createStore, combineReducers } from 'redux';
import shoesShopReducer from './reducers/ShoesShopReducer';

// Khởi tạo root reducer (quản lý các reducers)
const rootReducer = combineReducers({
  // key: value shoesShopReducer là reducer, vừa cung cấp state vừa xử lý đưa ra state mới
  shoesShopReducer, // shoesShopReducer: shoesShopReducer
});

// Khởi tạo store (quản lý root reducer)
const store = createStore(
  rootReducer,
  // Setup redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
