import { useSelector } from "react-redux";
import ContactItems from "../ContactItems/ContactItems";
import { Menu, Item } from "./ContactsList.styled";
import { selectContacts, selectFiltersContacts } from "../../redux/selectors";

export default function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFiltersContacts);

  function filteredByContact() {
    const filter = filteredContacts.toLowerCase();
    const filtered = contacts.filter((item) =>
      item.contact.toLowerCase().includes(filter)
    );
    return filtered;
  }

  const visibleContacts = filteredByContact();

  return (
    <Menu>
      {visibleContacts.length === 0 && filteredContacts.length > 0 ? (
        <Item className="contact-list">No matching contacts found</Item>
      ) : visibleContacts.length > 0 ? (
        visibleContacts.map(({ contact, phoneNumber, id }) => (
          <ContactItems
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
          />
        ))
      ) : contacts.length !== 0 ? (
        visibleContacts.map(({ contact, phoneNumber, id }) => (
          <ContactItems
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
          />
        ))
      ) : (
        ""
      )}
    </Menu>
  );
}
