//  // const journalHTMLRepresentation =
//     // Create your own HTML structure for a journal entry

const makeJournalEntryComponent = (date, concepts, entry, mood) => {
    // const journalHTMLRepresentation =
    // Create your own HTML structure for a journal entry
   return `
        <article class="entry">
        <header>
        <h2 class="date">${date}</h2>
        <h1 class="concepts">${concepts}</h1>
        </header>
        <section>${entry}</section>
        <br>
        <section class="mood">${mood}</section>

        <footer>
        </footer>
    </article>
    `
}