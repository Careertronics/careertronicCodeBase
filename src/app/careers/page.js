import Hero from "./components/Hero";
import WhyWorkHere from "./components/WhyWorkHere";

import OpenPosition from "./components/OpenPosition";
import InternshipProgram from "./components/InternshipProgram";
import HiringProcess from "./components/HiringProcess";

import JoinTalentGroups from "./components/JoinTalentGroups";
import Culture from "./components/Culture";

export default function CareersPage() {
  return (
    <main>
      <Hero />
      <WhyWorkHere />
      <Culture />
      <OpenPosition />
      <InternshipProgram />
      <HiringProcess />

      <JoinTalentGroups />
    </main>
  );
}
