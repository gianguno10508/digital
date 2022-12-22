import React from 'react';
import { bannerContact } from '../asset/fakedata/contact/Contact';
import BackgroundItem from '../components/common/BackgroundItem';
import '../asset/styles/contact.css';
function Contact() {
    return (
        <div className='contact-section'>
            <BackgroundItem data={bannerContact} />
            <div className='contact-section-form'>
                <div className='container'>
                    <div className='contact-main'>
                        {/* ___Left___ */}
                        <div className='contact-section-form-left'>
                            <div className='branch'>
                                <h4>Our Office</h4>

                                <div className='address'>
                                    <a href='#'>3F, 2871, Hung Vuong Boulevard, Van Co, Viet Tri, Phu Tho</a>
                                </div>
                            </div>
                            <div className='img-wapper'>
                                <img src="https://onextdigital.com/wp-content/uploads/2022/09/MEM_9922-scaled-e1663144175513.jpg" alt=''></img>
                            </div>
                        </div>
                        {/* ___Right___ */}
                        <div className='contact-section-form-right'>
                            <div className='form-right-wapper'>
                                <form className='content'>
                                    <input type='text' placeholder='Name*' size='40' className='name' />
                                    <input type='text' placeholder='Email*' size='40' className='email' />
                                    <input type='text' placeholder='Subject*' size='40' className='subject' />
                                    <textarea className='message' placeholder='Message*' cols='40' rows='10' />
                                    <input type='text' placeholder='Captra*' size='40' className='captra' />
                                    <div className='submit-content'>
                                        <button className='submit'>Submit</button>
                                        <span className='spinner'>
                                        </span>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;