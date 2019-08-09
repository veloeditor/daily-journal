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

  updateFormFields(entryId) {
    const hiddenEntryId = document.querySelector("#entryId")
    //variables to hold DOM locations for form fields
    const journalDateField = document.querySelector("#journalDate")
    const conceptsCoveredField = document.querySelector("#conceptsCovered")
    const moodSelect = document.querySelector("#mood_select")
    const journalEntryField = document.querySelector("#journalEntry")
    return fetch(`http://localhost:8088/journalEntries/${deleteBtnId}`)
    .then(response => response.json())
    .then(entry => {
      hiddenEntryId.value = entry.id
      journalDateField.value = entry.date 
      conceptsCoveredField.value = entry.concept 
      journalEntryField.value = entry.entry 
      moodSelect.value = entry.mood 
    })
  },

  editJournalEntry(updatedObject, entryId) {
    return fetch(`http://localhost:8088/journalEntries/${deleteBtnId}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(recipe)
        })
            .then(response => response.json())
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