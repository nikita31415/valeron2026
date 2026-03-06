// Дополнительный JavaScript для интерактивности (опционально)
// Можно добавить позже, например, для фильтрации, печати или темной темы

document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт с таймлайном путешествия по Грузии загружен!');
    
    // Пример: добавить класс для анимации при скролле
    const rows = document.querySelectorAll('.row');
    
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Функция для добавления класса при появлении
    function checkVisibility() {
        rows.forEach(row => {
            if (isElementInViewport(row) && !row.classList.contains('visible')) {
                row.classList.add('visible');
            }
        });
    }
    
    // Добавляем CSS для анимации (можно перенести в style.css)
    const style = document.createElement('style');
    style.textContent = `
        .row {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .row.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Проверяем при загрузке и скролле
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Первая проверка
    setTimeout(checkVisibility, 100);
});