
import { AccreditationRecord } from '../../services/accreditationService';

export const uitInstitutional: AccreditationRecord = {
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
};
