
const journalEntries = [

    {
        date: "08.12.2019",
     concepts: "Flexbox, gitHub, teamwork",
     entry: "This week we learned Flexbox, using gitHub wiht a team, built a celebrity tribute project with a team and started in to JavaScript with manipulating the DOM and intro to objects",
     mood: "Happy" 
    },

    {
        date: "08.12.2019",
        concepts: "Javascript arrays, functions",
        entry: "I have some confidence but I know I have a weakness of reading comprehension. I'm worried that this will cause me to fall behind. I need to slow down and fully read out what is being asked of me.",
        mood: "Apprehensive"  
    },

    {
        date: "08.15.2019",
        concepts: "JS objects",
        entry: "We just finished our 2nd day of JS and my brain hurts a bit. I was able to nail the first exercise which was the ChickenMonkey exercise. The additional exercises were harder for me to initial figure out, but began to sink in to learning tmeplate literals which are the way to go. I feel I'm grasping about 90% of things so far but feel uneasy about the coming ays",
        mood: "Apprehensive"  
    },

    {
        date: "08.16.2019",
        concepts: "JS functions and more objects",
        entry: "Struggled with today's exercises but figured out answers. I worked a lot with Bryan today to work through some issues. I have a slight sense of confidence with being able to figure out the first two sets of exercises on TryIt",
        mood: "Happy"  
    },
    {
        date: "08.17.2019",
        concepts: "Errant periods, htmlComponents",
        entry: "We learned about creating htmlComponents using Javascript and also I spent a freaking hour trying to figure out why an exercise wouldn't pass and the reason was because I placed a period at the end of the string that wasn't supposed to be there",
        mood: "Blah"  
    },
    {
        date: "08.18.2019",
        concepts: "More HTML Components, intro to json",
        entry: "Overall it was a good day. I was able to figure out how to get my Daily Journel html to appear in the DOM thanks to Steve. We also had a introduction to JSON and APIs. Supposedly the pothole of despair begins tomorrow!",
        mood: "Happy"  
    },
    {
        date: "08.19.2019",
        concepts: "Brief intro to CRUD/JSON",
        entry: "We started the day getting more introduction to json and Postman and then briefly learned how to fetch, parse and display data with javaScript. More to come Monday. Figured out the build a van exercise. In almost every case creating a variable is the answer to my issues",
        mood: "Happy"  
    },
    {
        date: "08.22.2019",
        concepts: "Group project - using JSON and pulling data from an API",
        entry: "We did a quick group project where we pulled data from an API and had to limit the amount of info we show. This was a curveball as we had only been taught so far how to show all of the data available in the API. We used indexOf to limit the number of items we pulled from the API. The other trick was figuring out how to have our checkboxes checked based on the boolean value that was pulled from the API. We created a function with an if/else statement that checked for true and then inserted that function in to the html component.",
        mood: "Happy"  
    },
    {
        date: "08.23.2019",
        concepts: "Chapter 12 - Handling Events",
        entry: "Today we worked on event handling in JavaScript and the exercises were pretty tough. I'm finding I'm able to get about 2/3rds of the way there but need to get help for that final 1/3rd to complete the task. I'm not upset about that fact. The subject is pretty complicated but I think I can get a grasp on it soon enough. I wouldn't say I ended the day happy, sort of in between...",
        mood: "Blah"  
    }
];

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

journalEntries.forEach(entry => {
    const htmlRep = makeJournalEntryComponent(entry.date, entry.concepts, entry.entry, entry.mood)
    journalEntryComponent.innerHTML += htmlRep
  })

// makeJournalEntryComponent(journalEntries)

console.log(journalEntries)




