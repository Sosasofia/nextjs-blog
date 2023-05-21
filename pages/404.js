import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <div className={utilStyles.error}>
      <h1>404</h1>
      <h2>This page could not be found</h2>
    </div>
  );
}
