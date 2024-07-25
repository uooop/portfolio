import "./Footer.css";

export default function Footer() {
  return (
    <div className="section-container">
      <img src="/bg-w2.png" alt="Background" className="header-main" />
      <footer className="footer">
        <p className="footer-thx">
          THANK YOU<br />
          FOR YOUR TIME.<br />
        </p>
        <div className="footer-contact">
          <p className="footer-head">CONTACT</p>
          {[
            { label: "e-mail", content: "wlgus0155@naver.com" },
            { label: "phone", content: "010-4357-3787" }
          ].map(({ label, content }) => (
            <div key={label}>
              <p className="footer-head1">{label}</p>
              <p className="footer-content">{content}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}