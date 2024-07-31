import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

// Функция для тестирования
async function test() {
  // Тестирование listContacts
  const contacts = await listContacts();
  console.log("Contacts:", contacts);

  // Тестирование addContact
  const newContact = await addContact(
    "John Doe",
    "john.doe@example.com",
    "123456789"
  );
  console.log("Added Contact:", newContact);

  // Тестирование getContactById
  const contact = await getContactById(newContact.id);
  console.log("Contact by ID:", contact);

  // Тестирование removeContact
  const removedContact = await removeContact(newContact.id);
  console.log("Removed Contact:", removedContact);

  // Повторное тестирование listContacts для проверки удаленного контакта
  const updatedContacts = await listContacts();
  console.log("Updated Contacts:", updatedContacts);
}

test();
