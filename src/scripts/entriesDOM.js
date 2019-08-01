// //need to grab where we're going to place journal entries

const journalEntryComponent = document.querySelector(".entryLog")

const renderEntry = (htmlstring) => {
    journalEntryComponent.innerHTML += htmlstring
}