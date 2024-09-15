const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
function changeImage(x, image) {
    switch(x) {
        case 1:
            image.src = 'images/image1.jpg';
            break;
        case 2:
            image.src = 'images/image2.jpg';
            break;
        case 3:
            image.src = 'images/image3.jpg';
            break;
        case 4:
            image.src = 'images/image4.jpg';
            break;
        case 5:
            image.src = 'images/image5.jpg';
            break;
        case 6:
            image.src = 'images/image6.jpg';
            break;
        case 7:
            image.src = 'images/image7.jpg';
            break;
        case 8:
            image.src = 'images/image8.jpg';
            break;
        case 9:
            image.src='images/image9.jpg';
            break;
        case 10:
            image.src='images/image10.jpg';
        case 11:
            image.src='images/image11.jpg';
            break;
        case 12:
            image.src='images/image12.jpg';    
            break;
        case 13:
            image.src='images/image13.jpg';    
            break;

        case 14:
            image.src='images/image14.jpg';    
            break;


        case 15:
            image.src='images/image15.jpg';    
            break;

        case 16:
            image.src='images/image16.jpg';    
            break;


        default:
            // Default case, do nothing
            break;
    }
}
