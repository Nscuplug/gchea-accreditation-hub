
import { AccreditationRecord } from '../../services/accreditationService';

export const iraResearch: AccreditationRecord = {
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
};
