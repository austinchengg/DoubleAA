const interface = document.createElement('div')
interface.setAttribute("id", "waterFreq")
document.querySelector("body").append(interface)

interface.innerHTML = "Set Water Reminder"

// document.querySelector("waterFreq").append()
function waterData() {
    let data = document.getElementById("water").value
    console.log(data)

}