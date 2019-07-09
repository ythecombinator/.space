import {SocialNetwork} from 'model/SocialNetwork';

import featuredTalk1 from 'assets/talks/cejs-2016.webp';
import featuredTalk2 from 'assets/talks/cejs-2017.webp';
import featuredTalk4 from 'assets/talks/front_in_fortaleza-2018.webp';
import featuredTalk6 from 'assets/talks/natal_tech_conference-2019.webp';
import featuredTalk3 from 'assets/talks/phpeste-2017.webp';
import featuredTalk5 from 'assets/talks/react_nyc-2018.webp';
import featuredTalk8 from 'assets/talks/tdc_bh-2019-1.webp';
import featuredTalk9 from 'assets/talks/tdc_bh-2019-2.webp';
import featuredTalk7 from 'assets/talks/tdc_florianopolis-2019.webp';

const shortIntro = `
🙋 Hi folks! I'm Matheus.

👨‍💻 I'm currently working as a Senior Front-End Engineer at Beakyn, 
a NYC-based geodata company.

✌️ I'm casually [speaking](/talks), [writing](/posts), 
[travelling](/about) & advocating for craft brewing.

📢 Feel free to reach me out on social networks, 
[appear.in](https://appear.in/ythecombinator) or schedule something 
on [my calendar](https://calendly.com/ythecombinator). Last but not least,
you can write to me 
through [land@ythecombinator.space](mailto:land@ythecombinator.space).
`;

const intro = `
## Intro

✋ Hi folks! I'm just another constantly evolving full-stack developer draft who
inhabits this world.

💜 My areas of interest/passions include: JavaScript, Swift, architecture 
patterns, User Interfaces libraries and frameworks developer tooling, 
functional and reactive programming, unix philosophy, and User Interaction 
design.

👥 I also try to help as much as I can Brazilian local communities like Dev I/O 
Foundation, Ionic Brazil, CocoaHeads Fortaleza, Lambda I/O Foundation, and many
others!

📢 In addition to attending and organizing meetups and conferences, I really like
to bring cool things to where I'm invited to speak; if you want to see some of 
my lectures, [here](/talks) they are.

💻 As I mentioned, I also love open source, if you'd like to stalk me on GitHub, 
[don't ever hesitate](https://github.com/ythecombinator).
`;

const travelling = `
## Travelling

As I started working as a remote developer (~ early 2018) besides travelling a lot
more through my homeland, I decided to travel and live a little around the world for a 
while – not staying for too long on any city. 

These are the countries where I've been to in this journey:
`;

const working = `
## Working

### Tech Lead, Front-End

🏢 Beakyn Company

🌎 New York City, USA (Remote)

📅 Feb 2018 – Present

📃 As a tech lead on a few of the company's most recent projects, I’ve been responsible
for ensuring the team balances all of the following: working at a speed guided by 
direction, not pace; delivering on its promises to potential customers, and applying 
my expertise as a guiding force growing and developing the team. 

It's been an exciting role that does not have strict boundaries, giving me the 
opportunity to expand my impact where I see value to the team and our business and 
where I have the freedom to identify opportunities and create solutions that enable 
fast UI innovation.

### Senior Software Engineer, Front-End

🏢 Beakyn Company

🌎 New York City, USA (Remote)

📅 Sep 2017 – Present

📃 Working to grow the business and, mostly, help our clients meeting their 
business goals, without leaving quality aside in large-scale geographic data 
visualization platforms and assets curation systems.

👨‍💻 Mostly working with:

- React and Next.js
- React Native and iOS native development
- redux and related tooling (e.g. redux-saga, redux-act, reselect etc.)
- JavaScript and TypeScript
- Webpack and bundle optimization techniques (prefetching, code splitting, common chunks, dynamic imports, service workers, web workers, compile-time optimization etc.)
- Map data plotting and analyzation tools (e.g. Mapbox GL, Turf.js, pbf etc.)
- Firebase services (Auth, Cloud Functions, Firestore etc.)
- Authentication, authorization and accounting infrastructure (mostly with Auth0 and node.js)
- Chat & Chatbots tooling (Intercom, Tokbox, Dialogflow etc.)

<hr>

### Mobile Developer

🏢 Apple Developer Academy

🌎 Fortaleza, Brazil

📅 Jan 2016 – Sep 2017

📃 I've been a macOS, iOS, watchOS, tvOS development intern with a Full-Stack 
development and User Interaction design background in the Apple Developer 
Academy – former _Brazilian Education Program for iOS Developers_ (BEPiD) – 
which aims to grow iOS developers by training Swift/Objective-C and other 
technologies.

👨‍💻 Mostly working with:

- Swift/Objective-C
- iOS frameworks and APIs (e.g. Foundation, UIKit, AutoLayout, CoreData, MapKit, CoreLocation, CoreMotion, Push Notifications etc.)
- watchOS frameworks and APIs (e.g. WatchKit, WatchConnectivity etc.)
- tvOS frameworks and APIs (e.g. UIKit, Focus Engine, TVMLKit etc.)
- Server-side Swift frameworks and APIs (e.g. Vapor)
- Unit and integration tests tools (e.g. XCTest, Quick, Nimble etc.)
- SpriteKit and other game development focused APIs (e.g. GameCenter)
`;

export const sections = {
  shortIntro,
  intro,
  travelling,
  working
};

export const featuredTalks = [
  {
    event: "TDC 2019 | Belo Horizonte",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalk9
  },
  {
    event: "TDC 2019 | Belo Horizonte",
    link: "/talks/react-16-dot-x-way-beyond-hooks-revisited",
    image: featuredTalk8
  },
  {
    event: "TDC 2019 | Florianópolis",
    link: "/talks/the-state-of-the-state-react-state-management-in-2019",
    image: featuredTalk7
  },
  {
    event: "Natal Tech Conference | 2019",
    link:
      "/talks/the-hitchhikers-guide-to-the-front-end-performance-2019-edition",
    image: featuredTalk6
  },
  {
    event: "React NYC | October, 2018",
    link: "/talks/state-of-the-art-react-development-flow-with-typescript",
    image: featuredTalk5
  },
  {
    event: "Front In Fortaleza | 2018",
    link:
      "/talks/the-hitchhikers-guide-to-the-front-end-performance-2018-edition",
    image: featuredTalk4
  },
  {
    event: "PHPeste | 2017",
    link: "/talks/the-correctness-by-design-duck-will-bite-php",
    image: featuredTalk3
  },
  {
    event: "CEJS | 2017",
    link: "/talks/sweet-macros-o-mine",
    image: featuredTalk2
  },
  {
    event: "CEJS | 2016",
    link: "/talks/javascript-in-the-sky-with-types",
    image: featuredTalk1
  }
];

export const socialData: SocialNetwork[] = [
  {
    name: "twitter",
    link: "https://twitter.com/ythecombinator"
  },
  {
    name: "github",
    link: "https://github.com/ythecombinator"
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/ythecombinator"
  },
  {
    name: "instagram",
    link: "https://instagram.com/ythecombinator"
  }
];

export const githubProfilePicture =
  "https://avatars1.githubusercontent.com/u/2644563?s=460&v=4";