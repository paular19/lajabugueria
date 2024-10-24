// components/CookiesConsent.js
import { useState, useEffect } from 'react';

const CookiesConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p>Este sitio utiliza cookies para mejorar la experiencia. ¿Aceptas las cookies?</p>
      <button onClick={handleAccept} className="miBoton">Aceptar</button>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#121212',
    color: '#F9F9F9',
    textAlign: 'center',
    padding: '10px',
    fontFamily: "the-seasons",
  },
};

export default CookiesConsent;
