
// Accreditation verification service for institutions
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
  private readonly STORAGE_KEY = 'gchea_accreditations';

  private initializeDatabase(): AccreditationRecord[] {
    const demoAccreditations: AccreditationRecord[] = [
      {
        id: '1',
        institutionName: 'Université Internationale de Technologie',
        institutionId: 'UIT-2024',
        accreditationType: 'Institutional Accreditation',
        accreditationLevel: 'Full Accreditation',
        issueDate: '2020-01-15',
        expiryDate: '2025-01-15',
        verificationCode: 'GCHEA-ACC-UIT-2024-789',
        blockchainHash: 'acc1q9xv2a8cf4h5n7m3k8j6p2r9w4e1t7y5u3i0o6l',
        isValid: true,
        country: 'France',
        region: 'Europe',
        programsAccredited: ['Computer Science', 'Artificial Intelligence', 'Data Science', 'Software Engineering'],
        digitalSignature: 'acc_sig_gchea_2024_uit_institutional',
        timestamp: Date.now(),
        htmlContent: `
          <div class="accreditation-certificate">
            <div class="header">
              <h1>GCHEA - COMMISSION MONDIALE D'ACCRÉDITATION</h1>
              <h2>CERTIFICAT D'ACCRÉDITATION INSTITUTIONNELLE</h2>
            </div>
            <div class="content">
              <p>Certifie que</p>
              <h3>UNIVERSITÉ INTERNATIONALE DE TECHNOLOGIE</h3>
              <p>a obtenu l'accréditation institutionnelle complète</p>
              <div class="details">
                <p><strong>Niveau:</strong> Accréditation Complète</p>
                <p><strong>Période:</strong> 15 janvier 2020 - 15 janvier 2025</p>
                <p><strong>Programmes accrédités:</strong></p>
                <ul>
                  <li>Informatique</li>
                  <li>Intelligence Artificielle</li>
                  <li>Science des Données</li>
                  <li>Génie Logiciel</li>
                </ul>
              </div>
              <div class="blockchain">
                <p>Hash Blockchain: acc1q9xv2a8cf4h5n7m3k8j6p2r9w4e1t7y5u3i0o6l</p>
                <p>Code de vérification: GCHEA-ACC-UIT-2024-789</p>
              </div>
            </div>
          </div>
        `,
        cssStyles: `
          .accreditation-certificate { 
            border: 5px solid #dc2626; 
            padding: 40px; 
            background: white;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          }
          .header h1 { color: #dc2626; font-size: 22px; text-align: center; margin-bottom: 10px; }
          .header h2 { color: #374151; font-size: 18px; text-align: center; margin-bottom: 30px; }
          .content { text-align: center; }
          .content h3 { color: #1e40af; font-size: 26px; margin: 20px 0; }
          .details { text-align: left; margin: 30px auto; max-width: 400px; }
          .details ul { list-style-type: disc; padding-left: 20px; }
          .blockchain { margin-top: 30px; font-size: 12px; color: #6b7280; }
        `
      },
      {
        id: '2',
        institutionName: 'École Supérieure de Commerce International',
        institutionId: 'ESCI-2024',
        accreditationType: 'Business Program Accreditation',
        accreditationLevel: 'Premium Accreditation',
        issueDate: '2021-06-01',
        expiryDate: '2026-06-01',
        verificationCode: 'GCHEA-ACC-ESCI-2024-456',
        blockchainHash: 'acc1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m',
        isValid: true,
        country: 'France',
        region: 'Europe',
        programsAccredited: ['MBA', 'Master in International Business', 'Executive Education'],
        digitalSignature: 'acc_sig_gchea_2024_esci_business',
        timestamp: Date.now(),
        htmlContent: `
          <div class="business-accreditation">
            <div class="seal">🏆</div>
            <h1>GLOBAL COMMISSION FOR HIGHER EDUCATION ACCREDITATIONS</h1>
            <h2>BUSINESS PROGRAM ACCREDITATION CERTIFICATE</h2>
            <div class="institution">
              <h3>ÉCOLE SUPÉRIEURE DE COMMERCE INTERNATIONAL</h3>
              <p class="level">PREMIUM ACCREDITATION</p>
            </div>
            <div class="programs">
              <h4>Programmes Accrédités:</h4>
              <ul>
                <li>Master of Business Administration (MBA)</li>
                <li>Master en Commerce International</li>
                <li>Formation Executive</li>
              </ul>
            </div>
            <div class="validity">
              <p>Valide du 1er juin 2021 au 1er juin 2026</p>
              <p>Blockchain: acc1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m</p>
            </div>
          </div>
        `,
        cssStyles: `
          .business-accreditation { 
            border: 3px solid #059669; 
            padding: 50px; 
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          }
          .seal { font-size: 50px; text-align: center; margin-bottom: 20px; }
          .business-accreditation h1 { color: #059669; font-size: 20px; text-align: center; }
          .business-accreditation h2 { color: #374151; font-size: 16px; text-align: center; margin-bottom: 30px; }
          .institution h3 { color: #1e40af; font-size: 24px; text-align: center; margin-bottom: 10px; }
          .level { color: #dc2626; font-size: 18px; font-weight: bold; text-align: center; }
          .programs { margin: 30px 0; text-align: center; }
          .programs ul { text-align: left; display: inline-block; }
          .validity { text-align: center; font-size: 14px; color: #6b7280; margin-top: 30px; }
        `
      },
      {
        id: '3',
        institutionName: 'Institut de Recherche Avancée',
        institutionId: 'IRA-2024',
        accreditationType: 'Research Institution Accreditation',
        accreditationLevel: 'Excellence Accreditation',
        issueDate: '2022-03-15',
        expiryDate: '2027-03-15',
        verificationCode: 'GCHEA-ACC-IRA-2024-123',
        blockchainHash: 'acc1q3r4t5y6u7i8o9p0l1k2j3h4g5f6d7s8a9z0x1c',
        isValid: true,
        country: 'France',
        region: 'Europe',
        programsAccredited: ['Doctoral Programs', 'Research Centers', 'Postdoctoral Studies'],
        digitalSignature: 'acc_sig_gchea_2024_ira_research',
        timestamp: Date.now(),
        htmlContent: `
          <div class="research-accreditation">
            <div class="emblem">🔬</div>
            <h1>GCHEA RESEARCH EXCELLENCE CERTIFICATION</h1>
            <h2>INSTITUT DE RECHERCHE AVANCÉE</h2>
            <div class="excellence-badge">
              <span>EXCELLENCE ACCREDITATION</span>
            </div>
            <div class="research-areas">
              <h4>Domaines de Recherche Accrédités:</h4>
              <div class="areas">
                <span>Sciences Cognitives</span>
                <span>Intelligence Artificielle</span>
                <span>Neurosciences</span>
                <span>Psychologie Cognitive</span>
              </div>
            </div>
            <div class="certification-info">
              <p>Certification valide: 15 mars 2022 - 15 mars 2027</p>
              <p>Blockchain Hash: acc1q3r4t5y6u7i8o9p0l1k2j3h4g5f6d7s8a9z0x1c</p>
            </div>
          </div>
        `,
        cssStyles: `
          .research-accreditation { 
            border: 4px solid #7c3aed; 
            padding: 60px; 
            background: linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%);
            position: relative;
          }
          .emblem { font-size: 60px; text-align: center; margin-bottom: 20px; }
          .research-accreditation h1 { color: #7c3aed; font-size: 22px; text-align: center; margin-bottom: 10px; }
          .research-accreditation h2 { color: #1e40af; font-size: 24px; text-align: center; margin-bottom: 20px; }
          .excellence-badge { text-align: center; margin: 20px 0; }
          .excellence-badge span { 
            background: #dc2626; color: white; padding: 10px 20px; 
            border-radius: 25px; font-weight: bold; font-size: 16px;
          }
          .research-areas { text-align: center; margin: 30px 0; }
          .areas { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 15px; }
          .areas span { 
            background: #e0e7ff; color: #3730a3; padding: 5px 15px; 
            border-radius: 15px; font-size: 14px;
          }
          .certification-info { text-align: center; font-size: 12px; color: #6b7280; margin-top: 30px; }
        `
      }
    ];

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(demoAccreditations));
    return demoAccreditations;
  }

  private getAccreditations(): AccreditationRecord[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      return this.initializeDatabase();
    }
    return JSON.parse(stored);
  }

  async verifyAccreditation(verificationCode: string): Promise<AccreditationRecord | null> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const accreditations = this.getAccreditations();
    const accreditation = accreditations.find(acc => 
      acc.verificationCode.toLowerCase() === verificationCode.toLowerCase()
    );

    if (accreditation) {
      accreditation.timestamp = Date.now();
      this.saveAccreditations(accreditations);
      return accreditation;
    }

    return null;
  }

  async verifyByInstitutionId(institutionId: string): Promise<AccreditationRecord[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const accreditations = this.getAccreditations();
    return accreditations.filter(acc => acc.institutionId === institutionId && acc.isValid);
  }

  async addAccreditation(accreditation: Omit<AccreditationRecord, 'id' | 'timestamp'>): Promise<AccreditationRecord> {
    const accreditations = this.getAccreditations();
    const newAccreditation: AccreditationRecord = {
      ...accreditation,
      id: (accreditations.length + 1).toString(),
      timestamp: Date.now()
    };
    
    accreditations.push(newAccreditation);
    this.saveAccreditations(accreditations);
    return newAccreditation;
  }

  private saveAccreditations(accreditations: AccreditationRecord[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accreditations));
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
