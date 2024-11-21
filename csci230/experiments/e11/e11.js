if (localStorage.getItem("username")) {
    document.querySelector("#logInHeading").style.display = 'none'
    document.querySelector("#logOutHeading").style.display = 'flex'
}
else {
    document.querySelector("#logInHeading").style.display = 'flex'
    document.querySelector("#logOutHeading").style.display = 'none'
}


function logOut() {
    localStorage.clear()

    //Reload the page
    location.reload()
}