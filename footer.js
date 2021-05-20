const connect = document.querySelector('#connect');
const navbar = document.querySelector('#navigation');

loadAnimation();
loadConnect();
loadNavBar();

function loadNavBar() {
    navbar.innerHTML = `
    <div class="container-fluid">

    <a class="navbar-brand" href="./index.html">Allen Liu</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" id="navbar-item" href="./index.html#about" onclick="clickAbout();">About</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" id="navbar-item" href="./index.html#experience" onclick="clickExperience();">Experience</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" id="navbar-item" href="./index.html#skills" onclick="clickSkills();">Skills</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" id="navbar-item" href="./index.html#projects" onclick="clickProjects();">Projects</a>
            </li>
        </ul>
    </div>
    </div>`;
    analytics.identify();
    analytics.page("Home");
}

function loadConnect() {
    connect.innerHTML = `
    <div class="container-fluid connect-padding" data-aos="fade-up">
    <div class="row">
        <div class="col-12 text-center">
            <h2 class="section-title-w">Let's Connect!</h2>
        </div>
    </div>

    <div class="row mt-4 justify-content-center">
        <div class="col-xs-12 col-m-4 social">
            <a href="mailto:a268liu@uwaterloo.ca"><button type="button" class="btn" onclick="clickEmail();">
                <i class="far fa-envelope fa-2x" id="icons_white"></i>   
            </button></a>
        </div>
        <div class="col-xs-12 col-m-4 social">
            <a href="https://www.linkedin.com/in/allenliu02/" target="_blank"><button type="button" class="btn" onclick="clickLinkedin()">
                <i class="fab fa-linkedin-in fa-2x" id="icons_white"></i>   
            </button></a>
        </div>
        <div class="col-xs-12 col-m-4 social">
            <a href="https://github.com/allenl2" target="_blank"><button type="button" class="btn" onclick="clickGithub()">
                <i class="fab fa-github fa-2x" id="icons_white"></i>   
            </button></a>
        </div>
    </div>
    </div>`;
}

function loadAnimation(){
    AOS.init(
        {
            duration:500
        }
    );
}

function clickAbout() {
    analytics.track("View About");
}

function clickExperience() {
    analytics.track("View Experience");
}

function clickSkills() {
    analytics.track("View Skills");
}

function clickProjects() {
    analytics.track("View Projects");
}

function clickEmail() {
    analytics.track("View External Email");
}

function clickLinkedin() {
    analytics.track("View External Linkedin");
}

function clickGithub() {
    analytics.track("View External Github");
}