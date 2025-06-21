
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, TrendingUp, Award, Users, Globe, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Business = () => {
  const businessPrograms = [
    {
      title: "Master en Administration des Affaires (MBA)",
      duration: "2 ans",
      credits: "120 ECTS",
      specializations: ["Finance", "Marketing", "Stratégie", "Innovation"],
      institutions: 450,
      graduates: 15000
    },
    {
      title: "Master en Commerce International",
      duration: "18 mois",
      credits: "90 ECTS",
      specializations: ["Import/Export", "Négociation", "Logistique", "E-commerce"],
      institutions: 320,
      graduates: 8500
    },
    {
      title: "Master en Finance d'Entreprise",
      duration: "2 ans",
      credits: "120 ECTS",
      specializations: ["Analyse Financière", "Investissement", "Risk Management", "Banking"],
      institutions: 280,
      graduates: 6200
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Commerce et Gestion
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Excellence en Business
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Accréditation mondiale pour les programmes de commerce, gestion et administration des affaires.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Programmes Accrédités</h2>
            <p className="text-xl text-slate-600">Standards internationaux pour l'enseignement commercial</p>
          </div>
          
          <div className="space-y-8">
            {businessPrograms.map((program, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Durée</h4>
                      <p className="text-slate-600">{program.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Crédits</h4>
                      <p className="text-slate-600">{program.credits}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Institutions</h4>
                      <p className="text-slate-600">{program.institutions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Diplômés</h4>
                      <p className="text-slate-600">{program.graduates.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Spécialisations</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="outline">{spec}</Badge>
                      ))}
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

export default Business;
