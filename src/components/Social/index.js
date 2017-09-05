import React, { PureComponent } from "react";
import uuid from "uuid/v4";
import facebookImg from "./assets/facebook.png";
import githubImg from "./assets/github.png";
import googleplusImg from "./assets/googleplus.png";
import linkedinImg from "./assets/linkedin.png";
import twiterImg from "./assets/twiter.png";
import wordpressImg from "./assets/wordpress.png";
import youtubeImg from "./assets/youtube.png";

const socialData = [
    {
        id: uuid(),
        alt: "Facebook",
        img: facebookImg,
        href: "https://www.facebook.com/walmyr.limasilvafilho",
    },
    {
        id: uuid(),
        alt: "GitHub",
        img: githubImg,
        href: "https://github.com/wlsf82",
    },
    {
        id: uuid(),
        alt: "Google Plus",
        img: googleplusImg,
        href: "https://plus.google.com/114754442377170940541",
    },
    {
        id: uuid(),
        alt: "LinkedIn",
        img: linkedinImg,
        href: "https://br.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a",
    },
    {
        id: uuid(),
        alt: "Twiter",
        img: twiterImg,
        href: "https://twitter.com/walmyrlimaesilv",
    },
    {
        id: uuid(),
        alt: "Wordpress",
        img: wordpressImg,
        href: "https://talkingabouttesting.com/",
    },
    {
        id: uuid(),
        alt: "YouTube",
        img: youtubeImg,
        href: "https://www.youtube.com/talkingabouttesting",
    },
];

class Social extends PureComponent {
    render() {
        return (
            <div className="social">
            { socialData.map( item =>
                <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.id}>
                    <img src={item.img} alt={item.alt}/>
                </a>
            )}
            </div>
        );
    }
}

export default Social;
