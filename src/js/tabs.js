const productsList = document.querySelectorAll('.products-list');
const tabs = document.querySelectorAll('.tabs .tabs__item');
const prevTab = $('#prev-tab');
const nextTab = $('#next-tab');
let tabsIter = 0;

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        clearProductsListId();
        clearTabsItemsId();

        this.setAttribute('id', 'active');
        productsList[parseInt(this.getAttribute('select-data'))].setAttribute('id', 'active');
    });
}

prevTab.on('click', function() {
    findProductIndex(productsList);
    clearProductsListId();
    clearTabsItemsId();
    tabsIter--;

    if (tabsIter < 0) {
        this.setAttribute('class', 'disabled');
        productsList[tabsIter + 1].setAttribute('id', 'active');
        tabs[tabsIter + 1].setAttribute('id', 'active');
    } else {
        productsList[tabsIter].setAttribute('id', 'active');
        tabs[tabsIter].setAttribute('id', 'active');
    }
});

nextTab.on('click', function() {
    findProductIndex(productsList);
    clearProductsListId();
    clearTabsItemsId();
    tabsIter++;

    if (tabsIter > (productsList.length - 1)) {
        this.setAttribute('class', 'disabled');
        productsList[tabsIter - 1].setAttribute('id', 'active');
        tabs[tabsIter - 1].setAttribute('id', 'active');
    } else {
        productsList[tabsIter].setAttribute('id', 'active');
        tabs[tabsIter].setAttribute('id', 'active');
    }
});

function clearProductsListId() {
    productsList.forEach((i) => {
        i.setAttribute('id', '');
    });
}

function clearTabsItemsId() {
    tabs.forEach((i) => {
        i.setAttribute('id', '');
    });
}

function findProductIndex(array) {
    array.forEach((item, index) => {
        if (item.id === 'active') {
            return tabsIter = index;
        }
    });
}