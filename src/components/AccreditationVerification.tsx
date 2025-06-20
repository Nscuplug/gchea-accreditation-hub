
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Shield, CheckCircle, AlertCircle, Building, Calendar } from 'lucide-react';
import { accreditationService, AccreditationRecord } from '../services/accreditationService';

const AccreditationVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<AccreditationRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerification = async () => {
    if (!verificationCode.trim()) return;
    
    setIsVerifying(true);
    setError(null);
    
    try {
      const result = await accreditationService.verifyAccreditation(verificationCode);
      setVerificationResult(result);
      
      if (!result) {
        setError('Code d\'accréditation non trouvé dans la base GCHEA');
      }
    } catch (err) {
      setError('Erreur lors de la vérification. Veuillez réessayer.');
      console.error('Accreditation verification error:', err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-2xl border-0 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-green-600 to-emerald-700"></div>
        <CardHeader className="bg-gradient-to-br from-white to-slate-50">
          <CardTitle className="text-2xl text-slate-800 flex items-center">
            <Building className="w-6 h-6 mr-3 text-green-600" />
            Vérification d'Accréditation
          </CardTitle>
          <p className="text-slate-600">
            Vérifiez l'accréditation institutionnelle d'un établissement d'enseignement supérieur.
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Code de Vérification d'Accréditation
              </label>
              <div className="flex space-x-3">
                <Input
                  type="text"
                  placeholder="Ex: GCHEA-ACC-UIT-2024-789"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="text-lg py-6 border-slate-300 focus:border-green-600"
                />
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Le code d'accréditation se trouve sur le certificat d'accréditation de l'institution
              </p>
            </div>

            <Button
              onClick={handleVerification}
              disabled={!verificationCode || isVerifying}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold"
            >
              {isVerifying ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Vérification en cours...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-3" />
                  Vérifier Accréditation
                </>
              )}
            </Button>

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
                  <h3 className="text-lg font-bold text-green-800">Accréditation Vérifiée</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Institution:</span>
                    <span className="text-slate-900">{verificationResult.institutionName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Type d'Accréditation:</span>
                    <span className="text-slate-900">{verificationResult.accreditationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Niveau:</span>
                    <Badge className="bg-green-600 text-white">{verificationResult.accreditationLevel}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Période:</span>
                    <span className="text-slate-900">{verificationResult.issueDate} - {verificationResult.expiryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Pays:</span>
                    <span className="text-slate-900">{verificationResult.country}</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Programmes Accrédités:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {verificationResult.programsAccredited.map((program, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Hash Blockchain:</span>
                    <span className="text-slate-900 font-mono text-xs">{verificationResult.blockchainHash}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Display the certificate if verification is successful */}
      {verificationResult && (
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Certificat d'Accréditation
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
    </div>
  );
};

export default AccreditationVerification;
