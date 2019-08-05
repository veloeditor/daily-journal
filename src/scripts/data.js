const getAPIData = () => {
    return fetch("http://localhost:8088/journalEntries")
      .then(data => data.json())
    }

const saveJournalEntry = (journalEntry) => {
  // Use fetch with POST method to submit entries to JSON
  return fetch("http://localhost:8088/journalEntries", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(journalEntry)
  });
};

export default {getAPIData, saveJournalEntry}