import CmaSection from "../components/CmaSection";
import GstSection from "../components/GstSection";
import LedgerSection from "../components/LedgerSection";
import TechStack from "../components/TechStack";

export default function ServicesPage() {
  return (
    <div className="pt-32 space-y-20">
      <CmaSection />
      <GstSection />
      <LedgerSection />
      <TechStack />
    </div>
  );
}
