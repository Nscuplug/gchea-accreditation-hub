
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Globe, Award, Users, Building, Landmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Landmark className="w-4 h-4 mr-2" />
              À Propos de GCHEA
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Notre Mission & Vision
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Le Conseil Mondial pour l'Accréditation de l'Enseignement Supérieur (GCHEA) 
              est l'autorité mondiale de référence pour l'excellence académique.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                Établir et maintenir les normes mondiales d'excellence dans l'enseignement supérieur, 
                en garantissant la qualité, l'intégrité et la reconnaissance internationale des 
                institutions académiques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Certification de qualité mondiale</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Reconnaissance internationale</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Standards d'excellence</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&h=600&fit=crop" 
                alt="Mission GCHEA"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&h=600&fit=crop" 
                alt="Vision GCHEA"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Vision</h2>
              <p className="text-lg text-slate-600 mb-6">
                Créer un écosystème éducatif mondial unifié où l'excellence académique 
                transcende les frontières, permettant aux étudiants et institutions 
                d'atteindre leur plein potentiel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Éducation accessible à tous</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Institutions de classe mondiale</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Harmonisation des standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nos Réalisations</h2>
            <p className="text-xl text-blue-100">Plus de 25 ans d'excellence dans l'accréditation mondiale</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">5000+</div>
                <div className="text-blue-100">Institutions Accréditées</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">120+</div>
                <div className="text-blue-100">Pays Partenaires</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">2.5M+</div>
                <div className="text-blue-100">Diplômes Certifiés</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-blue-100">Années d'Expérience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
