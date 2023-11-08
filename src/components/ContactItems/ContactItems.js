import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import {
  Button,
  List,
  P,
  ContactIcon,
  ContactDelete,
} from "./ContactItems.styled";

export default function ContactItems({ contact, id, phoneNumber }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <List>
      <P>
        <ContactIcon />
        {contact}: {phoneNumber}
      </P>
      <Button onClick={() => handleDelete(id)}>
        <ContactDelete />
      </Button>
    </List>
  );
}
