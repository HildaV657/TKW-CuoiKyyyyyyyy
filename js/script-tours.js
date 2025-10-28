document.addEventListener('DOMContentLoaded', function(){
    const t = 3000;
    const slide = document.querySelectorAll('.slideshow .slide');
    const total = slide.length;
    let i = 0;
    function change(){
        slide[i].classList.remove('active');
        i = (i + 1) % total;
        slide[i].classList.add('active')
    }
    setInterval(change, t);
});