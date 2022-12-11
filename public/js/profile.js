var username = document.querySelector("div#username")

username.addEventListener("click", () =>{
    let userdisplay = document.getElementById("username-display")
    console.log(userdisplay)
    userdisplay.style.display = "none"
    let useredit = document.getElementById("username-edit")
    useredit.style.display = "block"
})

// username.addEventListener("mouseout", () =>{
//     let userdisplay = document.getElementById("username-display")
//     userdisplay.style.display = "block"
//     let useredit = document.getElementById("username-edit")
//     useredit.style.display = "none"
// })
