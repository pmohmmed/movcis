
// show Username on the page
const user_Name = document.querySelector(".profile_text_container >span")
user_Name.innerHTML = localStorage.getItem("user_name");




// show options for the admin

let adminAbilitie = document.querySelectorAll(".delete");
let togg = document.querySelector(".tuggel_container");
if (localStorage.getItem("user_name") == "admin") {

    for (let i = 0; i < adminAbilitie.length; i++) {

        adminAbilitie[i].className = "delete_button_admin delete"

    }

    togg.style.opacity = "1";

} else {

    user_Name.parentElement.style.marginRight = "-30px"

}



// lead to admin page
let admin_bar = document.querySelector(".nav_admin");
admin_bar.addEventListener("click", (e) => {
    e.preventDefault();
    if (localStorage.getItem("user_name") == "admin") {
        window.location.href = "adminPage.html";
    } else {
        let temp = confirm("You must log in as admin, do you want to leave this page")
        if (temp) {
            window.location.href = "log_in2.html";

        }

    }
})

// lead to admin page
let adminPage = document.querySelector(".fa-users-cog");
adminPage.addEventListener("click", () => {
    if (localStorage.getItem("user_name") == "admin") {
        window.location.href = "adminPage.html";
    } else {
        let temp = confirm("You must log in as admin, do you want to leave this page")
        if (temp) {
            window.location.href = "log_in2.html";

        }

    }
})

// lead to contact us page
let contactUs = document.querySelector(".fa-id-card");
contactUs.addEventListener("click", () => {
    window.location.href = "contact_page.html";
})


// arrows

const arrows = document.querySelectorAll(".fa-chevron-right");
const movieLists = document.querySelectorAll(".movie_list");


arrows.forEach((arrow, i) => {

    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 310); // minimum number of images that cover the page width
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {//  there is enough images cover the page width

            ; movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
                - 340}px)`;
        }
        else {  // no enough images to cover the page width

            movieLists[i].style.transform = `translateX(0)`; // back to start position
            clickCounter = 0

        }

    })
})
// console.log(Math.floor(window.innerWidth / 310));



//toggel -> Switch the page color
const ball = document.querySelector(".toggle_ball");
const items = document.querySelectorAll("section,nav,a.n_mood,aside.left_side,.left_menu_icon,.profile_text_container,.movie_list_title,.tuggel_container");
ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})




// delete items
if (localStorage.getItem("user_name") == "admin") {
    // let parent = document.querySelectorAll(".movie_list");
    let delete_b = document.querySelectorAll(".delete");
    delete_b.forEach((delet) => {
        delet.addEventListener("click", () => {
            let target_item = delet.parentElement;
            target_item.remove();
        })
    })
}

// console.log(window.innerWidth)