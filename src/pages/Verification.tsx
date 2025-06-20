
import Header from '../components/Header';
import VerificationSection from '../components/VerificationSection';
import Footer from '../components/Footer';

const Verification = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <VerificationSection />
      </div>
      <Footer />
    </div>
  );
};

export default Verification;
