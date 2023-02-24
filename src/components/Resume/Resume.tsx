import { portugueseContent, englishContent } from "./resumeContent";

export const Resume = ({ toggleToEnglish }: any) => {
  return (
    <section className="about">
      <div className="p-2 md:w-1/5">
        <h2 className="text-left my-auto">
          {!toggleToEnglish ? "Resumo Profissional" : "Professional Resume"}
        </h2>
      </div>
      <div className="text-justify leading-7 pl-3 md:w-3/5 max-md:p-2">
        <p>{!toggleToEnglish ? portugueseContent.p1 : englishContent.p1}</p>
        <p>{!toggleToEnglish ? portugueseContent.p2 : englishContent.p2}</p>
        <p>{!toggleToEnglish ? portugueseContent.p3 : englishContent.p3}</p>
      </div>
    </section>
  );
};
