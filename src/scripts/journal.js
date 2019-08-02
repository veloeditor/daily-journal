

// const submitEntry = document.querySelector(".submit_button")

// submitEntry.addEventListener("click", event => {
//     const journalDateField = document.querySelector("#journalDate")
//     const dateValue = journalDateField.value

//     const conceptsCoveredField = document.querySelector("#conceptsCovered")
//     const conceptsValue = conceptsCoveredField.value

//     const journalEntryField = document.querySelector("#journalEntry").value
//     const entryValue = journalEntryField.value

//     const moodSelect = document.querySelector("#mood_select").value
//     const moodValue = moodSelect.value

//need input validation here

// })




//Now you must use fetch to create your journal entry in the API. The default method is GET, so you've never had to specify and configuration options with your fetch statements before. However, with POST, you need to configure the request.

// const saveJournalEntry = (entryObject) => {
//     // Use `fetch` with the POST method to add your entry to your API
//     fetch("http://localhost:8088/journalEntries", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(entryObject)
//     });
// };
