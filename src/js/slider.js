let images = document.querySelectorAll('.slider img');
let prev = document.querySelector('.slider .wrap .prev');
let next = document.querySelector('.slider .wrap .next');
let circleItems = document.querySelector('.slider .wrap .navigation .circle-items');
let navigation;
let iter = 0;

if (images.length) {
    for (let i = 0; i < images.length; i++) {
        let li = document.createElement('li');
        if (i === 0) {
            li.setAttribute('id', 'active');
        }
        li.setAttribute('class', 'circle-item');
        li.setAttribute('itemId-data', i);
        circleItems.appendChild(li);
    }
    navigation = document.querySelectorAll('.slider .wrap .navigation .circle-items .circle-item');
    prev.addEventListener('click', prevFunc);
    next.addEventListener('click', nextFunc);
}

for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('click', function() {
        if (this.id === 'active') {
            return;
        }
        navigation.forEach((item) => {
            item.id = '';
        });

        images.forEach((img) => {
            img.className = '';
        });
        images[parseInt(this.getAttribute('itemid-data'))].setAttribute('class', 'active');
        iter = parseInt(this.getAttribute('itemid-data'));
        
        this.id = 'active';
    });
}

function prevFunc() {
    iter--;
    if (iter < 0) {
        images[iter + 1].setAttribute('class', '');
        navigation[iter + 1].setAttribute('id', '');
        iter = images.length - 1;
        navigation[iter].setAttribute('id', 'active');
        images[iter].setAttribute('class', 'active');
    } else {
        images[iter + 1].setAttribute('class', '');
        navigation[iter + 1].setAttribute('id', '');
        images[iter].setAttribute('class', 'active');
        navigation[iter].setAttribute('id', 'active');
    }
}

function nextFunc() {
    iter++;
    if (iter > (images.length - 1)) {
        images[iter - 1].setAttribute('class', '');
        navigation[iter - 1].setAttribute('id', '');
        iter = 0;
        images[iter].setAttribute('class', 'active');
        navigation[iter].setAttribute('id', 'active');
    } else {
        images[iter - 1].setAttribute('class', '');
        navigation[iter - 1].setAttribute('id', '');
        images[iter].setAttribute('class', 'active');
        navigation[iter].setAttribute('id', 'active');
    }
}