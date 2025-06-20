import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Shield, CheckCircle, AlertCircle, Globe, Calendar, Camera, QrCode, Lock, Building } from 'lucide-react';
import QRScanner from './QRScanner';
import AccreditationVerification from './AccreditationVerification';
import { documentService, DocumentRecord } from '../services/documentService';

const VerificationSection = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<DocumentRecord | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerification = async () => {
    if (!verificationCode.trim()) return;
    
    setIsVerifying(true);
    setError(null);
    
    try {
      const result = await documentService.verifyDocument(verificationCode);
      setVerificationResult(result);
      
      if (!result) {
        setError('Code de vérification non trouvé dans la blockchain GCHEA');
      }
    } catch (err) {
      setError('Erreur lors de la vérification. Veuillez réessayer.');
      console.error('Verification error:', err);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleQRScan = async (scannedCode: string) => {
    setVerificationCode(scannedCode);
    setShowScanner(false);
    
    setIsVerifying(true);
    setError(null);
    
    try {
      const result = await documentService.verifyDocument(scannedCode);
      setVerificationResult(result);
      
      if (!result) {
        setError('QR Code non valide ou document non trouvé');
      }
    } catch (err) {
      setError('Erreur lors de la vérification du QR code');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <section id="verification" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Vérification Blockchain
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Système de Vérification 
            <span className="text-blue-600"> Intégré GCHEA</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Vérifiez instantanément l'authenticité des documents académiques et l'accréditation 
            des institutions grâce à notre système blockchain sécurisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Verification Tabs */}
          <div className="space-y-8">
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="documents" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Documents
                </TabsTrigger>
                <TabsTrigger value="accreditation" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Accréditations
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
                  <CardHeader className="bg-gradient-to-br from-white to-slate-50">
                    <CardTitle className="text-2xl text-slate-800 flex items-center">
                      <Lock className="w-6 h-6 mr-3 text-blue-600" />
                      Vérification de Documents
                    </CardTitle>
                    <p className="text-slate-600">
                      Entrez le code de vérification ou scannez le QR code de votre document.
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                          Code de Vérification Blockchain
                        </label>
                        <div className="flex space-x-3">
                          <Input
                            type="text"
                            placeholder="Ex: GCHEA-2024-CERT-123456"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            className="text-lg py-6 border-slate-300 focus:border-blue-600"
                          />
                          <Button
                            onClick={() => setShowScanner(true)}
                            variant="outline"
                            className="px-4 py-6 border-slate-300 hover:bg-slate-50"
                          >
                            <QrCode className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          onClick={handleVerification}
                          disabled={!verificationCode || isVerifying}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                        >
                          {isVerifying ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              Vérification...
                            </>
                          ) : (
                            <>
                              <Shield className="w-5 h-5 mr-3" />
                              Vérifier Document
                            </>
                          )}
                        </Button>
                        
                        <Button
                          onClick={() => setShowScanner(true)}
                          variant="outline"
                          className="px-6 py-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                          <Camera className="w-5 h-5 mr-2" />
                          Scanner QR
                        </Button>
                      </div>

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center">
                            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                            <p className="text-red-700 font-medium">{error}</p>
                          </div>
                        </div>
                      )}

                      {verificationResult && (
                        <div className="mt-6 p-6 rounded-xl border-2 bg-green-50 border-green-200">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                            <h3 className="text-lg font-bold text-green-800">Document Authentifié</h3>
                          </div>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-700">Institution:</span>
                              <span className="text-slate-900">{verificationResult.institutionName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-700">Étudiant:</span>
                              <span className="text-slate-900">{verificationResult.studentName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-700">Diplôme:</span>
                              <span className="text-slate-900">{verificationResult.degree}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-700">Date d'obtention:</span>
                              <span className="text-slate-900">{verificationResult.graduationDate}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Display the certificate if verification is successful */}
                {verificationResult && (
                  <Card className="shadow-lg border-0 mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Certificat Vérifié
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div 
                        dangerouslySetInnerHTML={{ __html: verificationResult.htmlContent }}
                        style={{ all: 'initial' }}
                      />
                      <style dangerouslySetInnerHTML={{ __html: verificationResult.cssStyles }} />
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="accreditation">
                <AccreditationVerification />
              </TabsContent>
            </Tabs>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Sécurité Blockchain Avancée
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Cryptographie Avancée</h4>
                      <p className="text-slate-600">Chaque document est sécurisé par un hash blockchain unique et inaltérable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Reconnaissance Mondiale</h4>
                      <p className="text-slate-600">Système accepté dans plus de 120 pays membres GCHEA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Accès QR Sécurisé</h4>
                      <p className="text-slate-600">Vérification instantanée par scan QR avec caméra intégrée</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Protection Contre la Fraude
                </h3>
                <p className="mb-6 opacity-90">
                  Notre système blockchain garantit l'impossibilité de falsification des documents académiques.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Vérification en temps réel</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Traçabilité complète</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Sécurité maximale</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">2.5M+</div>
            <div className="text-slate-600">Documents Vérifiés</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-slate-600">Précision Blockchain</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">24h/24</div>
            <div className="text-slate-600">Disponibilité</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
            <div className="text-slate-600">Pays Sécurisés</div>
          </div>
        </div>
      </div>

      {/* QR Scanner Modal */}
      {showScanner && (
        <QRScanner 
          onScan={handleQRScan}
          onClose={() => setShowScanner(false)}
        />
      )}
    </section>
  );
};

export default VerificationSection;
