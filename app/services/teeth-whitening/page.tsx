'use client';

import Link from 'next/link';

export default function TeethWhiteningPage() {
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
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <i className="ri-arrow-right-line mx-3 text-gray-400"></i>
                <span className="text-blue-600 font-semibold">Teeth Whitening</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Brighten Your Smile with
                <span className="block text-yellow-600">Professional Whitening</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get a brilliantly white smile that lights up the room. Our advanced whitening treatments 
                deliver dramatic results safely and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Book Whitening Session
                </Link>
                <a href="tel:9884715109">
                  
                <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20teeth%20whitening%20treatment%20at%20dental%20clinic%2C%20bright%20white%20teeth%20transformation%2C%20dental%20hygienist%20performing%20whitening%20procedure%2C%20modern%20dental%20equipment%2C%20safe%20professional%20whitening&width=600&height=500&seq=whitening-hero&orientation=landscape"
                alt="Professional Teeth Whitening"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <i className="ri-star-line text-yellow-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">8 Shades</div>
                    <div className="text-sm text-gray-600">Whiter Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Whitening Options</h2>
            <p className="text-xl text-gray-600">Choose the perfect whitening treatment for your needs</p>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'In-Office Whitening',
                duration: '60 minutes',
                results: 'Up to 8 shades whiter',
                description: 'Professional strength whitening gel with protective measures for maximum results in one visit.',
                features: ['Immediate results', 'Professional supervision', 'Safe and effective', 'Longest lasting'],
                price: 'Starting from ₹15,000',
                color: 'yellow',
                popular: true
              },
              {
                title: 'Take-Home Kits',
                duration: '2-3 weeks',
                results: 'Up to 6 shades whiter',
                description: 'Custom-fitted trays with professional-grade whitening gel for gradual whitening at home.',
                features: ['Convenience of home', 'Gradual whitening', 'Custom-fitted trays', 'Professional gel'],
                price: 'Starting from ₹8,000',
                color: 'blue'
              },
              {
                title: 'Combination Treatment',
                duration: 'In-office + Home',
                results: 'Up to 10 shades whiter',
                description: 'Best of both worlds - immediate in-office results followed by at-home maintenance.',
                features: ['Maximum results', 'Long-term maintenance', 'Best value', 'Comprehensive care'],
                price: 'Starting from ₹20,000',
                color: 'purple'
              }
            ].map((option, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow ${option.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-${option.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className={`ri-star-line text-${option.color}-600 text-2xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{option.title}</h3>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{option.price}</div>
                  <div className="text-gray-600">{option.duration}</div>
                  <div className={`text-${option.color}-600 font-semibold`}>{option.results}</div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center">{option.description}</p>
                
                <div className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-5 h-5 bg-${option.color}-100 rounded-full flex items-center justify-center mr-3`}>
                        <i className={`ri-check-line text-${option.color}-600 text-sm`}></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/#contact" className={`block w-full text-center bg-${option.color}-600 hover:bg-${option.color}-700 text-white py-3 rounded-xl font-semibold transition-colors cursor-pointer`}>
                  Choose This Option
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Amazing Results</h2>
            <p className="text-xl text-gray-600">See the dramatic transformations our patients achieve</p>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                name: 'Maria S.',
                treatment: 'In-Office Whitening',
                shades: '8 shades whiter',
                beforeImage: 'teeth before whitening treatment, stained discolored teeth, coffee stains on teeth, yellow teeth before dental whitening',
                afterImage: 'teeth after professional whitening treatment, bright white smile, beautiful white teeth transformation, perfect dental whitening results'
              },
              {
                name: 'David K.',
                treatment: 'Combination Treatment',
                shades: '10 shades whiter',
                beforeImage: 'male patient teeth before whitening, tobacco stained teeth, dark discolored smile, dental whitening candidate before treatment',
                afterImage: 'male patient after teeth whitening, brilliant white smile, professional whitening results, confident bright smile transformation'
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=$%7Bcase_.beforeImage%7D&width=250&height=180&seq=whitening-before-${index + 1}&orientation=landscape`}
                        alt="Before Whitening"
                        className="rounded-xl shadow-md w-full h-32 object-cover mb-3"
                      />
                      <span className="text-gray-600 font-semibold">Before</span>
                    </div>
                    <div className="text-center">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=$%7Bcase_.afterImage%7D&width=250&height=180&seq=whitening-after-${index + 1}&orientation=landscape`}
                        alt="After Whitening"
                        className="rounded-xl shadow-md w-full h-32 object-cover mb-3"
                      />
                      <span className="text-yellow-600 font-semibold">After</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-arrow-right-line text-white text-xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{case_.name}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{case_.treatment}</p>
                  <p className="text-yellow-600 font-bold">{case_.shades}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Whitening Process</h2>
            <p className="text-xl text-gray-600">Simple steps to your brightest smile</p>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Comprehensive exam to determine the best whitening approach for you',
                icon: 'ri-user-smile-line'
              },
              {
                step: '02',
                title: 'Preparation',
                description: 'Professional cleaning and gum protection before whitening',
                icon: 'ri-shield-line'
              },
              {
                step: '03',
                title: 'Whitening',
                description: 'Application of professional-strength whitening gel with light activation',
                icon: 'ri-flashlight-line'
              },
              {
                step: '04',
                title: 'Results',
                description: 'Immediate results with up to 8 shades whiter teeth in one session',
                icon: 'ri-star-line'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-yellow-600 text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-yellow-600 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How long do whitening results last?',
                answer: 'Professional whitening results typically last 1-3 years, depending on your diet, lifestyle, and oral care habits. Avoiding staining substances like coffee, tea, and tobacco helps maintain results longer.'
              },
              {
                question: 'Is teeth whitening safe?',
                answer: 'Yes, professional teeth whitening is completely safe when performed under dental supervision. We use proven techniques and protective measures to ensure your safety and comfort.'
              },
              {
                question: 'Will whitening cause sensitivity?',
                answer: 'Some patients may experience mild sensitivity during or after treatment. We use desensitizing agents and can adjust the treatment to minimize any discomfort.'
              },
              {
                question: 'How white can my teeth get?',
                answer: 'Most patients achieve 6-8 shades whiter with professional treatment. The final result depends on your starting shade and the natural color of your teeth.'
              },
              {
                question: 'Who is not suitable for whitening?',
                answer: 'Whitening is not recommended for pregnant women, children under 16, or people with certain dental conditions. We will assess your suitability during consultation.'
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
      <section className="py-24 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Brightest Smile?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
            Transform your smile with professional teeth whitening. Book your consultation today and discover how bright your smile can be!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Book Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
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
            <p className="text-gray-400 text-sm">2025 Srinivas Dental  All rights reserved Developed By MAVx  .</p>
          </div>
        </div>
      </footer>
    </div>
  );
}