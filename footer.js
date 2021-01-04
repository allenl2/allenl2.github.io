const connect = document.querySelector('#connect');

loadAnimation();
loadConnect();

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
            <a href="mailto:a268liu@uwaterloo.ca"><button type="button" class="btn">
                <i class="far fa-envelope fa-2x" id="icons_white"></i>   
            </button></a>
        </div>
        <div class="col-xs-12 col-m-4 social">
            <a href="https://www.linkedin.com/in/allenliu02/" target="_blank"><button type="button" class="btn">
                <i class="fab fa-linkedin-in fa-2x" id="icons_white"></i>   
            </button></a>
        </div>
        <div class="col-xs-12 col-m-4 social">
            <a href="https://github.com/allenl2" target="_blank"><button type="button" class="btn">
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