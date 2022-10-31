const button = $(".btn");
const aboutTitle = $("#about-title");
const aboutContent = $("#about-content");
const experienceTitle = $("#experience-title");
const coursesTitle = $("#courses-title");
const [roleOne, roleTwo] = [$(".exp-p").eq(0), $(".exp-p").eq(1)];
const [listOne, listTwo] = [$("ul").eq(0), $("ul").eq(1)];
const [courseOne, courseTwo, courseThree, courseFour] = [
  $("h6").eq(0),
  $("h6").eq(1),
  $("h6").eq(2),
  $("h6").eq(3),
];
const [courseDescrOne, courseDescrTwo, courseDescrThree, courseDescrFour] = [
  $(".courses-p").eq(0),
  $(".courses-p").eq(1),
  $(".courses-p").eq(2),
  $(".courses-p").eq(3),
];

$(".btn").click((err) => {
  if (button.html() == "English") {
    button.text("Portuguese");
    aboutTitle.text("Professional Resume");
    aboutContent.html(
      "<p>With a Bachelor Degree in International Relations and an english proficiency certificate, I've recently concluded web development courses, focused on JavaScript and TypeScript. I'm seeking to add new technologies to my stack, and also been studying some DevOps methodologies. I'm looking for oportunities to introduce myself in the technology market and keep improving my set of skills, aiming for Front-End development positions.</p> <p>I'm organized, dedicated and diligent, always regarding for accountability, and I keep seeking professional growth and to acquire greater knowledge about the labor market. I have experience on customer sucess and administrative routines, but now I'm aiming a career transition to the tech area.</p> <p>During my previous experiences on courses, college and labor market I've acquired skills and knowledge that corroborate to a great professional formation and can guarantee a excelent performance on the execution of whatever tasks and challenges that come up. </p>"
    );
    experienceTitle.text("Previous Experiences");
    roleOne.html("<em>Administrative Coordinator</em>");
    listOne.html(
      "<li>Team management</li><li>Public Relations management</li><li>CRM platform management</li><li>E-commerce Management</li>"
    );
    roleTwo.html("<em>Intern</em>");
    listTwo.html(
      "<li>Customer Service</li><li>Operational assistance</li><li>Querying customer data and processes</li>"
    );
    coursesTitle.text("Courses & Certificates");
    courseOne.text("English Proficiency");
    courseDescrOne.html("<em>Richard Hugh Fisk Foundation (concluded on 2011)</em>");
    courseDescrTwo.html("<em>Udemy (concluded on Sep/2022)</em>");
    courseThree.text("DevOps Journey");
    courseDescrThree.html("<em>Udemy (In progress)</em>");
    courseFour.html(
      '<h6 class="mb-0"><a href="https://www.dio.me/certificate/08217332">Fullstack TypeScript Developer Formation <i class="fa-solid fa-up-right-from-square"></i></a> </h6>'
    );
    courseDescrFour.html("<em>Digital Innovation One (concluded on Oct/2022)</em>");
  } else if (button.html() == "Portuguese") {
    button.text("English");
    aboutTitle.text("Resumo Profissional");
    aboutContent.html(
      "<p>Bacharel em Relações Internacionais, proficiente em inglês, concluí recentemente curso de desenvolvimento web com foco em React.js e sigo estudando sobre tecnologias, além de metodologias DevOps. Em busca de oportunidades para me introduzir de vez na área de tecnologia e me aprimorar cada vez mais, almejando o desenvolvimento FrontEnd.</p> <p>Sou organizado, flexível, dedicado e assíduo, prezando ainda pela responsabilidade, e estou sempre buscando desenvolvimento profissional e adquirindo maior conhecimento sobre o mercado de trabalho. Conto com boas experiências em relacionamento com o cliente e rotinas administrativas e agora busco uma transição para a área de desenvolvimento e tecnologia.</p> <p>Com experiências obtidas durante graduação, cursos e mercado de trabalho, adquiri conhecimentos e habilidades que corroboraram para uma ótima formação profissional e que garantem uma exímia performance na execução de quaisquer desafios que me sejam impostos. </p>"
    );
    experienceTitle.text("Experiência");
    roleOne.html("<em>Coordenador Administrativo</em>");
    listOne.html(
      "<li>Gestão de equipes</li><li>Gestão de relações com órgãos públicos</li><li>Gerenciamento de plataforma CRM</li><li>Gerenciamento de E-commerce</li><li>Coordenação escolar com foco em pós-graduação</li>"
    );
    roleTwo.html("<em>Estagiário</em>");
    listTwo.html(
      "<li>Atendimento ao público</li><li>Auxílio operacional em totens de autoatendimento</li><li>Consulta de dados e processos de clientes</li>"
    );
    coursesTitle.text("Cursos e Certificados");
    courseOne.text("Proficiência em Língua Inglesa");
    courseDescrOne.html("<em>FISK - Centro de Ensino (concluído em 2011)</em>");
    courseDescrTwo.html("<em>Udemy (concluído em Set/2022)</em>");
    courseThree.text("Jornada DevOps");
    courseDescrThree.html("<em>Udemy (Em andamento)</em>");
    courseFour.html(
      '<h6 class="mb-0"><a href="https://www.dio.me/certificate/08217332">Formação TypeScript Fullstack Developer <i class="fa-solid fa-up-right-from-square"></i></a></h6>'
    );
    courseDescrFour.html("<em>Digital Innovation One (concluído em Out/2022)</em>");
  } else {
    console.log(err);
  }
});
