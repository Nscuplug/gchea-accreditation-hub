
// Document verification service - uses localStorage for demo
// In production, this would connect to a secure blockchain database

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
}

class DocumentService {
  private readonly STORAGE_KEY = 'gchea_documents';

  // Initialize with some demo data
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
        timestamp: Date.now()
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
        timestamp: Date.now()
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
        timestamp: Date.now()
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
    // Simulate blockchain verification delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const documents = this.getDocuments();
    const document = documents.find(doc => 
      doc.verificationCode.toLowerCase() === verificationCode.toLowerCase()
    );

    if (document) {
      // Update last verification timestamp
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

  private saveDocuments(documents: DocumentRecord[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(documents));
  }

  async getAllDocuments(): Promise<DocumentRecord[]> {
    // This would require special admin access in production
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
