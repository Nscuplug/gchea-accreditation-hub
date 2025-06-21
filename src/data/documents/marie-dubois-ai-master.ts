
import { DocumentRecord } from '../../services/documentService';

export const marieDuboisAIMaster: DocumentRecord = {
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
};
