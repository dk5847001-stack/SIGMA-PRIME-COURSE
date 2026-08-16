import { Button, Col, Form, Row } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

export default function Skills({ items, errors, onChange, onAdd, onRemove }) {
 return <section className="form-section"><SectionHeader number="03" title="Skills" description="Include tools and technologies you can confidently use." onAdd={onAdd} addLabel="Add skill" />
 <Row className="g-3">{items.map((item, index) => <Col md={6} key={item.id}><div className="compact-entry"><Form.Group><Form.Label>Skill *</Form.Label><Form.Control value={item.name} placeholder="e.g. React" onChange={e => onChange(item.id, "name", e.target.value)} isInvalid={Boolean(errors[index]?.name)} /><Form.Control.Feedback type="invalid">{errors[index]?.name}</Form.Control.Feedback></Form.Group><Form.Group><Form.Label>Level *</Form.Label><Form.Select value={item.level} onChange={e => onChange(item.id, "level", e.target.value)} isInvalid={Boolean(errors[index]?.level)}><option value="">Select level</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></Form.Select><Form.Control.Feedback type="invalid">{errors[index]?.level}</Form.Control.Feedback></Form.Group>{items.length > 1 && <Button type="button" variant="link" className="remove-button compact-remove" onClick={() => onRemove(item.id)}>Remove</Button>}</div></Col>)}</Row></section>;
}
