import { Fragment } from "react";
import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
function ContactUS() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w1c3w0k', 'template_67zuwio', form.current, 'voiNSXm4zDWK-m58E')

        alert("Massage Sent, we will reply as soon as possible");

        e.target.reset()
    }

    const form = useRef()


    return (
        <section class="contact" style={{ marginTop: "70px" }} id="contact">

            <h1 class="heading"> <span>contact</span> us </h1>

            <form ref={form} onSubmit={sendEmail}>

                <div class="inputBox">
                    <input type="text" placeholder="name" required name="user_name" />
                    <input type="email" placeholder="email" required name="user_email" />
                </div>

                <div class="inputBox">
                    <input type="number" placeholder="number" required name="user_number" />
                    <input type="text" placeholder="subject" required name="subject" />
                </div>

                <textarea placeholder="message" name="message" id="" cols="30" rows="10" required></textarea>

                <button type="submit" class="btn" > send</button>

            </form>


        </section>)
}
export default ContactUS;