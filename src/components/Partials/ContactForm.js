import {React} from "react";
import { useForm } from '@formspree/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mlevrvog");
    if (state.succeeded) {
        return <p className="contact-us-page__description success-message">I've recived your message! Thank you</p>;
    }
    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name *</label>
                <input type="text" name="name" id="name" placeholder="Please enter your name" required />
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" placeholder="Please enter your email" required />
                <label htmlFor="message">Message *</label>
                <textarea rows="4" name="message" id="message" placeholder="Please enter your message" required ></textarea>
                <button type="submit" disabled={state.submitting}>{state.submitting ? <FontAwesomeIcon spin icon={faSpinner} /> : 'Send'}</button>
            </form>
        </div>
    );
}
export default ContactForm;