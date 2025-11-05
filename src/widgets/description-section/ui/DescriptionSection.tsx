
import s from "./DescriptionSection.module.scss";

export function DescriptionSection() {
  return (
    <section className={s.description}>
      <div className={s.description__container}>
        <h2 className={s.description__title}>estimation of work costs</h2>
        <p className={s.description__text}>
          Eu lorem vitae leo ullamcorper. Ipsum at ultrices purus convallis
          quis. Donec elementum tristique eu ut arcu eget. In interdum id
          suspendisse lacus. Lacus aliquet mauris sagittis vel. At nunc id
          varius mauris viverra nisi congue. Laoreet nec malesuada lacus vitae
          massa.
        </p>
      </div>
    </section>
  );
} 
