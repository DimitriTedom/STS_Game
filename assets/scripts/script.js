const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['/assets/video/hero-5.mp4', '/assets/video/hero-2.mp4','/assets/video/hero-3.mp4','/assets/video/hero-4.mp4','/assets/video/hero-1.mp4'];

let i = 0;

nextButton.addEventListener('click',()=>{
    i += 1;
    video.src = movieList[i];

    if (i === 4) {
        i = -1
    }
})