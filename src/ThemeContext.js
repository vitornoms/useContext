import React, { createContext, useState } from 'react';

// Cria o contexto do tema
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Estado do tema, padrão é o tema claro
  const [theme, setTheme] = useState('light');

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };