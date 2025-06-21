
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Globe, Users, Building, Target, Calendar, MapPin, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const milestones = [
    {
      year: "2010",
      title: "Fondation de GCHEA",
      description: "Création à Genève avec 15 institutions fondatrices de 8 pays"
    },
    {
      year: "2013",
      title: "Reconnaissance UNESCO",
      description: "Obtention du statut consultatif auprès de l'UNESCO"
    },
    {
      year: "2016",
      title: "Expansion Asie-Pacifique",
      description: "Ouverture du bureau régional à Singapour"
    },
    {
      year: "2018",
      title: "Standards IA Éducation",
      description: "Premier framework mondial pour l'IA dans l'éducation"
    },
    {
      year: "2020",
      title: "Certification COVID-19",
      description: "Adaptation rapide aux standards d'enseignement hybride"
    },
    {
      year: "2022",
      title: "Blockchain Verification",
      description: "Lancement du système de vérification blockchain"
    },
    {
      year: "2024",
      title: "5000+ Institutions",
      description: "Franchissement du cap des 5000 institutions accréditées"
    }
  ];

  const leadership = [
    {
      name: "Dr. Elena Marchetti",
      role: "Directrice Générale",
      background: "Ancienne Directrice UNESCO Education, PhD Stanford",
      experience: "25 ans en politique éducative internationale"
    },
    {
      name: "Prof. James Richardson",
      role: "Directeur Académique",
      background: "Ex-Vice-Recteur Cambridge, Expert accréditation AACSB",
      experience: "30 ans en enseignement supérieur"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Directrice Innovation",
      background: "PhD MIT, Expert IA éducative, 15 brevets technologiques",
      experience: "20 ans en EdTech et innovation"
    },
    {
      name: "Dr. Mohamed Al-Rashid",
      role: "Directeur Régional MENA",
      background: "Ancien Recteur Université du Caire, Expert éducation arabe",
      experience: "22 ans en administration universitaire"
    }
  ];

  const values = [
    {
      title: "Excellence Académique",
      description: "Standards les plus élevés pour l'évaluation et la certification des programmes éducatifs",
      icon: Trophy
    },
    {
      title: "Innovation Pédagogique",
      description: "Adoption des dernières technologies et méthodologies d'enseignement",
      icon: Target
    },
    {
      title: "Inclusion Mondiale",
      description: "Accessibilité et équité pour toutes les institutions, quel que soit leur contexte",
      icon: Globe
    },
    {
      title: "Transparence",
      description: "Processus ouverts et critères clairs pour toutes nos évaluations",
      icon: Building
    }
  ];

  const statistics = [
    { number: "5,247", label: "Institutions Accréditées", period: "Depuis 2010" },
    { number: "127", label: "Pays Représentés", period: "6 Continents" },
    { number: "2.8M", label: "Diplômés Certifiés", period: "Annuellement" },
    { number: "450+", label: "Experts Évaluateurs", period: "Équipe Mondiale" },
    { number: "98.7%", label: "Taux de Satisfaction", period: "Institutions Partenaires" },
    { number: "24/7", label: "Support Technique", period: "Disponibilité Continue" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Building className="w-4 h-4 mr-2" />
              À Propos de GCHEA
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Leaders de l'Accréditation Mondiale
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Depuis 2010, nous établissons les standards d'excellence pour l'enseignement supérieur international.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Notre Impact en Chiffres</h2>
            <p className="text-xl text-slate-600">Des résultats concrets pour l'éducation mondiale</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-slate-800 font-medium mb-1">{stat.label}</div>
                  <div className="text-slate-600 text-sm">{stat.period}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-slate-600">Les principes qui guident notre mission</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Notre Histoire</h2>
            <p className="text-xl text-slate-600">14 années d'innovation et de croissance</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-8">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600 text-lg">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Direction Exécutive</h2>
            <p className="text-xl text-slate-600">Une équipe d'experts reconnus internationalement</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{leader.name}</CardTitle>
                  <Badge className="w-fit bg-blue-100 text-blue-800">{leader.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">{leader.background}</p>
                  <p className="text-slate-600">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
