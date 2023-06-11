import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'Redux/store';

import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <p>Phonebook</p>
      <Form />
      <p>Contacts</p>
      <Filter />
      <ContactList />
      </PersistGate>
    </Provider>
  );
};
 
export default App;