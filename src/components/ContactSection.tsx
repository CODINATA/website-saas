import React, { useState } from 'react';
import Container from './ui/Container';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-slate-600">
              Have questions about our platform? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;