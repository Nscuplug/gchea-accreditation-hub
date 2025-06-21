
import { DocumentRecord } from '../../services/documentService';

export const ramNiwasPatarwalPhD: DocumentRecord = {
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
};
