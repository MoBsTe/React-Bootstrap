import React,{useEffect} from 'react';
import ChooseItems from '../components/ChooseItems'
import AppExchande from '../components/AppExchande';
import TechhnologiesItem from '../components/TechhnologiesItem';
import Form from '../components/Form';
import Services from '../components/Services';
import { Routes, Route, Link } from 'react-router-dom'
const Home = () => {
    useEffect(() => {
        document.title = 'Salesforce Development Services| Salesforce Consulting | Success Craft';
    }, []);
    const technologies = [
        {
            id: 1,
            img: 'https://success-craft.com/_nuxt/img/3.4ec4917.svg',
            span: 'Salesforce',
        },
        {
            id: 2,
            img: 'https://success-craft.com/_nuxt/img/4.b992466.svg',
            span: 'LWC',
        },
        {
            id: 3,
            img: 'https://success-craft.com/_nuxt/img/10.b780356.svg',
            span: 'Heroku',
        },
        {
            id: 4,
            img: 'https://success-craft.com/_nuxt/img/7.e9558ea.svg',
            span: 'Node.js',
        },
        {
            id: 5,
            img: 'https://success-craft.com/_nuxt/img/2.762bf0a.svg',
            span: 'React.js',
        },
        {
            id: 6,
            img: 'https://success-craft.com/_nuxt/img/1.c56eb1b.svg',
            span: 'Vue.js',
        },
        {
            id: 7,
            img: 'https://success-craft.com/_nuxt/img/8.23af10a.svg',
            span: 'Angular',
        },
        {
            id: 8,
            img: 'https://success-craft.com/_nuxt/img/6.e46f262.svg',
            span: 'hybrid',
        },
        {
            id: 9,
            img: 'https://success-craft.com/_nuxt/img/9.6e60c21.svg',
            span: 'Ionic',
        },
        {
            id: 10,
            img: 'https://success-craft.com/_nuxt/img/5.5043005.svg',
            span: 'CORDOVA',
        },
        {
            id: 11,
            img: 'https://success-craft.com/_nuxt/img/11.3652e5f.svg',
            span: 'Capacitor',
        },
        {
            id: 12,
            img: 'https://success-craft.com/_nuxt/img/12.352ad04.svg',
            span: 'Flutter',
        },
    ]

    const choose = [
        {
            id: 1,
            img: 'https://success-craft.com/_nuxt/img/crm.8e83e41.png',
            h3: '6+ of CRM consulting expertise',
            p: 'Committed consultants with an excellent experience in Salesforce consulting services provide you with all the necessary support covering all your needs and requirements.'
        },
        {
            id: 2,
            img: 'https://success-craft.com/_nuxt/img/factory.3e62bf1.png',
            h3: 'Thorough industry knowledge',
            p: 'We specialize in various fields of retail trade, telecommunications, IT, banking and financial business, healthcare, educations and many others.'
        },
        {
            id: 3,
            img: 'https://success-craft.com/_nuxt/img/note.5b52e79.png',
            h3: 'Customer-oriented strategy',
            p: 'We offer full technical guidance aimed at providing streamlined support, strategic management and a high level of assistance.'
        },
        {
            id: 4,
            img: 'https://success-craft.com/_nuxt/img/methodology.25aab02.png',
            h3: 'Agile methodology',
            p: 'We use Agile Methodology, engaging research sprints, agile approach and agile shore as the purpose of efficient planning, absence of release delays and scaling communications.'
        },
    ]
    return (

        <main>
            <section className='section__first'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center section__first__container'>
                            <h1 className='section__first__h1 mt-5'>Salesforce Development</h1>
                            <p className='section__first__p mb-5'>Offshore solutions for Salesforce ISV and Salesforce consulting partners</p>
                            <div className='section__first__btns mt-5'>
                                <Link to="/about-us" className=' btn-main'>About us</Link>
                                <Link to="/services" className=' btn-main'>Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h2 className='pb-3'>
                                About company
                            </h2>
                            <p>Success Craft is a professional Salesforce outsourcing team of more than 100+ Salesforce developers, Technical Architects and QA Engineers who delivered 100+ successful Salesforce projects, implementations, Appexchange products to clients in the USA, Europe, Australia, Canada, United Kingdom. We provide help for our customers in achieving maximum success and efficiency in their businesses through their use of the Salesforce platform. We offer a full range of Salesforce outsourcing solutions, product development and various Salesforce consulting services from our highly skilled developers, QA engineers, and project managers.</p>
                            <Link to="/about-us" className=' btn-more'>Read more</Link>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='flex-center'>
                                <img src="https://success-craft.com/_nuxt/img/logo-white.411c88f.svg" alt="" className='img-fluid p-5' />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='pb-3'>Partners</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='mt-4 flex-center'>
                                <img src="https://success-craft.com/_nuxt/img/partner-1-dark.bdcb2a3.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='mt-4 flex-center'>
                                <img src="https://success-craft.com/_nuxt/img/partner-2-dark.b3814ed.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='mt-4 flex-center'>
                                <img src="https://success-craft.com/_nuxt/img/partner-3-dark.cbfd854.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__services'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='pb-3'>Our Services</h2>
                        </div>
                    </div>
                    <Services />
                </div>
            </section>
            <AppExchande />
            <section className='section section__choose'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='pb-3'>Why choose us</h2>
                        </div>
                    </div>
                    <div className='row section__choose_content'>
                        {
                            choose.map(item =>
                                <ChooseItems item={item} key={item.id} />)
                        }
                    </div>
                </div>
            </section>
            <section className='section section__technologies'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='pb-3'>Our Technologies</h2>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            technologies.map(item =>
                                <TechhnologiesItem item={item} key={item.id} />)
                        }
                    </div>
                </div>
            </section>
            <section className='section section__solutions'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='pb-3'>Solutions</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='section__solutions__steps'>
                                <ol>
                                    <li className='step'>
                                        <div className='number'>1</div>
                                        <div className='description'>
                                            <b>Examining, analyzing and defining requirements</b>
                                            <p>Defining a strategic work plan based on the initial data and requirements, as well as building a functional model to implement it.</p>
                                        </div>
                                    </li>
                                    <li className='step'>
                                        <div className='number'>2</div>
                                        <div className='description'>
                                            <b>Building up the integration architecture</b>
                                            <p>Forming the integration architecture and identifying and exploring common difficulties.</p>
                                        </div>
                                    </li>
                                    <li className='step'>
                                        <div className='number'>3</div>
                                        <div className='description'>
                                            <b>Testing and integration</b>
                                            <p>Performing one- or two-way integrations and verifying all exchange data processes to ensure their proper functioning.</p>
                                        </div>
                                    </li>
                                    <li className='step'>
                                        <div className='number'>4</div>
                                        <div className='description'>
                                            <b>Providing technical documentation</b>
                                            <p>Executing extensive documentation with easy navigation to clarifying the work of integrations between Salesforce applications and your third-party software.</p>
                                        </div>
                                    </li>
                                    <li className='step'>
                                        <div className='number'>5</div>
                                        <div className='description'>
                                            <b>Providing maintenance and support services</b>
                                            <p>Guaranteeing full-service maintenance and technical support after the integration process.</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='section__solutions__img flex-center'>
                                <img src="https://success-craft.com/_nuxt/img/section-1.c10d327.jpg" alt="" className='img-fluid p-2 img-border' />
                                <div className='exp'>
                                    <span>8</span>
                                    <br />
                                    Years of Exprience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='section__contact__items'>
                                <h3 className='text-white pt-3'>Office Address</h3>
                                <div className='itemm'>
                                    <div className='item__icon'>
                                        Walowa 40/89 <br /> 80-858, Gdansk, Paland
                                    </div>
                                </div>
                                <h3 className='text-white pt-3'>Email Address</h3>
                                <div className='itemm'>
                                    <div className='item__icon'>
                                        info@gmail.com
                                    </div>
                                </div>
                                <h3 className='text-white pt-3'>Phone Number</h3>
                                <div className='itemm'>
                                    <div className='item__icon'>
                                        +48 888-888-888
                                    </div>
                                </div>
                                <div className='itemm'>
                                    <div className='item__icon'>
                                        +48 888-888-888
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
