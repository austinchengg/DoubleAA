// ORIGINAL ENGINE - RIP
// let simple = (i) => {
//     if (i > 3) {
//         return "Good Job!"
//     }
//     alert("Hello?")
//     i++
//     setTimeout(() => {
//         simple(i)
//     }, 6000)
// }
// simple(0)

// TODO IDEAS
//the settimeout delay should be a variable adn we can pass in user input frequencies
//add functions for other alerts: stretch, water, eyestrain, etc
    //maybe all in 1 function

    // GUIDE: This initiates the Timed Water-Popup
let waterStop = false

function waterStopper () {
    waterStop = true
}
function water(delay) {
    const url = "https://naluwellness.com/images/easyblog_articles/10/b2ap3_thumbnail_drink-more-water.jpg"
    const windowFeatures = "left=100,top=100,width=320,height=320";
    setTimeout(() => {
        if (waterStop === true) {
            return 'stop';
        }
        const handle = window.open(
            url,
            "water",
            windowFeatures,
        );
        water(delay)
    }, delay)
}

const waterText = document.createElement('div');
waterText.innerHTML = "Water Reminder";
document.querySelector("body").append(waterText)


const waterOn = document.createElement('button')
waterOn.setAttribute("type", "button")
waterOn.textContent = "ON"
document.querySelector("body").append(waterOn)
waterOn.addEventListener('click', (e) => water(4000))


const waterOff = document.createElement('button');
waterOff.textContent = "OFF"
waterOff.setAttribute("type", "button");
document.querySelector("body").append(waterOff)
waterOff.addEventListener('click', (e) => waterStopper())

//--------------------------------------------------------------------------//


let postureStop = false

function postureStopper () {
    postureStop = true
}
    function posture(delay) {
    const url = "https://preview.redd.it/cbawmkzr9q731.jpg?width=640&crop=smart&auto=webp&s=77ea98a10b215df5ee15589bba353c4c482c42f4"
    const windowFeatures = "left=100,top=100,width=320,height=320";
    setTimeout(() => {
        if (postureStop === true) {
            return 'stop';
        }
        const handle = window.open(
            url,
            "posture",
            windowFeatures,
          );
        posture(delay)
    }, delay)
}

const postureText = document.createElement('div');
postureText.innerHTML = "Posture Reminder";
document.querySelector("body").append(postureText)


const postureOn = document.createElement('button')
postureOn.setAttribute("type", "button")
postureOn.textContent = "ON"
document.querySelector("body").append(postureOn)
postureOn.addEventListener('click', (e) => posture(2000))

const postureOff = document.createElement('button');
postureOff.textContent = "OFF"
postureOff.setAttribute("type", "button");
document.querySelector("body").append(postureOff)
postureOff.addEventListener('click', (e) => postureStopper())



//--------------------------------------------------------------------------//


let eyestrainStop = false

function eyestrainStopper () {
    eyestrainStop = true
}
    function posture(delay) {
    const url = "https://preview.redd.it/cbawmkzr9q731.jpg?width=640&crop=smart&auto=webp&s=77ea98a10b215df5ee15589bba353c4c482c42f4"
    const windowFeatures = "left=100,top=100,width=320,height=320";
    setTimeout(() => {
        if (postureStop === true) {
            return 'stop';
        }
        const handle = window.open(
            url,
            "posture",
            windowFeatures,
          );
        posture(delay)
    }, delay)
}

const postureText = document.createElement('div');
postureText.innerHTML = "Posture Reminder";
document.querySelector("body").append(postureText)


const postureOn = document.createElement('button')
postureOn.setAttribute("type", "button")
postureOn.textContent = "ON"
document.querySelector("body").append(postureOn)
postureOn.addEventListener('click', (e) => posture(2000))

const postureOff = document.createElement('button');
postureOff.textContent = "OFF"
postureOff.setAttribute("type", "button");
document.querySelector("body").append(postureOff)
postureOff.addEventListener('click', (e) => postureStopper())






// TODO LIST
//trying to give alerts for each different reminder
//at each alert we want to create a new tab and insert a random picture/gif related to that categroy 
//ie: water -> pic of drinking water
    //modal popups?
//to do: 
    //figure out how to popup images or at least how to continue timeoutfunction without exiting after invoking window.open
    //once we figure out water function, we can implement stretch, eye strain, etc reminder functions
        //run all of the functions on different delays


    //change logo
    //change popup text with info about the extension maybe?
    //style popup



//stretch: trying to implement a user interface where they can input the reminder frequency of each category
    //issue with this is security- can't execute script since it won't allow us to extract the user input

    // const interface = document.createElement('div')
    // interface.setAttribute("id", "waterFreq")
    // document.querySelector("body").append(interface)
    
    // interface.innerHTML = "Set Water Reminder"



    
    // document.getElementById

    // water(1, 4000)


    // document.querySelector("waterFreq").append()
    // function waterData() {
    //     let data = document.getElementById("water").value
    //     console.log(data)
    // }
    
    // waterData()
