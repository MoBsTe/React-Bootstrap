import React from 'react';
import Form from '../components/Form';
import { MdLocationPin } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
const Contacts = () => {
    return (
        <div>
            <section className='title-page contact-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1 className='title-page__h1'>Contacts</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__contact-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <div className='contact__item mb-4'>
                                <div className='icon'>
                                    <MdLocationPin />
                                </div>
                                <div className='content'>
                                    Walowa 40/89 <br />Gdansk, 80-858 <br /> Poland
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='contact__item mb-4'>
                                <div className='icon'>
                                    @
                                </div>
                                <div className='content'>
                                    <a href="#">info@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='contact__item mb-4'>
                                <div className='icon'>
                                    <BsPhone />
                                </div>
                                <div className='content'>
                                    <a href="@">+48 888-888-888</a>
                                    <a href="@">+48 888-888-888</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.9236987838403!2d18.651348577154618!3d54.35832929852509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73942f21bd05%3A0x40974771241a3606!2zV2HFgm93YSA0MCwgODAtODU4IEdkYcWEc2s!5e0!3m2!1sen!2spl!4v1694333022263!5m2!1sen!2spl" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;
