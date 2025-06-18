const submitFlagButton = document.getElementById("submit-flag-button");
const flagInput = document.getElementById("flag-input");
const submitMessage = document.getElementById("submit-message");

submitFlagButton.addEventListener("click", submitFlag);

const flagArray = [
    "flag{Base62_Decoded}",
    "flag{Bash_Debugging}",
    "flag{Brute_Force_Attack}"
]

function submitFlag() {
    const pageName = window.location.pathname.split("/").pop();
    const flagNumber = pageName.match(/\d+/);

    const correctFlag = flagArray[flagNumber-1];

    if (flagInput.value.toLowerCase() == correctFlag.toLowerCase()) {
        submitMessage.innerHTML = "The flag is correct!";
        submitMessage.style = "color: green;";
    } else {
        submitMessage.innerHTML = "The flag is incorrect.";
        submitMessage.style = "color: red;";
    }
}