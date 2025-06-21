
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Cpu, Zap, Award, Globe, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIEducation = () => {
  const aiPrograms = [
    {
      title: "Intelligence Artificielle et Machine Learning",
      level: "Master",
      duration: "2 ans",
      modules: ["Deep Learning", "NLP", "Computer Vision", "Robotique"],
      institutions: 120,
      students: 8500
    },
    {
      title: "Data Science et Analytics",
      level: "Master",
      duration: "18 mois",
      modules: ["Big Data", "Statistics", "Data Mining", "Visualization"],
      institutions: 95,
      students: 6200
    },
    {
      title: "Éthique et Gouvernance de l'IA",
      level: "Certificat",
      duration: "6 mois",
      modules: ["AI Ethics", "Bias Detection", "Regulation", "Society Impact"],
      institutions: 200,
      students: 12000
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              IA dans l'Éducation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Avenir de l'Apprentissage
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Programmes d'avant-garde en intelligence artificielle et technologies éducatives innovantes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {aiPrograms.map((program, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-slate-800">{program.title}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">{program.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Durée</h4>
                      <p className="text-slate-600">{program.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Institutions</h4>
                      <p className="text-slate-600">{program.institutions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Étudiants</h4>
                      <p className="text-slate-600">{program.students.toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Modules</h4>
                      <p className="text-slate-600">{program.modules.length} modules</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Modules du Programme</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.modules.map((module, idx) => (
                        <Badge key={idx} variant="outline">{module}</Badge>
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

export default AIEducation;
