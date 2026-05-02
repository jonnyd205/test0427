// 햄버거 메뉴 토글
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const submenu = document.querySelector('.submenu');
const nav = document.querySelector('nav');

// GSAP 애니메이션 (데스크톱 호버)
let submenuTl = gsap.timeline({ paused: true });
submenuTl.fromTo(submenu, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });

nav.addEventListener('mouseenter', () => {
    submenu.style.display = 'block';
    submenuTl.play();
});

nav.addEventListener('mouseleave', () => {
    submenuTl.reverse().then(() => {
        submenu.style.display = 'none';
    });
});

// 모바일 메뉴 클릭 (GSAP 애니메이션 추가)
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    if (submenu.classList.contains('active')) {
        // 서브메뉴 닫을 때
        gsap.to(submenu, { opacity: 0, y: -20, duration: 0.3, ease: "power2.in", onComplete: () => {
            submenu.classList.remove('active');
        }});
    } else {
        // 서브메뉴 열 때
        submenu.classList.add('active');
        gsap.fromTo(submenu, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
});