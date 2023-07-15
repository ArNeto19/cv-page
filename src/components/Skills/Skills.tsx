export const Skills = ({ toggleToEnglish }: any) => {
  return (
    <section className="skills">
      <div className="p-2 md:w-1/5">
        <h2 className="text-left my-auto">
          {!toggleToEnglish ? "Habilidades & Tecnologias" : "Skills & Technologies"}
        </h2>
      </div>
      <div className="text-justify leading-7 pl-3 md:w-3/5 max-md:p-2">
        <p>
          <b>
            {!toggleToEnglish
              ? "Principais tecnologias com as quais trabalho"
              : "Main techs that I've been working with"}
          </b>
          : Javascript, Typescript, React.js, Redux, React Native, Expo, Bootstrap, SASS, Styled
          Components, Node.js, Express, Firebase, MongoDB, Mongoose, REST APIs, Git.
        </p>
        <p>
          <b>
            {!toggleToEnglish
              ? "Outras tecnologias que já utilizei em estudos e projetos:"
              : "Other techs that I've been studying and using on projects so far"}
          </b>
          : HTML, CSS, jQuery, PHP, Next.js, Vite.js, Vue.js, Chakra UI, Material UI, TailwindCSS,
          Fastify, TypeORM, Prisma, PostgreSQL, Sqlite, JWT, OAuth, Docker.
        </p>
      </div>
    </section>
  );
};
