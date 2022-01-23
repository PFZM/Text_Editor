import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const jateDb = await openDB("jateDb", 1);
  const store = jateDb.transaction("jate", "readwrite").objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("data saved to the DB", result);
  return result;
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");
  const jateDb = await openDB("jateDb", 1);
  const store = jateDb.transaction("jate", "readonly").objectStore("jate");
  const request = store.getAll();
  const result = await request;
  if (result.length !== 0) {
    return result[0].value;
  }
  return;
};

initdb();
