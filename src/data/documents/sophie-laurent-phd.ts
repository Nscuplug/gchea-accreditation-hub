
import { DocumentRecord } from '../../services/documentService';

export const sophieLaurentPhD: DocumentRecord = {
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
};
