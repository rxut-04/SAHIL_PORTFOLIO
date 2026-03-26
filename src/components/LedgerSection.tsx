export default function LedgerSection() {
  return (
    <section className="panel panel-light">
      <div className="font-display text-[25vw] md:text-[15vw] opacity-10 absolute top-0 right-[5vw]">03</div>
      <div className="max-w-[90%] md:max-w-[80%] px-[5vw] md:px-[10vw] main-content">
        <h2 className="font-display text-[8vw] md:text-[3.5vw] uppercase leading-none mb-5">LEDGER<br />ARCHITECTURE</h2>
        <div className="w-full h-px bg-current my-5 opacity-20"></div>
        <p className="text-[4vw] md:text-[1.5vw] leading-[1.4] opacity-80">
          Journal entries are the DNA of a company. I specialize in designing 
          ledger systems that offer absolute transparency, from primary entries 
          to the finality of the Trial Balance.
        </p>
      </div>
    </section>
  );
}
