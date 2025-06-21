
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Target, TrendingUp, Award, Globe, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Benchmarking = () => {
  const benchmarkingTools = [
    {
      title: "Global University Ranking System (GURS)",
      description: "Système de classement mondial basé sur 50+ indicateurs de performance",
      features: ["Recherche & Innovation", "Excellence Pédagogique", "Impact International", "Employabilité"],
      users: 2800,
      countries: 120
    },
    {
      title: "Academic Quality Index (AQI)",
      description: "Indice de qualité académique pour évaluer les programmes d'études",
      features: ["Curriculum Design", "Faculty Qualifications", "Student Outcomes", "Infrastructure"],
      users: 1900,
      countries: 95
    },
    {
      title: "Innovation Capacity Assessment (ICA)",
      description: "Évaluation de la capacité d'innovation des institutions",
      features: ["R&D Investment", "Patents & Publications", "Industry Partnerships", "Startup Incubation"],
      users: 850,
      countries: 65
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Outils de Benchmarking
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Mesure de l'Excellence
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Des outils avancés pour évaluer et comparer la performance des institutions d'enseignement supérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {benchmarkingTools.map((tool, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">{tool.title}</CardTitle>
                  <p className="text-slate-600 text-lg">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-slate-800 mb-4">Indicateurs Clés</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="bg-slate-50 rounded-lg p-6">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-blue-600">{tool.users.toLocaleString()}</div>
                          <div className="text-slate-600">Institutions Utilisatrices</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">{tool.countries}</div>
                          <div className="text-slate-600">Pays Couverts</div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Benchmarking;
