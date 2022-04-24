const SkillSection = ({ backEndTech=[] , frontEndTech=[]}) => {
  return (
    <section className="skills">
      <div className="skills-list">
        <div className="skills-list__left">
          <div className="section-header skills-header">
            <span>Frontend Skills</span>
            <span>
              <sub>Number Of Projects</sub>
            </span>
          </div>
          {frontEndTech.sort((a,b) => (a.count - b.count)).reverse().slice(0,5).map((front) => (
            <div key={front.name} className="skill">
              <div className="skill-img" style={{backgroundImage: `url(${front.techAttr.image.mediaItemUrl})`}}>
              </div>
              <h2 className="skill-name">{front.name}</h2>
              <p className="skill-count">{front.count}</p>
            </div>
          ))}
        </div>
        <div className="skills-list__right ">
          <div className="section-header skills-header">
            <span>Backend Skills</span>
             <span>
              <sub>Number Of Projects</sub>
            </span>
          </div>
          {backEndTech.sort((a,b) => (a.count - b.count)).reverse().slice(0,5).map((back) => (
            <div key={back.name} className="skill">
             <div className="skill-img" style={{backgroundImage: `url(${back.techAttr.image?.mediaItemUrl})`}}>
              </div>
              <h2 className="skill-name">{back.name}</h2>
              <p className="skill-count">{back.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
