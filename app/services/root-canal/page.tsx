'use client';

import Link from 'next/link';

export default function RootCanalPage() {
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
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <i className="ri-arrow-right-line mx-3 text-gray-400"></i>
                <span className="text-blue-600 font-semibold">Root Canal Treatment</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Pain-Free Root Canal
                <span className="block text-green-600">Treatment</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Save your natural tooth with our advanced, virtually painless root canal therapy. 
                Experience comfort and precision with modern endodontic techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Schedule Consultation
                </Link>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20dental%20root%20canal%20treatment%20procedure%2C%20professional%20dentist%20performing%20endodontic%20therapy%2C%20clean%20sterile%20dental%20clinic%20environment%2C%20advanced%20dental%20equipment%2C%20patient%20comfort%20care%2C%20pain-free%20dental%20treatment&width=600&height=500&seq=rootcanal-hero&orientation=landscape"
                alt="Root Canal Treatment"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-heart-pulse-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Root Canal */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Root Canal Treatment?</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Root canal treatment is a dental procedure designed to save a severely infected or damaged tooth. 
                The treatment involves removing the infected pulp from inside the tooth, cleaning and disinfecting 
                the root canals, and then filling and sealing the space.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Preserve Natural Tooth</h4>
                    <p className="text-gray-600">Keep your original tooth instead of extraction</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pain Relief</h4>
                    <p className="text-gray-600">Eliminate severe tooth pain and infection</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cost Effective</h4>
                    <p className="text-gray-600">More affordable than tooth replacement options</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=dental%20anatomy%20cross%20section%20showing%20tooth%20root%20canal%20system%2C%20educational%20dental%20illustration%2C%20clean%20medical%20diagram%2C%20tooth%20structure%20with%20pulp%20and%20roots%20highlighted&width=500&height=400&seq=rootcanal-anatomy&orientation=squarish"
                alt="Root Canal Anatomy"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Treatment Process</h2>
            <p className="text-xl text-gray-600">Step-by-step approach to ensure comfort and success</p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnosis',
                description: 'Comprehensive examination with digital X-rays to assess the condition',
                icon: 'ri-search-line'
              },
              {
                step: '02', 
                title: 'Anesthesia',
                description: 'Local anesthesia to ensure complete comfort during the procedure',
                icon: 'ri-heart-pulse-line'
              },
              {
                step: '03',
                title: 'Treatment',
                description: 'Careful removal of infected pulp and thorough cleaning of root canals',
                icon: 'ri-tools-line'
              },
              {
                step: '04',
                title: 'Restoration',
                description: 'Filling and sealing with crown placement for full restoration',
                icon: 'ri-award-line'
              }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-green-600 text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Root Canal Treatment</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Saves Natural Tooth',
                description: 'Preserves your original tooth structure and function'
              },
              {
                icon: 'ri-heart-line',
                title: 'Pain Relief',
                description: 'Eliminates severe pain caused by infected tooth pulp'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Cost Effective',
                description: 'More economical than tooth extraction and replacement'
              },
              {
                icon: 'ri-time-line',
                title: 'Quick Recovery',
                description: 'Faster healing compared to tooth extraction procedures'
              },
              {
                icon: 'ri-restaurant-line',
                title: 'Normal Function',
                description: 'Restore normal chewing and biting capabilities'
              },
              {
                icon: 'ri-smile-line',
                title: 'Aesthetic Appeal',
                description: 'Maintains your natural smile and facial structure'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-green-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Is root canal treatment painful?',
                answer: 'Modern root canal treatment is virtually painless. We use advanced anesthesia techniques and pain management protocols to ensure your comfort throughout the procedure.'
              },
              {
                question: 'How long does the treatment take?',
                answer: 'Most root canal treatments can be completed in 1-2 visits, with each appointment lasting 60-90 minutes depending on the complexity of the case.'
              },
              {
                question: 'What can I expect after treatment?',
                answer: 'Some mild discomfort is normal for a few days after treatment. This can be managed with over-the-counter pain medication. Most patients return to normal activities the next day.'
              },
              {
                question: 'How successful is root canal treatment?',
                answer: 'Root canal treatment has a high success rate of 85-97%. With proper care, a treated tooth can last a lifetime.'
              },
              {
                question: 'Do I need a crown after root canal?',
                answer: 'In most cases, yes. A crown protects the treated tooth from fracture and restores its full function and appearance.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Save Your Tooth?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Don't let tooth pain control your life. Schedule your consultation today and experience pain-free root canal treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Book Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
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