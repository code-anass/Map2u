import React, { useEffect } from "react";
import permohonan from "../../../../../assets/repositoryPenarafan/permohan/permohonan.png";
import "./permohonan.scss";
import AOS from "aos";
import Step1 from "./content/step1/Step1";
import Step2 from "./content/step2/Step2";
import Step3 from "./content/step3/Step3";
import Step4 from "./content/step4/Step4";
import Step5 from "./content/step5/Step5";
import Step6 from "./content/step6/Step6";
import Step7 from "./content/step7/Step7";
import Step8 from "./content/step8/Step8";
import Step9 from "./content/step9/Step9";
import Step10 from "./content/step10/Step10";
import Step11 from "./content/step11/Step11";
import Step12 from "./content/step12/Step12";
import { Steps, Button } from "antd";
import { useState } from "react";

function Permohonan() {
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "",
      content: <Step1 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step2 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step3 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step4 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step5 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step6 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step7 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step8 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step9 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step10 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step11 current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: <Step12 current={current} setCurrent={setCurrent} />,
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="permohonan" data-aos="fade-right" data-aos-duration="2000">
      <img src={permohonan} alt="" />
      <div className="steps-bar">
        <Steps
          size="large"
          current={current}
          style={{
            padding: "20px 0px",
          }}
          items={steps}
        />
      </div>
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
}

export default Permohonan;
