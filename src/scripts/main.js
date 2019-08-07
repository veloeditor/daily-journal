import makeJournalEntryComponent from "./entryComponent.js";
import API from "./data.js"
import renderEntry from "./entriesDOM.js";



const submitEntry = document.querySelector(".submit_button")
const journalDateField = document.querySelector("#journalDate")
const conceptsCoveredField = document.querySelector("#conceptsCovered")
const moodSelect = document.querySelector("#mood_select")
const journalEntryField = document.querySelector("#journalEntry")
const maxLength = document.querySelector("#journalEntry").maxLength;

//get journal entries and render to the dom

const getAllJournalEntries = () => {
    API.getAPIData().then(journals => {
        for (const journal of journals) {
            const entryHTML = makeJournalEntryComponent(journal.id,journal.date, journal.concepts, journal.entry, journal.mood);
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


submitEntry.addEventListener("click", event => {
    
    const dateValue = journalDateField.value
    const conceptsValue = conceptsCoveredField.value
    const entryValue = journalEntryField.value
        if (entryValue.length <= 300) {

        } else {
            return alert("Please limit the number of characters to under 300")
        }
    const moodValue = moodSelect.value



        const newJournalEntry = journalEntryObject(dateValue, conceptsValue, entryValue, moodValue)
        
        if (dateValue !== "" || conceptsValue !== "" || entryValue !== "") {
            
        } else {
           return alert("Please fill out each field before submitting")
        }
        
        //use values from input fields to create the entry:

        

        API.saveJournalEntry(newJournalEntry)
            .then(() => {
                dataMethods.getAPIData().then(journals => {
                    for (const journal of journals) {
                        const entryHTML = makeJournalEntryComponent(journal.id, journal.date, journal.concepts, journal.entry, journal.mood);
                        renderEntry(entryHTML)
                    }
                })
            })

            //clear the fields 
            journalDateField.value = ""
            conceptsCoveredField.value = ""
            journalEntryField.value = ""
})


const entryLogContainer = document.querySelector(".entryLog")

entryLogContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("delete_Entry")) {
        const deleteBtnID = event.target.id.split("--")[1]
        API.deleteJournalEntry(deleteBtnID)
            .then(getAllJournalEntries)
    }
})






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

// const clearButton = document.querySelector(".clear_radios")
// const moodRadio = document.querySelectorAll("mood-radio")

// clearButton.addEventListener("click", event => {
//     moodRadio.forEach(mood => {
//         if (mood.checked === true) {
//            return mood.checked = false
//         }
//     })
// })