import { ExperienceRow } from "./ExperienceRow";
import {
  kualityPtAttributions,
  kualityEnAttributions,
  detranPtAttributions,
  detranEnAttributions,
  ayoPtAttributions,
  ayoEnAttributions,
} from "./workAttributions";

export const Experience = ({ toggleToEnglish }: any) => {
  return (
    <section className="experience">
      <div className="p-2 md:w-1/5">
        <h2 className="text-left my-auto">
          {!toggleToEnglish ? "Experiência Profissional" : "Previous Experiences"}
        </h2>
      </div>
      <div className="text-justify leading-7 pl-3 md:w-3/5 max-md:p-2">
        <ExperienceRow
          title={!toggleToEnglish ? "Desenvolvedor Full Stack" : "Full Stack Developer"}
          period="2023-"
          company="Ayo"
          companyHref="https://entregas.ayoapp.com.br/"
          attributions={!toggleToEnglish ? ayoPtAttributions : ayoEnAttributions}
        />
        <ExperienceRow
          title={!toggleToEnglish ? "Coordenador Administrativo" : "Administrative Coordinator"}
          period="2019-2021"
          company="Rede de Ensino Kuality Brasil"
          companyHref="https://kualitybrasil.com.br/"
          attributions={!toggleToEnglish ? kualityPtAttributions : kualityEnAttributions}
        />
        <ExperienceRow
          title={!toggleToEnglish ? "Estagiário" : "Intern"}
          period="2017-2019"
          company="DETRAN-SE"
          companyHref="https://www.detran.se.gov.br/"
          attributions={!toggleToEnglish ? detranPtAttributions : detranEnAttributions}
        />
      </div>
    </section>
  );
};
