import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Edit, Video, Image, Activity } from 'react-feather';

const Timeline1 = () => {
    return (
        <Fragment>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    animate={true}
                    date="Jan 14"
                    icon={<Edit />}>
                    <h4 className="vertical-timeline-element-subtitle">{"Title of section 1"}</h4>
                    <p>
                        {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut."}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 18"
                    icon={<Video />}>
                    <h4 className="vertical-timeline-element-subtitle">{"Title of section 2"}</h4>
                    <div className="embed-responsive embed-responsive-21by9 m-t-20">
                        <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen  title="myFrame"></iframe>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 24"
                    animate={true}
                    icon={<Image />}>
                    <h4 className="vertical-timeline-element-subtitle">{"Title of section 3"}</h4>
                    <img className="img-fluid p-t-20" src={require("../../../assets/images/banner/1.jpg")} alt="timelineImg1" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 14"
                    animate={true}
                    icon={<Activity />}>
                    <h4 className="vertical-timeline-element-subtitle">{"Title of section 4"}</h4>
                    <audio controls preload="none">
                        <source  src={require("../../../assets/audio/horse.ogg")} type="audio/ogg" />
                        {"Your browser does not support the audio element."}
                    </audio>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Feb 18"
                    animate={true}
                    icon={<Image />}>
                    <h4 className="vertical-timeline-element-subtitle">{"Title of section 5"}</h4>
                    <img className="img-fluid p-t-20" src={require("../../../assets/images/banner/3.jpg")} alt="timelineImg2" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Feb 26"
                    animate={true}
                    icon={<Edit />}>
                    <h4 className="vertical-timeline-element-subtitle">{"Final Section"}</h4>
                    <p>
                        {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident"}
                        {"rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus"}
                        {"veritatis qui ut."}
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Fragment>
    );
};

export default Timeline1;