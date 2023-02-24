interface Props {
  title: string;
  period: string;
  company: string;
  attributions: string[];
}

export const ExperienceRow = ({ title, period, company, attributions }: Props) => {
  return (
    <div className="leading-5 my-3">
      <div>
        <h3 className="m-0 font-medium">
          {title} ({period})
        </h3>
        <em>{company}</em>
      </div>
      <div>
        <ul className="my-2">
          {attributions.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
