
getAPIData().then(journals => {
      for (const journal of journals) {
          const entryHTML = makeJournalEntryComponent(journal.date, journal.concepts, journal.entry, journal.mood);
          renderEntry(entryHTML)
      }
  })

