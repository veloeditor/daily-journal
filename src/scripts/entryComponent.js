const entryContainer = document.querySelector(".entryLog")
const happyFace = `<i class="far fa-smile"></i>`
const blahFace = `<i class="far fa-meh"></i>`
const sadFace = `<i class="far fa-frown"></i>`
const frustFace = `<i class="far fa-tired"></i>`

const makeJournalEntryComponent = (id, date, concepts, entry, mood) => {
    // if(mood === "Happy") {
    //     entryContainer.innerHTML += happyFace
    // } else if (mood === "Blah") {
    //     entryContainer.innerHTML += blahFace 
    // } else if (mood === "Frustrated") {
    //     entryContainer.innerHTML += frustFace
    // } else if (mood === "Sad"){
    //     entryContainer.innerHTML += sadFace
    // }
 
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
        <button class="delete-button" id="delete_Entry--${id}">
            Delete Entry
        </button>
    </article>
    `
}








export default makeJournalEntryComponent