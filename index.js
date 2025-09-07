console.log("JavaScript connected successfully ✅");

window.addEventListener("scroll" ,()=>{

    let section = document.querySelectorAll("section");
    let navLink = document.querySelectorAll(".nav-link");
    let current =" ";
    section.forEach(section =>{
        const sectionTop = section.offsetTop - 120;
        if(scrollY>=sectionTop)
        {
            current = section.getAttribute("id");

        }
    });
    navLink.forEach(li =>{
        li.classList.remove("active");
        if(li.getAttribute("href") === "#"+current)
        {
            li.classList.add("active");

        }

    });


});
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Always force scroll to top on load
    window.addEventListener("load", function() {
        window.scrollTo(0, 0);
    });