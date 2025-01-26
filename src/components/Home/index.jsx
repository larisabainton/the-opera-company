import React from "react";
import LandingSection from "./LandingSection";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const whatText = 
    <div className="section-paragraphs">
        <p>Die Fledermaus is a comic operetta (an opera with spoken dialogue) where a glamorous ball turns into a wild night of mix-ups, secret identities, and a prank that spirals out of control.</p>
        <p>The operetta was originally written in 1874 by Johann Strauss II in German, but our performances will be in English, and <b>immersive </b></p>
        <StaticImage className="down-arrow" src="./../../assets/down-arrow.svg"/>
    </div>;

const immersiveText =
    <div className="section-paragraphs">
        <div className="section-subtitle">Become part of the story in our <b>immersive</b> production </div>
        <p>You’ll start the performance in one room, then head into another for Act 2.</p>
            <p>After intermission, you’ll move again for Act 3.</p>
            <p>But the immersion doesn't stop there—there are some surprise treats waiting for you along the way!</p>
        <p>Please reach out with any questions <Link className="questions-word" to ="/">here</Link></p>
    </div>;

const castArray = [
    { character: "Eisenstein", name: "Tyler Cesario"},
    { character: "Rosalinde", name: "Larisa Bainton Hernandez"},
    { character: "Adele", name: "Megan Hull"},
    { character: "Prince Orlofsky", name: "Becca Allen"},
    { character: "Alfred", name: "Michael Gonzalez"},
    { character: "Dr Falke", name: "Juan Suarez"},
    { character: "Frank", name: "Carlo Bunyi"},
    { character: "Dr Blind", name: "Sophie Urquhart"},
    { character: "Ida", name: "Julia Pottinger"},
    { character: "Frosch", name: "Celeste Pellegrino"},
]

const castList = 
<div className="cast-list grid">
    {castArray.map(({character, name}) => {
        return <div className="cast-member row">
            <div className="character">{character}</div>
            <div className="name">{name}</div>
        </div>
    })}
</div>;

const directionArray = [
    { job: "Director", name: "Hannah Shanfield" },
    { job: "Conductor", name: "Julian Gau" },
    { job: "Stage Manager", name: "Vanessa Moya" },
    { job: "Producer", name: "Larisa Bainton Hernandez" }
];

const directionList = 
<div className="direction-list grid">
    {directionArray.map(({job, name}) => {
        return <div className="cast-member row">
            <div className="job">{job}</div>
            <div className="name">{name}</div>
        </div>
    })}
</div>;

const whyText =
    <div>
        <p>Never been to an opera before? We love opera, and would love to teach you about it.
            Opera is an amazing mixture of dramatic plotlines, beautiful music, and incredible athletic abilities.
            It might have a reputation for being boring and inaccessible, but we promise you'll never be bored at our shows.
        </p>
        <p><a target="_blank" rel="noreferrer" href="https://www.eventbrite.com/e/die-fledermaus-an-immersive-opera-tickets-1208554120909?aff=oddtdtcreator">Come see for yourself!</a></p>
    </div>

const Home = () => {
    return (
        <div className="HomePage">
            <LandingSection />
            <div className="what section section-1">
                <div className="section-title">What</div>
                <div className="section-description">
                    <div className="section-subtitle">Come for the opera, stay for the <b>drama</b>.</div>
                    {whatText}
                </div>
            </div>
            <div className="gradient gradient-1"></div>
            <div className="immersive section section-2">
                <div className="section-title">
                    <a target="_blank" rel="noreferrer" href="https://www.eventbrite.com/e/die-fledermaus-an-immersive-opera-tickets-1208554120909?aff=oddtdtcreator">You're Invited to the Ball</a></div>
                <div className="section-description">
                    {immersiveText}
                </div>
            </div>
            <div className="gradient gradient-2"></div>
            <div className="when-where section section-3">
                <div className="column">
                    <div className="row">
                        <div className="section-title">When</div>
                    </div>
                    <div className="row">
                        <p>March 1st at 7pm <br></br>March 2nd at 3pm</p>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <div className="section-title">Where</div>
                    </div>
                    <div className="row">
                        <p>MASARY Studios <br></br>15 Channel Center St #105<br></br> Boston, MA</p>
                    </div>
                </div>
            </div>
            <div className="gradient gradient-3"></div>
            <div className="who section section-4">
                <div className="section-title">Who</div>
                <div className="section-subtitle">Our cast for Die Fledermaus</div>
                <div className="section-text">
                    <div className="section-subtitle">Direction</div>
                    {directionList}
                    <div className="section-subtitle">Cast List</div>
                    {castList}
                    <p>Chorus: Akela Franklin (Ida cover), Sophie Urquhart (Adele cover), Tim Levesque (Alfred cover), Soren Austenfeld</p>
                    </div>
            </div>
            <div className="gradient gradient-4"></div>
            <div className="why section section-5">
                <div className="section-title">Why</div>
                <div className="section-description">{whyText}</div>
            </div>
            <div className="gradient gradient-5"></div>
            <div className="questions section section-6">
                <div className="section-title">More Questions?</div>
                <div className="contact-form">
                    <form name="contact form" method="post" action="https://formspree.io/f/movvzkww">
                        <input type="text" aria-label="name" name="name" id="name" placeholder="Name" />
                        <input type="email" aria-label="email" name="email" id="email" placeholder="Email" />
                        <input type="text" aria-label="subject" name="subject" id="subject" placeholder="Subject" />
                        <textarea aria-label="message" name="message" id="message" rows="5" placeholder="Type your message here..."/>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Home;