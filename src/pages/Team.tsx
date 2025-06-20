
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Shield, Mail, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const leadership = [
    {
      name: "Dr. Catherine Dubois",
      role: "Directrice Générale",
      location: "Genève, Suisse",
      image: "https://images.unsplash.com/photo-1494790108755-2616c96793f8?q=80&w=400&h=400&fit=crop",
      credentials: "PhD en Éducation Internationale, Harvard",
      experience: "25+ ans dans l'accréditation mondiale",
      specialties: ["Gouvernance Éducative", "Standards Internationaux", "Diplomatie Académique"]
    },
    {
      name: "Prof. Michael Richardson",
      role: "Directeur des Standards Académiques",
      location: "Londres, Royaume-Uni",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
      credentials: "PhD en Sciences de l'Éducation, Oxford",
      experience: "20+ ans en assurance qualité",
      specialties: ["Accréditation Programmatique", "Évaluation Académique", "Innovation Pédagogique"]
    },
    {
      name: "Dr. Maria Santos",
      role: "Directrice Régionale Amériques",
      location: "São Paulo, Brésil",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop",
      credentials: "PhD en Administration Éducative, USP",
      experience: "18+ ans en développement institutionnel",
      specialties: ["Développement Régional", "Partenariats Stratégiques", "Inclusion Éducative"]
    },
    {
      name: "Dr. Hiroshi Tanaka",
      role: "Directeur Innovation & Technologie",
      location: "Tokyo, Japon",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
      credentials: "PhD en Technologie Éducative, Université de Tokyo",
      experience: "15+ ans en innovation éducative",
      specialties: ["IA dans l'Éducation", "Plateformes Numériques", "Apprentissage Adaptatif"]
    }
  ];

  const advisors = [
    {
      name: "Prof. Elisabeth Weber",
      role: "Conseillère Stratégique UNESCO",
      organization: "UNESCO Paris"
    },
    {
      name: "Dr. James Mitchell",
      role: "Expert en Accréditation Médicale",
      organization: "WFME"
    },
    {
      name: "Prof. Lin Zhang",
      role: "Spécialiste Ingénierie",
      organization: "ABET International"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Équipe de Direction
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Leadership Mondial
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Une équipe d'experts internationaux dédiée à l'excellence dans l'accréditation 
              de l'enseignement supérieur à travers le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Direction Exécutive</h2>
            <p className="text-xl text-slate-600">Leaders expérimentés façonnant l'avenir de l'éducation mondiale</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-xl object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-slate-600 mb-3 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        {member.location}
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-slate-600"><strong>Formation:</strong> {member.credentials}</p>
                        <p className="text-sm text-slate-600"><strong>Expérience:</strong> {member.experience}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Mail className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer" />
                        <Linkedin className="w-4 h-4 text-slate-400 hover:text-blue-600 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Conseil Consultatif</h2>
            <p className="text-xl text-slate-600">Experts reconnus guidant nos stratégies globales</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{advisor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{advisor.role}</p>
                  <p className="text-slate-600">{advisor.organization}</p>
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

export default Team;
