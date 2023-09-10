import React from 'react';

const Technologies = () => {
    const technologies = [
        {
            id: 1,
            img: 'https://success-craft.com/_nuxt/img/3.4ec4917.svg',
            h2: 'Salesforce',
            description: 'Salesforce.com — American company, the developer of the same name CRM-system, provided to customers exclusively on The SaaS model. Under the name Force.com the company provides a PaaS platform for self-development of applications, and under the brand Database.com — cloud database management system.',
            link: 'https://www.salesforce.com/',
        },
        {
            id: 2,
            img: 'https://success-craft.com/_nuxt/img/10.b780356.svg',
            h2: 'Heroku',
            description: 'Heroku is a cloud platform as a service (PaaS) supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.',
            link: "https://www.heroku.com/",
        },
        {
            id: 3,
            img: 'https://success-craft.com/_nuxt/img/7.e9558ea.svg',
            h2: 'Node.js',
            description: 'Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the users web browser.',
            link: "https://nodejs.org/en/",
        },
        {
            id: 4,
            img: 'https://success-craft.com/_nuxt/img/8.23af10a.svg',
            h2: 'Angular',
            description: 'Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            link: "https://angular.io/",
        },
        {
            id: 5,
            img: 'https://success-craft.com/_nuxt/img/2.762bf0a.svg',
            h2: 'React.js',
            description: 'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.',
            link: "https://reactjs.org/",
        },
        {
            id: 6,
            img: 'https://success-craft.com/_nuxt/img/1.c56eb1b.svg',
            h2: 'Vue.js',
            description: 'Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages, with Nuxt.js as one of the most popular solutions.',
            link: "https://vuejs.org/",
        },
        {
            id: 7,
            img: 'https://success-craft.com/_nuxt/img/6.e46f262.svg',
            h2: 'hybrid',
            description: 'A hybrid app is created as a single app for use on multiple platforms like Android, iPhone, and Windows. Hybrid applications are actually native apps and web apps combined together. It is a single product that works on many operating systems like iOS, Android, Windows etc.',
            link: "https://ionicframework.com/",
        },
        {
            id: 8,
            img: 'https://success-craft.com/_nuxt/img/9.6e60c21.svg',
            h2: 'Ionic',
            description: 'Ionic is a complete open-source SDK for hybrid mobile app development created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013. The original version was released in 2013 and built on top of AngularJS and Apache Cordova. However, The latest release was re-built as a set of Web Components, allowing the user to choose any user interface framework, such as Angular, React or Vue.js.',
            link: "https://ionicframework.com/",
        },
        {
            id: 9,
            img: 'https://success-craft.com/_nuxt/img/5.5043005.svg',
            h2: 'CORDOVA',
            description: 'Apache Cordova (formerly PhoneGap) is a mobile application development framework originally created by Nitobi. Adobe Systems purchased Nitobi in 2011, rebranded it as PhoneGap, and later released an open source version of the software called Apache Cordova. Apache Cordova enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone.',
            link: "https://cordova.apache.org/",
        },
        {
            id: 10,
            img: 'https://success-craft.com/_nuxt/img/11.3652e5f.svg',
            h2: 'Capacitor',
            description: 'Capacitor is an open source project that runs modern Web Apps natively on iOS, Android, Electron, and Web (using Progressive Web App technology) while providing a powerful and easy-to-use interface for accessing native SDKs and native APIs on each platform.',
            link: "https://capacitorjs.com/",
        },
        {
            id: 11,
            img: 'https://success-craft.com/_nuxt/img/12.352ad04.svg',
            h2: 'Flutter',
            description: 'Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.',
            link: "https://flutter.dev/",
        },

    ]
    return (
        <div>
            <section className='title-page technologies-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1 className='title-page__h1'>
                                Technologies
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__technologies'>
                <div className='container'>
                    {
                        technologies.map(item =>
                            <div className='row section_technologies__content p-2 mb-5'>
                                <div className='col-12 col-lg-2'>
                                    <div className='flex-center'>
                                        <img src={item.img} alt={item.h2} className='img-fluid p-2' />
                                    </div>
                                </div>
                                <div className='col-12 col-lg-10'>
                                    <h2>{item.h2}</h2>
                                    <p>{item.description}</p>
                                    <a href={item.link}>Visit {item.h2} official site</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default Technologies;
