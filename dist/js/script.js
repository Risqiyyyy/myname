window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});


//portofolio
const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')
    },
];

const options = {
    activeItemPosition: 1,
    interval: 3000,
    
    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')
            },
        ]
    },
    
    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: ( ) => {
        console.log('previous slider item is shown');
    },
    onChange: ( ) => {
        console.log('new slider item has been shown');
    }
};
const prevButton = document.getElementById('data-carousel-prev');
const nextButton = document.getElementById('data-carousel-next');

prevButton.addEventListener('click', () => {
    carousel.prev();
});

nextButton.addEventListener('click', () => {
    carousel.next();
});