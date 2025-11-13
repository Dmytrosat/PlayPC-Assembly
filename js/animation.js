document.addEventListener('DOMContentLoaded', () => {
    const earningsBlock = document.getElementById('earningsBlock');
    const earnedAmountEl = document.getElementById('earnedAmount');
    const progressEl = document.getElementById('earningsProgress');

    // Флаг, чтобы анимация сработала только один раз
    let hasAnimated = false;

    // Генерация случайного числа от 350000 до 600000
    const targetValue = Math.floor(Math.random() * (600000 - 350000 + 1)) + 350000;

    // Функция анимации
    const animateEarnings = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        const duration = 1500; // 1.5 секунды
        const startTime = performance.now();
        const startValue = 0;

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Плавное изменение числа (линейная интерполяция)
            const currentValue = Math.floor(progress * targetValue);
            earnedAmountEl.textContent = currentValue.toLocaleString('ru-RU') + '₽';

            // Обновление progress-бара
            progressEl.value = currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    // Функция проверки, находится ли блок в средней трети экрана
    const isInMiddleThird = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const topThreshold = windowHeight / 3;
        const bottomThreshold = (2 * windowHeight) / 3;

        // Проверяем, что центр элемента в зоне
        const elementCenter = rect.top + rect.height / 2;
        return elementCenter >= topThreshold && elementCenter <= bottomThreshold;
    };

    // Обработчик скролла
    const handleScroll = () => {
        if (!hasAnimated && isInMiddleThird(earningsBlock)) {
            animateEarnings();
        }
    };

    // Сразу проверяем (на случай, если блок уже виден)
    handleScroll();

    // Навешиваем слушатель
    window.addEventListener('scroll', handleScroll);
});