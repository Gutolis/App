// frontend/expo.config.js

module.exports = {
    // Pega todas as configurações do app.json
    ...require('./app.json').expo,
  
    // Desativa a geração automática do tsconfig.json
    // Esta é a linha mais importante!
    tsconfig: false,
  };
  