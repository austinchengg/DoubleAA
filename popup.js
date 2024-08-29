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
function water(times, delay) {
    const url = "https://naluwellness.com/images/easyblog_articles/10/b2ap3_thumbnail_drink-more-water.jpg"
    
    // TODO: Update this. How many times do we want program to loop?
    if (times > 3) {
        return "hi"
    }
    
    // TODO: Does this do anything?
    // window.open(url, "_self", "popup")
    const windowFeatures = "left=100,top=100,width=320,height=320";
    times++
    setTimeout(() => {
        const handle = window.open(
            url,
            "water",
            windowFeatures,
          );
        water(times, delay)
    }, delay)
}

// water(1, 4000)

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
    

    const waterButton = document.createElement('button')
    waterButton.setAttribute("onclick", water(1, 4000))
    document.querySelector("body").append(waterButton)
    
    // document.getElementById




    document.querySelector("waterFreq").append()
    function waterData() {
        let data = document.getElementById("water").value
        console.log(data)
    }
    
    // waterData()
