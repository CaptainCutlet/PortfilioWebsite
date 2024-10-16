import { useContext } from "react";

import "./AboutMeGeneralStyles.css";
import "./EducationContent.css";
import classes from "../../../General.module.css";

import { languageCtx } from "../../store/LanguageContext";

import MaturityCertificate from "../../../Assets/brandos_atestatas.pdf";

const englishEducationList = (
  <ul className="exam-list">
    <li>
      University: Kaunas Technology University (KTU) - BA Artificial Intelligence course. 
    </li>
    <li>Highschool: Šiauliai Julius Janonis gymnasium</li>
  </ul>
);

const lithuanianEducationList = (
  <ul className="exam-list">
    <li>
      Universitetas: Kauno Technologijos Universitetas (KTU) - BA Dirbtinio Intelekto kursas.
    </li>
    <li>Gimnazija: Šiaulių Julius Janonio gimnazija</li>
  </ul>
);

const englishCaption = (
  <p className="caption-education">
    Not only did I graduated on top of my school having perfect score in
    subjects of mathematics, English and Lithuanian, I also had perfect grades
    in all subjects while only having one non-perfect exam score of 93/100 score
    in IT examination. I addition to this during my years in middle school and
    Highschool I also won multiple region-wide and state-wide competition in the
    fields of math, physics and geography.
  </p>
);

const lithuanianCaption = (
  <p className="caption-education">
    Taip pat aš ne tik baigiau mokyklą turėdamas 10 iš visų mokomųjų dalykų,
    išlaikiau lietuvių kalbos ir literatūros, anglų kalbos ir matematikos
    egzaminus 100 balų (IT egzamino rezultatas 93/100), bet ir laimėjau daug
    miesto bei regiono konkursų matematikos, fizikos bei geografijos srityse.
  </p>
);

const lithuanianExamResults = (
  <>
    <p className="exam-title">Brandos egzaminų rezultatai:</p>
    <ul className="exam-list">
      <li>Matematika: 100 / 100</li>
      <li>Anglų kalba: 100 / 100</li>
      <li>Lietuvių kalba ir literatūra: 100 / 100</li>
      <li>IT: 93 / 100</li>
    </ul>
  </>
);

const englishExamResults = (
  <>
    <p className="exam-title">Final exams results:</p>
    <ul className="exam-list">
      <li>Math: 100 / 100</li>
      <li>English: 100 / 100</li>
      <li>Lithuanian language and literature: 100 / 100</li>
      <li>IT: 93 / 100</li>
    </ul>
  </>
);

const EducationContent = () => {
  const languageContext = useContext(languageCtx);
  const isEnglish = languageContext.isEnglish;

  const educationList = isEnglish
    ? englishEducationList
    : lithuanianEducationList;

  const captionContent = isEnglish ? englishCaption : lithuanianCaption;

  const examContent = isEnglish ? englishExamResults : lithuanianExamResults;

  function certificateDownloadHandler() {
    const link = document.createElement("a");
    link.href = MaturityCertificate;
    link.download = `${MaturityCertificate}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <div className="about-me-content-wrapper" id="education">
      <h3 className={classes.sectionTitle}>
        {isEnglish ? "Education" : "Išsilavinimas"}
      </h3>
      <h4 className={classes.sectionCaption}>
        {isEnglish
          ? "Where and what education did I acquire"
          : "Kur ir kokį išsilavinimą įgijau"}
      </h4>
      {educationList}
      {captionContent}
      {examContent}
    </div>
  );
};

export default EducationContent;
