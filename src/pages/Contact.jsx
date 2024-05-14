import React, { useState } from 'react'
import { useAuth } from '../store/auth';


const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}
const Contact = () => {

    const [contact, setContact] = useState(defaultContactFormData)
    const [userData, setUserData] = useState(true)

    // handle the inputs
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })
    }


    const { user, API } = useAuth();
    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        })
        setUserData(false)
    }



    // handling the submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(contact)

            })
            if (response.ok) {
                setContact(defaultContactFormData)
                const data = await response.json();
                console.log(data);
                alert("Message Sent Successfully")
            }
        } catch (error) {
            alert("Message not found")
            console.log(error)
        }

    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className='container grid grid-two-cols'>
                            <div className='registration-image'>
                                <img src="/images/support.png" alt="Contact page image" width={"500"} height={"500"} />
                            </div>
                            <div className="contact-form">
                                <h1 className="main-heading mb-3">
                                    Contact form
                                </h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input type="text" name='username' id='username' required autoComplete='off' value={contact.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name='email' id='email' required autoComplete='off' value={contact.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" autoComplete='off' cols={"30"} rows={"5"} required value={contact.message} onChange={handleInput}></textarea>
                                    </div>
                                    <br />
                                    <button type='submit' className='button'>
                                        contact
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <section className='mb-3'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3520509880614!2d85.44493347534537!3d27.675511976200774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb05455aa0697b%3A0xc110fa617e527a1e!2sKamalbinayak%2C%20Bhaktapur!5e0!3m2!1sen!2snp!4v1714968358461!5m2!1sen!2snp" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </main>
            </section>
        </>
    )
}

export default Contact