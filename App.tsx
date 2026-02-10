import React, { useState, useEffect } from 'react';
import { ChevronUp, Shield } from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import BookingForm from './components/BookingForm.tsx';
import Services from './components/Services.tsx';
import PricingTable from './components/PricingTable.tsx';
import PopularRoutes from './components/PopularRoutes.tsx';
import RouteList from './components/RouteList.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Testimonials from './components/Testimonials.tsx';
import TermsAndConditions from './components/TermsAndConditions.tsx';
import Footer from './components/Footer.tsx';
import FloatingAIButton from './components/FloatingAIButton.tsx';
import AirportTransfers from './components/AirportTransfers.tsx';
import TourPackagesSection from './components/TourPackagesSection.tsx';
import CorporateServices from './components/CorporateServices.tsx';
import PuducherrySpecial from './components/PuducherrySpecial.tsx';
import Fleet from './components/Fleet.tsx';
import PackageView from './components/PackageView.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import AuthModal from './components/AuthModal.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    if (window.location.hash === '#admin') {
      setIsAdmin(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isAdmin) {
    return (
      <AdminPanel onLogout={() => { 
        setIsAdmin(false); 
        window.location.hash = ''; 
        window.scrollTo(0, 0);
      }} />
    );
  }

  if (selectedPackageId) {
    return (
      <div className="bg-[#050505]">
        <Navbar onSelectPackage={setSelectedPackageId} />
        <PackageView packageId={selectedPackageId} onBack={() => setSelectedPackageId(null)} />
        <Footer />
        <FloatingAIButton />
        <AuthModal />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-slate-50 overflow-x-hidden">
      <Navbar onSelectPackage={setSelectedPackageId} />
      
      <main id="home">
        <Hero />
        
        <div className="container mx-auto px-4 md:px-8 max-w-[1500px] -mt-10 lg:-mt-32 relative z-20">
          <BookingForm />
        </div>

        <section id="services" className="py-12 md:py-24">
          <Services />
        </section>

        <section id="fleet" className="pb-12 md:pb-24">
          <Fleet />
        </section>

        <section id="airport" className="py-12 md:py-24 bg-slate-100/50">
          <AirportTransfers />
        </section>

        <section id="packages" className="py-12 md:py-24">
          <TourPackagesSection onSelectPackage={setSelectedPackageId} />
        </section>

        <section className="py-12 md:py-24">
          <PuducherrySpecial />
        </section>

        <section id="tariff" className="py-12 md:py-24 bg-slate-50">
          <PricingTable />
        </section>

        <section className="py-12 md:py-24 bg-slate-100/50">
          <CorporateServices />
        </section>

        <section id="routes" className="py-12 md:py-24">
          <PopularRoutes />
        </section>

        <section id="why-choose-us" className="py-12 md:py-24 bg-slate-50">
          <WhyChooseUs />
        </section>

        <section id="terms-anchor" className="py-12 md:py-24 bg-slate-100/50">
          <TermsAndConditions />
        </section>

        <section className="py-12 md:py-24 bg-slate-50">
          <RouteList />
        </section>

        <section id="reviews" className="py-12 md:py-24 bg-slate-100/50">
          <Testimonials />
        </section>
      </main>

      <Footer />
      <FloatingAIButton />
      <AuthModal />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-8 p-4 bg-geevee-orange text-white rounded-2xl shadow-2xl transition-all duration-500 z-[90] hover:scale-110 active:scale-90 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      <div className="fixed bottom-8 left-8 z-[90] hidden xl:block">
        <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
          <div className="bg-green-100 text-green-600 p-1.5 rounded-full"><Shield size={16} /></div>
          <div>
             <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest leading-none">Security Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  </AuthProvider>
);

export default App;