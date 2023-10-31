import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init(process.env.REACT_APP_ID);
    emailjs.sendForm(
      "service_qfs8hve",
      "template_r5t9ajn",
      form.current,
      process.env.REACT_APP_ID
    ).then((result) => {
      console.log(result);
      form.current.reset();
      setIsSubmit(true);
    }).catch((error) => {console.log(error);
      setSubmitError(true);
    });
  };
  return (
    <section className="contact" id="contact">
      <div className="titre-top">
        <h2>Contact</h2>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="nous-ecrire">
            <h4>Nous écrire</h4>
            <p>
              Pour toute question, appelez nous au : 01 23 45 67 89 ou envoyez
              nous un message ci-dessous.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="form-content">
            <div className="form-grid">
              <div>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" required id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required id="email" />
              </div>
              <div className="textarea">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
            </div>
            <input type="submit" className="button" value="Envoyer" />
            {isSubmit && <span className="success">Message envoyé !</span>}
            {submitError && <span className="fail">Le service a rencontré une erreur.</span>}
          </form>
        </div>
        <div className="contact-right">
          <iframe
            className="maps"
            src="https://www.google.com/maps/d/u/0/embed?mid=10WOdWbkTR5d5lhNVli4xOrIylIFhOCs&ehbc=2E312F&noprof=1"
          ></iframe>
          <div className="contact-right-container">
            <h3>Entreprise USLU</h3>
            <div className="phonemail">
              <img src="./img/adress.png" alt="adress" />
              <div className="phonemail-content">
                <h4>Adresse</h4>
                <h4>42000 Saint-Étienne</h4>
              </div>
            </div>
            <div className="phonemail">
              <img src="./img/phone.png" alt="téléphone" />
              <div className="phonemail-content">
                <h4>Téléphone</h4>
                <h4>06 09 57 01 36</h4>
              </div>
            </div>
            <div className="phonemail">
              <img src="./img/email.png" alt="courriel" />
              <div className="phonemail-content">
                <h4>Mail</h4>
                <h4>Alisan4299@gmail.com</h4>
              </div>
            </div>
            <div className="phonemail">
              <img src="./img/devis.png" alt="devis" />
              <div
                className="phonemail-content"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h4>Devis gratuit</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
