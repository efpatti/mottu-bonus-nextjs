export function scrollToTop(): void {
  if (typeof window === 'undefined') return;

  // Sempre rola a página principal para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Rola todos os containers scrolláveis visíveis para o topo
  const scrollableElements = Array.from(
    document.querySelectorAll<HTMLElement>('*')
  ).filter((el) => {
    const style = window.getComputedStyle(el);
    const hasScroll =
      style.overflowY === 'auto' || style.overflowY === 'scroll';
    return (
      el.scrollHeight > el.clientHeight && hasScroll && el.offsetParent !== null
    );
  });

  scrollableElements.forEach((el) => {
    el.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
