import { useDispatch, useSelector } from "react-redux";
import { FilterDiv, FilterInput, FilterLabel } from "./Filter.styled";
import { setFilter } from "../../redux/contactSlice";
import { getFiltersContacts } from "../../redux/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFiltersContacts);
  function changeFilter(e) {
    const searchContact = e.toLowerCase();
    dispatch(setFilter(searchContact));
  }

  return (
    <FilterDiv>
      <FilterLabel htmlFor="search">Find contacts by name:</FilterLabel>
      <FilterInput
        type="text"
        name="search"
        value={filteredContacts}
        placeholder="John Doe"
        onChange={(e) => {
          changeFilter(e.target.value);
        }}
      />
    </FilterDiv>
  );
}
