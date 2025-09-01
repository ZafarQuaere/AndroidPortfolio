import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (since this is frontend-only with mock data)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1c1b]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#d9fb06] font-black uppercase mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-8" />
            <p className="body-medium text-[#888680] max-w-2xl mx-auto">
              Ready to discuss your next Android project or explore collaboration opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="heading-4 text-[#d9fb06] mb-8 uppercase tracking-wide">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 group-hover:border-[#d9fb06]/50 transition-colors duration-300">
                      <Mail size={24} className="text-[#d9fb06]" />
                    </div>
                    <div>
                      <h4 className="heading-6 text-[#d9fb06] mb-1 uppercase">Email</h4>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="body-small text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 group-hover:border-[#d9fb06]/50 transition-colors duration-300">
                      <Phone size={24} className="text-[#d9fb06]" />
                    </div>
                    <div>
                      <h4 className="heading-6 text-[#d9fb06] mb-1 uppercase">Phone</h4>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="body-small text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 group-hover:border-[#d9fb06]/50 transition-colors duration-300">
                      <MapPin size={24} className="text-[#d9fb06]" />
                    </div>
                    <div>
                      <h4 className="heading-6 text-[#d9fb06] mb-1 uppercase">Location</h4>
                      <p className="body-small text-[#888680]">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="heading-4 text-[#d9fb06] mb-6 uppercase tracking-wide">
                  Follow Me
                </h3>
                
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 hover:border-[#d9fb06]/50 hover:bg-[#d9fb06]/10 transition-all duration-300 group"
                  >
                    <Github size={24} className="text-[#d9fb06] group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#302f2c] rounded-lg flex items-center justify-center border border-[#3f4816]/50 hover:border-[#d9fb06]/50 hover:bg-[#d9fb06]/10 transition-all duration-300 group"
                  >
                    <Linkedin size={24} className="text-[#d9fb06] group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-[#302f2c] rounded-2xl p-6 border border-[#3f4816]/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-[#d9fb06] rounded-full animate-pulse" />
                  <h4 className="heading-6 text-[#d9fb06] uppercase tracking-wide">
                    Currently Available
                  </h4>
                </div>
                <p className="body-small text-[#888680] leading-relaxed">
                  I'm actively seeking new opportunities and exciting Android development projects. 
                  Whether you're looking for a technical lead, senior developer, or consultant, 
                  I'd love to discuss how I can contribute to your team's success.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="heading-4 text-[#d9fb06] mb-8 uppercase tracking-wide">
                Send a Message
              </h3>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-[#d9fb06]/10 border border-[#d9fb06]/30 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle size={20} className="text-[#d9fb06]" />
                  <p className="body-small text-[#d9fb06]">
                    Thank you for your message! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block heading-6 text-[#d9fb06] mb-2 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816]/50 rounded-lg text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06]/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block heading-6 text-[#d9fb06] mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816]/50 rounded-lg text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06]/50 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block heading-6 text-[#d9fb06] mb-2 uppercase tracking-wide">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816]/50 rounded-lg text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06]/50 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block heading-6 text-[#d9fb06] mb-2 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#302f2c] border border-[#3f4816]/50 rounded-lg text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06]/50 focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#1a1c1b]/30 border-t-[#1a1c1b] rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Contact Info Note */}
              <div className="mt-8 p-4 bg-[#302f2c]/50 rounded-lg border border-[#3f4816]/30">
                <p className="body-small text-[#888680] text-center">
                  Prefer direct communication? Feel free to reach out via{' '}
                  <a href={`mailto:${personalInfo.email}`} className="text-[#d9fb06] hover:underline">
                    email
                  </a>
                  {' '}or{' '}
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#d9fb06] hover:underline">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;