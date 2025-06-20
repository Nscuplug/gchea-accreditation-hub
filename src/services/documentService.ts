
// Enhanced Document verification service with expanded database
export interface DocumentRecord {
  id: string;
  blockchainHash: string;
  institutionName: string;
  studentName: string;
  degree: string;
  graduationDate: string;
  issueDate: string;
  verificationCode: string;
  isValid: boolean;
  certificateType: string;
  digitalSignature: string;
  timestamp: number;
  htmlContent: string;
  cssStyles: string;
  institutionId: string;
}

class DocumentService {
  private readonly STORAGE_KEY = 'gchea_documents';

  private initializeDatabase(): DocumentRecord[] {
    const demoDocuments: DocumentRecord[] = [
      {
        id: '1',
        blockchainHash: 'bc1q9xv2a8cf4h5n7m3k8j6p2r9w4e1t7y5u3i0o6l',
        institutionName: 'Université Internationale de Technologie',
        studentName: 'Marie Dubois',
        degree: 'Master en Intelligence Artificielle',
        graduationDate: '2023-06-15',
        issueDate: '2023-07-01',
        verificationCode: 'GCHEA-2024-CERT-MX4K7P9Q2',
        isValid: true,
        certificateType: 'Master\'s Degree',
        digitalSignature: 'sig_gchea_2024_ai_master_456789',
        timestamp: Date.now(),
        institutionId: 'UIT-2024',
        htmlContent: `
          <div class="certificate">
            <h1>UNIVERSITÉ INTERNATIONALE DE TECHNOLOGIE</h1>
            <h2>CERTIFICAT DE DIPLÔME</h2>
            <p>Certifie que <strong>Marie Dubois</strong></p>
            <p>a obtenu avec succès le diplôme de</p>
            <h3>MASTER EN INTELLIGENCE ARTIFICIELLE</h3>
            <p>Délivré le 15 juin 2023</p>
            <div class="signatures">
              <p>Directeur: Prof. Jean Martin</p>
              <p>Code blockchain: bc1q9xv2a8cf4h5n7m3k8j6p2r9w4e1t7y5u3i0o6l</p>
            </div>
          </div>
        `,
        cssStyles: `
          .certificate { 
            border: 5px solid #1e40af; 
            padding: 40px; 
            text-align: center; 
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            font-family: 'Times New Roman', serif;
          }
          .certificate h1 { color: #1e40af; font-size: 24px; margin-bottom: 20px; }
          .certificate h2 { color: #374151; font-size: 20px; margin-bottom: 30px; }
          .certificate h3 { color: #dc2626; font-size: 18px; margin: 20px 0; }
          .signatures { margin-top: 40px; font-size: 14px; }
        `
      },
      {
        id: '2',
        blockchainHash: 'bc1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m',
        institutionName: 'École Supérieure de Commerce International',
        studentName: 'Pierre Martin',
        degree: 'MBA en Management Global',
        graduationDate: '2023-12-10',
        issueDate: '2024-01-15',
        verificationCode: 'GCHEA-2024-CERT-N8V5X2W9E',
        isValid: true,
        certificateType: 'MBA',
        digitalSignature: 'sig_gchea_2024_mba_global_123456',
        timestamp: Date.now(),
        institutionId: 'ESCI-2024',
        htmlContent: `
          <div class="mba-certificate">
            <div class="header">
              <h1>ÉCOLE SUPÉRIEURE DE COMMERCE INTERNATIONAL</h1>
              <h2>MASTER OF BUSINESS ADMINISTRATION</h2>
            </div>
            <div class="content">
              <p>This is to certify that</p>
              <h3>PIERRE MARTIN</h3>
              <p>has successfully completed the requirements for</p>
              <h4>MBA EN MANAGEMENT GLOBAL</h4>
              <p>Awarded on December 10, 2023</p>
            </div>
            <div class="footer">
              <p>Blockchain Hash: bc1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m</p>
            </div>
          </div>
        `,
        cssStyles: `
          .mba-certificate { 
            border: 3px solid #059669; 
            padding: 50px; 
            background: white;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .header h1 { color: #059669; font-size: 26px; text-align: center; }
          .header h2 { color: #374151; font-size: 18px; text-align: center; margin-bottom: 40px; }
          .content { text-align: center; margin: 40px 0; }
          .content h3 { color: #dc2626; font-size: 28px; margin: 20px 0; }
          .content h4 { color: #1f2937; font-size: 20px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #6b7280; }
        `
      },
      {
        id: '3',
        blockchainHash: 'bc1q3r4t5y6u7i8o9p0l1k2j3h4g5f6d7s8a9z0x1c',
        institutionName: 'Institut de Recherche Avancée',
        studentName: 'Sophie Laurent',
        degree: 'Doctorat en Sciences Cognitives',
        graduationDate: '2024-03-20',
        issueDate: '2024-04-05',
        verificationCode: 'GCHEA-2024-CERT-Q7B4N6M3K',
        isValid: true,
        certificateType: 'PhD',
        digitalSignature: 'sig_gchea_2024_phd_cognitive_789012',
        timestamp: Date.now(),
        institutionId: 'IRA-2024',
        htmlContent: `
          <div class="phd-certificate">
            <div class="seal">🎓</div>
            <h1>INSTITUT DE RECHERCHE AVANCÉE</h1>
            <h2>DIPLÔME DE DOCTORAT</h2>
            <div class="recipient">
              <p>Conféré à</p>
              <h3>Sophie Laurent</h3>
              <p>qui a satisfait à toutes les exigences pour le</p>
              <h4>DOCTORAT EN SCIENCES COGNITIVES</h4>
              <p>Soutenance: 20 mars 2024</p>
            </div>
            <div class="blockchain">
              <p>Sécurisé par blockchain GCHEA</p>
              <small>bc1q3r4t5y6u7i8o9p0l1k2j3h4g5f6d7s8a9z0x1c</small>
            </div>
          </div>
        `,
        cssStyles: `
          .phd-certificate { 
            border: 4px double #7c3aed; 
            padding: 60px; 
            background: #fefce8;
            position: relative;
          }
          .seal { font-size: 60px; text-align: center; margin-bottom: 20px; }
          .phd-certificate h1 { color: #7c3aed; font-size: 24px; text-align: center; }
          .phd-certificate h2 { color: #374151; font-size: 18px; text-align: center; margin-bottom: 30px; }
          .recipient { text-align: center; margin: 30px 0; }
          .recipient h3 { color: #dc2626; font-size: 32px; margin: 15px 0; }
          .recipient h4 { color: #1f2937; font-size: 20px; margin: 15px 0; }
          .blockchain { text-align: center; margin-top: 40px; font-size: 12px; color: #6b7280; }
        `
      }
      {
  id: '4',
  blockchainHash: 'bc1qphdcoagulation2025rnp',
  institutionName: 'New States Continental University',
  studentName: 'Ram Niwas Patarwal',
  degree: 'Doctor of Philosophy (Ph.D.) in Coagulation Profile',
  graduationDate: '2025-05-31',
  issueDate: '2025-06-01',
  verificationCode: 'GCHEA-2025-CERT-RNP-PHD-COAG',
  isValid: true,
  certificateType: 'Doctoral Degree',
  digitalSignature: 'sig_gchea_2025_nscu_phd_coag',
  timestamp: Date.now(),
  institutionId: 'NSCU-2025',
  htmlContent: `
    <div class="phd-certificate">
      <h1>NEW STATES CONTINENTAL UNIVERSITY</h1>
      <h2>DOCTORAL DEGREE CERTIFICATE</h2>
      <p>This is to certify that</p>
      <h3>RAM NIWAS PATARWAL</h3>
      <p>has fulfilled all academic requirements for the award of the degree</p>
      <h4>DOCTOR OF PHILOSOPHY (Ph.D.)</h4>
      <p>in</p>
      <h4>COAGULATION PROFILE</h4>
      <p>Conferred on: 31 May 2025</p>
      <p>Blockchain Hash: bc1qphdcoagulation2025rnp</p>
      <p>Verification Code: GCHEA-2025-CERT-RNP-PHD-COAG</p>
    </div>
  `,
  cssStyles: `
    .phd-certificate {
      border: 4px double #1d4ed8;
      padding: 60px;
      background: #f0fdfa;
      text-align: center;
      font-family: 'Georgia', serif;
    }
    .phd-certificate h1 {
      color: #1d4ed8;
      font-size: 26px;
      margin-bottom: 15px;
    }
    .phd-certificate h2 {
      color: #334155;
      font-size: 22px;
      margin-bottom: 25px;
    }
    .phd-certificate h3 {
      color: #dc2626;
      font-size: 28px;
      margin: 20px 0;
    }
    .phd-certificate h4 {
      color: #1f2937;
      font-size: 20px;
      margin: 10px 0;
    }
    .phd-certificate p {
      font-size: 16px;
      margin: 10px 0;
      color: #374151;
    }
  `
}

    ];

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(demoDocuments));
    return demoDocuments;
  }

  private getDocuments(): DocumentRecord[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      return this.initializeDatabase();
    }
    return JSON.parse(stored);
  }

  async verifyDocument(verificationCode: string): Promise<DocumentRecord | null> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const documents = this.getDocuments();
    const document = documents.find(doc => 
      doc.verificationCode.toLowerCase() === verificationCode.toLowerCase()
    );

    if (document) {
      document.timestamp = Date.now();
      this.saveDocuments(documents);
      return document;
    }

    return null;
  }

  async verifyByBlockchainHash(hash: string): Promise<DocumentRecord | null> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const documents = this.getDocuments();
    return documents.find(doc => doc.blockchainHash === hash) || null;
  }

  async addDocument(document: Omit<DocumentRecord, 'id' | 'timestamp'>): Promise<DocumentRecord> {
    const documents = this.getDocuments();
    const newDocument: DocumentRecord = {
      ...document,
      id: (documents.length + 1).toString(),
      timestamp: Date.now()
    };
    
    documents.push(newDocument);
    this.saveDocuments(documents);
    return newDocument;
  }

  private saveDocuments(documents: DocumentRecord[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(documents));
  }

  async getAllDocuments(): Promise<DocumentRecord[]> {
    return this.getDocuments();
  }

  generateBlockchainHash(): string {
    const chars = '0123456789abcdef';
    let hash = 'bc1q';
    for (let i = 0; i < 38; i++) {
      hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
  }

  generateVerificationCode(): string {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = 'GCHEA-2024-CERT-';
    for (let i = 0; i < 9; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }
}

export const documentService = new DocumentService();
