import PageTop from "@/components/shared/PageTop";
import React from "react";
import PdfCardContainer from "../shared/PdfCardContainer";

const Newsletters = () => {
  const allNewsletters = [];
  return (
    <div>
      <PageTop
        title="Newsletters"
        description={
          "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt!"
        }
      />

      <PdfCardContainer allPdf={allNewsletters} containerFor={"Newsletter"} />
    </div>
  );
};

export default Newsletters;
