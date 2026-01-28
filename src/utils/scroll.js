/**
 * Scroll utility functions for smooth navigation and scroll management
 */

/**
 * Smoothly scrolls to a specific element by ID
 * @param {string} id - Element ID to scroll to
 * @param {number} offset - Offset from top in pixels (default: 80 for navbar)
 */
export const scrollToSection = (id, offset = 80) => {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
 * Locks body scroll (useful for modals/overlays)
 */
export const lockBodyScroll = () => {
  if (typeof window === 'undefined') return;

  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollBarWidth}px`;
};

/**
 * Unlocks body scroll
 */
export const unlockBodyScroll = () => {
  if (typeof document === 'undefined') return;

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

/**
 * Gets current scroll percentage (0-100)
 */
export const getScrollPercentage = () => {
  if (typeof document === 'undefined') return 0;

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

/**
 * Checks if element is in viewport
 * @param {HTMLElement} element - Element to check
 */
export const isInViewport = (element) => {
  if (!element || typeof window === 'undefined') return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};