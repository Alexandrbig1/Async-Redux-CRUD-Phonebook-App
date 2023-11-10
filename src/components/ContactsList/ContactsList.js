import { useDispatch, useSelector } from "react-redux";
import ContactItems from "../ContactItems/ContactItems";
import { Menu, Item } from "./ContactsList.styled";
import {
  selectContacts,
  selectIsLoading,
  selectFiltersContacts,
} from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import Loader from "../Loader/Loader";

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFiltersContacts);

  useEffect(() => {
    // Dispatch fetchContacts thunk

    try {
      dispatch(fetchContacts())
        .unwrap()
        .catch((error) => {
          console.error("Error fetching contacts:", error);
        });
    } catch (error) {}
  }, []);

  function filteredByContact() {
    const filter = filteredContacts.toLowerCase();
    const filtered = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter)
    );
    return filtered;
  }

  const visibleContacts = filteredByContact();

  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts);

  // useEffect(() => {
  //   // Dispatch fetchContacts thunk
  //   dispatch(fetchContacts())
  //     .unwrap()
  //     .catch((error) => {
  //       console.error("Error fetching contacts:", error);
  //     });
  // }, [dispatch]);
  //

  //
  // const contacts = useSelector(selectContacts);
  // const filteredContacts = useSelector(selectFiltersContacts);

  // function filteredByContact() {
  //   const filter = filteredContacts.toLowerCase();
  //   const filtered = contacts.items.filter((item) =>
  //     item.contact.toLowerCase().includes(filter)
  //   );
  //   return filtered;
  // }
  // const visibleContacts = filteredByContact();
  // const visibleContacts = contacts.contacts.items;
  // const visibleContacts = contacts;

  return (
    <Menu>
      {isLoading ? (
        <Loader />
      ) : visibleContacts.length === 0 ? (
        // {visibleContacts.length === 0 && filteredContacts.length > 0 ? (
        <Item className="contact-list">No matching contacts found</Item>
      ) : visibleContacts.length > 0 ? (
        visibleContacts.map(({ name, phone, id }) => (
          <ContactItems key={id} id={id} contact={name} phoneNumber={phone} />
        ))
      ) : contacts.length !== 0 ? (
        visibleContacts.map(({ name, phone, id }) => (
          <ContactItems key={id} id={id} contact={name} phoneNumber={phone} />
        ))
      ) : (
        ""
      )}
      {/* {visibleContacts.length === 0 ? (
        // {visibleContacts.length === 0 && filteredContacts.length > 0 ? (
        <Item className="contact-list">No matching contacts found</Item>
      ) : visibleContacts.length > 0 ? (
        visibleContacts.map(({ name, phone, id }) => (
          <ContactItems key={id} id={id} contact={name} phoneNumber={phone} />
        ))
      ) : contacts.length !== 0 ? (
        visibleContacts.map(({ name, phone, id }) => (
          <ContactItems key={id} id={id} contact={name} phoneNumber={phone} />
        ))
      ) : (
        ""
      )} */}
    </Menu>
  );
}
// import { useSelector } from "react-redux";
// import ContactItems from "../ContactItems/ContactItems";
// import { Menu, Item } from "./ContactsList.styled";
// import { selectContacts, getFiltersContacts } from "../../redux/selectors";

// export default function ContactsList() {
//   const contacts = useSelector(selectContacts);
//   const filteredContacts = useSelector(getFiltersContacts);

//   function filteredByContact() {
//     const filter = filteredContacts.toLowerCase();
//     const filtered = contacts.filter((item) =>
//       item.contact.toLowerCase().includes(filter)
//     );
//     return filtered;
//   }

//   const visibleContacts = filteredByContact();

//   return (
//     <Menu>
//       {visibleContacts.length === 0 && filteredContacts.length > 0 ? (
//         <Item className="contact-list">No matching contacts found</Item>
//       ) : visibleContacts.length > 0 ? (
//         visibleContacts.map(({ contact, phoneNumber, id }) => (
//           <ContactItems
//             key={id}
//             id={id}
//             contact={contact}
//             phoneNumber={phoneNumber}
//           />
//         ))
//       ) : contacts.length !== 0 ? (
//         visibleContacts.map(({ contact, phoneNumber, id }) => (
//           <ContactItems
//             key={id}
//             id={id}
//             contact={contact}
//             phoneNumber={phoneNumber}
//           />
//         ))
//       ) : (
//         ""
//       )}
//     </Menu>
//   );
// }
