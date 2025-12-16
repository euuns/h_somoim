// 페이지 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 글래스 오브젝트 부드러운 움직임
    const glassShapes = document.querySelectorAll('.glass-shape');
    glassShapes.forEach((shape, index) => {
        let posX = 0;
        let posY = 0;
        let velocityX = (Math.random() - 0.5) * 0.5;
        let velocityY = (Math.random() - 0.5) * 0.5;
        
        setInterval(() => {
            posX += velocityX;
            posY += velocityY;
            
            // 경계 체크
            if (Math.abs(posX) > 30) velocityX *= -1;
            if (Math.abs(posY) > 30) velocityY *= -1;
            
            shape.style.transform = `translate(${posX}px, ${posY}px)`;
        }, 50);
    });

    // 버튼 클릭 시 반짝이는 효과
    const joinButton = document.querySelector('.join-button');
    if (joinButton) {
        joinButton.addEventListener('click', function(e) {
            // 클릭 위치에 반짝임 효과
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.8)';
            ripple.style.borderRadius = '50%';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // 스크롤 시 요소 페이드인
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

    // 인사말 라인들 관찰
    document.querySelectorAll('.greeting-line').forEach(line => {
        observer.observe(line);
    });

    // 페이지 로드 시 환영 메시지
    console.log('🎉 2026 새해 복 많이 받으세요! 🦅');
});

// 리플 효과 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
