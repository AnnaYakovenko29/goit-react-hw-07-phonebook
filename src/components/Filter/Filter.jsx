import React from 'react';
import { filterContacts } from '../../Redux/Filter/filter-slice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = value => dispatch(filterContacts(value));

  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => handleChange(e.target.value)}
      />
    </label>
  );
};

