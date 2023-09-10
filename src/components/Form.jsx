import React from 'react';

const Form = () => {
    return (
        <div className='col-12 col-lg-6'>
            <h2 className='pb-3'>Contact us</h2>
            <p>We are always open to any of your questions. If you want to contact us, fill out the form below, please. We will put your question under immediate review and get back to you as soon as possible.</p>
            <form >
                <div id='input-group-1' role='group' className='form-group'>
                    <label id='input-group-1__BV_label_' for='input-1' className='d-block'>Email addres: *</label>
                    <div>
                        <input id='input-1' type="email" placeholder='Enter email' required className='form-control' />
                        <small className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div id='input-group-2' role='group' className='form-group'>
                    <label id='input-group-1__BV_label_' for='input-2' className='d-block'>Your Name: *</label>
                    <div>
                        <input id='input-2' type="text" placeholder='Enter name' required className='form-control' />

                    </div>
                </div>
                <div id='input-group-3' role='group' className='form-group'>
                    <label id='input-group-1__BV_label_' for='input-3' className='d-block'>Email addres: *</label>
                    <div>
                        <textarea id="input-3" placeholder='Enter message' required rows="7" wrap='soft' className='form-control'></textarea>

                    </div>
                </div>
                <div id='input-group-4' role='group' className='form-group'>
                    <div>
                        <div className='custom-control custom-checkbox'>
                            <input id='input-4' type="checkbox" className='custom-control-input' />
                            <label for='input-4' className='custom-control-label'>I agree to provide my personal data. I agree that my personal data, provided via this form, will be processed for the purpose of receiving online support and consultation.</label>
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn btn btn-more btn-secondary disabled'>Send</button>
            </form>
        </div>
    );
}

export default Form;
