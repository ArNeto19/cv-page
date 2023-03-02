import { portugueseParagraph, englishParagraph } from "./resumeContent";

export const Resume = ({ toggleToEnglish }: any) => {
  return (
    <section className="about">
      <div className="p-2 md:w-1/5">
        <h2 className="text-left my-auto">
          {!toggleToEnglish ? "Resumo Profissional" : "Professional Resume"}
        </h2>
      </div>
      {toggleToEnglish ? portugueseParagraph : englishParagraph}
    </section>
  );
};
