'use client';

import Link from 'next/link';

export default function KidsDentalPage() {
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
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">About</Link>
              <Link href="/#services" className="text-blue-600 font-medium">Services</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Reviews</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center text-blue-600">
                <i className="ri-phone-line mr-2"></i>
                <span className="font-semibold">+91 98847 15109</span>
              </div>
              <Link href="/#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer font-semibold">
                Book Appointment
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <i className="ri-arrow-right-line mx-3 text-gray-400"></i>
                <span className="text-blue-600 font-semibold">Kids Dental Care</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Gentle Dental Care for
                <span className="block text-pink-600">Little Smiles</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Making dental visits fun and comfortable for children. Our specialized pediatric approach 
                ensures your child develops healthy habits and positive associations with dental care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Book Kids Appointment
                </Link>
                <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=happy%20children%20at%20pediatric%20dental%20clinic%2C%20friendly%20dentist%20examining%20child%20patient%2C%20colorful%20kid-friendly%20dental%20office%2C%20child%20smiling%20during%20dental%20checkup%2C%20pediatric%20dentistry%20setting&width=600&height=500&seq=kids-dental-hero&orientation=landscape"
                alt="Kids Dental Care"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <i className="ri-heart-line text-pink-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Happy Kids</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Kids */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Kids Dental Services</h2>
            <p className="text-xl text-gray-600">Comprehensive care designed especially for children</p>
            <div className="w-24 h-1 bg-pink-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: 'ri-search-eye-line',
                title: 'Regular Checkups',
                description: 'Gentle examinations to monitor growth and development of teeth and gums',
                color: 'pink'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Preventive Care',
                description: 'Fluoride treatments and sealants to protect against cavities',
                color: 'purple'
              },
              {
                icon: 'ri-brush-line',
                title: 'Cleaning & Hygiene',
                description: 'Professional cleaning with education on proper brushing techniques',
                color: 'blue'
              },
              {
                icon: 'ri-heart-add-line',
                title: 'Cavity Treatment',
                description: 'Gentle fillings using child-friendly techniques and materials',
                color: 'green'
              },
              {
                icon: 'ri-graduation-cap-line',
                title: 'Dental Education',
                description: 'Fun learning sessions about oral health and proper care habits',
                color: 'yellow'
              },
              {
                icon: 'ri-first-aid-kit-line',
                title: 'Emergency Care',
                description: 'Immediate care for dental injuries and urgent dental problems',
                color: 'red'
              }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${service.icon} text-${service.color}-600 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Kids */}
      <section className="py-24 bg-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Kids Love Coming Here</h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-gamepad-line',
                title: 'Fun Environment',
                description: 'Colorful, kid-friendly clinic with games and entertainment'
              },
              {
                icon: 'ri-user-smile-line',
                title: 'Gentle Approach',
                description: 'Patient, caring staff trained in pediatric dental techniques'
              },
              {
                icon: 'ri-gift-line',
                title: 'Reward System',
                description: 'Special prizes and rewards for brave and cooperative children'
              },
              {
                icon: 'ri-parent-line',
                title: 'Parent Involvement',
                description: 'Parents can stay with their child throughout the treatment'
              },
              {
                icon: 'ri-time-line',
                title: 'Flexible Scheduling',
                description: 'Convenient appointment times that work with school schedules'
              },
              {
                icon: 'ri-heart-line',
                title: 'Anxiety-Free',
                description: 'Special techniques to reduce fear and anxiety in children'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-pink-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Based Care */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Care by Age Group</h2>
            <p className="text-xl text-gray-600">Specialized treatment for every stage of development</p>
            <div className="w-24 h-1 bg-pink-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                ageGroup: 'Toddlers (1-3 years)',
                image: 'happy toddler at dental clinic, first dental visit, pediatric dentist with small child, gentle dental examination',
                services: ['First dental visit', 'Habit counseling', 'Fluoride application', 'Parent education'],
                color: 'pink'
              },
              {
                ageGroup: 'Preschoolers (4-6 years)',
                image: 'preschool child receiving dental care, preventive dentistry for young children, dental sealants application',
                services: ['Cavity prevention', 'Dental sealants', 'Orthodontic screening', 'Oral hygiene training'],
                color: 'purple'
              },
              {
                ageGroup: 'School Age (7-12 years)',
                image: 'school age child at dentist office, comprehensive dental checkup, pediatric dental treatment',
                services: ['Comprehensive exams', 'Cavity treatment', 'Space maintainers', 'Sports mouthguards'],
                color: 'blue'
              }
            ].map((group, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bgroup.image%7D&width=400&height=300&seq=kids-age-${index + 1}&orientation=landscape`}
                    alt={group.ageGroup}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{group.ageGroup}</h3>
                  <div className="space-y-3">
                    {group.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-5 h-5 bg-${group.color}-100 rounded-full flex items-center justify-center mr-3`}>
                          <i className={`ri-check-line text-${group.color}-600 text-sm`}></i>
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tips for Parents</h2>
            <p className="text-xl text-gray-600">Help your child have a positive dental experience</p>
            <div className="w-24 h-1 bg-pink-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: 'Start Early',
                    description: 'Bring your child for their first visit by age 1 or within 6 months of their first tooth'
                  },
                  {
                    title: 'Stay Positive',
                    description: 'Use positive language when talking about dental visits and avoid sharing your own fears'
                  },
                  {
                    title: 'Practice at Home',
                    description: 'Make brushing and flossing fun with songs, games, and colorful toothbrushes'
                  },
                  {
                    title: 'Bring Comfort Items',
                    description: 'A favorite toy or blanket can help your child feel more comfortable during treatment'
                  }
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{tip.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=parent%20and%20child%20together%20at%20dental%20office%2C%20family%20dental%20care%2C%20supportive%20parent%20during%20child%20dental%20visit%2C%20comfortable%20pediatric%20dentistry%20environment&width=500&height=400&seq=parent-child-dental&orientation=squarish"
                alt="Parent and Child at Dentist"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Give Your Child the Gift of Healthy Smiles
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Schedule your child's dental appointment today and start their lifelong journey to excellent oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Book Kids Appointment
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              Call +91 98847 15109
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
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p>+91 98847 15109</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">2025 Srinivas Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}