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
    // let i = Math.floor(Math.random() * 3)
    waterStop = false
    const url = "https://naluwellness.com/images/easyblog_articles/10/b2ap3_thumbnail_drink-more-water.jpg"
    // const url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHcYfhsA2FsUXInGWYzA8qQ6MhrRxuASfIEiaoi9HghcfdpbrICB5nsrNaP92XCzsdqQ&usqp=CAU"
    // const url3 = 'https://play-lh.googleusercontent.com/5-n1OwqG0S6XoJu856wWv95Yl9yf_rUY6SiLvsTMK-jTWFH5HHl3spMRTN9L4OjKnw'
    // const images = [url1, url2, url3]
    const windowFeatures = "left=100,top=100,width=320,height=320";
    
    setTimeout(() => {
        console.log(waterStop)
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
waterText.setAttribute("class", "zen")
waterText.innerHTML = "Water Reminder";
document.querySelector("body").append(waterText)


const waterOn = document.createElement('button')
waterOn.setAttribute("type", "button")
waterOn.textContent = "ON"
document.querySelector("body").append(waterOn)
waterOn.addEventListener('click', (e) => water(4000))


const waterOff = document.createElement('button');
waterOff.setAttribute("class", "off")
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
        postureStop = false
        const url = "Mario.png"
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
postureText.setAttribute("class", "zen")
postureText.innerHTML = "Posture Reminder";
document.querySelector("body").append(postureText)


const postureOn = document.createElement('button')
postureOn.setAttribute("type", "button")
postureOn.textContent = "ON"
document.querySelector("body").append(postureOn)
postureOn.addEventListener('click', (e) => posture(6000))

const postureOff = document.createElement('button');
postureOff.setAttribute("class", "off")
postureOff.textContent = "OFF"
postureOff.setAttribute("type", "button");
document.querySelector("body").append(postureOff)
postureOff.addEventListener('click', (e) => postureStopper())



//--------------------------------------------------------------------------//


let eyestrainStop = false

function eyestrainStopper () {
    eyestrainStop = true
}
    function eyestrain(delay) {
        eyestrainStop = false;
    const url = "https://images.ctfassets.net/u4vv676b8z52/38LJtKrZbwrI1l1ix1zsgs/fc5f81c77be02080d8bd20810e2c13ea/20-20-20-rule-660x500.gif"
    const windowFeatures = "left=100,top=100,width=320,height=320";
    setTimeout(() => {
        if (eyestrainStop === true) {
            return 'stop';
        }
        const handle = window.open(
            url,
            "eyestrain",
            windowFeatures,
          );
        eyestrain(delay)
    }, delay)
}

const eyestrainText = document.createElement('div');
eyestrainText.setAttribute("class", "zen")
eyestrainText.innerHTML = "Eyestrain Reminder";
document.querySelector("body").append(eyestrainText)


const eyestrainOn = document.createElement('button')
eyestrainOn.setAttribute("type", "button")
eyestrainOn.textContent = "ON"
document.querySelector("body").append(eyestrainOn)
eyestrainOn.addEventListener('click', (e) => eyestrain(8000))

const eyestrainOff = document.createElement('button');
eyestrainOff.setAttribute("class", "off")
eyestrainOff.textContent = "OFF"
eyestrainOff.setAttribute("type", "button");
document.querySelector("body").append(eyestrainOff)
eyestrainOff.addEventListener('click', (e) => eyestrainStopper())






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
