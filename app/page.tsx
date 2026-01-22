
'use client';

import { useState, useEffect , ChangeEvent, FormEvent } from 'react';
import ZohoWhatsappWidget from './component/ZohoWhatsappWidget';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';



interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Home() {
 const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  setSubmitted(true);

  setTimeout(() => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setSubmitted(false);
  }, 3000);
};

  
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showBookingHighlight, setShowBookingHighlight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);



  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const services = [
    { 
      icon: 'ri-health-book-line', 
      title: 'Braces & Aligners', 
      description: 'Modern orthodontic solutions for perfect alignment and beautiful smiles',
      color: 'bg-blue-50 text-blue-600',
      link: '/services/braces'
    },
    { 
      icon: 'ri-heart-pulse-line', 
      title: 'Root Canal', 
      description: 'Pain-free root canal treatment with advanced techniques and care',
      color: 'bg-green-50 text-green-600',
      link: '/services/root-canal'
    },
    { 
      icon: 'ri-leaf-line', 
      title: 'Dental Implants', 
      description: 'Permanent tooth replacement solutions that look and feel natural',
      color: 'bg-purple-50 text-purple-600',
      link: '/services/dental-implants'
    },
    { 
      icon: 'ri-star-line', 
      title: 'Teeth Whitening', 
      description: 'Professional whitening treatments for a brighter, confident smile',
      color: 'bg-yellow-50 text-yellow-600',
      link: '/services/teeth-whitening'
    },
    { 
      icon: 'ri-user-heart-line', 
      title: 'Kids Dental', 
      description: 'Gentle, fun dental care specifically designed for children',
      color: 'bg-pink-50 text-pink-600',
      link: '/services/kids-dental'
    },
    { 
      icon: 'ri-magic-line', 
      title: 'Smile Design', 
      description: 'Comprehensive cosmetic dentistry for complete smile makeovers',
      color: 'bg-indigo-50 text-indigo-600',
      link: '/services/smile-design'
    }
  ];
  
  const galleryItems = [ 
  { category: 'Reception Area', src: '/gallery/reception.jpg' },
  { category: 'Treatment Room', src: '/gallery/treatment.jpg' },
  { category: 'Sterilization Area', src: '/gallery/sterilization.jpg' },
  { category: 'Patient Lounge', src: '/gallery/lounge.jpg' },
  { category: 'Digital X-Ray', src: '/gallery/xray.jpg' },
  { category: 'Consultation Room', src: '/gallery/consultation.jpg' },
  { category: 'Surgery Suite', src: '/gallery/surgery.png' },
  // { category: 'Recovery Area', src: '/gallery/reception.jpg' }
];

  const testimonials = [
    {
      name: 'Rijo Varghese',
      image: 'https://readdy.ai/api/search-image?query=middle%20aged%20indian%20businessman%20smiling%20warmly%2C%20dental%20clinic%20patient%20testimonial%20portrait%2C%20professional%20medical%20background%2C%20confident%20expression&width=80&height=80&seq=testimonial2&orientation=squarish',
      review: 'I have known Dr. Kamili for three years now. I am an NRI and visit her clinic everytime when Iam on vacation. Iam very picky when it comes to dentist and she is one among the best dentist I have known so far.  She is very professional and takes time to answer any question. I would highly recommend this clinic anyday',
      rating: 5,
      treatment: 'Dental Implants'
    },
    {
      name: 'Radhika Nalliah',
      image: 'https://readdy.ai/api/search-image?query=young%20indian%20woman%20with%20bright%20beautiful%20smile%2C%20dental%20clinic%20setting%2C%20modern%20medical%20facility%20background%2C%20happy%20satisfied%20patient%20portrait&width=80&height=80&seq=testimonial3&orientation=squarish',
      review: 'Very comfortable and patient friendly clinic. They give individual care to every patient. I personally suggest my friends to go to Dr. Kamalavizhi',
      rating: 5,
      treatment: 'Cosmetic Dentistry'
    },
    {
      name: 'Arko Sen',
      image: 'https://readdy.ai/api/search-image?query=indian%20father%20with%20child%20smiling%20at%20dental%20clinic%2C%20family%20dental%20care%2C%20pediatric%20dentistry%20patient%20testimonial%2C%20warm%20family%20portrait&width=80&height=80&seq=testimonial4&orientation=squarish',
      review: 'Great experience at  Srinivas multi specialty dental clinic. Dr S. Kamalazishi Ramesh is one of the best dentist who has ever worked on my teeth..and resolved the critical issues periodically , RCT was also done very professionally ,  Also, she has given me great tips on maintaining great dental hygiene. I would recommend this clinic to everyone for any kind of dental treatments!',
      rating: 5,
      treatment: 'Family Dentistry'
    },
    {
      name: 'Gomathi Andiappan',
      image: 'https://readdy.ai/api/search-image?query=professional%20indian%20woman%20smiling%20confidently%20with%20perfect%20teeth%2C%20dental%20patient%20testimonial%20photo%2C%20bright%20modern%20clinic%20background%2C%20natural%20lighting%2C%20happy%20expression&width=80&height=80&seq=testimonial1&orientation=squarish',
      review: 'Dr. Kamalavizhi transformed my smile completely! The root canal was painless and the results exceeded my expectations. Highly professional and caring team.',
      rating: 5,
      treatment: 'Root Canal & Smile Design'
    }
  ];
  
  const googleReviews = [
    {
      name: 'Ram Kumar',
      rating: 5,
      date: '2 years ago',
      review: 'Great facility and personal care taken by the Doctor. Would be happy to recommend the flinic to any of my friends',
      verified: true
    },
    {
      name: 'Sathyajhith Krishnan',
      rating: 5,
      date: '2 years ago', 
      review: 'Excellent with patients of all ages. Truly caring and does not suggest unnecessary treatments, extremely patient focussed.',
      verified: true
    },
    {
      name: 'Bharathi',
      rating: 5,
      date: '2 weeks ago',
      review: 'A very caring environment, doctors are quite friendly and provides the right advise.',
      verified: true
    },
        {
      name: 'Vinil Sunil',
      rating: 5,
      date: '3 years ago',
      review: 'Personal care, available anytime , flexible for working professionals , all expertise under one roof.',
      verified: true
    },
        {
      name: 'Sakthi R',
      rating: 5,
      date: '3 years ago',
      review: 'Very good treatment done for all dental problem..with latest technology',
      verified: true
    }
  ];
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-3 bg-blue-50 rounded-full flex items-center justify-center">
              <i className="ri-tooth-line text-blue-600 text-2xl"></i>
            </div>
          </div>
          <div className="text-blue-600 font-semibold text-lg">Srinivas Dental</div>
          <div className="text-gray-500 text-sm mt-2">Loading your smile...</div>
        </div>
      </div>
    );
  }
  
  const handleBookAppointment = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Highlight the booking form
    setShowBookingHighlight(true);
    setTimeout(() => setShowBookingHighlight(false), 3000);
  };
  



  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <nav className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-tooth-line text-white text-lg sm:text-xl"></i>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                Srinivas Dental
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">About</Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Reviews</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Contact</a>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center text-blue-600">
                <i className="ri-phone-line mr-2"></i>
                <span className="font-semibold text-sm lg:text-base">+91 98847 15109</span>
              </div>
              <button 
                onClick={handleBookAppointment}
                className="bg-blue-600 text-white px-3 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer font-semibold text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
              >
                <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Gallery</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                <div className="flex items-center text-blue-600 pt-2">
                  <i className="ri-phone-line mr-2"></i>
                  <span className="font-semibold">+91 98847 15109</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Full-Screen Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20luxury%20dental%20clinic%20interior%20with%20bright%20natural%20lighting%2C%20comfortable%20patient%20treatment%20area%2C%20professional%20dental%20equipment%2C%20clean%20white%20environment%2C%20peaceful%20atmosphere%2C%20contemporary%20medical%20facility%20design&width=1920&height=1080&seq=hero-dental&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                  Dr. Kamalavizhi
                  <span className="block text-blue-300">Srinivas</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 animate-fade-in-delay">
                  "Bringing Confidence Back to Your Smile"
                </p>
                <div className="w-16 sm:w-24 h-1 bg-blue-400 animate-fade-in-delay mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed animate-fade-in-delay-2 max-w-lg mx-auto lg:mx-0">
                Experience world-class dental care with over 15 years of expertise in comprehensive dentistry and smile transformations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3 justify-center lg:justify-start">
                <button 
                  onClick={handleBookAppointment}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-xl"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Book Appointment
                </button>
                <a href="tel:9884715109">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 animate-fade-in-delay-3 max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-300">15+</div>
                  <div className="text-xs sm:text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center border-l border-r border-blue-300 px-2">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-300">5000+</div>
                  <div className="text-xs sm:text-sm text-blue-100">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-300">★ 4.9</div>
                  <div className="text-xs sm:text-sm text-blue-100">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Services Section - Circular Cards */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Expert Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive dental care tailored to your unique needs, using the latest technology and techniques
            </p>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="group text-center cursor-pointer">
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-24 h-24 sm:w-32 sm:h-32 ${service.color} rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
                    <i className={`${service.icon} text-3xl sm:text-4xl`}></i>
                  </div>
                  <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 border-2 border-dashed border-gray-200 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors px-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto px-4 text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="mt-4 sm:mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* About Section - Two Column Layout */}
      <section id="about" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img 
                
                src="/kamalavizhi.png"

                  // src="https://readdy.ai/api/search-image?query=professional%20female%20indian%20dentist%20Dr.%20Kamalavizhi%20Srinivas%20in%20white%20medical%20coat%2C%20warm%20confident%20smile%2C%20modern%20dental%20clinic%20background%2C%20professional%20medical%20portrait%2C%20stethoscope%2C%20caring%20expression%2C%20bright%20lighting&width=600&height=700&seq=doctor-portrait&orientation=portrait"
                  alt="Dr. Kamalavizhi Srinivas"
                  className="rounded-3xl shadow-2xl object-cover w-full h-100 sm:h-100 lg:h-[830px]"
                  />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center shadow-lg z-20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-blue-600">Years</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Meet Dr. Kamalavizhi Srinivas</h2>
                <div className="w-16 sm:w-24 h-1 bg-blue-600 mb-6 sm:mb-8"></div>
              </div>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light italic leading-relaxed border-l-4 border-blue-600 pl-4 sm:pl-6">
                "My mission is to provide exceptional dental care that not only treats but also educates and empowers patients to maintain optimal oral health."
              </blockquote>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg"> Master of Dental Surgery in Orthodontics (MDS)</h4>
                    <p className="text-gray-600 text-sm sm:text-base">SRM Dental College, Chennai</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">15+ Years Clinical Experience</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Specialized in comprehensive dental care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Advanced Cosmetic & Restorative Dentistry</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Smile design and aesthetic treatments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Member, Indian Dental Association</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Committed to continued education and excellence</p>
                  </div>
                </div>
              </div>
                              
              <div className="pt-4 sm:pt-6">
                <Link href="/about">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 cursor-pointer text-sm sm:text-base">
                  View Full Profile
                </button>
              </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section id="testimonials" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">What Our Patients Say</h2>
            <p className="text-lg sm:text-xl text-gray-600">Real experiences from our valued patients</p>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="text-center max-w-4xl mx-auto">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-6 sm:mb-8 object-cover ring-4 ring-white shadow-lg"
                />
                
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl sm:text-2xl mx-1"></i>
                  ))}
                </div>
                
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 italic leading-relaxed px-2">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">
                    {testimonials[currentTestimonial].treatment}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <img src="https://readdy.ai/api/search-image?query=google%20logo%20icon%20colorful%2C%20google%20reviews%20badge%2C%20clean%20white%20background%2C%20official%20google%20branding&width=40&height=40&seq=google-logo&orientation=squarish" alt="Google" className="w-8 h-8 sm:w-10 sm:h-10 mr-3" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Google Reviews</h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600">See what our patients are saying on Google</p>
            <div className="flex items-center justify-center mt-4 sm:mt-6">
              <div className="flex text-yellow-400 text-xl sm:text-2xl mr-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-600 ml-2 text-sm sm:text-base">(127 reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {googleReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="font-bold text-blue-600 text-sm sm:text-base">{review.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{review.name}</h4>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-xs sm:text-sm"></i>
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                      {review.verified && (
                        <i className="ri-verified-badge-fill text-blue-500 ml-2"></i>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{review.review}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer text-sm sm:text-base">
              <i className="ri-external-link-line mr-2"></i>
              View All Reviews on Google
            </button>
          </div>
        </div>
      </section> */}


{/* Google Reviews Section (vertical) */}
{/* Horizontal swipeable list */}
<div className="overflow-x-auto snap-x snap-mandatory pb-2">
  <div className="flex gap-6 sm:gap-8">
    {googleReviews.map((review, index) => (
      <div
        key={index}
        className="shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow snap-start"
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
            <span className="font-bold text-blue-600 text-sm sm:text-base">
              {review.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {review.name}
            </h4>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(review.rating)].map((_, i) => (
                  <i
                    key={i}
                    className="ri-star-fill text-xs sm:text-sm"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {review.date}
              </span>
              {review.verified && (
                <i className="ri-verified-badge-fill text-blue-500 ml-2" />
              )}
            </div>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {review.review}
        </p>
      </div>
    ))}
  </div>
</div>







{/* Gallery Section */}
 <section id="gallery" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Clinic Gallery</h2>
            <p className="text-lg sm:text-xl text-gray-600">Take a virtual tour of our modern facility</p>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group h-32 sm:h-48 lg:h-64"
              >
                <img 
                  src={item.src}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-xs sm:text-sm lg:text-base">{item.category}</h4>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-xl sm:text-2xl lg:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-4 max-w-xl w-full">
              <img 
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].category}
                className="w-full h-auto rounded"
              />
              <p className="text-center mt-2 text-gray-700">{galleryItems[currentIndex].category}</p>

{/* Close Button */}
<button
  onClick={() => setIsOpen(false)}
  className="absolute top-3 right-3 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 shadow-md transition"
>
  <i className="ri-close-line text-2xl"></i>
</button>

{/* Previous Button */}
<button
  onClick={() =>
    setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length)
  }
  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded-full p-3 shadow-lg transition-all"
>
  <i className="ri-arrow-left-s-line text-xl sm:text-2xl"></i>
</button>

{/* Next Button */}
<button
  onClick={() => setCurrentIndex((currentIndex + 1) % galleryItems.length)}
  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded-full p-3 shadow-lg transition-all"
>
  <i className="ri-arrow-right-s-line text-xl sm:text-2xl"></i>
</button>

            </div>
          </div>
        )}
      </section>

<section id="contact" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600">Schedule your appointment today for a healthier, brighter smile</p>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Send Us a Message</h3>
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/drkamalavizhi@gmail.com"
                method="POST"
                target="hidden_iframe"
                className="space-y-4 sm:space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value="about:blank" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your dental concerns or questions..."
                  maxLength={500}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none text-sm sm:text-base"
                ></textarea>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 text-sm sm:text-base ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Send Message
                </button>
              </form>

              {submitted && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
                    <p className="text-xl font-semibold mb-2">✅ Submitted Successfully</p>
                    <p>Your form has been submitted. We’ll get back to you shortly.</p>
                  </div>
                </div>
              )}

              <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
            </div>
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <i className="ri-map-pin-line text-blue-600 text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Our Location</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        G Block,<br />
                        No 6, G - Block, 15th Street, Anna Nagar<br />
                        Chennai, Tamil Nadu 600040
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <i className="ri-phone-line text-green-600 text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Phone & WhatsApp</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a href="tel:+919884715109" className="hover:text-blue-600 transition-colors">+91 98847 15109</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <i className="ri-time-line text-purple-600 text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Clinic Hours</h4>
                      <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                        <p className="text-xs sm:text-sm text-red-600 mt-2">Emergency services available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Appointment</h4>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Need immediate care? Call us directly or send a WhatsApp message for fastest response.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="tel:9884715109">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors cursor-pointer text-sm sm:text-base">
                      {/* <i className="ri-phone-line mr-2"></i> */}
                      Call Now
                    </button>
                  </a>
                  <a href="https://wa.me/919884715109" target="_blank" rel="noopener noreferrer">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors cursor-pointer text-sm sm:text-base">
                      <i className="ri-whatsapp-line mr-2"></i>
                      WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Google Maps */}
      <div className="h-64 sm:h-80 lg:h-96 relative">
        <iframe
        
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.470444309196!2d80.20815830297941!3d13.09173199224047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526421fb57c9a9%3A0xc66575855a337594!2sSrinivas%20Multi%20Speciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1752945647164!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          // className="grayscale hover:grayscale-0 transition-all duration-300"
        ></iframe>
        {/* <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg"> */}
          {/* <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Srinivas Multi Speciality Dental Clinic</h4> */}
          {/* <p className="text-xs sm:text-sm text-gray-600">Chennai, Tamil Nadu</p> */}
        {/* </div> */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-tooth-line text-white text-lg sm:text-xl"></i>
                </div>
                {/* <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  Srinivas Dental
                  </div> */}
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                Your trusted partner for comprehensive dental care and beautiful smiles. Experience the difference of personalized, professional dental treatment.
              </p>
              <div className="flex space-x-4">
                {[ 
                  { icon: 'ri-facebook-fill', color: 'hover:bg-blue-600' },
                  { icon: 'ri-instagram-line', color: 'hover:bg-pink-600' },
                  { icon: 'ri-twitter-line', color: 'hover:bg-blue-400' },
                  { icon: 'ri-youtube-line', color: 'hover:bg-red-600' }
                ].map((social, index) => (
                  <div key={index} className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer ${social.color} transition-colors`}>
                    <i className={`${social.icon} text-white text-base sm:text-lg`}></i>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[ 'Home', 'About Us', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href={link === 'About Us' ? '/about' : `#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[ 'Root Canal Treatment', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Teeth Whitening', 'Pediatric Care'].map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm sm:text-base">{service}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                2025 Srinivas Dental  All rights reserved Developed By <a 
                href="https://www.dreamtechsolution.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline ml-1"
              >
                Dream Tech Solution
              </a>
  
              </p>
              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ZohoWhatsappWidget />

      {/* WhatsApp Floating Button */}
      {/* <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer group">
          <i className="ri-whatsapp-line text-2xl sm:text-3xl group-hover:animate-pulse"></i>
          </button>
          <div className="absolute -top-10 sm:-top-12 right-0 bg-gray-900 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
          </div>
          </div> */}
      {/* <div className="elfsight-app-86d37a36-9f83-491b-ab7c-253f2eabf3c5" data-elfsight-app-lazy></div> */}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
          }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}
