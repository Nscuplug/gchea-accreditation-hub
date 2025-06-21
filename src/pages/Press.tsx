
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Newspaper, Calendar, ExternalLink, Download, Award, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Press = () => {
  const pressReleases = [
    {
      title: "GCHEA Lance son Nouveau Framework d'Accréditation IA",
      date: "2024-03-15",
      type: "Communiqué de Presse",
      summary: "Introduction du premier standard mondial pour l'accréditation des programmes d'intelligence artificielle dans l'enseignement supérieur.",
      topics: ["Intelligence Artificielle", "Innovation", "Standards Globaux"],
      downloads: 2500
    },
    {
      title: "Partenariat Stratégique avec l'UNESCO pour l'Éducation 2030",
      date: "2024-02-28",
      type: "Annonce Officielle",
      summary: "Signature d'un accord majeur pour soutenir les objectifs de développement durable dans l'enseignement supérieur mondial.",
      topics: ["UNESCO", "Développement Durable", "Partenariat"],
      downloads: 1800
    },
    {
      title: "5000ème Institution Accréditée: Un Jalon Historique",
      date: "2024-01-20",
      type: "Milestone",
      summary: "GCHEA franchit une étape importante avec sa 5000ème institution accréditée, renforçant son impact mondial.",
      topics: ["Milestone", "Croissance", "Impact Global"],
      downloads: 3200
    }
  ];

  const mediaKit = [
    { name: "Logo GCHEA (Haute Résolution)", format: "PNG", size: "2.5 MB" },
    { name: "Kit Marque Complet", format: "ZIP", size: "15 MB" },
    { name: "Photos Direction", format: "ZIP", size: "8 MB" },
    { name: "Fact Sheet 2024", format: "PDF", size: "1.2 MB" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Communiqués de Presse
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Actualités & Médias
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Dernières nouvelles, annonces officielles et ressources médias de GCHEA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Communiqués Récents</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <Card key={index} className="shadow-lg border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{release.type}</Badge>
                        <span className="text-slate-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-slate-800">{release.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{release.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {release.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline">{topic}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{release.downloads} téléchargements</span>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Lire
                          </Button>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Kit Média</h2>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Ressources Presse</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mediaKit.map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                        <div>
                          <div className="font-semibold text-slate-800">{item.name}</div>
                          <div className="text-sm text-slate-600">{item.format} • {item.size}</div>
                        </div>
                        <Download className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-700" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">Contact Presse</h4>
                    <p className="text-sm text-slate-600">
                      media@gchea.org<br />
                      +41 22 123 4567<br />
                      Relations Publiques - Genève
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
