import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../Redux/Contacts/contact-slice';
import { getAllContacts } from '../../Redux/Contacts/contact-selectors';

export default function Form () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const formSumbit = e => {
    e.preventDefault();
    const nameToAdd = name;
    const addCheck = contacts?.find(({ name }) => name.includes(nameToAdd));
    if (!addCheck) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${nameToAdd} is already in contacts`);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={formSumbit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => {
            setName(e.target.value);
          }}
          required
        />
      </label>
      <label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={e => {
            setNumber(e.target.value);
          }}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

Form.propTypes = { onSubmit: PropTypes.func };
