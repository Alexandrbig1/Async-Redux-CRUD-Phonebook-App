import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import FormSubmit from "./FormSubmit/FormSubmit";
import ContactsList from "./ContactsList/ContactsList";
import ThemeButton from "./ThemeButton/ThemeButton";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectIsLoading } from "../redux/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
  AppContainer,
  AppWrapper,
} from "./App.styled";
import {
  AppButton,
  AppButtonOpen,
  AppButtonClose,
} from "./AppButton/AppButton";
import { fetchContacts } from "../redux/operations";
// import Loader from "./Loader/Loader";

const theme = {
  light: {
    colors: {
      mainBgColor: "#e9ecef",
      textColor: "#050505",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#f8f9fa",
      containerColor: "#dee2e6",
      itemsEven: "#f8f9fa",
      itemsOdd: "#dee2e6",
      boxShadow: "rgba(255, 255, 255, 0.5)",
      switcherBg: "#ced4da",
      inputBg: "#f8f9fa",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#1E1E1E",
      textColor: "#fffaff",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#0b0014",
      containerColor: "#050505",
      itemsEven: "#212529",
      itemsOdd: "#343a40",
      boxShadow: "none",
      switcherBg: "#1E1E1E",
      inputBg: "#050505",
    },
  },
};

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isOpen, setIsOpen] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  const [isDarkTheme, setIsDarkTheme] = useState(
    contacts.length === 0 ? false : true
  );

  useEffect(() => {
    // Dispatch fetchContacts thunk
    try {
      dispatch(fetchContacts())
        .unwrap()
        .catch((error) => {
          console.error("Error fetching contacts:", error);
        });
    } catch (error) {}
  }, [dispatch]);

  useEffect(() => {
    // Set isOpen once the data is available
    setIsOpen(contacts.length > 0);
  }, [contacts]);

  // useEffect(() => {
  //   // Dispatch fetchContacts thunk

  //   try {
  //     dispatch(fetchContacts())
  //       .unwrap()
  //       .catch((error) => {
  //         console.error("Error fetching contacts:", error);
  //       });
  //   } catch (error) {
  //   } finally {
  //     setIsOpen(contacts.length > 0 ? true : false);
  //   }
  // }, []);

  // const contacts = useSelector(selectContacts);
  // const [isOpen, setIsOpen] = useState(contacts.length === 0 ? false : true);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <AppContainer>
        <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <AppWrapper open={isOpen}>
          <AppButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AppButtonClose /> : <AppButtonOpen />}
          </AppButton>
          <AppDiv>
            {isOpen && (
              <>
                <AppTitleH1>Phonebook</AppTitleH1>
                <FormSubmit />
                {contacts.length !== 0 && (
                  <AppContactsDiv>
                    <AppTitleH2>Contacts</AppTitleH2>
                    <Filter />
                    <ContactsList />
                  </AppContactsDiv>
                )}
              </>
            )}
          </AppDiv>
        </AppWrapper>
        {/* {isLoading && <Loader />} */}
      </AppContainer>
      <ToastContainer />
    </ThemeProvider>
  );
}
