getAPIData().then(journals => {
    for (const journal of journals) {
        const entryHTML = makeJournalEntryComponent(journal.date, journal.concepts, journal.entry, journal.mood);
        renderEntry(entryHTML)
    }
})

const submitEntry = document.querySelector(".submit_button")
const journalDateField = document.querySelector("#journalDate")
const conceptsCoveredField = document.querySelector("#conceptsCovered")
const moodSelect = document.querySelector("#mood_select")
const journalEntryField = document.querySelector("#journalEntry")

submitEntry.addEventListener("click", event => {
    
            
            const dateValue = journalDateField.value

            
            const conceptsValue = conceptsCoveredField.value

            
            const entryValue = journalEntryField.value

            
            const moodValue = moodSelect.value

            //need input validation here -- STILL NEED TO DO

            //use values from input fields to create the entry:

            const newJournalEntry = journalEntryObject(dateValue, conceptsValue, entryValue, moodValue)

            saveJournalEntry(newJournalEntry)
                .then(() => {
                    getAPIData().then(journals => {
                        console.log('journals: ', journals);
                        for (const journal of journals) {
                            const entryHTML = makeJournalEntryComponent(journal.date, journal.concepts, journal.entry, journal.mood);
                            renderEntry(entryHTML)
                        }
                    })
                })
})

const clearButton = document.querySelector(".clearButton")
clearButton.addEventListener("click", () => {
    journalDateField.value = ""
    conceptsCoveredField.value = ""
    journalEntryField.value = ""

})