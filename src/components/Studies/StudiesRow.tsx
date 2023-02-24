interface Props {
  title: string;
  institution: string;
  link?: string;
}

export const StudiesRow = ({ title, institution, link }: Props) => {
  return (
    <div className="leading-5 my-2">
      {!link ? (
        <h3 className="m-0 font-medium"> {title} </h3>
      ) : (
        <h3 className="m-0 font-medium">
          <a href={link} target="_blank">
            {title} <i className="fa-solid fa-up-right-from-square h-3"></i>
          </a>
        </h3>
      )}
      <em>{institution}</em>
    </div>
  );
};
