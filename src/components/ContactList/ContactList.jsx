import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'Redux/Contacts/contact-slice';
import { getAllContacts } from 'Redux/Contacts/contact-selectors';
import { getFilteredContacts } from 'Redux/Filter/filter-selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <ul>
      {filterContactsContacts?.map(({ name, id, number }) => {
        return (
          <li key={id} name={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};



