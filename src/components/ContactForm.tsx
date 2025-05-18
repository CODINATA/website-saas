import React, { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';
import { Mail, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('http://192.168.1.12:5001/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        const data = await response.json();
        console.log('Response:', data);

        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending your message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <div className="flex justify-center mb-4 text-green-500">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600 mb-6">
          Thanks for reaching out. We'll get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <Input
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            error={errors.email}
            required
          />
          
          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            error={errors.subject}
            required
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message here..."
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message 
                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                  : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
              } shadow-sm focus:outline-none focus:ring-2 transition`}
              required
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            isLoading={isSubmitting}
            size="large"
          >
            <Mail size={18} className="mr-2" />
            Send Message
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;