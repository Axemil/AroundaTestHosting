import style from './style.scss';
import ContactForm from '@simple/ContactForm';
import TitleSecondary from '@simple/TitleSecondary';
import Footer from '@sections/Footer';
import Head from 'next/head';


const Contacts = (props) => {
    return (
        <>
            <section className={style.sectionContacts}>
                
                    <div className={style.grid}>
                        <div className={style.titleWrapper}>
                            <TitleSecondary text={'Contact us'}/>
                            <p>Fill in the form, or if you prefer <a className='stopCursor' href="mailto:info@arounda.agency">send us an email</a></p>
                        </div>
                    </div>
                    <ContactForm/>
            </section>
            <Footer/>
            <h1 className={'h1-seo'}>
                Hello, let`s talk!
            </h1>
            <Head>
                <title>
                    Contact Us — Questions and Project Inquiries to Dedicated Design & Development team | Arounda
                </title>
                <meta name="description" content="Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@arounda.agency" />
                <link rel="canonical" href="https://arounda.agency/contact" />
            </Head>
        </>
    )
};
export default Contacts;