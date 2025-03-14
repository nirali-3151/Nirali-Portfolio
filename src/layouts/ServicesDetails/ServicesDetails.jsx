import TopComp from "@componants/Services/TopComp";
import { SKILL_CONST } from "@constants/index";
import Skills from "@layouts/Home/Skills/Skills";
import React, { useMemo } from "react";
import SoftwareDevelopmentProcess from "@componants/SoftwareDevelopmentProcess/SoftwareDevelopmentProcess";
const ServicesDetails = () => {
  const filteredWebTechnologies = useMemo(() => {
    return SKILL_CONST.filter(
      (skill) => skill.isWeb || !skill?.isFrontEnd || skill?.isBoth
    );
  });
  return (
    <div>
      <TopComp />
      <div className="container">
        <div className="second text1 my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>

        <div>
          <div className="section-title"></div>
          <Skills title={"Technologies"} data={filteredWebTechnologies} />
        </div>
      </div>
      <div>
        <SoftwareDevelopmentProcess />
      </div>
    </div>
  );
};

export default ServicesDetails;
