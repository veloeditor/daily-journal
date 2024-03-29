import makeJournalEntryComponent from "./entryComponent.js";
import API from "./data.js"
import renderEntry from "./entriesDOM.js";



const submitEntry = document.querySelector(".submit_button")
const journalDateField = document.querySelector("#journalDate")
const conceptsCoveredField = document.querySelector("#conceptsCovered")
const moodSelect = document.querySelector("#mood_select")
const journalEntryField = document.querySelector("#journalEntry")
const maxLength = document.querySelector("#journalEntry").maxLength;
const entryLogContainer = document.querySelector(".entryLog")

//get journal entries and render to the dom

const getAllJournalEntries = () => {
    entryLogContainer.innerHTML = ""
    API.getAPIData().then(journals => {
        for (const journal of journals) {

            const entryHTML = makeJournalEntryComponent(journal.id, journal.date, journal.concepts, journal.entry, journal.mood);
            renderEntry(entryHTML)
        }
    })
}

//invoke function:
getAllJournalEntries()


//Define a factory function whose responsibility is to generate an object that represents a journal entry.

const journalEntryObject = (date, concepts, entry, mood) => {
    return {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood
    }
}


//Here's the main code for posts

submitEntry.addEventListener("click", event => {
    const hiddenEntryID = document.querySelector("#entryId")
    const dateValue = journalDateField.value
    const conceptsValue = conceptsCoveredField.value
    const entryValue = journalEntryField.value
    const moodValue = moodSelect.value

    const newJournalEntry = journalEntryObject(dateValue, conceptsValue, entryValue, moodValue)
    // entryLogContainer.innerHTML = ""

    if (hiddenEntryID.value !== "") {
        API.editJournalEntry(newJournalEntry, hiddenEntryID.value)
            .then(getAllJournalEntries)

    } else {

        const notAllowedCharacters = /[\#\$\%\^\&\*\+\=\@\~\<\>\-\_]/;
        const regEx = notAllowedCharacters.test(journalEntryField.value)

        if (regEx === true) {
            alert("You have typed an invalid character")

        } else if (entryValue.length > 300) {
            alert("Please limit the number of characters to under 300")
        }

        //form validation -- testing against blank entries.
        else if (dateValue === "" || conceptsValue === "" || entryValue === "") {

            alert("Please fill out each field before submitting")
        } else {

            //use values from input fields to create the entry:

            API.saveJournalEntry(newJournalEntry)
                .then(getAllJournalEntries)

            //clear the fields 
            journalDateField.value = ""
            conceptsCoveredField.value = ""
            journalEntryField.value = ""
        }
    }

})

const deleteAllFields = (journalEntry) => {
    journalDateField.value = ""
    conceptsCoveredField.value = ""
    journalEntryField.value = ""
}

//Here is the code for deleting/editing entries:

// const entryLogContainer = document.querySelector(".entryLog")

entryLogContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("delete_Entry")) {
        const deleteBtnID = event.target.id.split("--")[1]
        API.deleteJournalEntry(deleteBtnID)
            .then(getAllJournalEntries)
    }
    if (event.target.id.startsWith("edit_Entry")) {
        const entryId = event.target.id.split("--")[1]
        API.updateFormFields(entryId)
            .then(getAllJournalEntries)

    }

})


//Here is the code for sorting entries by mood

const radioButton = document.getElementsByName("moods")
radioButton.forEach(button => {
    button.addEventListener("click", event => {
        const mood = event.target.value;
        let filteredMood = ""
        API.filterJournalEntries(mood).then(filteredData => {
            filteredData.forEach(moodObj => {
                filteredMood += makeJournalEntryComponent(moodObj.id, moodObj.date, moodObj.concepts, moodObj.entry, moodObj.mood);
            })
            entryLogContainer.innerHTML = filteredMood
        })
    })
})