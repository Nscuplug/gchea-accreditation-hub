
import { Shield, Globe, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Services': [
      'Accréditation Universitaire',
      'Accréditation Programmatique', 
      'Éducation en Ligne',
      'Formation Professionnelle',
      'Vérification de Documents'
    ],
    'À Propos': [
      'Notre Mission',
      'Reconnaissance Internationale',
      'Standards de Qualité',
      'Équipe de Direction',
      'Rapports Annuels'
    ],
    'Partenaires': [
      'Gouvernements',
      'Universités',
      'Organismes d\'Accréditation',
      'Organisations Internationales',
      'Secteur Privé'
    ],
    'Support': [
      'Centre d\'Aide',
      'Documentation',
      'FAQ',
      'Guides Techniques',
      'Nous Contacter'
    ]
  };

  const certifications = [
    'Reconnu par l\'ONU',
    'Certifié UNESCO', 
    'Gouverné par Almonte City',
    'Standard ISO 21001'
  ];

  return (
    <footer className="bg-gchea-dark-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gchea-bright-gold to-gchea-gold rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GCHEA</h3>
                  <p className="text-gchea-bright-gold text-sm">Genève, Suisse</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                Le Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur, 
                basé à Genève, transforme l'éducation mondiale avec une attitude audacieuse 
                et des standards d'excellence inégalés.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <MapPin className="w-5 h-5 mr-3 text-gchea-bright-gold" />
                  <span>Genève, Suisse</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Mail className="w-5 h-5 mr-3 text-gchea-bright-gold" />
                  <a href="mailto:support@gchea.org" className="hover:text-gchea-bright-gold transition-colors">
                    support@gchea.org
                  </a>
                </div>
                <div className="flex items-center text-white/80">
                  <Globe className="w-5 h-5 mr-3 text-gchea-bright-gold" />
                  <a href="https://gchea.org" className="hover:text-gchea-bright-gold transition-colors">
                    www.gchea.org
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-bold mb-6 text-gchea-bright-gold">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-white/80 hover:text-gchea-bright-gold transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/20 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-gchea-bright-gold mb-4">
              Reconnaissances & Certifications Officielles
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20"
                >
                  <Award className="w-4 h-4 mr-2 text-gchea-bright-gold" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 GCHEA - Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur. 
              Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-gchea-bright-gold transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-white/70 hover:text-gchea-bright-gold transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-white/70 hover:text-gchea-bright-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Powerful Closing Statement */}
        <div className="border-t border-white/20 py-8 text-center">
          <p className="text-xl font-bold text-gchea-bright-gold mb-2">
            GCHEA – Autonomiser l'Éducation, Enrichir les Vies, Transformer les Nations
          </p>
          <p className="text-white/80">
            Ensemble, nous façonnons l'avenir de l'éducation mondiale avec excellence et innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
