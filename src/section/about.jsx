import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">About Me</h2>
	                <div className="space-border"
	                	data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
	                	></div>
	            </div>
	            <div className="col-md-8 text-center m-auto"
	            	data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
	            	>
	            	<p>Hello I am Mequry a cinematographer dedicated to crafting visual stories that resonate with audiences.
					I collaborate closely with directors to bring their vision to life through the art of lighting, camera work, and composition. From choosing the right lenses and camera movements to setting the mood with lighting and framing, I shape the visual language of a film. My goal is to enhance storytelling by creating imagery that not only looks beautiful but also supports the emotion and narrative of every scene.
                     </p>
	            </div>
			</div>
			<div className="row">
				<div className="col-lg-3 p-5 text-center"
					data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
					>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={90}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Cameras</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={85}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Drone</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={80}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Adobe Premiere Pro</h4>
                </div>
                <div className="col-lg-3 p-5 text-center"
                	data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                	>
                    <AnimatedProgressProvider
				        valueStart={0}
				        valueEnd={75}>
				        {value => {
				          const roundedValue = Math.round(value);
				          return (
				            <CircularProgressbar
				              value={value}
				              strokeWidth={3}
				              text={`${roundedValue}.0%`}
				              styles={buildStyles({
				              		pathTransition: "none",
							          textColor: "white",
							          textSize: "8px",
							          pathColor: "#cf1f1f",
							          trailColor: "#2f3134"
							        })}
											            />
				          );
				        }}
				      </AnimatedProgressProvider>
				      <h4 className="mt-2">Monitors & Viewfinders</h4>
                </div>
			</div>
		</div>
		</div>
	);
}

export default hero;