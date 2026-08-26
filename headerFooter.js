//Written and notated by Bradlee Logan
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function () {
    //inserts the following html into containers tagged header
    header.innerHTML = `
        <a class="name" href="/index.html">Bradlee Logan</a>
        <section class="header">
            <div>
                <span>Cinematographer</span>
                <span>Editor</span>
                <span>Game Designer</span>
                <!--<span>Drone Pilot</span>-->
            </div>
            <nav>
                <!--Once I have more work, this will be enabled
                <a href="/pages/work.html">Work</a>
                -->
                <a href="/pages/projects.html">Projects</a>
                <a href="/pages/about.html">About</a>
                <a href="/pages/contact.html">Contact</a>
            </nav>
        </section>
    `
    //inserts the following html into containers tagged footer
    footer.innerHTML = `
        <p>© 2026 Bradlee Logan</p>
    `
})