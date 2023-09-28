const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const converterbtn = document.querySelector("#convertbtn");
const temptype = document.querySelector("#temptype");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

converterbtn.addEventListener("click", (e) => {
    e.preventDefault();
    converttocel();

    converterbtn.innerHTML = "CONVERTED!!"
})


function converttocel() {
    let inputValue = degree.value;
    if(temptype.value === "fahrenheit"){
        const fahtocel = (inputValue -32) * (5/9);
        celsiusField.innerHTML = `${fahtocel.toFixed(3)} deg 
        C`;
    }
    else if(temptype.value === "kelvin"){
        const keltocel = inputValue - 273.15;
        celsiusField.innerHTML = `${keltocel.toFixed(3)} deg
        C`;
    }
}