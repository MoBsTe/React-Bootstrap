import React,{useEffect} from 'react';
import AppExchande from '../components/AppExchande';
import Servicess from '../components/Services';
const Services = () => {
    useEffect(() => {
        document.title = 'Services | Success Craft';
    }, []);
    return (
        <div>
            <section className='title-page services-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1 className='title-page__h1'>Services</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__services'>
                <div className='container'>
                    <Servicess />
                </div>
            </section>
            <AppExchande />
        </div>
    );
}

export default Services;
