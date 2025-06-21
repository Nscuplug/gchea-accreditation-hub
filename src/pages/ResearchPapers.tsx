
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Download, Calendar, Users, Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResearchPapers = () => {
  const papers = [
    {
      title: "Global Trends in Higher Education Quality Assurance: A Comparative Analysis",
      authors: ["Dr. Catherine Dubois", "Prof. Michael Richardson", "Dr. Elena Komnenos"],
      journal: "International Journal of Educational Excellence",
      date: "2024-02-15",
      downloads: 12450,
      citations: 85,
      abstract: "Cette étude examine les tendances mondiales en matière d'assurance qualité dans l'enseignement supérieur sur la période 2020-2024...",
      keywords: ["Quality Assurance", "Higher Education", "Global Trends", "Accreditation"]
    },
    {
      title: "Artificial Intelligence in Academic Accreditation: Opportunities and Challenges",
      authors: ["Dr. Hiroshi Tanaka", "Prof. Sarah Johnson", "Dr. Ahmad Al-Rashid"],
      journal: "AI & Education Quarterly",
      date: "2024-01-20",
      downloads: 9800,
      citations: 42,
      abstract: "L'intelligence artificielle transforme les processus d'accréditation académique, offrant de nouvelles possibilités d'évaluation...",
      keywords: ["Artificial Intelligence", "Accreditation", "Machine Learning", "Educational Technology"]
    },
    {
      title: "Cross-Border Education Quality: Framework for International Recognition",
      authors: ["Dr. Maria Santos", "Prof. James Mitchell", "Dr. Lin Zhang"],
      journal: "Global Education Review",
      date: "2023-12-10",
      downloads: 15600,
      citations: 120,
      abstract: "Le développement d'un cadre pour la reconnaissance internationale de l'éducation transfrontalière...",
      keywords: ["Cross-Border Education", "International Recognition", "Quality Framework", "Mobility"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Articles de Recherche
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Recherche & Publications
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Publications scientifiques de pointe sur l'assurance qualité et l'innovation dans l'enseignement supérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 mb-2">{paper.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-slate-600">
                    <span>{paper.authors.join(", ")}</span>
                    <Badge variant="outline">{paper.journal}</Badge>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(paper.date).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-slate-800 mb-2">Résumé</h4>
                      <p className="text-slate-600 mb-4">{paper.abstract}</p>
                      
                      <h4 className="font-semibold text-slate-800 mb-2">Mots-clés</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline">{keyword}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger PDF
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Voir Détails
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-blue-600">{paper.downloads.toLocaleString()}</div>
                        <div className="text-slate-600">Téléchargements</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{paper.citations}</div>
                        <div className="text-slate-600">Citations</div>
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

export default ResearchPapers;
