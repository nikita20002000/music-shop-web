import React, { useState } from 'react';

// Компонент секции контактов
const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // В реальном приложении здесь был бы API-запрос для сохранения email
      console.log('Subscribed with email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Сбросить состояние успешной подписки через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive releases, special offers, and vinyl care tips
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              required
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 p-3 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-300">
              Thanks for subscribing! We'll keep you updated with the latest news.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;