import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contato" className="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <h2 className="contact-title">Vamos Tirar sua Ideia do Papel?</h2>
          <p>
            Estou disponível para novos projetos e colaborações. Se você busca um desenvolvedor 
            focado em resultados, código limpo e experiência do usuário, entre em contato!
          </p>
          
          <div className="direct-contact">
            <a href="https://wa.me/5511988126221" target="_blank" rel="noreferrer" className="whatsapp-link">
              <FontAwesomeIcon icon={faWhatsapp} /> Converse pelo WhatsApp
            </a>
            <p className="email-text">
              <FontAwesomeIcon icon={faEnvelope} /> devklebermkardel@gmail.com
            </p>
          </div>
        </div>
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="c10b924d-611a-4473-a389-904e3a5f8252" />

          <div className="form-group">
            <input type="text" name="name" placeholder="Seu Nome" required />
          </div>

          <div className="form-group">
            <select name="subject" required className="form-select">
                <option value="" disabled selected>Selecione o Assunto</option>
                <option value="Orçamento de Projeto">Orçamento de Projeto</option>
                <option value="Dúvida Técnica">Dúvida Técnica</option>
                <option value="Proposta de Emprego">Proposta de Emprego</option>
                <option value="Outros">Outros</option>
            </select>
        </div>
          
          <div className="form-group">
            <input type="email" name="email" placeholder="Seu E-mail" required />
          </div>

          <div className="form-group">
            <input type="tel" name="email" placeholder="WhatsApp (XX) XXXXX-XXXX" required />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="Sua mensagem aqui..." rows="10" required></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Enviar Mensagem <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>

      </div>

      <footer className="footer">
        <p>&copy; 2026 Kleber M Kardel. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
};

export default Contact;