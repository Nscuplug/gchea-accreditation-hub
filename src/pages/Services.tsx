
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, BookOpen, Globe, Zap, Users, CheckCircle, GraduationCap, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const accreditationTypes = [
    {
      type: "Institutional Accreditation",
      code: "IA",
      description: "Évaluation globale de l'institution éducative",
      duration: "5 ans",
      price: "€25,000 - €75,000",
      criteria: [
        "Gouvernance et leadership",
        "Qualité académique",
        "Infrastructure et ressources",
        "Corps professoral qualifié",
        "Résultats étudiants",
        "Engagement communautaire"
      ]
    },
    {
      type: "Program Accreditation",
      code: "PA",
      description: "Accréditation spécifique par programme d'études",
      duration: "3 ans",
      price: "€15,000 - €35,000",
      criteria: [
        "Curriculum et pédagogie",
        "Objectifs d'apprentissage",
        "Méthodes d'évaluation",
        "Qualification des enseignants",
        "Ressources spécialisées",
        "Employabilité des diplômés"
      ]
    },
    {
      type: "Research Accreditation",
      code: "RA",
      description: "Certification des activités de recherche",
      duration: "4 ans",
      price: "€20,000 - €50,000",
      criteria: [
        "Politique de recherche",
        "Publications scientifiques",
        "Financement recherche",
        "Infrastructure laboratoires",
        "Collaboration internationale",
        "Impact sociétal"
      ]
    }
  ];

  const nomenclatureStandards = [
    {
      level: "Licence (Bachelor)",
      ects: "180 ECTS",
      duration: "3 ans",
      code: "L",
      description: "Premier cycle universitaire - formation générale et spécialisée de base",
      specializations: ["Sciences", "Arts", "Commerce", "Ingénierie", "Santé"]
    },
    {
      level: "Master",
      ects: "120 ECTS",
      duration: "2 ans",
      code: "M",
      description: "Deuxième cycle - spécialisation approfondie et recherche",
      specializations: ["Recherche", "Professionnel", "MBA", "Ingénierie", "Médecine"]
    },
    {
      level: "Doctorat (PhD)",
      ects: "180+ ECTS",
      duration: "3-5 ans",
      code: "D",
      description: "Troisième cycle - recherche originale et contribution scientifique",
      specializations: ["Sciences", "Humanités", "Technologie", "Médecine", "Arts"]
    },
    {
      level: "Certificat Professionnel",
      ects: "30-60 ECTS",
      duration: "6-12 mois",
      code: "CP",
      description: "Formation courte spécialisée pour compétences professionnelles",
      specializations: ["IT", "Management", "Langues", "Artisanat", "Digital"]
    }
  ];

  const qualityFrameworks = [
    {
      name: "European Standards and Guidelines (ESG)",
      scope: "Europe",
      focus: "Assurance qualité dans l'enseignement supérieur européen",
      parts: ["Standards pour assurance qualité interne", "Standards pour assurance qualité externe", "Standards pour agences d'assurance qualité"]
    },
    {
      name: "Washington Accord",
      scope: "International",
      focus: "Reconnaissance mutuelle des diplômes d'ingénieur",
      parts: ["Accréditation programmes ingénierie", "Mobilité professionnelle", "Standards de compétences"]
    },
    {
      name: "AACSB Standards",
      scope: "Global",
      focus: "Accréditation des business schools",
      parts: ["Mission et gouvernance", "Participants", "Apprentissage et enseignement", "Développement académique et professionnel"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Services d'Accréditation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Excellence Éducative Certifiée
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Services complets d'accréditation et de certification pour l'enseignement supérieur mondial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="accreditation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="accreditation">Types d'Accréditation</TabsTrigger>
              <TabsTrigger value="nomenclature">Nomenclature des Diplômes</TabsTrigger>
              <TabsTrigger value="frameworks">Cadres de Qualité</TabsTrigger>
            </TabsList>
            
            <TabsContent value="accreditation" className="mt-8">
              <div className="space-y-8">
                {accreditationTypes.map((type, index) => (
                  <Card key={index} className="shadow-xl border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-slate-800">{type.type}</CardTitle>
                        <div className="text-right">
                          <Badge className="bg-blue-100 text-blue-800 mb-2">{type.code}</Badge>
                          <div className="text-lg font-semibold text-green-600">{type.price}</div>
                        </div>
                      </div>
                      <p className="text-slate-600 text-lg">{type.description}</p>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">Durée: {type.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-slate-800 mb-3">Critères d'Évaluation</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {type.criteria.map((criterion, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-slate-700">{criterion}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nomenclature" className="mt-8">
              <div className="space-y-8">
                {nomenclatureStandards.map((level, index) => (
                  <Card key={index} className="shadow-xl border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-slate-800">{level.level}</CardTitle>
                        <div className="text-right">
                          <Badge className="bg-purple-100 text-purple-800 mb-2">{level.code}</Badge>
                          <div className="text-lg font-semibold text-blue-600">{level.ects}</div>
                        </div>
                      </div>
                      <p className="text-slate-600 text-lg">{level.description}</p>
                      <Badge variant="outline">Durée: {level.duration}</Badge>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-slate-800 mb-3">Domaines de Spécialisation</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.specializations.map((spec, idx) => (
                          <Badge key={idx} variant="outline">{spec}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="frameworks" className="mt-8">
              <div className="space-y-8">
                {qualityFrameworks.map((framework, index) => (
                  <Card key={index} className="shadow-xl border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-slate-800">{framework.name}</CardTitle>
                        <Badge className="bg-green-100 text-green-800">{framework.scope}</Badge>
                      </div>
                      <p className="text-slate-600 text-lg">{framework.focus}</p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-slate-800 mb-3">Composantes Principales</h4>
                      <div className="space-y-2">
                        {framework.parts.map((part, idx) => (
                          <div key={idx} className="flex items-center">
                            <GraduationCap className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-slate-700">{part}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
