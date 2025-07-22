export function scrollToTop() {
 if (typeof window !== "undefined") {
  window.scrollTo({ top: 0, behavior: "smooth" });
  // Try to scroll MobileMenu container if present (mobile)
  const modal = document.querySelector(
   ".container.mx-auto.p-6.overflow-y-auto.h-full"
  );
  if (modal) {
   (modal as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
  }
 }
}
