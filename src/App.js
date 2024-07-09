import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>Aplicação com Tema Claro/Escuro</h1>
        <button onClick={toggleTheme}>
          Alternar para Tema {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </header>
    </div>
  );
};

export default App;