import { Provider } from 'react-redux';
import store from '../Redux/store';

import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <p>Phonebook</p>
      <Form />
      <p>Contacts</p>
      <Filter />
      <ContactList />
    </Provider>
  );
};
 
export default App;