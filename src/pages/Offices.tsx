
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Users, Building, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Offices = () => {
  const offices = [
    {
      region: "Siège Social - Europe",
      city: "Genève",
      country: "Suisse",
      address: "Rue de la Paix 15, 1211 Genève",
      phone: "+41 22 123 4567",
      email: "geneva@gchea.org",
      staff: 45,
      coverage: ["Europe", "Afrique du Nord", "Asie Centrale"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&h=600&fit=crop",
      established: "1998",
      director: "Dr. Catherine Dubois"
    },
    {
      region: "Bureau Amériques",
      city: "São Paulo",
      country: "Brésil",
      address: "Avenida Paulista 1000, São Paulo - SP",
      phone: "+55 11 9876 5432",
      email: "americas@gchea.org",
      staff: 28,
      coverage: ["Amérique du Sud", "Amérique Centrale", "Caraïbes"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&h=600&fit=crop",
      established: "2003",
      director: "Dr. Maria Santos"
    },
    {
      region: "Bureau Asie-Pacifique",
      city: "Tokyo",
      country: "Japon",
      address: "Shibuya District, Tokyo 150-0002",
      phone: "+81 3 1234 5678",
      email: "asiapacific@gchea.org",
      staff: 32,
      coverage: ["Asie de l'Est", "Asie du Sud-Est", "Océanie"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&h=600&fit=crop",
      established: "2005",
      director: "Dr. Hiroshi Tanaka"
    },
    {
      region: "Bureau Amérique du Nord",
      city: "Toronto",
      country: "Canada",
      address: "Bay Street 200, Toronto ON M5H 2T6",
      phone: "+1 416 555 0123",
      email: "northamerica@gchea.org",
      staff: 22,
      coverage: ["États-Unis", "Canada", "Mexique"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&h=600&fit=crop",
      established: "2007",
      director: "Dr. Sarah Johnson"
    },
    {
      region: "Bureau Afrique",
      city: "Le Cap",
      country: "Afrique du Sud",
      address: "Waterfront District, Cape Town 8001",
      phone: "+27 21 123 4567",
      email: "africa@gchea.org",
      staff: 18,
      coverage: ["Afrique Sub-Saharienne", "Afrique de l'Est", "Afrique Australe"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&h=600&fit=crop",
      established: "2010",
      director: "Dr. Kwame Asante"
    },
    {
      region: "Bureau Moyen-Orient",
      city: "Dubaï",
      country: "Émirats Arabes Unis",
      address: "Dubai International Financial Centre",
      phone: "+971 4 123 4567",
      email: "middleeast@gchea.org",
      staff: 15,
      coverage: ["Golfe Persique", "Levant", "Asie de l'Ouest"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&h=600&fit=crop",
      established: "2012",
      director: "Dr. Ahmad Al-Rashid"
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
              <Building className="w-4 h-4 mr-2" />
              Bureaux Régionaux
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Présence Mondiale
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Six bureaux régionaux stratégiquement positionnés pour servir 
              les institutions d'enseignement supérieur dans le monde entier.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-slate-600">Bureaux Régionaux</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">160+</div>
                <div className="text-slate-600">Personnel Expert</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-slate-600">Support Global</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-slate-600">Pays Couverts</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos Bureaux</h2>
            <p className="text-xl text-slate-600">Une couverture complète pour l'excellence éducative mondiale</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={office.image} 
                    alt={`Bureau ${office.city}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-800">
                      Établi en {office.established}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">{office.region}</CardTitle>
                  <p className="text-lg text-blue-600 font-semibold">{office.city}, {office.country}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{office.address}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{office.email}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600">
                      <Users className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{office.staff} membres d'équipe</span>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Directeur Régional:</h4>
                      <p className="text-slate-600">{office.director}</p>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Zones de Couverture:</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.coverage.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {area}
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

export default Offices;
