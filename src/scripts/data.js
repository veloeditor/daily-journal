const getAPIData = () => {
    return fetch("http://localhost:8088/journalEntries")
      .then(data => data.json())
    }