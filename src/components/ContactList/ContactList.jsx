import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../Redux/Contacts/contact-selectors';
import { getFilteredContacts } from '../../Redux/Filter/filter-selectors';
import { useEffect } from 'react';
import {
  fetchAllContacts,
  fetchDeleteContact,
} from '../../Redux/Contacts/contact-operations';

export const ContactList = () => {
  const isLoading = useSelector(store => store.contacts.isLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  
  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <>
    {isLoading && <p>Loading...</p>}
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
    </>

  );
};



