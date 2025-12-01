// 페이지 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 스크롤 애니메이션 효과
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 모든 게임 카드에 옵저버 적용
    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });

    // 부드러운 스크롤 기능
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 게임 카드 호버 시 살짝 흔들리는 효과
    document.querySelectorAll('.game-content').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // 페이지 로드 시 환영 메시지
    console.log('🎉 연말 모임 페이지에 오신 것을 환영합니다! 🎄');
});
