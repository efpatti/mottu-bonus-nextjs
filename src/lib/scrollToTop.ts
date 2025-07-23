export function scrollToTop() {
 if (typeof window === "undefined") return;

 // Rola a página principal
 window.scrollTo({ top: 0, behavior: "smooth" });

 // Encontra o container com o maior scrollHeight visível
 const scrollableElements = Array.from(
  document.querySelectorAll<HTMLElement>("*")
 ).filter((el) => {
  const style = window.getComputedStyle(el);
  const hasScroll = style.overflowY === "auto" || style.overflowY === "scroll";
  return (
   el.scrollHeight > el.clientHeight && hasScroll && el.offsetParent !== null // visível na tela
  );
 });

 // Ordena por scrollHeight (descendente) e scrolla o maior
 const topScrollable = scrollableElements.sort(
  (a, b) => b.scrollHeight - a.scrollHeight
 )[0];

 if (topScrollable) {
  topScrollable.scrollTo({ top: 0, behavior: "smooth" });
 }
}
