
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Shield, CheckCircle, AlertCircle, Globe, Calendar } from 'lucide-react';

const VerificationSection = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = async () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      // Mock verification result
      if (verificationCode.toLowerCase().includes('gchea')) {
        setVerificationResult({
          status: 'valid',
          institutionName: 'Université Internationale de Technologie',
          studentName: 'Marie Dubois',
          degree: 'Master en Intelligence Artificielle',
          graduationDate: '2023-06-15',
          certificateId: verificationCode,
          issueDate: '2023-07-01'
        });
      } else {
        setVerificationResult({
          status: 'invalid'
        });
      }
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <section id="verification" className="py-20 bg-gradient-to-br from-gchea-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gchea-purple text-white mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Vérification de Documents
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gchea-dark-purple mb-6">
            Vérifiez l'Authenticité de 
            <span className="text-gchea-bright-gold"> Vos Certificats</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Système de vérification sécurisé basé sur la blockchain pour valider instantanément 
            l'authenticité des certificats et diplômes émis par les institutions accréditées GCHEA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Verification Form */}
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-gchea-purple to-gchea-bright-gold"></div>
            <CardHeader className="bg-gradient-to-br from-white to-gchea-cream">
              <CardTitle className="text-2xl text-gchea-dark-purple flex items-center">
                <Search className="w-6 h-6 mr-3 text-gchea-purple" />
                Vérification de Certificat
              </CardTitle>
              <p className="text-gray-600">
                Entrez le code de vérification de votre certificat pour valider son authenticité.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gchea-dark-purple mb-2">
                    Code de Vérification
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: GCHEA-2024-CERT-123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="text-lg py-6 border-gchea-purple/30 focus:border-gchea-purple"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Le code se trouve généralement en bas de votre certificat
                  </p>
                </div>

                <Button
                  onClick={handleVerification}
                  disabled={!verificationCode || isVerifying}
                  className="w-full bg-gchea-purple hover:bg-gchea-dark-purple text-white py-6 text-lg font-semibold"
                >
                  {isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Vérification en cours...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5 mr-3" />
                      Vérifier le Certificat
                    </>
                  )}
                </Button>

                {/* Verification Result */}
                {verificationResult && (
                  <div className={`mt-6 p-6 rounded-xl border-2 ${
                    verificationResult.status === 'valid' 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    {verificationResult.status === 'valid' ? (
                      <>
                        <div className="flex items-center mb-4">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                          <h3 className="text-lg font-bold text-green-800">Certificat Valide</h3>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Institution:</span>
                            <span className="text-gray-900">{verificationResult.institutionName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Étudiant:</span>
                            <span className="text-gray-900">{verificationResult.studentName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Diplôme:</span>
                            <span className="text-gray-900">{verificationResult.degree}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Date d'obtention:</span>
                            <span className="text-gray-900">{verificationResult.graduationDate}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center mb-4">
                          <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                          <h3 className="text-lg font-bold text-red-800">Certificat Non Valide</h3>
                        </div>
                        <p className="text-red-700">
                          Le code de vérification saisi ne correspond à aucun certificat dans notre base de données.
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Information Panel */}
          <div className="space-y-8">
            <Card className="border-gchea-purple/20 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gchea-dark-purple mb-6">
                  Système de Vérification Blockchain
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gchea-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gchea-dark-purple">Sécurité Maximale</h4>
                      <p className="text-gray-600">Technologie blockchain pour une vérification infalsifiable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gchea-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gchea-dark-purple">Reconnaissance Mondiale</h4>
                      <p className="text-gray-600">Certificats reconnus dans plus de 120 pays</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gchea-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gchea-dark-purple">Vérification Instantanée</h4>
                      <p className="text-gray-600">Résultats de vérification en temps réel 24h/24, 7j/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gchea-bright-gold to-gchea-gold text-black border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Besoin d'Aide avec la Vérification ?
                </h3>
                <p className="mb-6 opacity-90">
                  Notre équipe de support est disponible pour vous aider avec le processus de vérification.
                </p>
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white"
                  onClick={() => window.location.href = 'mailto:support@gchea.org'}
                >
                  Contacter le Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gchea-purple/10">
            <div className="text-3xl font-bold text-gchea-purple mb-2">2.5M+</div>
            <div className="text-gray-600">Certificats Vérifiés</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gchea-purple/10">
            <div className="text-3xl font-bold text-gchea-purple mb-2">99.9%</div>
            <div className="text-gray-600">Précision</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gchea-purple/10">
            <div className="text-3xl font-bold text-gchea-purple mb-2">24h/24</div>
            <div className="text-gray-600">Disponibilité</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gchea-purple/10">
            <div className="text-3xl font-bold text-gchea-purple mb-2">120+</div>
            <div className="text-gray-600">Pays Couverts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
