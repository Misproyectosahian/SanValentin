import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Componente de corazón flotante
const FloatingHeart = ({ delay = 0, duration = 3 }) => {
  const randomX = Math.random() * 100;
  const randomSize = Math.random() * 20 + 15;
  
  return (
    <motion.div
      className="floating-heart"
      initial={{ y: '100vh', x: `${randomX}vw`, opacity: 0.7, scale: 0 }}
      animate={{ 
        y: '-20vh', 
        x: `${randomX + (Math.random() * 20 - 10)}vw`,
        opacity: [0.7, 1, 0.7, 0],
        scale: [0, 1, 1, 0.8],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeInOut"
      }}
      style={{
        fontSize: `${randomSize}px`,
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    >
      ❤️
    </motion.div>
  );
};

// Página 1: Carta cerrada con sorpresa - MEJORADA
const Page1 = ({ onOpen }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div 
      className="page page-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Lluvia de corazones de fondo */}
      <div className="hearts-container">
        {[...Array(25)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.2} duration={3 + Math.random() * 2} />
        ))}
      </div>
      
      <motion.div className="content-center">
        <motion.h1 
          className="title-script"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Te tengo una sorpresa...
        </motion.h1>
        
        <motion.div
  className="envelope-wrapper"
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ delay: 1, duration: 0.8, type: "spring" }}
  whileHover={{ scale: 1.05 }}
  onHoverStart={() => setIsHovering(true)}
  onHoverEnd={() => setIsHovering(false)}
  onClick={onOpen}
>
  <div className="envelope-container">
    <div className="envelope">
      {/* Solapa */}
      <motion.div 
        className="envelope-flap"
        animate={{ 
          rotateX: isHovering ? 160 : 0,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Pocket */}
      <div className="envelope-pocket">
        <motion.div 
          className="letter-inside"
          animate={{ 
            y: isHovering ? -60 : -20,
            rotate: isHovering ? 4 : 2,
            scale: isHovering ? 1.04 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          <p className="letter-preview-text">
            Para descubrirla<br/>
            da click sobre el<br/>
            corazón
          </p>
          <motion.div 
            className="heart-stamp"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            💗
          </motion.div>
        </motion.div>
      </div>

      <div className="envelope-labels">
        <span className="from-label">De: Yared</span>
        <span className="to-label">Para: Ailyn</span>
      </div>
    </div>
  </div>
</motion.div>
        
        <motion.p
          className="hint-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          Haz click en la carta ✨
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Página 2: Carta abierta estilo periódico
const Page2 = ({ onNext }) => {
  return (
    <motion.div 
      className="page page-2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hearts-container-subtle">
        {[...Array(12)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.3} duration={4} />
        ))}
      </div>
      
      <motion.div 
        className="newspaper-page"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="newspaper-header">
          <div className="header-section">EDICIÓN ESPECIAL</div>
          <div className="header-section">AIREK DESIGN</div>
          <div className="header-section">FEBRERO 2026</div>
        </div>
        
        <motion.h1 
          className="newspaper-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Valentine Edition
        </motion.h1>
        
        <motion.h2 
          className="newspaper-subtitle"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Will you be my<br/>
          <span className="valentine-script">Valentine?</span>
        </motion.h2>
        
        <motion.div 
          className="newspaper-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="distribution-text">
            DISTRIBUCIÓN:<br/>
            EXCLUSIVA PARA LA PERSONA MÁS ESPECIAL<br/>
            <span className="name-highlight">Ailyn</span>
          </div>
          
          <div className="love-emoji">💕 love*.</div>
          
          <div className="article-section">
            <h3 className="section-title">Diario de amor: <span className="subtitle-small">San Valentine</span></h3>
            
            <div className="article-content">
              <div className="article-text">
                <p>Tus ojos son hermosos como los atardeceres que calman el alma y los amaneceres que llenan de esperanza. Coincidir contigo es, sin duda, lo mejor que me ha regalado la vida, entre millones de caminos, encontrarte a ti fue un milagro hermoso.</p>
                
                <p>Te quiero más de lo que a veces sé explicar, y cada día anhelo estar a tu lado, compartir momentos, sueños y mil vidas. Quiero caminar contigo hoy, mañana y siempre, porque estar contigo no es solo un deseo, es una certeza.
Y desde lo más sincero de mi corazón, me encantaría que seas mi San Valentín💕</p>
              </div>
              
              <div className="article-image">
                <div className="image-placeholder">
                  <video width="100%" height="auto" autoPlay muted loop>
                    <source src="/VideoValentin.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
                <div className="image-caption">
                  ¿Aceptas la misión de<br/>ser mi San Valentín?
                </div>
              </div>
            </div>
          </div>
          
          <div className="coupons-section">
            <div className="scissors-line">✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️</div>
            <div className="coupons">
              <div className="coupon">
                <div className="coupon-title">CUPÓN PARA:</div>
                <div className="coupon-content">Una cita sorpresa</div>
              </div>
              <div className="coupon">
                <div className="coupon-title">CUPÓN PARA:</div>
                <div className="coupon-content">Una noche de películas</div>
              </div>
            </div>
            <div className="scissors-line">✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️</div>
          </div>
        </motion.div>
        
        <motion.button
          className="next-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PAG. SIGUIENTE →
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Página 3: 5 Razones
const Page3 = ({ onNext }) => {
  const reasons = [
    { num: 1, text: "Tienes la sonrisa más linda del universo." },
    { num: 2, text: "Haces que mi corazón lata más rápido cada vez que te pienso" },
    { num: 3, text: "Contigo, cualquier día se siente especial." },
    { num: 4, text: "Eres mi persona favorita para compartir momentos." },
    { num: 5, text: "No imagino a nadie más a mi lado en este San Valentín" }
  ];
  
  const signs = [
    { text: "Si estás leyendo esto, significa que el destino nos ha unido." },
    { text: "Si has sonreído al menos una vez, es una señal obvia." },
    { text: "Si te gusta el romance, somos un match perfecto." }
  ];
  
  return (
    <motion.div 
      className="page page-3"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hearts-container-subtle">
        {[...Array(15)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.25} duration={4.5} />
        ))}
      </div>
      
      <motion.div 
        className="newspaper-page"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="newspaper-header">
          <div className="header-section">EDICIÓN ESPECIAL</div>
          <div className="header-section">AIREK DESIGN</div>
          <div className="header-section">FEBRERO 2026</div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="reasons-title">
            05 Razones<br/>
            <span className="reasons-subtitle">por las que eres</span><br/>
            <span className="perfect-choice">Mi elección Perfecta</span>
          </h1>
        </motion.div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.num}
              className={`reason-box reason-${reason.num}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,20,147,0.3)" }}
            >
              <div className="reason-number">{reason.num}</div>
              <div className="reason-heart">❤️</div>
              <p className="reason-text">{reason.text}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="signs-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <h3 className="signs-title">
            SEÑALES DE QUE<br/>
            <span className="signs-subtitle">Debes decir "Sí"</span>
          </h3>
          
          <p className="signs-intro">Estudios recientes han demostrado que:</p>
          
          <div className="signs-boxes">
            {signs.map((sign, index) => (
              <motion.div
                key={index}
                className="sign-box"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + index * 0.2 }}
                whileHover={{ backgroundColor: '#ff1493', color: '#fff' }}
              >
                {sign.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.button
          className="next-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PAG. SIGUIENTE →
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Página 4: La gran pregunta - MEJORADA CON MENSAJES INFINITOS
const Page4 = ({ onAnswer }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  
  // Array infinito de mensajes que se repiten cíclicamente
  const messages = [
    "¿Estás segura? 🥺",
    "Dale otra oportunidad... 💕",
    "Piénsalo bien, amiguita 🌹",
    "¡No seas así! 💔",
    "Última oportunidad... 🙏",
    "Por favorcito 🥹",
    "Te lo pido de corazón 💗",
    "Recapacita un poco 😢",
    "Sé que dirás que sí 💖",
    "¡Vamos, di que sí! 🌟",
    "No me hagas esto 😭",
    "Solo una vez más... 🎀",
    "Te prometo que vale la pena 💝",
    "Confía en mí 🦋",
    "¡Anda, por favor! 🌺"
  ];
  
  const handleNoHover = () => {
    // Movimiento más dramático en móvil
    const maxMovement = window.innerWidth < 768 ? 150 : 200;
    const newX = Math.random() * maxMovement - maxMovement / 2;
    const newY = Math.random() * maxMovement - maxMovement / 2;
    setNoButtonPosition({ x: newX, y: newY });
    setClickCount(prev => prev + 1);
  };
  
  // Usa módulo para repetir los mensajes infinitamente
  const currentMessage = clickCount > 0 ? messages[(clickCount - 1) % messages.length] : "";
  
  return (
    <motion.div 
      className="page page-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fondo de corazones más denso */}
      <div className="hearts-container">
        {[...Array(30)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.15} duration={3.5} />
        ))}
      </div>
      
      <motion.div 
        className="question-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="hearts-decoration"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💕💗💖💕💗
        </motion.div>
        
        <motion.h1 
          className="big-question-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          LA GRAN PREGUNTA
        </motion.h1>
        
        <motion.p 
          className="analysis-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Después de analizar los hechos, recopilar datos<br/>
          y comprobar la química innegable entre nosotros...
        </motion.p>
        
        <motion.p 
          className="moment-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Así que ahora sí...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="heart-in-hand">con el corazón en la mano</p>
          <p className="nervous-smile">y una sonrisa nerviosa:</p>
        </motion.div>
        
        <motion.h2 
          className="final-question"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
        >
          ¿Quieres ser mi<br/>
          <span className="san-valentin-text">San Valentín?</span>
        </motion.h2>
        
        <motion.p 
          className="choose-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Elige tu respuesta:
        </motion.p>
        
        <AnimatePresence mode="wait">
          {currentMessage && (
            <motion.p
              key={clickCount}
              className="hover-message"
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {currentMessage}
            </motion.p>
          )}
        </AnimatePresence>
        
        <div className="buttons-container">
          <motion.button
            className="answer-button no-button"
            onHoverStart={handleNoHover}
            onClick={handleNoHover}
            onTouchStart={handleNoHover}
            style={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            whileHover={{ 
              scale: 0.9,
              backgroundColor: '#ffb6c1'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            No, lo siento 😿
          </motion.button>
          
          <motion.button
            className="answer-button yes-button"
            onClick={() => onAnswer('yes')}
            onHoverStart={() => setHoveredButton('yes')}
            onHoverEnd={() => setHoveredButton(null)}
            whileHover={{ 
              scale: 1.15,
              boxShadow: "0 0 30px rgba(255,20,147,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: hoveredButton === 'yes' ? 1.15 : 1,
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity 
              }}
            >
              SÍ! POR SUPUESTOOO
            </motion.span>
          </motion.button>
        </div>
        
        <motion.div
          className="hearts-decoration bottom-hearts"
          animate={{ 
            scale: [1, 1.1, 1],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💗💕💖💗💕
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Página 5: Confirmación
const Page5 = () => {
  return (
    <motion.div 
      className="page page-5"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Explosión de corazones */}
      <div className="hearts-explosion">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="explosion-heart"
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0, 
              opacity: 1 
            }}
            animate={{ 
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              scale: [0, 1.5, 1],
              opacity: [1, 1, 0],
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.02,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              fontSize: `${Math.random() * 30 + 20}px`,
              left: '50%',
              top: '50%',
            }}
          >
            {['❤️', '💕', '💗', '💖', '💝'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="confirmation-content"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h1 
          className="confirmed-title"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Confirmado<br/>
          oficialmente:
        </motion.h1>
        
        <motion.div 
          className="lace-frame"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="lace-border">
            <motion.div 
              className="lace-content"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255,20,147,0.3)",
                  "0 0 40px rgba(255,20,147,0.6)",
                  "0 0 20px rgba(255,20,147,0.3)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            >
              <motion.p 
                className="declaration"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Eres mi San<br/>
                Valentín.
              </motion.p>
              
              <motion.div 
                className="heart-locket"
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="locket-outer">
                  <div className="locket-inner">
                    <span className="locket-letter left">A</span>
                    <span className="locket-letter right">Y</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="final-message"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="thanks-message">
            Gracias por decir que sí.
          </p>
          <p className="prepare-message">
            Prepárate para un día bonito,<br/>
            sonrisas inevitables<br/>
            y recuerdos que se van a quedar.
          </p>
        </motion.div>
        
        <motion.div
          className="sparkles"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨💫✨💫✨
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Componente principal
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <Page1 key="page1" onOpen={() => setCurrentPage(2)} />
        )}
        {currentPage === 2 && (
          <Page2 key="page2" onNext={() => setCurrentPage(3)} />
        )}
        {currentPage === 3 && (
          <Page3 key="page3" onNext={() => setCurrentPage(4)} />
        )}
        {currentPage === 4 && (
          <Page4 key="page4" onAnswer={() => setCurrentPage(5)} />
        )}
        {currentPage === 5 && (
          <Page5 key="page5" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
