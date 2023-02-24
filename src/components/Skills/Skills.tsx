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
          HTML, CSS, Javascript, Bootstrap, jQuery, Typescript, React, Next.js, Vue.js, Styled
          Components, Chakra UI, Material UI, TailwindCSS, React Native, Expo, Node.js, Express,
          Fastify, TypeORM, Prisma, PostgreSQL, Sqlite, MongoDB, Mongoose, JWT, OAuth, REST APIs,
          Git, Github, Docker.
        </p>
      </div>
    </section>
  );
};
