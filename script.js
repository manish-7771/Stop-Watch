let clock = document.querySelector('h2'),
    minuts = document.querySelector('.minuts'),
    secands = document.querySelector('.secands'),
    milisecand = document.querySelector('.milisecand'),
    btn = document.querySelectorAll('button'),
    flagArea = document.querySelector('#flag-area'),
    tem, ms = 0, s = 0, min = 0, box, flage;

function start() {
    tem = setInterval(() => {
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
            secands.innerHTML = s;
        }
        if (s == 60) {
            s = 0;
            min++;
            minuts.innerHTML = min;
        }
        milisecand.innerHTML = ms;
        btn[0].setAttribute('disabled', '')
    }, 10)
    btn[1].innerHTML = 'Stop'
}

function stop() {
    if (btn[1].innerHTML == 'Stop') {
        btn[1].innerHTML = 'Play'
        clearInterval(tem);
    }
    else if (btn[1].innerHTML == 'Play') {
        btn[1].innerHTML = 'Stop'
        start()
    }
}

function flag() {
    flage = document.createElement('h3');
    box = document.querySelector('.check-box')
    flagArea.innerHTML = ''
    flage.innerHTML = clock.innerHTML;
    box.append(flage);
}

function reset() {
    secands.innerHTML = '00';
    minuts.innerHTML = '00';
    milisecand.innerHTML = '00';
    clearInterval(tem);
    btn[0].removeAttribute('disabled', '');
    btn[0].setAttribute('abled', '');
    flagArea.innerHTML = '';
    btn[1].innerHTML = 'Play';
    ms = 0, s = 0, min = 0;
    box.innerHTML = '<p id="flag-area">Flag Area</p>'
}