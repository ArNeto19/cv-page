export const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <a href="https://github.com/ArNeto19" target="_blank">@ArNeto19</a> ⓒ {thisYear}{" "}
    </footer>
  );
};
