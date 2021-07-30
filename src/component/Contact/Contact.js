import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        document.title = 'Contact - The Sea Goddess Grotto'
        window.scrollTo(0,0)
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();

        axios.post('/api/email', {firstName, lastName, email, subject, message})
            .then(() => {
                setMessageSent(true);
                setSubject('');
                setMessage('');
            })
            .catch(err => console.log(err))
    }

    return (
        <main className='contact-us'>
            <h1>Contact Us!</h1>
            <section className='contact-us-info'>
                
                <div className='contact-us-image'/>
            </section>
            {!messageSent
                ? (
                    <form className='contact-us-form'>
                        <label>Name *</label>
                        <div>
                            <section className='name-input'>
                                <input value={firstName} autoComplete='given-name' required onChange={e => setFirstName(e.target.value)}/>
                                <span className='name-span'>First Name</span>
                            </section>
                            <section className='name-input'>
                                <input value={lastName} autoComplete='family-name' required onChange={e => setLastName(e.target.value)}/>
                                <span className='name-span'>Last Name</span>
                            </section>
                        </div>
                        <label>Email *</label>
                        <input value={email} required onChange={e => setEmail(e.target.value)}/>
                        <label>Subject *</label>
                        <input value={subject} required onChange={e => setSubject(e.target.value)}/>
                        <label>Message *</label>
                        <textarea value={message} required autoComplete='off' onChange={e => setMessage(e.target.value)}/>
                        <button className='main-button' onClick={sendMessage}>SUBMIT</button>
                    </form>
                )
                : (
                    <section className='message-sent-section'>
                        <h2>Your message has been sent!</h2>
                        <h3>We will get back to you as soon as possible.</h3>
                        <button onClick={() => setMessageSent(false)}>New Message</button>
                    </section>
                )}
        </main>
    )
}

export default Contact;