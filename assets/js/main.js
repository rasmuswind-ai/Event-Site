/*-------------------- EVENTS --------------------*/
let events = null;
fetch('/assets/json/events.json')
.then(response => response.json())
.then(data => {
    events = data;
    console.log(events);
    addDataToHTML();
})

let listEvents = document.querySelector('.listEvents');
function addDataToHTML(){
    events.forEach(event => {
        // Create new Element item
        let newEvent = document.createElement('a');
        newEvent.href = '/event.html?id=' + event.id;
        newEvent.classList.add('event-item');
        newEvent.innerHTML =  `
            <h2>${event.title}</h2>
            <h3>${event.location}</h3>
            <span>${event.description}</span>
            <img src="${event.image}">
        `

        // Add this element in listEvents class
        listEvents.appendChild(newEvent);
    });
}
