export default function SectionHeading({ label, title, script }) {
  return (
    <div className="heading reveal">
      <p className="spaced">{label}</p>
      <h2 className="heading__title">
        {title}
        <span className="heading__script" aria-hidden="true">
          {script}
        </span>
      </h2>
    </div>
  );
}
