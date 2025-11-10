import React, { useEffect } from 'react';

// NoPaperForms (Meritto) chatbot integration as a global React component
// Ensures a single script injection and persistent placeholder across SPA navigation
export function NPFChatbot(): React.JSX.Element | null {
  useEffect(() => {
    const w = window as any;
    if (w.__npfChatbotLoaded) return;
    w.__npfChatbotLoaded = true;

    // Ensure placeholder exists
    let placeholder = document.querySelector('.npf_chatbots') as HTMLElement | null;
    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.className = 'npf_chatbots';
      placeholder.setAttribute('data-w', '71289f36cb7f4d1aa57ea9599d67b976');
      placeholder.style.display = 'none';
      document.body.appendChild(placeholder);
    } else {
      // Make sure widget id is correct
      placeholder.setAttribute('data-w', '71289f36cb7f4d1aa57ea9599d67b976');
    }

    // Inject script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://chatbot.in8.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/f66854412785432ea1d2c2257fe7861f/71289f36cb7f4d1aa57ea9599d67b976';
    script.onload = () => console.log('[NPFChatbot] Chatbot script loaded');
    script.onerror = (e) => console.error('[NPFChatbot] Failed to load chatbot script', e);
    document.body.appendChild(script);

    // No cleanup: keep chatbot persistent across route changes
  }, []);

  // Component does not render UI; it only ensures the placeholder exists and loads script
  return null;
}