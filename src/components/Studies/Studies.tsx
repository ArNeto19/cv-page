import { StudiesRow } from "./StudiesRow";

export const Studies = ({ toggleToEnglish }: any) => {
  return (
    <section className="studies">
      <div className="p-2 md:w-1/5">
        <h2 className="text-left my-auto">
          {!toggleToEnglish ? "Cursos & Certificados" : "Courses & Certification"}
        </h2>
      </div>
      <div className="text-justify leading-7 pl-3 md:w-3/5 max-md:p-2">
        <StudiesRow
          title={
            !toggleToEnglish
              ? "Bacharelado em Relações Internacionais"
              : "Bachelor Degree on International Relations"
          }
          institution={
            !toggleToEnglish ? "Universidade Federal de Sergipe" : "Federal University of Sergipe"
          }
        />
        <StudiesRow
          title={!toggleToEnglish ? "Proficiência em Língua Inglesa" : "English Proficiency"}
          institution={
            !toggleToEnglish ? "FISK - Centro de Ensino" : "Richard Hugh Fisk Foundation"
          }
        />
        <StudiesRow
          title="The Complete 2022 Web Development Bootcamp"
          institution="Udemy"
          link="https://www.udemy.com/certificate/UC-1daf837d-08a2-437b-8b5d-8832bc64e14a/"
        />
        <StudiesRow
          title={
            !toggleToEnglish
              ? "Formação Typescript Fullstack Developer"
              : "Typescript Fullstack Developer Formation"
          }
          institution="Digital Innovation One"
          link="https://www.dio.me/certificate/08217332"
        />
      </div>
    </section>
  );
};
