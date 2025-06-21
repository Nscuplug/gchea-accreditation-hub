
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Mail, Phone, MapPin, Award, Star, BookOpen, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const executiveTeam = [
    {
      name: "Dr. Elena Marchetti",
      role: "Directrice Générale",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&h=400&fit=crop&crop=face",
      background: "Ancienne Directrice UNESCO Education, PhD Stanford University",
      experience: "25 ans en politique éducative internationale",
      specialties: ["Politique Éducative", "Relations Internationales", "Gouvernance"],
      email: "e.marchetti@gchea.org",
      languages: ["Français", "Anglais", "Italien", "Espagnol"]
    },
    {
      name: "Prof. James Richardson",
      role: "Directeur Académique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&crop=face",
      background: "Ex-Vice-Recteur Cambridge, Expert accréditation AACSB",
      experience: "30 ans en enseignement supérieur",
      specialties: ["Accréditation", "Qualité Académique", "Standards Éducatifs"],
      email: "j.richardson@gchea.org",
      languages: ["Anglais", "Français", "Allemand"]
    },
    {
      name: "Dr. Priya Sharma",
      role: "Directrice Innovation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=crop&crop=face",
      background: "PhD MIT, Expert IA éducative, 15 brevets technologiques",
      experience: "20 ans en EdTech et innovation",
      specialties: ["Intelligence Artificielle", "EdTech", "Innovation Pédagogique"],
      email: "p.sharma@gchea.org",
      languages: ["Anglais", "Hindi", "Français", "Mandarin"]
    },
    {
      name: "Dr. Mohamed Al-Rashid",
      role: "Directeur Régional MENA",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop&crop=face",
      background: "Ancien Recteur Université du Caire, Expert éducation arabe",
      experience: "22 ans en administration universitaire",
      specialties: ["Éducation MENA", "Administration", "Partenariats Régionaux"],
      email: "m.alrashid@gchea.org",
      languages: ["Arabe", "Anglais", "Français"]
    }
  ];

  const regionalDirectors = [
    {
      name: "Dr. Ana Silva",
      role: "Directrice Amérique Latine",
      region: "Brésil, Argentine, Chili, Colombie",
      institutions: 280,
      languages: ["Espagnol", "Portugais", "Anglais"],
      focus: "Développement des standards éducatifs latino-américains"
    },
    {
      name: "Dr. Chen Wei",
      role: "Directeur Asie-Pacifique",
      region: "Chine, Japon, Corée, Australie",
      institutions: 450,
      languages: ["Mandarin", "Japonais", "Anglais"],
      focus: "Innovation technologique et partenariats asiatiques"
    },
    {
      name: "Dr. Kwame Asante",
      role: "Directeur Afrique",
      region: "Ghana, Nigeria, Kenya, Afrique du Sud",
      institutions: 180,
      languages: ["Anglais", "Français", "Swahili"],
      focus: "Développement éducatif et accès à l'enseignement supérieur"
    },
    {
      name: "Dr. Marie Dubois",
      role: "Directrice Europe",
      region: "France, Allemagne, Italie, Pays-Bas",
      institutions: 520,
      languages: ["Français", "Allemand", "Anglais"],
      focus: "Harmonisation des standards européens et mobilité étudiante"
    }
  ];

  const advisoryBoard = [
    {
      name: "Prof. Sir David Williams",
      role: "Président du Conseil Consultatif",
      affiliation: "Oxford University",
      expertise: "Gouvernance Universitaire"
    },
    {
      name: "Dr. Fatima Al-Zahra",
      role: "Conseillère UNESCO",
      affiliation: "UNESCO Paris",
      expertise: "Politiques Éducatives Mondiales"
    },
    {
      name: "Prof. Hiroshi Tanaka",
      role: "Expert Innovation",
      affiliation: "Tokyo Institute of Technology",
      expertise: "Technologies Éducatives"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Experte Qualité",
      affiliation: "Harvard Business School",
      expertise: "Assurance Qualité et Accréditation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&h=600&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Équipe de Direction
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Leadership Mondial
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Une équipe d'experts reconnus internationalement dirigeant la transformation de l'éducation mondiale.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Direction Exécutive</h2>
            <p className="text-xl text-slate-600">Leaders visionnaires de l'accréditation mondiale</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {executiveTeam.map((member, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                      <Badge className="bg-blue-100 text-blue-800 mb-3">{member.role}</Badge>
                      <p className="text-slate-700 mb-2">{member.background}</p>
                      <p className="text-slate-600 mb-4">{member.experience}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-1">Spécialités</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{specialty}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-1">Langues</h4>
                          <p className="text-slate-600 text-sm">{member.languages.join(', ')}</p>
                        </div>
                        
                        <div className="flex items-center text-blue-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <span className="text-sm">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Directors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Directeurs Régionaux</h2>
            <p className="text-xl text-slate-600">Leadership décentralisé pour un impact global</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regionalDirectors.map((director, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{director.name}</CardTitle>
                  <Badge className="w-fit bg-green-100 text-green-800">{director.role}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Région de Couverture</h4>
                      <p className="text-slate-600">{director.region}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Institutions</h4>
                        <p className="text-slate-600">{director.institutions}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Langues</h4>
                        <p className="text-slate-600 text-sm">{director.languages.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Focus Stratégique</h4>
                      <p className="text-slate-600">{director.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Conseil Consultatif</h2>
            <p className="text-xl text-slate-600">Experts mondiaux guidant notre vision stratégique</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{advisor.name}</CardTitle>
                  <Badge className="w-fit bg-purple-100 text-purple-800">{advisor.role}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Affiliation</h4>
                      <p className="text-slate-600">{advisor.affiliation}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Domaine d'Expertise</h4>
                      <p className="text-slate-600">{advisor.expertise}</p>
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

export default Team;
