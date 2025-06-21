
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Globe, Users, Award, Shield, HandShake } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Government = () => {
  const partnerships = [
    {
      country: "Union Européenne",
      type: "Accord Multilatéral",
      since: "2018",
      projects: 45,
      description: "Collaboration sur les standards éducatifs européens et la mobilité étudiante",
      focus: ["Erasmus+", "Horizon Europe", "Digital Education Action Plan"]
    },
    {
      country: "États-Unis",
      type: "Accord Bilatéral",
      since: "2015",
      projects: 28,
      description: "Partenariat pour l'accréditation des programmes STEM et l'innovation",
      focus: ["STEM Education", "Research Collaboration", "Quality Assurance"]
    },
    {
      country: "Chine",
      type: "Protocole d'Entente",
      since: "2020",
      projects: 32,
      description: "Coopération dans l'enseignement supérieur et l'assurance qualité",
      focus: ["Belt and Road Initiative", "Educational Exchange", "Quality Standards"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Building className="w-4 h-4 mr-2" />
              Collaborations Gouvernementales
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Partenariats Stratégiques
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Collaboration avec les gouvernements mondiaux pour harmoniser les standards éducatifs internationaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-slate-800">{partnership.country}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">{partnership.type}</Badge>
                  </div>
                  <p className="text-slate-600 text-lg">{partnership.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Depuis</h4>
                      <p className="text-slate-600">{partnership.since}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Projets Actifs</h4>
                      <p className="text-slate-600">{partnership.projects}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Domaines Prioritaires</h4>
                      <div className="space-y-1">
                        {partnership.focus.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="mr-2 mb-1">{area}</Badge>
                        ))}
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

export default Government;
