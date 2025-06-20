
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Award, Globe, Search, Filter, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Institutions = () => {
  const [selectedRegion, setSelectedRegion] = useState('Toutes');
  const [selectedType, setSelectedType] = useState('Tous');

  const institutions = [
    {
      name: "Université de Genève",
      country: "Suisse",
      region: "Europe",
      type: "Université Publique",
      accreditation: "Institutionnelle Complète",
      since: "2001",
      programs: 85,
      students: 17500,
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=200&h=200&fit=crop",
      specialties: ["Médecine", "Sciences", "Droit"]
    },
    {
      name: "MIT - Massachusetts Institute of Technology",
      country: "États-Unis",
      region: "Amérique du Nord",
      type: "Université Privée",
      accreditation: "Institutionnelle + Programmes",
      since: "1999",
      programs: 120,
      students: 11500,
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=200&h=200&fit=crop",
      specialties: ["Ingénierie", "Technologie", "Sciences"]
    },
    {
      name: "Universidade de São Paulo",
      country: "Brésil",
      region: "Amérique du Sud",
      type: "Université Publique",
      accreditation: "Institutionnelle Complète",
      since: "2005",
      programs: 200,
      students: 58000,
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200&h=200&fit=crop",
      specialties: ["Médecine", "Ingénierie", "Arts"]
    },
    {
      name: "University of Tokyo",
      country: "Japon",
      region: "Asie",
      type: "Université Publique",
      accreditation: "Institutionnelle + Programmes",
      since: "2003",
      programs: 95,
      students: 28000,
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=200&h=200&fit=crop",
      specialties: ["Sciences", "Technologie", "Médecine"]
    },
    {
      name: "London School of Economics",
      country: "Royaume-Uni",
      region: "Europe",
      type: "Université Publique",
      accreditation: "Programmes Spécialisés",
      since: "2002",
      programs: 45,
      students: 12000,
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=200&h=200&fit=crop",
      specialties: ["Économie", "Sciences Politiques", "Gestion"]
    },
    {
      name: "University of Cape Town",
      country: "Afrique du Sud",
      region: "Afrique",
      type: "Université Publique",
      accreditation: "Institutionnelle Complète",
      since: "2008",
      programs: 75,
      students: 26000,
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=200&h=200&fit=crop",
      specialties: ["Médecine", "Sciences", "Commerce"]
    }
  ];

  const regions = ['Toutes', 'Europe', 'Amérique du Nord', 'Amérique du Sud', 'Asie', 'Afrique', 'Océanie'];
  const types = ['Tous', 'Université Publique', 'Université Privée', 'Institut Technique', 'École de Commerce'];

  const filteredInstitutions = institutions.filter(inst => {
    const regionMatch = selectedRegion === 'Toutes' || inst.region === selectedRegion;
    const typeMatch = selectedType === 'Tous' || inst.type === selectedType;
    return regionMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Institutions Accréditées
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Excellence Mondiale Certifiée
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Découvrez les institutions d'enseignement supérieur qui ont obtenu 
              notre accréditation prestigieuse pour leur excellence académique.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-slate-600">Institutions Accréditées</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-slate-600">Pays Représentés</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">2.5M+</div>
                <div className="text-slate-600">Étudiants Impactés</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-slate-600">Programmes Certifiés</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                <Search className="w-6 h-6 mr-3 text-blue-600" />
                Rechercher des Institutions
              </h3>
              <Filter className="w-6 h-6 text-slate-400" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Région</label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Button
                      key={region}
                      variant={selectedRegion === region ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRegion(region)}
                      className="text-xs"
                    >
                      {region}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type d'Institution</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className="text-xs"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Institutions Partenaires ({filteredInstitutions.length})
            </h2>
            <p className="text-xl text-slate-600">Excellence académique reconnue mondialement</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredInstitutions.map((institution, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={institution.logo} 
                      alt={institution.name}
                      className="w-16 h-16 rounded-lg object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-800 mb-2">
                        {institution.name}
                      </CardTitle>
                      <div className="flex items-center text-slate-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{institution.country}</span>
                        <Badge variant="outline" className="ml-3 text-xs">
                          {institution.region}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Type:</span>
                      <span className="font-semibold text-slate-800">{institution.type}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-slate-600">Accréditation:</span>
                      <Badge className="bg-green-100 text-green-800">
                        {institution.accreditation}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-slate-600">Accréditée depuis:</span>
                      <span className="font-semibold text-slate-800">{institution.since}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center bg-slate-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">{institution.programs}</div>
                        <div className="text-xs text-slate-600">Programmes</div>
                      </div>
                      <div className="text-center bg-slate-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">{institution.students.toLocaleString()}</div>
                        <div className="text-xs text-slate-600">Étudiants</div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Spécialités:</h4>
                      <div className="flex flex-wrap gap-2">
                        {institution.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
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

      <Footer />
    </div>
  );
};

export default Institutions;
