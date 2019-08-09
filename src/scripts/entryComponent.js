const entryContainer = document.querySelector(".entryLog")

const makeJournalEntryComponent = (id, date, concepts, entry, mood) => {
      // const journalHTMLRepresentation =
    // Create your own HTML structure for a journal entry
   return `
        <article class="entry entry--${id}">
        <header>
        <h2 class="date">${date}</h2>
        <h1 class="concepts">${concepts}</h1>
        </header>
        <section>${entry}</section>
        <br>
        <section class="mood">${mood}</section>
        <br>
        <button class="edit-button" id="edit_Entry--${id}">
            Edit Entry
        </button>
        <button class="delete-button" id="delete_Entry--${id}">
            Delete Entry
        </button>
    </article>
    `
}

export default makeJournalEntryComponent