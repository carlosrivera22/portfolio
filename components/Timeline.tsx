import styles from '../styles/Home.module.css'
import { Box } from '@mui/system';
const timelineData = [
    {
        text: 'Started working on the app-ideas repository',
        date: 'Feb 25 2019',
        category: {
			tag: 'app-ideas',
			color: '#FFDB14'
		},
        link: {
            url: '#!',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Started the Weekly Coding Challenge program',
        date: 'March 04 2019',
        category: {
			tag: 'blog',
			color: '#e17b77'
		},
        link: {
            url: '#!',
            text: 'Check it out here'
        }
    },
    {
        text: 'Got 1.000 followers on Twitter',
        date: 'March 07 2019',
        category: {
			tag: 'twitter',
			color: '#1DA1F2'
		},
        link: {
            url: '#!',
            text: 'See profile'
        }
    },
    {
        text:
            'I published my first article in the FreeCodeCamp Medium Publication',
        date: 'March 18 2019',
        category: {
			tag: 'medium',
			color: '#018f69'
		},
        link: {
            url:
                '#!',
            text: 'Check it out here'
        }
    },
    {
        text: 'Over 12.000 views in a single day on my Medium posts',
        date: 'April 05 2019',
        category: {
			tag: 'medium',
			color: '#018f69'
		},
        link: {
            url: '#!',
            text: 'See profile'
        }
    }
]

export default function Timeline(){
    const TimelineItem = ({ data }: { data: any }) => (
        <Box className={styles.timeline_item}>
            <Box className={styles.timeline_item_content} sx={{width: {xs:400, sm: 500, md: 650, lg: 800} }}>
                <span className={styles.tag} style={{ background: "#ff6a00" }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <b><p style={{color:'black'}}>{data.text}</p></b>
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
        <>
        {timelineData.length > 0 && (
            <div className={styles.timeline_container}>
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
            )
        }
        </>
    )
}

