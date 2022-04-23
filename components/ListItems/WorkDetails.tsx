import React, { useState } from "react";
import ImagePreview from "../../components/Sections/WorkPage/ImagesPreview";
import { WorkDataItem } from "../../types/Works";
import WorkTitleHeader from "../../components/Sections/WorkPage/WorkTitleHeader";
import { BsDownload, BsCode, BsCompass } from "react-icons/bs";
import Head from "next/head";
import ReactTooltip from "react-tooltip";

const WorkDetails: React.FC<{ workData }> = ({ workData }) => {
  console.log(
    
  );
  
  function renderProdBtns() {
    if (workData.workAttr.releaseType == "web") {
      return (
        <a
          href={workData.workAttr.downloadurl}
          target="_blank"
          className="workWebBtn"
        >
          <span>
            <BsCompass fontSize={20} />
          </span>
          <span>View Site</span>
        </a>
      );
    }
    return (
      <a
        href={workData.workAttr.downloadurl}
        target="_blank"
        className="workDownBtn"
      >
        <span>
          <BsDownload fontSize={20} />
        </span>
        <span>Download File</span>
      </a>
    );
  }

  if (workData)
    return (
      <div className="workPage">
        <Head>
          <title>{workData.title} | Omar Faruk</title>
          {/* <meta property="og:description" content={workData.content} /> */}
          <meta property="og:image" content={workData.featuredImage.node.mediaItemUrl} />
        </Head>
        <WorkTitleHeader headerText={workData.title} />
        <ImagePreview
          thumb={workData.featuredImage.node}
          workTitle={workData.title}
          images={Object.entries(workData.workAttr.projectShowcase)
            .filter((item) => !!item[1] && item[1]["__typename"] == "MediaItem")
            .map((item) => item[1])}
        />

        <div className="workSection">
          <h2 className="workSection--title">Project Type</h2>
          <div className="workSection--content">
            <ul className="techList">
              {workData.cetagories.nodes.map((ceta) => (
                <li key={ceta.name}>
                  <div className="techList--item">
                    <div className="techList--item-icon">
                      {ceta.cetaAttr.icon ? (
                        <i className={ceta.cetaAttr.icon}></i>
                      ) : (
                        <span>{ceta.name[0]}</span>
                      )}
                    </div>
                    <div className="techList--item-title">{ceta.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="workSection">
          <h2 className="workSection--title">Technologies</h2>
          <div className="workSection--content">
            <ul className="techList">
              {workData.technologies.nodes.map((tech) => (
                <li key={tech.name}>
                  <p
                    data-for={!!tech.description ? "Tech" : ""}
                    data-tip={`<div style="width:300px;overflow-wrap:break-word">${tech.description}</div>`}
                    className="techList--item"
                  >
                    <span className="techList--item-img">
                      {tech.techAttr.image ? (
                        <img src={tech.techAttr.image.mediaItemUrl} />
                      ) : (
                        <span>{tech.name[0]}</span>
                      )}
                    </span>
                    <span className="techList--item-title">{tech.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="workSection">
          <h2 className="workSection--title">Project Discription</h2>
          <div
            className="workSection--content"
            dangerouslySetInnerHTML={{ __html: workData.content }}
          ></div>
        </div>

        <div className="workSection">
          <h2 className="workSection--title">Production</h2>
          <div className="workSection--content--btn">
            {renderProdBtns()}
            {!workData.workAttr.isprivate ? (
              <a
                href={workData.workAttr.opensourceurl}
                target="_blank"
                className="workVisitBtn"
              >
                <span>
                  <BsCode fontSize={20} />
                </span>
                <span>View OpenSource</span>
              </a>
            ) : null}
          </div>
        </div>
        <ReactTooltip
          id={"Tech"}
          multiline
          resizeHide
          html
          type="light"
          place="top"
          effect="solid"
        ></ReactTooltip>
      </div>
    );
  return (
    <div className="workPage preload">
      <WorkTitleHeader headerText={""} />
      <ImagePreview thumb={{}} workTitle={""} images={[]} />

      <div className="workSection">
        <h2 className="workSection--title"></h2>
        <p className="workSection--content"></p>
      </div>
      <div className="workSection">
        <h2 className="workSection--title"></h2>
        <p className="workSection--content"></p>
      </div>
      <div className="workSection">
        <h2 className="workSection--title"></h2>
        <div className="workSection--content">
          <a href={"#"} target="_blank" className="workVisitBtn">
            <span>
              <BsCode fontSize={20} />
            </span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
