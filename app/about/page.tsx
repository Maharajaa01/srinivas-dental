
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <nav className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-tooth-line text-white text-lg sm:text-xl"></i>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                Srinivas Dental
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link href="/#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Home</Link>
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Services</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Reviews</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Contact</Link>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center text-blue-600">
                <i className="ri-phone-line mr-2"></i>
                <span className="font-semibold text-sm lg:text-base">+91 98847 15109</span>
              </div>
              <Link href="/#contact" className="bg-blue-600 text-white px-3 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer font-semibold text-sm sm:text-base">
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </Link>
              
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
                <Link href="/#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-blue-600 font-medium">About</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
                <Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</Link>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
                <div className="flex items-center text-blue-600 pt-2">
                  <i className="ri-phone-line mr-2"></i>
                  <span className="font-semibold">+91 98847 15109</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Welcome to Srinivas Dental Clinic
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Changing Smiles. Changing Lives. Changing Dentistry.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Vision For Srinivas Dental - Best Dental Clinic</h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-6 sm:mb-8">And Meet Dr. Priya – Our Smile Maestro</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Welcome to  Srinivas Dental, the premier destination for the best dental care in 
                  Tamil Nadu. Whether you're seeking the expertise of a qualified dentist, regular dental 
                  service, or cosmetic dentistry, we're dedicated to providing exceptional dental services 
                  that cater to your family's needs. Located conveniently near Mogappair, and 
                  Anna Nagar, our clinic offers a comfortable and welcoming environment where you can feel 
                  at ease. Come and visit us.
                </p>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Discover why we are recognized as the best dental clinic in Taramani for kids & 
                  cosmetic dentistry. Join us at Srinivas Dental and experience superior dental care 
                  today.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Dr.Priya is committed to the patient care of our elite team which had years and 
                  The passion of an artist. This unique combination makes Dr.Priya a true connoisseur of 
                  dentistry, committed to bringing both and illuminating smiles.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Dr.Priya worked as an FMC house postgraduate at Goa Dentistry Chennai for 3 years and 
                  served as a consultant at other premier clinics in Chennai and Bengaluru for over 5 
                  years before starting her own practice.
                </p>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <img 
                src="./smile_dr.png"
                alt="Dr.Deepak Victor - Our Smile Maestro"
                className="rounded-3xl shadow-2xl object-cover w-full h-90 sm:h-96 lg:h-[750px]"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">MDS</div>
                  <div className="text-xs sm:text-sm text-gray-600">Qualified Dentist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Team, Your Champions!</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Collaboratively we are unique for our integrated team that goes beyond individual to also 
              serve as dedicated advocates for your oral health. As your 'preparation champion,' our 
              journey towards lifelong oral health and personalized smile making in a person consultation 
              of Dr. You and on the part of your comprehensive care experience beyond mere professional 
              action; we function as a closely knit family unit, your expectations and dental wellness 
              are based among your family objectives; they understand our collective mission.
            </p>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
              Together, we bring a collective approach to your goal, cultivated our 'voice working 
              collaborative professional advocate to you on.' and 'There' dedicated to service to 
              accomplish your 'real-existing' dental and your smile as well as at Dr.s Dentistry where 
              our dedication goes beyond mere professional action; We operate as closely knit family. 
              Your 'voice working' collaborative professional 'you and on' dental service are the 
              essentials on our shared mission.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                name: 'Dr. Kamalavizhi Srinivas',
                position: 'Chief Dental Officer & Founder',
                specialization: 'General & Cosmetic Dentistry',
                experience: '15+ Years',
                education: 'MDS - SRM Dental College',
                image: 'kamalavizhi.png'
              },
              {
                name: 'Dr.Sripal',
                position: 'Smile Maestro & Cosmetic Specialist',
                specialization: 'Aesthetic & Restorative Dentistry',
                experience: '8+ Years',
                education: 'MDS, Advanced Cosmetic Training',
                image: 'sripal.jpg'
              },
              {
                name: 'Dr.Deepak Victor',
                position: 'Senior Dental Hygienist',
                specialization: 'Preventive Care & Education',
                experience: '10+ Years',
                education: 'Masters in Dental Hygiene',
                image: 'victor.jpg'

              },
              {
                name: 'Dr.Tamilazhagan',
                position: 'Dental Surgen & Coordinator',
                specialization: 'Orthodontics',
                experience: '7+ Years',
                education: 'Certified Dental Assistant',
                image: 'tamilazhagan.jpg'
              },
              {
                name: 'Dr.Swaminathan',
                position: 'Senior Doctor',
                specialization: 'Orthodontics',
                experience: '12+ Years',
                education: 'MBA Healthcare Management',
                image: 'swaminathan.jpg'

              },
              {
                name: 'Dr.Vamsi Lavu',
                position: 'Senior Doctor',
                specialization: 'Orthodontics',
                experience: '9+ Years',
                education: 'Master of Dental Surgery in Orthodontics',
              image: 'vamsi.jpg'
              },
                {
                name: 'Dr.Sushil Chakravarthy',
                position: 'Senior Doctor',
                specialization: 'Orthodontics',
                experience: '9+ Years',
                education: 'Master of Dental Surgery in Orthodontics',
              image: 'sushil.jpg'
                
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8  shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="relative mb-4 sm:mb-6">
                  <img 
                    src={`/images/team/${member.image}`}
                    // src='/images/team/kamalavizhi.png'

                    // alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover shadow-lg ring-4 ring-blue-100"
                  />
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.position}</p>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{member.specialization}</p>
                <div className="text-xs sm:text-sm text-gray-500">
                  <p>{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Values</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: 'ri-heart-line',
                title: 'Patient-Centered Care',
                description: 'Your comfort and health are our top priorities in every treatment decision'
              },
              {
                icon: 'ri-award-line',
                title: 'Excellence',
                description: 'We strive for the highest standards in all aspects of dental care and service'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Integrity',
                description: 'Honest, transparent communication and ethical practices guide everything we do'
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Innovation',
                description: 'Embracing latest technology and techniques for better patient outcomes'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${value.icon} text-blue-600 text-xl sm:text-2xl`}></i>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Srinivas Dental?</h2>
            <p className="text-lg sm:text-xl text-gray-600">Modern facility with advanced technology</p>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: 'ri-microscope-line',
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment including digital X-rays, 3D imaging, and laser dentistry'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Sterilization Standards',
                description: 'Highest level of infection control and sterilization protocols for your safety'
              },
              {
                icon: 'ri-time-line',
                title: 'Flexible Scheduling',
                description: 'Convenient appointment times including evenings and weekends'
              },
              {
                icon: 'ri-map-pin-line',
                title: 'Prime Location',
                description: 'Easily accessible location near Velachery, Adyar, and Besant Nagar'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Affordable Care',
                description: 'Competitive pricing with flexible payment options and insurance acceptance'
              },
              {
                icon: 'ri-customer-service-line',
                title: '24/7 Emergency',
                description: 'Round-the-clock emergency dental care for urgent situations'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${feature.icon} text-blue-600 text-xl sm:text-2xl`}></i>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Achievements</h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: '5000+',
                label: 'Happy Patients',
                icon: 'ri-user-smile-line'
              },
              {
                number: '15+',
                label: 'Years Experience',
                icon: 'ri-calendar-line'
              },
              {
                number: '98%',
                label: 'Success Rate',
                icon: 'ri-award-line'
              },
              {
                number: '4.9★',
                label: 'Google Rating',
                icon: 'ri-star-fill'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${stat.icon} text-blue-600 text-2xl sm:text-3xl`}></i>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
            Join thousands of satisfied patients who trust Srinivas Dental for their oral health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Book Your Visit
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              Call +91 98847 15109
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-tooth-line text-white text-lg sm:text-xl"></i>
                </div>
                <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  Srinivas Dental
                </div>
              </Link>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                Your trusted partner for comprehensive dental care and beautiful smiles.
              </p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</Link></li>
                <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <p>+91 98847 15109</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">2025 Srinivas Dental  All rights reserved Developed By                 <a 
    href="https://www.dreamtechsolution.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white underline ml-1"
  >
    Dream Tech Solution
  </a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}