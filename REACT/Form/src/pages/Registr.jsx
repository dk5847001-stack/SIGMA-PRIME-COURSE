import ApplicationForm from "../components/Form";
import "./Register.css";

export default function Register() {
  return <main className="application-page"><div className="application-shell"><header className="application-hero"><span className="eyebrow">CAREER LAUNCHPAD</span><h1>Internship application</h1><p>Bring your profile to life. Complete the details below to help us understand your strengths and potential.</p><div className="progress-copy"><span>Application profile</span><span>7 sections</span></div></header><ApplicationForm /></div></main>;
}
