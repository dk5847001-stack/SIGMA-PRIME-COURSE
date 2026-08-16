import { Button } from "react-bootstrap";

/** Shared heading used by repeatable application sections. */
export default function SectionHeader({ number, title, description, onAdd, addLabel = "Add more" }) {
  return (
    <div className="section-header">
      <div className="section-title-wrap">
        <span className="section-number">{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {onAdd && <Button type="button" variant="outline-light" className="add-button" onClick={onAdd}>+ {addLabel}</Button>}
    </div>
  );
}
