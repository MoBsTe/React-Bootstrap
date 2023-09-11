import React, { useEffect } from 'react';

const Services = () => {

    return (
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <div className='section__services__service text-right'>
                    <div>
                        <h3>Salesforce Integration</h3>
                        <p>Our team of highly qualified experts offers help and provide support in Salesforce integration with various applications, ERP (Enterprise resource planning systems), diverse cloud storage tools, right software tools for workflow management, software for marketing automation, payment system solutions, call center systems, right software tools for workflow management and others. Working with the best proven developers and having a successful experience in implementing Salesforce, we use the most effective ways for processes of integration.</p>
                    </div>
                    <div>
                        <a href="@" className=' btn-more float-right'> Read more</a>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='section__services__service text-left'>
                    <div>
                        <h3>Salesforce Custom Development</h3>
                        <p>Our work opportunities is not limited to only triggers and process builder workflows developing. The implementation of fully customizable functionality development is also in our scope. We work in the Salesforce Application Cloud to create custom Salesforce applications for your CRM, based on your operational plan, to meet all your particular needs and requirements.</p>
                    </div>
                    <div>
                        <a href="@" className=' btn-more float-right'> Read more</a>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='section__services__service text-right'>
                    <div>
                        <h3>Salesforce Technical Implementation</h3>
                        <p>The team of specialized developers ensures full-service technical support for Salesforce products. The adaptability of complex Salesforce solutions to existing needs or their transfer under requirements come into focus. Salesforce Technical Implementation is introduced in the process of working with Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and Community Cloud.</p>
                    </div>
                    <div>
                        <a href="@" className=' btn-more float-right'> Read more</a>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='section__services__service text-left'>
                    <div>
                        <h3>Salesforce Consulting Services</h3>
                        <p>For small and mid-size companies we offer design and implementation in Analytics Cloud, Sales Cloud, Service Cloud, Marketing Cloud, Customer, Company and Partner Communities. While your local companies working with the Salesforce platform are likely too expensive to work with, and whereas freelance developers cannot always be relied upon, we can cover your needs in our vast areas of expertise. In addition, we have a team substantial enough to quickly shift between tasks and minimize your time losses.</p>
                    </div>
                    <div>
                        <a href="@" className=' btn-more float-right'> Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
