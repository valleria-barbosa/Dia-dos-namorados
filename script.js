let slideIndex = 0;
const slides = document.querySelectorAll('.slide-item');

function mudarSlide(direcao) {
    // 1. Pausa o vídeo anterior antes de mudar
    pausarVideos();

    // 2. Esconde o slide atual
    slides[slideIndex].classList.remove('active');

    // 3. Calcula o próximo índice
    slideIndex += direcao;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // 4. Mostra o novo slide
    slides[slideIndex].classList.add('active');

    // 5. CONFIGURAÇÃO DO VÍDEO:
    const videoAtual = slides[slideIndex].querySelector('video');
    if (videoAtual) {
        // Garantimos que ele NÃO comece mudo
        videoAtual.muted = false; 
        
        // Deixamos o vídeo pausado no início para o navegador liberar o som.
        // Assim, sua namorada só precisa dar 1 clique no Play do vídeo para ouvir perfeitamente!
        videoAtual.pause();
        videoAtual.currentTime = 0;
    }
}

function pausarVideos() {
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0; 
        }
    });
}