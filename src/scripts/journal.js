

const journalEntryComponent = document.querySelector(".entryLog")

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

fetch("http://localhost:3000/journalEntries")
  .then(data => data.json())
  .then(journals => {
      for (const journal of journals) {
          journalEntryComponent.innerHTML += makeJournalEntryComponent(journal.date, journal.concepts, journal.entry, journal.mood);
      }
  })




// journalEntries.forEach(entry => {
//     const htmlRep = makeJournalEntryComponent(entry.date, entry.concepts, entry.entry, entry.mood)
//     journalEntryComponent.innerHTML += htmlRep
//   })

// makeJournalEntryComponent(journalEntries)






