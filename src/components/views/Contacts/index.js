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
            <Head>
                <title>Contact. Let`s write to Arounda</title>
                <meta name="description" content="Got a project? Contact the best team at Arounda." />
            </Head>
        </>
    )
};
export default Contacts;