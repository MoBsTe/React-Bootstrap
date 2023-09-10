import React from 'react';
import AppExchande from '../components/AppExchande';
const Products = () => {
    return (
        <div className='products'>
            <section className='title-page products-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1 className='title-page__h1'>Our Products</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section__products'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='section__products__product'>
                                <div className='section__products__product__header'>
                                    <img src="https://success-craft.com/_nuxt/img/zuppio-logo.494d84d.png" alt="" className='logo-product' />
                                    <div className='section__products__product__header__content'>
                                        <h2 className='title'>Zuppio</h2>
                                        <span className='subtitle mb-2'>A must in your Salesforce DevOps toolkit.</span>
                                    </div>
                                </div>
                                <p>Connect your repo and deploy in mdapi or sfdx format, upgrade package versions with profile mappings, update editable components and execute anonymous apex on any number of authorized orgs at once.</p>
                                <a href="@" className=' btn-more float-right'>Read more</a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='section__products__product'>
                                <div className='section__products__product__header'>
                                    <img src="https://success-craft.com/_nuxt/img/zuppdoc-logo.99f86de.png" alt="" className='logo-product' />
                                    <div className='section__products__product__header__content'>
                                        <h2 className='title'>ZuppDoc</h2>
                                        <span className='subtitle mb-2'>Hide the in-between in the Blackbox.</span>
                                    </div>
                                </div>
                                <p>A product designed to streamline the process of documents management and distribution. With ZuppDoc you don`t need to convert your documents to pdf and host them somewhere, manage permissions in drive or create countless versions of the document to keep editing - all this is handled by our app.</p>
                                <a href="@" className=' btn-more float-right'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppExchande />
        </div>
    );
}

export default Products;
