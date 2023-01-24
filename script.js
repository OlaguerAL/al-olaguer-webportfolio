console.log ("hello world from al.")


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
