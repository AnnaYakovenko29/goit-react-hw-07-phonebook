import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddContact } from '../../Redux/Contacts/contact-operations';

export default function Form () {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const formSumbit = e => {
    e.preventDefault();
    dispatch(fetchAddContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={e => {
            setPhone(e.target.value);
          }}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

