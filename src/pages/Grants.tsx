
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, Award, Globe, TrendingUp, Users, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Grants = () => {
  const grantPrograms = [
    {
      title: "Programme d'Excellence Académique",
      amount: "€2,000,000",
      duration: "3 ans",
      recipients: 150,
      description: "Subventions pour l'amélioration de la qualité éducative et l'innovation pédagogique",
      criteria: ["Excellence académique", "Innovation pédagogique", "Impact social", "Durabilité"],
      deadline: "31 Mars 2024"
    },
    {
      title: "Fonds de Recherche Internationale",
      amount: "€5,000,000",
      duration: "4 ans",
      recipients: 85,
      description: "Financement pour projets de recherche collaboratifs entre institutions mondiales",
      criteria: ["Collaboration internationale", "Innovation technologique", "Publications scientifiques", "Impact industriel"],
      deadline: "15 Mai 2024"
    },
    {
      title: "Initiative Transformation Numérique",
      amount: "€1,500,000",
      duration: "2 ans",
      recipients: 200,
      description: "Support pour la digitalisation des programmes et l'adoption de technologies éducatives",
      criteria: ["Stratégie numérique", "Formation du personnel", "Infrastructure IT", "Mesure d'impact"],
      deadline: "30 Juin 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Subventions de Recherche
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Financement de l'Innovation
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Programmes de financement pour soutenir l'excellence académique et l'innovation dans l'enseignement supérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">€45M</div>
                <div className="text-slate-600">Budget Total Annuel</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
                <div className="text-slate-600">Projets Financés</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">650+</div>
                <div className="text-slate-600">Institutions Bénéficiaires</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-slate-600">Taux de Réussite</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {grantPrograms.map((grant, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-slate-800">{grant.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{grant.amount}</div>
                      <div className="text-slate-600">{grant.duration}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg">{grant.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-slate-800 mb-3">Critères d'Éligibilité</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {grant.criteria.map((criterion, idx) => (
                          <div key={idx} className="flex items-center">
                            <Award className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-slate-700">{criterion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-slate-800">Date Limite</div>
                        <div className="text-blue-600">{grant.deadline}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-800">{grant.recipients}</div>
                        <div className="text-slate-600">Bénéficiaires Annuels</div>
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

export default Grants;
