
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Award, Globe, CheckCircle, Download, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Frameworks = () => {
  const frameworks = [
    {
      title: "GCHEA Global Quality Framework (GQF)",
      version: "2024.1",
      description: "Cadre complet pour l'assurance qualité dans l'enseignement supérieur mondial",
      categories: ["Gouvernance", "Académique", "Ressources", "Résultats"],
      adopters: 2800,
      countries: 85,
      lastUpdate: "Mars 2024",
      icon: Globe,
      documents: [
        { name: "Guide Complet GQF", size: "2.3 MB", type: "PDF" },
        { name: "Critères d'Évaluation", size: "1.8 MB", type: "PDF" },
        { name: "Outils d'Auto-évaluation", size: "950 KB", type: "Excel" }
      ]
    },
    {
      title: "Digital Education Standards (DES)",
      version: "3.0",
      description: "Standards pour l'accréditation des programmes d'éducation numérique et à distance",
      categories: ["Technologie", "Pédagogie", "Accessibilité", "Sécurité"],
      adopters: 1500,
      countries: 65,
      lastUpdate: "Janvier 2024",
      icon: Award,
      documents: [
        { name: "Standards DES 3.0", size: "1.9 MB", type: "PDF" },
        { name: "Checklist Technique", size: "720 KB", type: "PDF" },
        { name: "Guide d'Implémentation", size: "1.2 MB", type: "PDF" }
      ]
    },
    {
      title: "Professional Competency Framework (PCF)",
      version: "2.1",
      description: "Cadre pour l'évaluation des compétences professionnelles et de l'employabilité",
      categories: ["Compétences", "Évaluation", "Industrie", "Innovation"],
      adopters: 950,
      countries: 45,
      lastUpdate: "Novembre 2023",
      icon: Star,
      documents: [
        { name: "Référentiel PCF", size: "1.5 MB", type: "PDF" },
        { name: "Matrices de Compétences", size: "890 KB", type: "Excel" },
        { name: "Cas d'Usage", size: "1.1 MB", type: "PDF" }
      ]
    }
  ];

  const standards = [
    {
      code: "ISO 21001:2018",
      title: "Systèmes de Management des Organismes d'Éducation/Formation",
      status: "Adopté",
      compliance: "100%"
    },
    {
      code: "UNESCO Standards",
      title: "Cadre de Référence UNESCO pour l'Assurance Qualité",
      status: "Intégré",
      compliance: "100%"
    },
    {
      code: "Bologna Process",
      title: "Processus de Bologne - EHEA",
      status: "Aligné",
      compliance: "95%"
    },
    {
      code: "Washington Accord",
      title: "Accord de Washington pour l'Ingénierie",
      status: "Signataire",
      compliance: "100%"
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
              <BookOpen className="w-4 h-4 mr-2" />
              Cadres Éducatifs Mondiaux
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Standards & Frameworks
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Des cadres de référence internationaux pour garantir l'excellence 
              et la cohérence dans l'enseignement supérieur mondial.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,250+</div>
                <div className="text-slate-600">Institutions Adoptantes</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">195+</div>
                <div className="text-slate-600">Pays Couverts</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600">Frameworks Actifs</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.7%</div>
                <div className="text-slate-600">Taux de Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Frameworks */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frameworks Principaux</h2>
            <p className="text-xl text-slate-600">Standards de référence pour l'accréditation mondiale</p>
          </div>
          
          <div className="space-y-8">
            {frameworks.map((framework, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                        <framework.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-slate-800 mb-2">
                          {framework.title}
                        </CardTitle>
                        <Badge variant="outline" className="mb-2">
                          Version {framework.version}
                        </Badge>
                        <p className="text-slate-600">{framework.description}</p>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Catégories Principales</h4>
                      <div className="space-y-2">
                        {framework.categories.map((category, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-slate-700">{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Adoption Mondiale</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Institutions:</span>
                          <span className="font-semibold text-slate-800">{framework.adopters.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Pays:</span>
                          <span className="font-semibold text-slate-800">{framework.countries}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Dernière Mise à Jour:</span>
                          <span className="font-semibold text-slate-800">{framework.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Documents */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Documents Disponibles</h4>
                      <div className="space-y-2">
                        {framework.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-slate-50 rounded-lg p-2">
                            <div>
                              <div className="text-sm font-semibold text-slate-800">{doc.name}</div>
                              <div className="text-xs text-slate-600">{doc.size} • {doc.type}</div>
                            </div>
                            <Download className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
                          </div>
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

      {/* International Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Standards Internationaux</h2>
            <p className="text-xl text-slate-600">Alignement avec les normes mondiales reconnues</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{standard.code}</h3>
                      <p className="text-slate-600">{standard.title}</p>
                    </div>
                    <Badge className={
                      standard.status === 'Adopté' ? 'bg-green-100 text-green-800' :
                      standard.status === 'Intégré' ? 'bg-blue-100 text-blue-800' :
                      standard.status === 'Aligné' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }>
                      {standard.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Conformité:</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-slate-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: standard.compliance }}
                        ></div>
                      </div>
                      <span className="font-semibold text-slate-800">{standard.compliance}</span>
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

export default Frameworks;
