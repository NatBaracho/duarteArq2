import React, { useState } from 'react';
import './App.css';
import useTheme from './useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">Duarte<span>Arquitetura</span></div>
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} role="navigation">
            <a href="#home" onClick={handleLinkClick}>Início</a>
            <a href="#portfolio" onClick={handleLinkClick}>Portfólio</a>
            <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
            <a href="#contato" onClick={handleLinkClick}>Contato</a>
          </nav>
          <button id="theme-toggle" className="theme-toggle" aria-label="Alternar modo claro e escuro" onClick={toggle}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="hero" id="home">
        <div className="hero-content">
          <h1>Arquitetura Minimalista & Funcional</h1>
          <p>Transformando seu sonho em realidade com design inovador e soluções inteligentes.</p>
        </div>
      </div>

      <div className="sobremim" id="sobre">
        <div className="container sobre-grid">
          <div className="sobre-foto">
            <img src="/Assents/watermarked_img_4271946757504330814.jpg" alt="Arquiteto em ação" />
          </div>
          <div className="sobre-text">
            <h2>Sobre mim</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <div className="container" id="portfolio">
        <h2 className="section-title"><br />Nossos Projetos</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" alt="Residência Alphaville" />
            </div>
            <div className="project-info">
              <span className="project-tag">Residencial</span>
              <h3>Residência Alphaville</h3>
              <p>Um projeto focado na integração com a natureza, utilizando linhas retas, grandes panos de vidro e concreto aparente para criar ambientes amplos e iluminados naturalmente.</p>

              <table className="project-details-table">
                <tbody>
                  <tr>
                    <td>Área Construída</td>
                    <td>450 m²</td>
                  </tr>
                  <tr>
                    <td>Localização</td>
                    <td>São Paulo, SP</td>
                  </tr>
                  <tr>
                    <td>Ano</td>
                    <td>2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" alt="Edifício Loft Urbano" />
            </div>
            <div className="project-info">
              <span className="project-tag">Comercial / Corporativo</span>
              <h3>Edifício Loft Urbano</h3>
              <p>Reestruturação de espaço corporativo dinâmico, priorizando o design biofílico e o bem-estar dos colaboradores com layouts flexíveis.</p>

              <table className="project-details-table">
                <tbody>
                  <tr>
                    <td>Área Construída</td>
                    <td>1.200 m²</td>
                  </tr>
                  <tr>
                    <td>Localização</td>
                    <td>Curitiba, PR</td>
                  </tr>
                  <tr>
                    <td>Ano</td>
                    <td>2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80" alt="Casa Design de Interiores" />
            </div>
            <div className="project-info">
              <span className="project-tag">Interiores</span>
              <h3>Casa de Praia Contemporânea</h3>
              <p>Minimalismo litorâneo mesclando tons pastéis, madeira clara e ventilação cruzada para máximo conforto térmico e sofisticação.</p>

              <table className="project-details-table">
                <tbody>
                  <tr>
                    <td>Área Construída</td>
                    <td>320 m²</td>
                  </tr>
                  <tr>
                    <td>Localização</td>
                    <td>Florianópolis, SC</td>
                  </tr>
                  <tr>
                    <td>Ano</td>
                    <td>2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <div className="footer-contato" id="contato">
          <div>
            <h2>Contato</h2>
            <p className="footer-contact-item"><span className="footer-icon"><i className="bi bi-whatsapp"></i></span>WhatsApp: <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">(11) 99999-9999</a></p>
            <p className="footer-contact-item"><span className="footer-icon"><i className="bi bi-envelope-fill"></i></span>Email: <a href="mailto:contato@arqduartestudio.com">contato@arqduartestudio.com</a></p>
            <p className="footer-contact-item"><span className="footer-icon"><i className="bi bi-telephone-fill"></i></span>Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a></p>
            <p className="footer-contact-item"><span className="footer-icon"><i className="bi bi-geo-alt-fill"></i></span>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
          </div>
          <div className="footer-direitos">
            <p>© 2026 Arq.Duarte Studio. Todos os direitos reservados.</p>
            <p>Desenvolvido com foco em sofisticação e excelência estrutural.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
