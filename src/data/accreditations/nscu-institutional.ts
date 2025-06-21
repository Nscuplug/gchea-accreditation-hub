
import { AccreditationRecord } from '../../services/accreditationService';

export const nscuInstitutional: AccreditationRecord = {
  id: '4',
  institutionName: 'New States Continental University',
  institutionId: 'NSCU-2025',
  accreditationType: 'Institutional Accreditation',
  accreditationLevel: 'Full Accreditation',
  issueDate: '2025-01-01',
  expiryDate: '2030-01-01',
  verificationCode: 'GCHEA-ACC-NSCU-2025-001',
  blockchainHash: 'acc1z9n8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2h1g',
  isValid: true,
  country: 'United States',
  region: 'North America',
  programsAccredited: ['All undergraduate, postgraduate, doctoral, and vocational programs'],
  digitalSignature: 'acc_sig_gchea_2025_nscu_full',
  timestamp: Date.now(),
  htmlContent: `
    <div class="nscu-accreditation">
      <h1>GCHEA ACCREDITATION CERTIFICATE</h1>
      <h2>New States Continental University</h2>
      <p>Has been granted <strong>Full Institutional Accreditation</strong></p>
      <p>For the period: 01 Jan 2025 to 01 Jan 2030</p>
      <p>This accreditation covers all programs offered by the university, including:</p>
      <ul>
        <li>Undergraduate Programs</li>
        <li>Postgraduate Programs</li>
        <li>Doctoral Degrees</li>
        <li>Professional Diplomas and Vocational Courses</li>
      </ul>
      <p>Blockchain Hash: acc1z9n8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2h1g</p>
      <p>Verification Code: GCHEA-ACC-NSCU-2025-001</p>
    </div>
  `,
  cssStyles: `
    .nscu-accreditation {
      border: 4px dashed #4b5563;
      padding: 40px;
      background: #f9fafb;
      font-family: Arial, sans-serif;
    }
    .nscu-accreditation h1 {
      color: #1f2937;
      font-size: 22px;
      text-align: center;
    }
    .nscu-accreditation h2 {
      color: #2563eb;
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
    }
    .nscu-accreditation p {
      font-size: 16px;
      text-align: center;
      margin: 10px 0;
    }
    .nscu-accreditation ul {
      list-style-type: disc;
      max-width: 500px;
      margin: 0 auto 20px;
      text-align: left;
    }
    .nscu-accreditation ul li {
      margin: 5px 0;
      font-size: 15px;
    }
  `
};
