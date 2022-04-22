const SkillSection = () => {
  return (
    <section className="skills">
      <div className="skills-list">
        <div className="skills-list__left">
          <div className="section-header">
            <span>Design Skills</span>
          </div>
          <div className="skill">
            <h2 className="skill-name">UI/UX Design</h2>
            <div className="skill-progressbar" data-rate="95">
              <div className="progress"></div>
            </div>
          </div>
          <div className="skill">
            <h2 className="skill-name">Print Design</h2>
            <div className="skill-progressbar" data-rate="75">
              <div className="progress"></div>
            </div>
          </div>
          <div className="skill">
            <h2 className="skill-name">Graphic Design</h2>
            <div className="skill-progressbar" data-rate="85">
              <div className="progress"></div>
            </div>
          </div>
          <div className="skill">
            <h2 className="skill-name">Logo Design</h2>
            <div className="skill-progressbar" data-rate="90">
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div className="skills-list__right">
          <div className="section-header">
            <span>Coding Skills</span>
          </div>
          <div className="skill">
            <h2 className="skill-name">HTML / CSS</h2>
            <div className="skill-progressbar" data-rate="100">
              <div className="progress"></div>
            </div>
          </div>
          <div className="skill">
            <h2 className="skill-name">PHP</h2>
            <div className="skill-progressbar" data-rate="90">
              <div className="progress"></div>
            </div>
          </div>
          <div className="skill">
            <h2 className="skill-name">JavaScript</h2>
            <div className="skill-progressbar" data-rate="90">
              <div className="progress"></div>
            </div>
          </div>
          <div className="skill">
            <h2 className="skill-name">Smarty / Twig</h2>
            <div className="skill-progressbar" data-rate="85">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
