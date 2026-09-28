const easeInOutCubic = (progress: number) => (
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2
);

export function scrollToElement(id: string, offset = 0) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const startY = window.scrollY;
  const targetY = Math.max(0, element.getBoundingClientRect().top + startY - offset);
  const distance = targetY - startY;
  const duration = 700;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}
