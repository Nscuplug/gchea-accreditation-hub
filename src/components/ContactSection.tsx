
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  Send,
  Building,
  Shield
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Siège Social",
      details: ["Genève, Suisse", "Gouverné par Almonte City"],
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Support & Contact",
      details: ["support@gchea.org", "Réponse sous 24h"],
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "Site Web Officiel",
      details: ["www.gchea.org", "Portail de vérification en ligne"],
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Reconnaissance",
      details: ["Nations Unies (ONU)", "UNESCO"],
      color: "bg-orange-500"
    }
  ];

  const offices = [
    {
      region: "Siège Mondial",
      location: "Genève, Suisse",
      address: "Route des Nations, 1211 Genève",
      timezone: "CET (UTC+1)"
    },
    {
      region: "Bureau Américain",
      location: "Almonte City, USA",
      address: "Government District, Almonte City",
      timezone: "EST (UTC-5)"
    },
    {
      region: "Bureau Asie-Pacifique",
      location: "Singapour",
      address: "Educational Hub, Singapore",
      timezone: "SGT (UTC+8)"
    }
  ];

  const quickLinks = [
    "Demande d'Accréditation",
    "Vérification de Certificat",
    "Guide de Partenariat",
    "Documentation Technique",
    "Standards de Qualité",
    "Processus d'Évaluation"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gchea-dark-purple to-gchea-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gchea-bright-gold text-black mb-4">
            <Send className="w-4 h-4 mr-2" />
            Contact & Support
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connectez-vous avec
            <span className="text-gchea-bright-gold"> GCHEA</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Notre équipe mondiale d'experts est à votre disposition pour vous accompagner 
            dans votre parcours d'accréditation et répondre à toutes vos questions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-white/80 text-sm">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-gchea-bright-gold" />
                Envoyez-nous un Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Prénom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-gchea-bright-gold focus:outline-none"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-gchea-bright-gold focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-gchea-bright-gold focus:outline-none"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Institution/Organisation</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-gchea-bright-gold focus:outline-none"
                    placeholder="Nom de votre institution"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Sujet</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-gchea-bright-gold focus:outline-none">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="accreditation">Demande d'Accréditation</option>
                    <option value="verification">Vérification de Document</option>
                    <option value="partnership">Partenariat</option>
                    <option value="support">Support Technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-gchea-bright-gold focus:outline-none resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gchea-bright-gold hover:bg-gchea-gold text-black font-semibold py-4 text-lg">
                  <Send className="w-5 h-5 mr-3" />
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Offices & Quick Links */}
          <div className="space-y-8">
            {/* Global Offices */}
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-gchea-bright-gold" />
                  Bureaux Mondiaux
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-gchea-bright-gold pl-4">
                      <h4 className="font-bold text-lg">{office.region}</h4>
                      <p className="text-white/80">{office.location}</p>
                      <p className="text-white/70 text-sm">{office.address}</p>
                      <div className="flex items-center mt-2">
                        <Clock className="w-4 h-4 mr-2 text-gchea-bright-gold" />
                        <span className="text-sm text-white/70">{office.timezone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Liens Rapides</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-gchea-bright-gold text-black rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">Contact d'Urgence</h3>
          <p className="text-lg mb-6">
            Pour les questions urgentes concernant la vérification de documents ou l'accréditation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:support@gchea.org"
              className="flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5 mr-3" />
              support@gchea.org
            </a>
            <span className="text-lg font-semibold">Réponse garantie sous 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
