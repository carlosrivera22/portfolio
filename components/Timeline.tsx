import * as React from 'react';
import styles from '../styles/Home.module.css'
import { Box } from '@mui/system';
const timelineData = [
    {
        text: 
        <div>
            <p style={{ fontSize:12, color:"black" }}>Full-stack engineer responsible for developing, testing, and maintaining the ServiceUp mobile app along with multiple web applications.</p>
            <hr></hr>
            <p style={{ fontSize:12, color:"black" }}>Our efforts have granted the business Series A funding, which have rapidly scaled our product and services to various markets.</p>
        </div>,
        date: 'April 2021 - Present',
        category: {
			tag: 'ServiceUp',
			color: '#FFDB14'
		},
        link: {
            url: 'https://www.serviceup.com/',
            text: 'See more'
        }
    },
    {
        text: 
        <div>
            <p style={{ fontSize:12, color:"black" }}>Responsible for implementing small data entry applications, using Microsoft Power Apps, aimed towards documenting data that was previously done by pen and paper.</p>
        </div>,
        date: 'September 2020 - March 2021',
        category: {
			tag: 'Freelance',
			color: '#e17b77'
		},
    },
    {
        text: 
        <div>
            <p style={{ fontSize:12, color:"black" }}>Trained and evaluated various machine learning and deep learning models.</p>
        </div>,
        date: 'January 2019 - September 2020',
        category: {
			tag: 'wovenware',
			color: '#1DA1F2'
		},
        link: {
            url: 'https://www.wovenware.com/',
            text: 'See more'
        }
    },
    {
        text:
            <p style={{ fontSize:12, color:"black" }}>Developed an algorithm used to detect syntactic ambiguity in the English language.</p>,
        date: 'April 2017 - December 2018',
        category: {
			tag: 'uprm-research',
			color: '#018f69'
		}
    },
]

export default function Timeline(){
    const TimelineItem = ({ data }: { data: any }) => (
        <Box className={styles.timeline_item}>
            <Box className={styles.timeline_item_content} sx={{width: {xs:375, sm: 500, md: 650, lg: 800} }}>
                <span className={styles.tag} style={{ background: "#ff6a00" }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <div><b>{data.text}</b></div>
                {data.link && (
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
                <span className={styles.circle} />
            </Box>
        </Box>
    );
    return (
        <div>
        {timelineData.length > 0 && (
            <div className={styles.timeline_container}>
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
            )
        }
        </div>
    )
}

