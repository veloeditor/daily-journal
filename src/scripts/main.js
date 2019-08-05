import entryMethods from "./entryComponent.js";
import dataMethods from "./data.js";
import renderEntry from "./entriesDOM.js";

dataMethods.getAPIData().then(journals => {
    for (const journal of journals) {
        const entryHTML = entryMethods.makeJournalEntryComponent(journal.date, journal.concepts, journal.entry, journal.mood);
        renderEntry(entryHTML)
    }
})

const submitEntry = document.querySelector(".submit_button")
const journalDateField = document.querySelector("#journalDate")
const conceptsCoveredField = document.querySelector("#conceptsCovered")
const moodSelect = document.querySelector("#mood_select")
const journalEntryField = document.querySelector("#journalEntry")
const maxLength = document.querySelector("#journalEntry").maxLength;

submitEntry.addEventListener("click", event => {
    
        const dateValue = journalDateField.value
        const conceptsValue = conceptsCoveredField.value
        const entryValue = journalEntryField.value
            if (entryValue.length <= 300) {
    
            } else {
                return alert("Please limit the number of characters to under 300")
            }
        const moodValue = moodSelect.value
        
        //use values from input fields to create the entry:

        const newJournalEntry = entryMethods.journalEntryObject(dateValue, conceptsValue, entryValue, moodValue)

        dataMethods.saveJournalEntry(newJournalEntry)
            .then(() => {
                dataMethods.getAPIData().then(journals => {
                    for (const journal of journals) {
                        const entryHTML = entryMethods.makeJournalEntryComponent(journal.date, journal.concepts, journal.entry, journal.mood);
                        renderEntry(entryHTML)
                    }
                })
            })
            journalDateField.value = ""
            conceptsCoveredField.value = ""
            journalEntryField.value = ""
})

// const clearButton = document.querySelector(".clearButton")
// clearButton.addEventListener("click", () => {
//     journalDateField.value = ""
//     conceptsCoveredField.value = ""
//     journalEntryField.value = ""
            
// })