
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Globe, Award, Users, BookOpen, Shield, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UNUnesco = () => {
  const programs = [
    {
      title: "UNESCO Education 2030 Framework",
      description: "Alignment avec l'agenda mondial pour l'éducation durable",
      goals: ["SDG 4", "Quality Education", "Lifelong Learning", "Global Citizenship"],
      institutions: 3500,
      impact: "50M+ étudiants"
    },
    {
      title: "UN Global Compact Academic Network",
      description: "Intégration des principes de responsabilité sociale dans l'enseignement",
      goals: ["Human Rights", "Labour Standards", "Environment", "Anti-Corruption"],
      institutions: 1200,
      impact: "25M+ étudiants"
    },
    {
      title: "UNESCO Quality Assurance Partnership",
      description: "Collaboration pour les standards mondiaux d'assurance qualité",
      goals: ["Quality Standards", "Cross-Border Education", "Recognition", "Mobility"],
      institutions: 2800,
      impact: "40M+ étudiants"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Programmes ONU et UNESCO
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Impact Mondial
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Partenariats avec les Nations Unies et l'UNESCO pour un enseignement supérieur durable et inclusif.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">{program.title}</CardTitle>
                  <p className="text-slate-600 text-lg">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-slate-800 mb-3">Objectifs Stratégiques</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.goals.map((goal, idx) => (
                          <div key={idx} className="flex items-center">
                            <Target className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-slate-700">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-blue-600">{program.institutions.toLocaleString()}</div>
                        <div className="text-slate-600">Institutions Partenaires</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{program.impact}</div>
                        <div className="text-slate-600">Impact Global</div>
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

export default UNUnesco;
