import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <section className='title-page about-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1>About Success Craft</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__about-company'>
                <div className='container'>
                    <div className='row img-border'>
                        <div className='section__about-company__content'>
                            <div>
                                <div className='about__img'>
                                    <img src="https://success-craft.com/_nuxt/img/about-1.67b9585.png" alt="" className='img-fluid' />
                                </div>
                                <div className='pt-5 pb-5'>
                                    <p className='p-3'>The main goal of our company is to help our customers achieve maximum success and efficiency in the areas of sales, maintenance, analysis, and communication with their clients, customers, and vendors, through their use of the Salesforce platform.</p>
                                </div>
                                <div className='about__img'>
                                    <img src="https://success-craft.com/_nuxt/img/about-2.53ed3e3.png" alt="" className='img-fluid' />
                                </div>
                                <div className='pt-5 pb-5'>
                                    <p className='p-3'>We offer a full range of end-to-end Salesforce outsourcing solutions, product development and various Salesforce consulting services, from task to deployment, from our highly skilled, trained, and certified Salesforce.com developers, QA engineers, project managers, all of whom are constantly led and supported by our certified SFDC Technical Architects.</p>
                                </div>
                                <div className='about__img'>
                                    <img src="https://success-craft.com/_nuxt/img/about-3.09dc9a9.png" alt="" className='img-fluid' />
                                </div>
                                <div className='pt-5 pb-5'>
                                    <p className='p-3'>Our deep specialization in Salesforce provides a multitude of advantages, as do our dedication to successful long-term partnerships, our comparatively low overhead, and our "no confusion, no hassle" all-inclusive pricing structures. A responsible approach to our duties, as well as the desire to exceed customer expectations, lie at the heart of our dedication to our customers. This allows us to continually implement various projects while still gaining and maintaining the trust of our customers and clients, which can be observed by our outstanding track-record of success and our current and former clients references and testimonials to that effect.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
