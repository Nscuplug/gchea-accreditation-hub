
// Accreditation verification service with file-based system
import { allAccreditations } from '../data/accreditations';

export interface AccreditationRecord {
  id: string;
  institutionName: string;
  institutionId: string;
  accreditationType: string;
  accreditationLevel: string;
  issueDate: string;
  expiryDate: string;
  verificationCode: string;
  blockchainHash: string;
  isValid: boolean;
  country: string;
  region: string;
  programsAccredited: string[];
  digitalSignature: string;
  htmlContent: string;
  cssStyles: string;
  timestamp: number;
}

class AccreditationService {
  private getAccreditations(): AccreditationRecord[] {
    // Return accreditations from file-based system
    return allAccreditations.map(acc => ({
      ...acc,
      timestamp: Date.now()
    }));
  }

  async verifyAccreditation(verificationCode: string): Promise<AccreditationRecord | null> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const accreditations = this.getAccreditations();
    const accreditation = accreditations.find(acc => 
      acc.verificationCode.toLowerCase() === verificationCode.toLowerCase()
    );

    return accreditation || null;
  }

  async verifyByInstitutionId(institutionId: string): Promise<AccreditationRecord[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const accreditations = this.getAccreditations();
    return accreditations.filter(acc => acc.institutionId === institutionId && acc.isValid);
  }

  async getAllAccreditations(): Promise<AccreditationRecord[]> {
    return this.getAccreditations();
  }

  generateAccreditationCode(institutionId: string): string {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = `GCHEA-ACC-${institutionId}-`;
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }
}

export const accreditationService = new AccreditationService();
