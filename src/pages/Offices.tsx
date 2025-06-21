
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, MapPin, Phone, Mail, Clock, Users, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Offices = () => {
  const headquarters = {
    name: "Siège Social - Genève",
    address: "Place des Nations 14, 1211 Genève, Suisse",
    phone: "+41 22 917 9000",
    email: "headquarters@gchea.org",
    staff: 150,
    established: "2010",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=80&w=800&h=400&fit=crop",
    description: "Centre névralgique des opérations mondiales de GCHEA, supervisent les standards et politiques globales.",
    departments: [
      "Direction Générale",
      "Affaires Académiques",
      "Relations Internationales", 
      "Innovation et Technologie",
      "Qualité et Standards",
      "Ressources Humaines"
    ]
  };

  const regionalOffices = [
    {
      region: "Europe",
      name: "Bureau Régional Europe",
      city: "Paris, France",
      address: "75 Avenue Kléber, 75116 Paris, France",
      phone: "+33 1 44 37 14 00",
      email: "europe@gchea.org",
      director: "Dr. Marie Dubois",
      staff: 45,
      established: "2012",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=800&h=400&fit=crop",
      coverage: ["France", "Allemagne", "Italie", "Espagne", "Pays-Bas", "Belgique", "Suisse", "Autriche"],
      institutions: 520,
      students: "2.8M",
      specializations: ["Erasmus+ Coordination", "Bologna Process", "European Standards"]
    },
    {
      region: "Amérique du Nord",
      name: "Bureau Régional Amérique du Nord",
      city: "New York, États-Unis",
      address: "1 United Nations Plaza, New York, NY 10017",
      phone: "+1 212 963 1234",
      email: "northamerica@gchea.org",
      director: "Dr. Robert Chen",
      staff: 38,
      established: "2013",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&h=400&fit=crop",
      coverage: ["États-Unis", "Canada", "Mexique"],
      institutions: 380,
      students: "1.9M",
      specializations: ["STEM Education", "Business Schools", "Research Universities"]
    },
    {
      region: "Asie-Pacifique",
      name: "Bureau Régional Asie-Pacifique",
      city: "Singapour",
      address: "1 Raffles Place, Tower 2, Singapour 048616",
      phone: "+65 6224 1255",
      email: "asiapacific@gchea.org",
      director: "Dr. Chen Wei",
      staff: 52,
      established: "2016",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&h=400&fit=crop",
      coverage: ["Chine", "Japon", "Corée du Sud", "Australie", "Singapour", "Malaisie", "Thaïlande", "Inde"],
      institutions: 680,
      students: "4.2M",
      specializations: ["Technology Innovation", "Engineering Programs", "Digital Education"]
    },
    {
      region: "Amérique Latine",
      name: "Bureau Régional Amérique Latine",
      city: "São Paulo, Brésil",
      address: "Av. Paulista, 1374 - Bela Vista, São Paulo - SP, 01310-100",
      phone: "+55 11 3251 2555",
      email: "latinamerica@gchea.org",
      director: "Dr. Ana Silva",
      staff: 35,
      established: "2018",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&h=400&fit=crop",
      coverage: ["Brésil", "Argentine", "Chili", "Colombie", "Pérou", "Équateur", "Uruguay"],
      institutions: 280,
      students: "1.5M",
      specializations: ["Sustainability Programs", "Social Sciences", "Business Development"]
    },
    {
      region: "Moyen-Orient et Afrique du Nord",
      name: "Bureau Régional MENA",
      city: "Dubaï, Émirats Arabes Unis",
      address: "Dubai International Financial Centre, Gate Village 10, Dubaï",
      phone: "+971 4 364 4400",
      email: "mena@gchea.org",
      director: "Dr. Mohamed Al-Rashid",
      staff: 28,
      established: "2019",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&h=400&fit=crop",
      coverage: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Égypte", "Jordanie", "Liban", "Maroc"],
      institutions: 195,
      students: "980K",
      specializations: ["Islamic Studies", "Engineering", "Medical Sciences"]
    },
    {
      region: "Afrique Subsaharienne",
      name: "Bureau Régional Afrique",
      city: "Le Cap, Afrique du Sud",
      address: "2 Long Street, Cape Town City Centre, Le Cap 8001",
      phone: "+27 21 426 4260",
      email: "africa@gchea.org",
      director: "Dr. Kwame Asante",
      staff: 32,
      established: "2020",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&h=400&fit=crop",
      coverage: ["Afrique du Sud", "Nigeria", "Kenya", "Ghana", "Tanzanie", "Ouganda", "Rwanda"],
      institutions: 180,
      students: "750K",
      specializations: ["Development Studies", "Agricultural Sciences", "Public Health"]
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
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&h=600&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 mb-6">
              <Building className="w-4 h-4 mr-2" />
              Bureaux Régionaux
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Présence Mondiale
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Un réseau global de bureaux régionaux pour servir les institutions d'enseignement supérieur du monde entier.
            </p>
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Siège Social</h2>
            <p className="text-xl text-slate-600">Centre de commandement global à Genève</p>
          </div>
          
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={headquarters.image}
                  alt={headquarters.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl text-slate-800 mb-2">{headquarters.name}</CardTitle>
                  <Badge className="w-fit bg-gold-100 text-gold-800">Établi en {headquarters.established}</Badge>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Adresse</h4>
                        <p className="text-slate-600">{headquarters.address}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-slate-800">Téléphone</h4>
                          <p className="text-slate-600">{headquarters.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-slate-800">Personnel</h4>
                          <p className="text-slate-600">{headquarters.staff} employés</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-700">{headquarters.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Départements</h4>
                      <div className="flex flex-wrap gap-2">
                        {headquarters.departments.map((dept, idx) => (
                          <Badge key={idx} variant="outline">{dept}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Bureaux Régionaux</h2>
            <p className="text-xl text-slate-600">Expertise locale avec standards globaux</p>
          </div>
          
          <div className="space-y-12">
            {regionalOffices.map((office, index) => (
              <Card key={index} className="shadow-xl border-0 overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={office.image}
                      alt={office.city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{office.region}</Badge>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl text-slate-800">{office.name}</CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">{office.city}</p>
                      <p className="text-slate-600">Directeur: {office.director}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Contact</h4>
                            <div className="space-y-1 text-sm">
                              <p className="text-slate-600">{office.address}</p>
                              <p className="text-slate-600">{office.phone}</p>
                              <p className="text-blue-600">{office.email}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{office.staff}</div>
                              <div className="text-xs text-slate-600">Personnel</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{office.institutions}</div>
                              <div className="text-xs text-slate-600">Institutions</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{office.students}</div>
                              <div className="text-xs text-slate-600">Étudiants</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Pays Couverts</h4>
                            <div className="flex flex-wrap gap-1">
                              {office.coverage.map((country, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">{country}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">Spécialisations</h4>
                            <div className="space-y-1">
                              {office.specializations.map((spec, idx) => (
                                <div key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                  <span className="text-slate-600 text-sm">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offices;
