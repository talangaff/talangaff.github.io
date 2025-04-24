function updateSubmit() {

    location.href = "interests.html";

    link = `mailto:talangaff@gmail.com?subject=${firstName}%20${lastName}%20-%20${subject}&body=${body}`;
}

function openMail() {
    let form = document.getElementById("contactMe");

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let subject = document.getElementById("subject");
    let body = document.getElementById("body");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let link = encodeURI(`mailto:talangaff@gmail.com?subject=${firstName.value} ${lastName.value} - ${subject.value}&body=${body.value}`);

    location.href = link;
}