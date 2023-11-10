export const selectContacts = (state) => state.contacts.contacts.items;

export const selectFiltersContacts = (state) => state.contacts.filter;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;
