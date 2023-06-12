import filterReducer from '../Redux/Filter/filter-slice';
import contactReducer from '../Redux/Contacts/contact-slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;