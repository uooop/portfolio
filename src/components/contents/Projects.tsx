import React from "react";
import "./Projects.css";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  keywords: string[];
  pageUrl?: string;
  gitHubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  keywords,
  pageUrl,
  gitHubUrl,
}) => {
  return (
    <>
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project info">
          <h3 className="project-tille">{title}</h3>
          <p className="project-description">{description}</p>
          <p className="project-keywords">
            {keywords.map((keyword, index) => (
              <span key={index} className="project-keyword">
                {keyword}
              </span>
            ))}
          </p>
        </div>
        <div className="project-overlay">
          <div className="overlay-content">
            <h3>{title}</h3>
            <div className="project-buttons">
              <button className="detail-button">자세히 보기</button>
              {pageUrl && (
                <a
                  href={pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-button"
                >
                  사이트
                </a>
              )}
              {gitHubUrl && (
                <a
                  href={gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Projects() {
  const projects = [
    {
      image: "project_thumbnail1.png",
      title: "CONVERSE CHUCK 70",
      description: "컨버스 척70을 알리는 프로모션 사이트 디자인입니다.",
      keywords: ["5 Week", "개인", "디자인"],
      pageUrl: "",
      gitHubUrl: "",
    },
    {
      image: "project_thumbnail2.png",
      title: " Mesozoic Eden",
      description: "공룡 공원 소개 페이지입니다.",
      keywords: ["2 Week", "팀", "웹사이트"],
      pageUrl: "",
      gitHubUrl: "https://github.com/uooop/mesozoiceden",
    },
    {
      image: "project_thumbnail3.png",
      title: "Céleste",
      description: "본인의 피부/두피 타입을 확인하고 그에 맞는 제품을 살 수 있는 사이트입니다.",
      keywords: ["5 Week", "팀", "웹사이트"],
      pageUrl: "https://shoppingfront.onrender.com",
      gitHubUrl: "https://github.com/kmw0428/shop-front",
    },
    {
      image: "project_thumbnail4.png",
      title: "Portfolio",
      description: "저만의 포트폴리오를 만들기 위해 제작했습니다.",
      keywords: ["1 Week", "개인", "웹사이트"],
      pageUrl: "https://jh-portfolio.onrender.com/",
      gitHubUrl: "https://github.com/uooop/portfolio",
    },
    // 더 많은 프로젝트를 추가할 수 있습니다
  ];
  return (
    <>
      <div className="section-container">
        <img src="/bg-b.png" className="header-main" />
        <p className="headline projects">Projects</p>
        <div className="project-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
