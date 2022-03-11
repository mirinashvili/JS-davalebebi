let data = [
    {
        id: 1,
        imageUrl: 'http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/05/05094353/rds-moscow-2021-by-airjek-evgeny-murugin-25-1200x800.jpg',
        title: 'image title 1',
        url: 'https://google.com'

    },
    {
        id: 2,
        imageUrl: 'http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/05/05094847/rds-moscow-2021-by-airjek-evgeny-murugin-28-1200x800.jpg',
        title: 'image title 2',
        url: 'https://google.com'

    },
    {
        id: 3,
        imageUrl: 'https://vdrifte.ru/images/w1280/gallery/323/162712019368021.jpg',
        title: 'image title 3',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'https://vdrifte.ru/images/w1280/gallery/319/161998304335412.jpg',
        title: 'image title 4',
        url: 'https://google.com'
    }

    
  
]



let arrowLeft = document.getElementById ('arrow-left-button');
let arrowRight = document.getElementById ('arrow-right-button');
let sliderContent = document.getElementById ('slider-content');
let dotsList = document.getElementsByClassName ('dot');


let sliderIndex = 0;


function createAtag (item) {
    let tag = document.createElement ('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag (item) {
    let tagTitle = document.createElement ('h2');
    tagTitle.setAttribute ('class', 'title');
    tagTitle.append (item.title);

    return tagTitle;
}

function creatImgtag (item) {
    let tagImage = document.createElement ('img');
    tagImage.setAttribute ('src', item.imageUrl);
    tagImage.setAttribute ('alt', item.title);

    return tagImage;
}

function createDots (item) {
    let dots = document.createElement ('div');
    dots.setAttribute ('class', 'dots');

    data.forEach ((element) => {
        let dotElement = document.createElement ('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log (dots);
    return dots;
}

function CurrentDotActivi() {
    dotsList[sliderIndex].classList.add ('active');
}

function setSlide () {
    sliderContent.innerHTML = '';
    let slideItem = createAtag (data [sliderIndex]);
    let h2Tag = createH2tag (data[sliderIndex]);
    let imgTag = creatImgtag (data [sliderIndex]);
    let dots = createDots ();

    slideItem.appendChild (imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActivi();

    console.log(slideItem);
}

arrowLeft.addEventListener('click', arrowleftClick );
arrowRight.addEventListener( 'click', arrowrightClick );
  


function arrowleftClick () {
    if (sliderIndex <= 0) {
        sliderIndex = data.length -1 ;
        setSlide ();
        return;
    } 
    
    sliderIndex -- ;
    setSlide();
}

function arrowrightClick () {
    if (sliderIndex >= data.length -1) {
        sliderIndex = 0;
        setSlide ();
        return;
    }
    
    sliderIndex ++ ;
    setSlide();
}


//setInterval( () => {
  //  arrowrightClick ();
//}, 3000);

setSlide();