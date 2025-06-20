
import { Shield, Globe, Mail, MapPin, Award, Sparkles, Building2, Users } from 'lucide-react';

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
    { text: 'Reconnu par l\'ONU', icon: Globe },
    { text: 'Certifié UNESCO', icon: Award }, 
    { text: 'Gouverné par Almonte City', icon: Building2 },
    { text: 'Standard ISO 21001', icon: Shield }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="/lovable-uploads/55fc5fad-8c61-43d4-b5c8-b98d179abb8d.png" 
                  alt="GCHEA Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-3xl font-black text-white">GCHEA</h3>
                  <p className="text-amber-400 text-sm font-bold">Genève, Suisse</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Le Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur, 
                basé à Genève, transforme l'éducation mondiale avec une attitude audacieuse 
                et des standards d'excellence inégalés.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-blue-100 hover:text-amber-400 transition-colors group">
                  <MapPin className="w-5 h-5 mr-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Genève, Suisse</span>
                </div>
                <div className="flex items-center text-blue-100 hover:text-amber-400 transition-colors group">
                  <Mail className="w-5 h-5 mr-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <a href="mailto:support@gchea.org" className="hover:text-amber-400 transition-colors">
                    support@gchea.org
                  </a>
                </div>
                <div className="flex items-center text-blue-100 hover:text-amber-400 transition-colors group">
                  <Globe className="w-5 h-5 mr-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <a href="https://gchea.org" className="hover:text-amber-400 transition-colors">
                    www.gchea.org
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xl font-bold mb-6 text-amber-400">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-blue-100 hover:text-amber-400 transition-colors duration-200 hover:pl-2 transform transition-all"
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
        <div className="border-t border-white/20 py-12">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-amber-400 mb-6 flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-2" />
              Reconnaissances & Certifications Officielles
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 hover:border-amber-400/50 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <cert.icon className="w-5 h-5 mr-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 GCHEA - Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur. 
              Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Powerful Closing Statement */}
        <div className="border-t border-white/20 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text mb-4">
              GCHEA – Autonomiser l'Éducation, Enrichir les Vies, Transformer les Nations
            </p>
            <p className="text-blue-100 text-lg">
              Ensemble, nous façonnons l'avenir de l'éducation mondiale avec excellence et innovation.
            </p>
            <div className="flex justify-center space-x-2 mt-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
