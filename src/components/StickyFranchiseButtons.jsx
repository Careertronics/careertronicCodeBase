import ScrollReveal from "./ScrollReveal";

const StickyFranchiseButtons = () => {
  return (
    <div className="fixed right-0 top-1/2 translate-y-1/2 z-50 hidden md:flex flex-col ">
      <ScrollReveal
        animation="slideRight"
        duration={1000}
        easing="spring"
        delay={100}
        index={0}
        stagger={150}
      >
        <div className=" md:flex flex-col ">
          <a
            href="/brochure/FRANCHISE BROCHURE.pdf"
            download
            className="bg-[#3b0f2a] text-white px-5 py-3 font-medium
                   hover:bg-[#5a1740] transition-all duration-300
                   shadow-lg rounded-l-lg border-b border-white/10 mb-2"
          >
            Download Brochure
          </a>
          {/* Enquire Now */}
          <a
            href="/franchisecontact"
            className="bg-black/80 text-white px-5 py-3 font-medium
                   hover:bg-black transition-all duration-300
                   shadow-lg rounded-l-lg"
          >
            Enquire Now
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default StickyFranchiseButtons;
