// components/ZohoWhatsappWidget.tsx
import { useEffect } from 'react';

const ZohoWhatsappWidget = () => {
  useEffect(() => {
    console.log("Zohooooooooooooooooooooooo")
    console.log("Zoho widget mounting...");

    const whatsapp_settings = {
      buttonName: 'Start Chat',
      brandImageUrl: '',
      brandName: 'Srinivas Dental',
      brandStatusText: 'Typically replies within a day',
      buttonSize: 'large',
      buttonPosition: 'bottom-right',
      phoneNumber: '98847 15109',
      welcomeMessage: 'How can I Help You !',
      prefillMessages: 'I am looking for:',
      replyOptions: 'Orthodontics Treatement,Root Canal Treatment,Dental Implants,Cosmetic Dentistry,Teeth Whitening'
    };

    const script = document.createElement('script');
    script.src = 'https://oweb.zohowebstatic.com//oweb.zohowebstatic.com/sites/oweb/js/r/whatsapp-widget-generator.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).widget_whatsappButton === 'function') {
        (window as any).widget_whatsappButton(whatsapp_settings);
      } else {
        console.error('Zoho WhatsApp function missing.');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ZohoWhatsappWidget;
