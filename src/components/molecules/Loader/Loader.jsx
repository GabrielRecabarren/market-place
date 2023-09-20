import s from './style.module.css'
export const Loader = () => {
  return (
    <div className={s.loaderContainer}>
    <h1>WELCOME</h1>
      <span class={s.loader}></span>
    </div>
  );
};
