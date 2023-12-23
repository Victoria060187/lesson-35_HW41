import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactRemoved, selectAllContacts } from '../../store/contactsSlice';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

import './ContactsList.scss';

function ContactsList() {
  const dispatch = useDispatch();
  const [selectedContactId, setSelectedContactId] = useState(null);
  const contacts = useSelector(selectAllContacts);

  const handleDeleteClick = (contactId) => {
    setSelectedContactId(contactId);
  };

  const handleConfirmDelete = () => {
    dispatch(contactRemoved(selectedContactId));
    setSelectedContactId(null);
  };

  if (!contacts || contacts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contacts List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteClick(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {selectedContactId !== null && (
          <DeleteConfirmationModal
            isOpen={true}
            onCancel={() => setSelectedContactId(null)}
            onConfirm={handleConfirmDelete}
          >
            Are you sure you want to delete this contact?
          </DeleteConfirmationModal>
        )}
      </div>
    </div>
  );
}

export default ContactsList;