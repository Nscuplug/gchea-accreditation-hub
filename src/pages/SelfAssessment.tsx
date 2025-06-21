
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckSquare, Target, BarChart3, Award, Download, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SelfAssessment = () => {
  const assessmentTools = [
    {
      title: "Évaluation Institutionnelle Complète",
      description: "Auto-évaluation complète de l'institution selon les standards GCHEA",
      duration: "4-6 semaines",
      sections: 12,
      questions: 150,
      participants: "Direction, Corps enseignant, Étudiants",
      level: "Institutionnel"
    },
    {
      title: "Audit Programmatique",
      description: "Évaluation spécifique des programmes académiques",
      duration: "2-3 semaines",
      sections: 8,
      questions: 85,
      participants: "Responsables de programme, Enseignants",
      level: "Programme"
    },
    {
      title: "Évaluation Numérique",
      description: "Audit des capacités et infrastructure technologique",
      duration: "1-2 semaines",
      sections: 6,
      questions: 60,
      participants: "IT, Direction, Enseignants",
      level: "Technologique"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <CheckSquare className="w-4 h-4 mr-2" />
              Auto-évaluation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Outils d'Évaluation
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Plateformes d'auto-évaluation pour mesurer et améliorer la qualité de votre institution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {assessmentTools.map((tool, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-slate-800">{tool.title}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">{tool.level}</Badge>
                  </div>
                  <p className="text-slate-600 text-lg">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4">Détails de l'Évaluation</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Durée estimée:</span>
                          <span className="font-semibold text-slate-800">{tool.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Sections:</span>
                          <span className="font-semibold text-slate-800">{tool.sections}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Questions:</span>
                          <span className="font-semibold text-slate-800">{tool.questions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Participants requis:</span>
                          <span className="font-semibold text-slate-800">{tool.participants}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-800 mb-4">Actions Disponibles</h4>
                      <div className="space-y-3">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-2" />
                          Commencer l'Évaluation
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Guide Méthodologique
                        </Button>
                        <Button variant="outline" className="w-full">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Exemple de Rapport
                        </Button>
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

export default SelfAssessment;
