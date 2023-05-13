import { React, useState } from "react";
import axios from "axios";
import qs from 'querystring';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [isSent, setIsSent ] = useState(false);
  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }
  const handleAttrChange = (event, attribute) => {
    switch(attribute) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        console.error('Something wrong with the code! you need to speicify an attribute to work with')
    }
  }

  const handleSubmit = (e) => {
    // Prevent the form default behavior
    e.preventDefault();
    // Set sending to true
    setSending(true);
    // Contact the API to create a new contact request
    axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST + '/contact', qs.stringify({
            name: name,
            email: email,
            message: message
          }),
          {"Access-Control-Allow-Origin": "*"}
          )
         .then(res => {
            // Show the success message
            setIsSent(true);
            // Clear the form
            clearForm();
          })
          .catch(err => {
            setIsSent(false);
          })
    setSending(false);
  }
  return (
    <div className="contact-form">
      { isSent && <div className="alert alert-success text-center">Your message has been sent! Thank you</div> }
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Please enter your name"
          onChange={(event) => { handleAttrChange(event, 'name') }}
          required
        />
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Please enter your email"
          onChange={(event) => { handleAttrChange(event, 'email') }}
          required
        />
        <label htmlFor="message">Message *</label>
        <textarea
          rows="4"
          name="message"
          id="message"
          value={message}
          placeholder="Please enter your message"
          onChange={(event) => { handleAttrChange(event, 'message') }}
          required
        ></textarea>
        <button type="submit" disabled={sending}>
          {sending ? (
            "Sending ..."
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
