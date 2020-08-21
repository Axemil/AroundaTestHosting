import style from './style.scss';
import Title from '@simple/Title';
import PositionsSection from '@sections/PositionsSection';
import MetaData from '@simple/MetaData';

import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Positions from './Positions';

const Contacts = (props) => {
    return (
        <>        
            <ContactHero />
            <ContactForm />
            <Positions />

            <MetaData h1="Hello, let`s talk!"
                title="Contact Us — Questions and Project Inquiries to Dedicated Design & Development team | Arounda"
                description="Got a project? Our team will carefully study your task and suggest on the best solution for your business. Tell us more about your idea: info@arounda.agency"
                link="https://arounda.agency/contact" />
        </>
    )
};
export default Contacts;

const a = {
    checked: {
        get() {
          return process.browser ? ((localStorage.getItem("EXCHANGE_DISTANATION_TAG_ENABLED") && localStorage.getItem("EXCHANGE_DISTANATION_TAG_ENABLED")[this.$route.params._id]) || false) : false;
        },
        set(payload) {
          return localStorage.setItem(
            "EXCHANGE_DISTANATION_TAG_ENABLED",
            {[this.$route.params._id]: payload}
          );
        }
      },
}