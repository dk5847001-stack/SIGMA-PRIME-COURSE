import { Col, Form, Row } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

export default function PersonalInformation({ data, errors, onChange }) {
  const field = (name, label, type = "text", placeholder = "") => (
    <Form.Group controlId={`personal-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} value={data[name]} placeholder={placeholder} onChange={onChange} isInvalid={Boolean(errors[name])} />
      <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
    </Form.Group>
  );
  return <section className="form-section"><SectionHeader number="01" title="Personal information" description="Tell us how we can contact you." />
    <Row className="g-4"><Col md={6}>{field("fullName", "Full name *", "text", "Aarav Sharma")}</Col><Col md={6}>{field("email", "Email address *", "email", "you@example.com")}</Col><Col md={6}>{field("phone", "Phone number *", "tel", "+91 98765 43210")}</Col><Col md={6}>{field("location", "Current location *", "text", "City, Country")}</Col></Row>
  </section>;
}
