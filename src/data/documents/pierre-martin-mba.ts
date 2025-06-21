
import { DocumentRecord } from '../../services/documentService';

export const pierreMartinMBA: DocumentRecord = {
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
};
