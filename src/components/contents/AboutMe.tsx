import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="section-container">
        <img src="/bg-lb.png" className="header-main" />
        <p className="headline aboutme">About Me</p>
        <div className="container-content">
          <span className="aboutme-dot">● ● ●</span><span className="domain">www.aboutme.com</span>
          <hr className="hr1" />
          <div className="aboutme-personalinfo">
            <p className="aboutme-name">OH<span className="aboutme-lastname">JIHYUN :D</span></p>
            <p className="aboutme-content">1999. 01. 25<br />010-4357-3787<br />대전광역시 서구 갈마동 300-15 소망빌라<br />@uoop_art<br />wlgus0155@naver.com</p>
          </div>
          <div className="aboutme-intro">
            <hr className="aboutme-hr2" />
            <p className="aboutme-introduction">
              안녕하세요! 광대처럼 즐거움, 재치. 그리고 묘기를 사용하여 세상을 더 다채롭고<br />
              흥미롭게 만드는 웹 디자이너 오지현입니다. 제 직업은 마치 서커스의 한 장면처럼, 사용자들에게<br />
              시각적 즐거움과 직관적인 인터렉션을 선사합니다.<br />
              색상과 타이포그래피의 조화는 마치 묘기를 부리듯, 사용자들의 시선을 사로잡고, 재치있는 애니메이션과<br />
              인터랙션은 그들을 환호하게 만듭니다. 끊임없는 창의성과 열정을 바탕으로, 기술과 예술의 경계를<br />
              넘나드는 저의 작품들을 통해 여러분들께 감동을 전하고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
