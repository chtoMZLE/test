export function initSidebarToggle() {
    const nav = document.querySelector('#sidebar');
    const navBtn = document.querySelector('#nav-btn');

    navBtn.onclick = () => {
        const isOpen = nav.classList.toggle('open');
        if (window.innerWidth <= 1200) {
            navBtn.textContent = isOpen ? '✕' : '☰';
        } else {
            navBtn.textContent = '☰';
            nav.classList.remove('open');
        }
    };

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            navBtn.textContent = '☰';
            nav.classList.remove('open');
        }
    });
}
