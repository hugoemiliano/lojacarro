var banners = ["img/civic.png", "img/corola.png", "img/focus.png"];
var bannerAtual = 0;
var timer = setInterval(trocaBanner, 2000);
var controle = '';



var pause = document.querySelector('.pause');
pause.onclick = function () {
    if (controle.className === 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    }
    return false;
};

var play = document.querySelector('.play');
    play.onclick = function () {  
        if (controle.className === 'play'){
            timer = setInterval(trocaBanner, 2000);
            controle.className = 'pause';
        }
        return false;
};
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 3;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}