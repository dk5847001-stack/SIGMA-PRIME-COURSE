import { Button, Col, Form, Row } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

export default function EducationDetails({ items, errors, onChange, onAdd, onRemove }) {
  return <section className="form-section"><SectionHeader number="02" title="Education details" description="Add your most relevant academic qualifications." onAdd={onAdd} />
    {items.map((item, index) => <div className="entry-card" key={item.id}><div className="entry-card-top"><span>Education #{index + 1}</span>{items.length > 1 && <Button type="button" variant="link" className="remove-button" onClick={() => onRemove(item.id)}>Remove</Button>}</div>
      <Row className="g-4"><Col md={6}><Field label="Institution *" name="institution" item={item} error={errors[index]?.institution} onChange={onChange} placeholder="University or college" /></Col><Col md={6}><Field label="Degree *" name="degree" item={item} error={errors[index]?.degree} onChange={onChange} placeholder="B.Tech, BCA, etc." /></Col><Col md={4}><Field label="Field of study *" name="field" item={item} error={errors[index]?.field} onChange={onChange} placeholder="Computer Science" /></Col><Col md={4}><Field label="Graduation year *" name="year" type="number" item={item} error={errors[index]?.year} onChange={onChange} placeholder="2027" /></Col><Col md={4}><Field label="CGPA / percentage" name="score" item={item} error={errors[index]?.score} onChange={onChange} placeholder="8.4 CGPA" /></Col></Row>
    </div>)}</section>;
}
function Field({ label, name, item, error, onChange, type = "text", placeholder }) { return <Form.Group><Form.Label>{label}</Form.Label><Form.Control type={type} value={item[name]} placeholder={placeholder} onChange={e => onChange(item.id, name, e.target.value)} isInvalid={Boolean(error)} /><Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback></Form.Group>; }
