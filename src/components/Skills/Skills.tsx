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
          <b>Main working techs</b>: Javascript, Typescript, React.js, React Native, Redux,
          Bootstrap, SASS, Styled Components, Node.js, Redux, Firebase, MongoDB, Git.
        </p>
        <p>
          <b>Other known techs</b>: HTML, CSS, jQuery, PHP, Next.js, Vite.js, Vue.js, Chakra UI,
          Material UI, TailwindCSS, Expo, Express, Fastify, TypeORM, Prisma, PostgreSQL, Sqlite,
          Mongoose, JWT, OAuth, REST APIs, Docker.
        </p>
      </div>
    </section>
  );
};
