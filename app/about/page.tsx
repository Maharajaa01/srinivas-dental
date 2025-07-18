'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-tooth-line text-white text-xl"></i>
              </div>
              <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                Srinivas Dental
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Home</Link>
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Services</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Reviews</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center text-blue-600">
                <i className="ri-phone-line mr-2"></i>
                <span className="font-semibold">+91 98765 43210</span>
              </div>
              <Link href="/#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer font-semibold">
                Book Appointment
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Dr. Srinivas Dentistry
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Changing Smiles. Changing Lives. Changing Dentistry.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Vision For Dr. Srinivas Dentistry - Best Dental Clinic</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-8">And Meet Dr. Divya – Our Smile Maestro</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Welcome to Dr. Srinivas Dentistry, the premier destination for the best dental care in 
                  Tamil Nadu. Whether you're seeking the expertise of a qualified dentist, regular dental 
                  service, or cosmetic dentistry, we're dedicated to providing exceptional dental services 
                  that cater to your family's needs. Located conveniently near Velachery, Adyar, and 
                  Besant Nagar, our clinic offers a comfortable and welcoming environment where you can feel 
                  at ease. Come and visit us.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Discover why we are recognized as the best dental clinic in Taramani for kids & 
                  cosmetic dentistry. Join us at Dr. Srinivas Dentistry and experience superior dental care 
                  today.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dr. Divya is committed to the patient care of our elite team which had years and 
                  The passion of an artist. This unique combination makes Dr. Divya a true connoisseur of 
                  dentistry, committed to bringing both and illuminating smiles.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  Divya worked as an FMC house postgraduate at Goa Dentistry Chennai for 3 years and 
                  served as a consultant at other premier clinics in Chennai and Bengaluru for over 5 
                  years before starting her own practice.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20female%20indian%20dentist%20Dr.%20Divya%20in%20modern%20dental%20clinic%2C%20confident%20smile%2C%20white%20medical%20coat%2C%20professional%20dental%20setting%2C%20warm%20caring%20expression%2C%20quality%20healthcare%20provider&width=500&height=600&seq=dr-divya-about&orientation=portrait"
                alt="Dr. Divya - Our Smile Maestro"
                className="rounded-3xl shadow-2xl object-cover w-full h-96 lg:h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">BDS</div>
                  <div className="text-sm text-gray-600">Qualified Dentist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team, Your Champions!</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Collaboratively we are unique for our integrated team that goes beyond individual to also 
              serve as dedicated advocates for your oral health. As your 'preparation champion,' our 
              journey towards lifelong oral health and personalized smile making in a person consultation 
              of Dr. You and on the part of your comprehensive care experience beyond mere professional 
              action; we function as a closely knit family unit, your expectations and dental wellness 
              are based among your family objectives; they understand our collective mission.
            </p>
          </div>

          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Together, we bring a collective approach to your goal, cultivated our 'voice working 
              collaborative professional advocate to you on.' and 'There' dedicated to service to 
              accomplish your 'real-existing' dental and your smile as well as at Dr.s Dentistry where 
              our dedication goes beyond mere professional action; We operate as closely knit family. 
              Your 'voice working' collaborative professional 'you and on' dental service are the 
              essentials on our shared mission.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Dr. Kamalavizhi Srinivas',
                position: 'Chief Dental Officer & Founder',
                specialization: 'General & Cosmetic Dentistry',
                experience: '15+ Years',
                education: 'BDS - Government Dental College',
                image: 'senior indian female dentist Dr. Kamalavizhi Srinivas, experienced dental professional, confident medical expert, dental clinic founder'
              },
              {
                name: 'Dr. Divya',
                position: 'Smile Maestro & Cosmetic Specialist',
                specialization: 'Aesthetic & Restorative Dentistry',
                experience: '8+ Years',
                education: 'BDS, Advanced Cosmetic Training',
                image: 'young indian female dentist Dr. Divya, cosmetic dentistry specialist, professional dental expert, modern clinic setting'
              },
              {
                name: 'Priya Sharma',
                position: 'Senior Dental Hygienist',
                specialization: 'Preventive Care & Education',
                experience: '10+ Years',
                education: 'Diploma in Dental Hygiene',
                image: 'indian dental hygienist professional woman in medical scrubs, dental clinic team member, preventive care specialist'
              },
              {
                name: 'Rajesh Kumar',
                position: 'Dental Assistant & Coordinator',
                specialization: 'Patient Care & Coordination',
                experience: '7+ Years',
                education: 'Certified Dental Assistant',
                image: 'indian male dental assistant in medical uniform, professional dental clinic staff, patient care coordinator'
              },
              {
                name: 'Anitha Reddy',
                position: 'Practice Manager',
                specialization: 'Operations & Patient Relations',
                experience: '12+ Years',
                education: 'MBA Healthcare Management',
                image: 'indian female practice manager in professional attire, healthcare administration professional, dental clinic management'
              },
              {
                name: 'Vikram Patel',
                position: 'Dental Technician',
                specialization: 'Lab Work & Prosthetics',
                experience: '9+ Years',
                education: 'Diploma in Dental Technology',
                image: 'indian male dental technician in lab coat, dental laboratory professional, prosthetics specialist working'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="relative mb-6">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=200&height=200&seq=team-${index + 1}&orientation=squarish`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg ring-4 ring-blue-100"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.specialization}</p>
                <div className="text-sm text-gray-500">
                  <p>{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Srinivas Dental?</h2>
            <p className="text-xl text-gray-600">Modern facility with advanced technology</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${stat.icon} text-blue-600 text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied patients who trust Srinivas Dental for their oral health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Book Your Visit
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              Call +91 98765 43210
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-tooth-line text-white text-xl"></i>
                </div>
                <div className="text-3xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  Srinivas Dental
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Your trusted partner for comprehensive dental care and beautiful smiles.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p>+91 98765 43210</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">2024 Srinivas Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}