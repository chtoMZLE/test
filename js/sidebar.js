export function initSidebarToggle() {
    const nav = document.querySelector('#sidebar');
    const navBtn = document.querySelector('#nav-btn');

    navBtn.onclick = () => {
        const isOpen = nav.classList.toggle('open');

        // Закрытие меню досок при открытии бокового меню
        document.querySelectorAll('.board__menu').forEach(m => m.remove());

        if (window.innerWidth <= 1200) {
            navBtn.textContent = isOpen ? '✕' : '☰';
        } else {
            navBtn.textContent = '☰';
            nav.classList.remove('open');
        }
    };

    // Сброс меню при ресайзе
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            navBtn.textContent = '☰';
            nav.classList.remove('open');
        }
    });
}