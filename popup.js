
console.log('This is a popup!');


let simple = (i) => {
    if (i > 3) {
        return "Good Job!"
    }
    alert("Hello?")
    i++
    setTimeout(() => {
        simple(i)
    }, 6000)
}

// simple(0)


//the settimeout delay should be a variable adn we can pass in user input frequencies
//add functions for other alerts: stretch, water, eyestrain, etc
    //maybe all in 1 function

function water(times, delay) {
    const quotes = ["DRINK WATER", "REMEMBER TO STAY HYDRATED", "ETC"]
    const url = "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg"
    if (times > 3) {
        return "hi"
    }
    let i = Math.floor(Math.random() * 3);
    alert(quotes[i]);
    // window.open(url, "_self", "popup")
    const windowFeatures = "left=100,top=100,width=320,height=320";
    const handle = window.open(
        "url",
        "_top",
        windowFeatures,
      );
    times++
    setTimeout(() => {
        water(times, delay)
    }, delay)
}
 
water(1, 2000)

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

    // <!-- <label for="water">Water Frequency</label>
    // <input type="text" id="water" name="water">
    // <button onclick="getUserInput()">Submit</button>

    // <script src="users.js"></script> -->
