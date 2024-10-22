"use client";

import React from "react";
import Image from 'next/image'
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiences",0.30);
  const { theme } = useTheme();

  return (
    <section id="experiences" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      {/* <div className="mt-20 flex flex-col" > */}
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                // textAlign: "left",
                padding: "1.3rem 2rem",
                // width: '500px'
                // maxHeight: '500px',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              // {...item.icon}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <Image
                    src={item.icon}
                    alt={item.location}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              iconStyle={{
                background: "#383E56",
                fontSize: "1.5rem",
              }}
            >
              {/* <h3 className="font-semibold capitalize">{item.title}</h3> */}
              <h3 className='text-white text-[24px] font-bold'>{item.title}</h3>
              {/* <p className="font-normal !mt-0">{item.location}</p> */}
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {/* {item.description} */}
              {/* <ul className='!mt-5 list-disc ml-5 space-y-2'>
                {item.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                      
                    {point}
                  </p>
                  </li>
                ))}
              </ul> */}
              </p>
              <ul className='!mt-5 list-disc ml-5 space-y-2'>
                {item.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">

                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
        </VerticalTimeline>
      {/* </div> */}
    </section>
  );
}
