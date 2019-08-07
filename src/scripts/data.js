//creating an API array to hold the function that fetches, saves the journal entry and future add-ons like deleting, sorting .etc.

const API = {
  getAPIData() {
      return fetch("http://localhost:8088/journalEntries?_sort=id&_order=desc")
        .then(data => data.json())
      },
  saveJournalEntry(journalEntry)  {
    // Use fetch with POST method to submit entries to JSON
    return fetch("http://localhost:8088/journalEntries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntry)
    });
  },
  filterJournalEntries(moodSearchBtn) {
    return fetch(`http://localhost:8088/journalEntries?mood=${moodSearchBtn}`)
    .then(entries => entries.json())
  },

  deleteJournalEntry(deleteBtnId) {
    return fetch(`http://localhost:8088/journalEntries/${deleteBtnId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}









export default API