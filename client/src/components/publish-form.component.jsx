import React from "react";
import AnimationWrapper from "../common/page-animation";

const PublishForm = () => {
  return (
    <>
      <nav className="navbar"></nav>
      <AnimationWrapper>
        <section>
          <div className="mx-auto max-w-[900px] w-full">
            <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey"></div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default PublishForm;
