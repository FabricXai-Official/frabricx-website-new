import { useState, useEffect } from 'react';

interface MobileAccessibilityState {
  isTouchDevice: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  hasReducedMotion: boolean;
  hasHighContrast: boolean;
  screenReaderActive: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'light' | 'dark' | 'auto';
}

export function useMobileAccessibility() {
  const [state, setState] = useState<MobileAccessibilityState>({
    isTouchDevice: false,
    isMobile: false,
    isTablet: false,
    isLandscape: false,
    isPortrait: false,
    hasReducedMotion: false,
    hasHighContrast: false,
    screenReaderActive: false,
    fontSize: 'medium',
    colorScheme: 'auto'
  });

  useEffect(() => {
    const updateAccessibilityState = () => {
      // Device detection
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isLandscape = window.innerWidth > window.innerHeight;
      const isPortrait = window.innerHeight > window.innerWidth;

      // Accessibility preferences
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hasHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

      // Screen reader detection (basic)
      const screenReaderActive = document.querySelector('[aria-live]') !== null;

      // Font size detection
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      let fontSize: 'small' | 'medium' | 'large' = 'medium';
      if (rootFontSize < 14) fontSize = 'small';
      else if (rootFontSize > 18) fontSize = 'large';

      // Color scheme detection
      const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      setState({
        isTouchDevice,
        isMobile,
        isTablet,
        isLandscape,
        isPortrait,
        hasReducedMotion,
        hasHighContrast,
        screenReaderActive,
        fontSize,
        colorScheme
      });
    };

    // Initial check
    updateAccessibilityState();

    // Listen for changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];

    const handleMediaChange = () => updateAccessibilityState();
    mediaQueries.forEach(mq => mq.addEventListener('change', handleMediaChange));

    // Listen for resize
    window.addEventListener('resize', updateAccessibilityState);

    // Listen for orientation change
    window.addEventListener('orientationchange', updateAccessibilityState);

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleMediaChange));
      window.removeEventListener('resize', updateAccessibilityState);
      window.removeEventListener('orientationchange', updateAccessibilityState);
    };
  }, []);

  // Utility functions
  const increaseFontSize = () => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${Math.min(currentSize + 2, 24)}px`;
  };

  const decreaseFontSize = () => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${Math.max(currentSize - 2, 12)}px`;
  };

  const resetFontSize = () => {
    document.documentElement.style.fontSize = '16px';
  };

  const toggleHighContrast = () => {
    const hasHighContrast = document.documentElement.classList.contains('high-contrast');
    if (hasHighContrast) {
      document.documentElement.classList.remove('high-contrast');
    } else {
      document.documentElement.classList.add('high-contrast');
    }
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const focusElement = (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const skipToContent = () => {
    focusElement('#main-content');
    announceToScreenReader('Skipped to main content');
  };

  const skipToNavigation = () => {
    focusElement('nav');
    announceToScreenReader('Skipped to navigation');
  };

  return {
    ...state,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
    announceToScreenReader,
    focusElement,
    skipToContent,
    skipToNavigation
  };
} 