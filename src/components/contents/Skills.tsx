import "./Skills.css";

export default function Skills() {
  const frontends = [
    { name: "VSCode", icon: "/icons/vscode.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "HTML", icon: "/icons/html5.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "Eclipse", icon: "/icons/eclipse.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "IntelliJ", icon: "/icons/intellij.png" },
  ];

  const designs = [
    { name: "photoshop", icon: "/icons/photoshop.png" },
    { name: "illustrator", icon: "/icons/illustrator.png" },
    { name: "indesign", icon: "/icons/indesign.png" },
  ];
  return (
    <>
      <div className="section-container">
        <img src="/bg-gb.png" className="header-main" />
        <p className="headline skills">Skills</p>
        <div className="container-content">
          <p className="domain">Skill & Tools</p>
          <hr className="hr1" />
          <div className="skills-skilltool">
            <p className="skills-name">FrontEnd</p>
            <div className="skills-frontend">
              {frontends.map((frontend) => (
                <div key={frontend.name} className="frontend-item">
                  <img src={frontend.icon} alt={frontend.name} className="frontend-icon" />
                </div>
              ))}
            </div>
            <p className="skills-name">Design</p>
            <div className="skills-design">
              {designs.map((design) => (
                <div key={design.name} className="design-item">
                  <img src={design.icon} alt={design.name} className="design-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
