
import { AccreditationRecord } from '../../services/accreditationService';

export const esciBusiness: AccreditationRecord = {
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
};
