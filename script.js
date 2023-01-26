console.log ("hello world from al.")

//  -------------------- Nav Links -------------------
    // -- Nav SFX --
    let homeNav = document.getElementById("home-nav")
    let aboutNav = document.getElementById("about-nav")
    let servicesNav = document.getElementById("services-nav")
    let portfolioNav = document.getElementById("portfolio-nav")
    let contactNav = document.getElementById("contact-nav")

        function navLinkSfx() {
            let navLinkSound = new Audio("./sfx/drip.mp3")
            navLinkSound.play()
        }

        homeNav.addEventListener("mouseover", navLinkSfx)
        aboutNav.addEventListener("mouseover", navLinkSfx)
        servicesNav.addEventListener("mouseover", navLinkSfx)
        portfolioNav.addEventListener("mouseover", navLinkSfx)
        contactNav.addEventListener("mouseover", navLinkSfx)

//  -------------------- Tab Links --------------------
    var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname) {
        for(tablink of tablinks) {
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }

         // -- Tab Links SFX --

            // -- Hover SFX -- 
        let skillsBtnSfx = document.getElementById("skills-btn");
        let experienceBtnSfx = document.getElementById("experience-btn");
        let educationBtnSfx = document.getElementById("education-btn");

            function tabLinkHoverSfx() {
                let tabLinkHoverSound = new Audio("./sfx/drip.mp3");
                tabLinkHoverSound.play()
            }

            skillsBtnSfx.addEventListener("mouseover", tabLinkHoverSfx);
            experienceBtnSfx.addEventListener("mouseover", tabLinkHoverSfx);
            educationBtnSfx.addEventListener("mouseover", tabLinkHoverSfx);

            // -- Click SFX --
        //     function tabLinkClickSfx() {
        //         let tabLinkClickSound = new Audio("./sfx/dripSmall.mp3");
        //         tabLinkClickSound.play()
        //     }

        // skillsBtnSfx.addEventListener("click", tabLinkClickSfx);
        // experienceBtnSfx.addEventListener("click", tabLinkClickSfx);
        // educationBtnSfx.addEventListener("click", tabLinkClickSfx);

        // -- Services SFX --

            // -- Hover SFX --
        let service1Sfx = document.getElementById("service1")
        let service2Sfx = document.getElementById("service2")
        let service3Sfx = document.getElementById("service3")
            
            function serviceHoverSfx() {
                let serviceHoverSound = new Audio("./sfx/drip.mp3")
                serviceHoverSound.play()
            }
   
            service1Sfx.addEventListener("mouseover", serviceHoverSfx)
            service2Sfx.addEventListener("mouseover", serviceHoverSfx)
            service3Sfx.addEventListener("mouseover", serviceHoverSfx)

        // -- Portfolio SFX --
        let work1Sfx = document.getElementById("work1")
        let work2Sfx = document.getElementById("work2")
        let work3Sfx = document.getElementById("work3")
        let seeMoreBtn = document.getElementById("seeMore-btn")

            function worksHoverSfx() {
                // let worksHoverSound = new Audio("./sfx/dropSingleDrip3.mp3")
                let worksHoverSound = new Audio("./sfx/drip.mp3")
                worksHoverSound.play()
            }

            work1Sfx.addEventListener("mouseover", worksHoverSfx)
            work2Sfx.addEventListener("mouseover", worksHoverSfx)
            work3Sfx.addEventListener("mouseover", worksHoverSfx)
            seeMoreBtn.addEventListener("click", worksHoverSfx)
        
        // -- Contact Me SFX --
        let contactEmail = document.getElementById("contact-email")
        let contactEmailIcon = document.getElementById("contact-email-icon")
        let contactNumber = document.getElementById("contact-number")
        let contactNumberIcon = document.getElementById("contact-number-icon")
        let fbIcon = document.getElementById("fb-icon")
        let liIcon = document.getElementById("li-icon")
        let googleIcon = document.getElementById("google-icon")
        let viberIcon = document.getElementById("viber-icon")
        let downloadCVBtn = document.getElementById("downloadCV-btn")
        let submitBtn = document.getElementById("submit-btn")
            
            function contactsHoverSfx() {
                let contactsHoverSound = new Audio("./sfx/drip.mp3")
                contactsHoverSound.play()
            }

            function sentSfx() {
                let submitButtonSound = new Audio("./sfx/sent.mp3")
                submitButtonSound.play()
            }

            contactEmail.addEventListener("mouseover", contactsHoverSfx)
            contactEmailIcon.addEventListener("mouseover", contactsHoverSfx)
            contactNumber.addEventListener("mouseover", contactsHoverSfx)
            contactNumberIcon.addEventListener("mouseover", contactsHoverSfx)
            fbIcon.addEventListener("mouseover", contactsHoverSfx)
            liIcon.addEventListener("mouseover", contactsHoverSfx)
            googleIcon.addEventListener("mouseover", contactsHoverSfx)
            viberIcon.addEventListener("mouseover", contactsHoverSfx)
            downloadCVBtn.addEventListener("click", contactsHoverSfx)
            submitBtn.addEventListener("click", sentSfx)


//  ----------------------- Side Menu ---------------------------
    var sidemenu = document.getElementById("sidemenu");

    function openMenu() {
        sidemenu.style.right = "0";
    }
    function closeMenu() {
        sidemenu.style.right = "-200px";
    }

    var sidemenu = document.getElementById("sidemenu");

    function openMenu() {
        sidemenu.style.right = "0";
    }
    function closeMenu() {
        sidemenu.style.right = "-200px";
    }

    // ---------------------------- Contact to google sheets ---------------------
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxZkSghIONc9niMgm6CSBiyKujfxnptgN5JERSz7rbHbHJbHZCQ1oQ8ugyEnWyCtCxPKQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            message = "Message sent! Thank you for contacting me. I will reply to your email as soon as I can."
            alert(message)
            // msg.innerHTML = "Thank you for contacting me. I will reply to your email as soon as I can."
            // setTimeout(function(){
            //     msg.innerHTML = ""
            // }, 8000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
