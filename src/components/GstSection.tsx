export default function GstSection() {
  return (
    <section className="panel panel-accent">
      <div className="font-display text-[25vw] md:text-[15vw] opacity-10 absolute top-0 right-[5vw]">02</div>
      <div className="max-w-[90%] md:max-w-[80%] px-[5vw] md:px-[10vw] main-content">
        <h2 className="font-display text-[8vw] md:text-[3.5vw] uppercase leading-none mb-5 text-black">GST<br />DYNAMICS</h2>
        <div className="w-full h-px bg-current my-5 opacity-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vw] mt-8">
          <div>
            <h4 className="font-display text-[3vw] md:text-[1vw]">COMPLIANCE</h4>
            <p className="text-[4vw] md:text-[1.5vw] leading-[1.4] opacity-80">Seamless management of GSTR 1 & GSTR 3B filings. Precision in data reconciliation to ensure zero-penalty operations.</p>
          </div>
          <div>
            <h4 className="font-display text-[3vw] md:text-[1vw]">ONBOARDING</h4>
            <p className="text-[4vw] md:text-[1.5vw] leading-[1.4] opacity-80">End-to-end GST Registration for new entities. Translating government regulation into business readiness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
