
// Enhanced Document verification service with file-based system
import { allDocuments } from '../data/documents';

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
  private getDocuments(): DocumentRecord[] {
    // Return documents from file-based system
    return allDocuments.map(doc => ({
      ...doc,
      timestamp: Date.now()
    }));
  }

  async verifyDocument(verificationCode: string): Promise<DocumentRecord | null> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const documents = this.getDocuments();
    const document = documents.find(doc => 
      doc.verificationCode.toLowerCase() === verificationCode.toLowerCase()
    );

    return document || null;
  }

  async verifyByBlockchainHash(hash: string): Promise<DocumentRecord | null> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const documents = this.getDocuments();
    return documents.find(doc => doc.blockchainHash === hash) || null;
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
    let code = 'GCHEA-2025-CERT-';
    for (let i = 0; i < 9; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }
}

export const documentService = new DocumentService();
