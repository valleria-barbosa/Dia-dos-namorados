let slideIndex = 0;
const slides = document.querySelectorAll('.slide-item');

function mudarSlide(direcao) {
    // 1. Pausa qualquer vídeo que esteja a dar antes de mudar de slide
    pausarVideos();

    // 2. Remove a classe 'active' do slide atual para o esconder
    slides[slideIndex].classList.remove('active');

    // 3. Calcula o próximo índice do slide
    slideIndex += direcao;

    // Se passar do último slide, volta para o primeiro
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    // Se for antes do primeiro slide, vai para o último
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // 4. Mostra o novo slide adicionando a classe 'active'
    slides[slideIndex].classList.add('active');

    // 5. Se o novo slide for um vídeo, dá "play" automaticamente
    const videoAtual = slides[slideIndex].querySelector('video');
    if (videoAtual) {
        videoAtual.play().catch(error => {
            console.log("O navegador bloqueou o autoplay com som:", error);
        });
    }
}

function pausarVideos() {
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0; // Reinicia o vídeo para o início
        }
    });
}