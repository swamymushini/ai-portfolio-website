import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import {Fade} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <div>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </div>;
    }

    function skillsText() {
        return (
            <Box component={'section'} className={'textSection'}>
                <Typography variant={'h5'} color={'primary'} style={{ fontWeight: 700, fontSize: '2rem' }}>
                    Skills
                </Typography>
                <Box component={'ul'} p={'0.8rem'}>
                    {info?.skills?.length ? (
                        info.skills.map((skill, index) => (
                            <Fade in={true} timeout={1000 + index * 300} key={index}>
                                <Box component={'li'} py={'0.2rem'}>
                                    {skill}
                                </Box>
                            </Fade>
                        ))
                    ) : (
                        <Typography>No skills data available</Typography>
                    )}
                </Box>
            </Box>
        );
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}