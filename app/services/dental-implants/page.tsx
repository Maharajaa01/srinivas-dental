'use client';

import Link from 'next/link';

export default function DentalImplantsPage() {
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
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <i className="ri-arrow-right-line mx-3 text-gray-400"></i>
                <span className="text-blue-600 font-semibold">Dental Implants</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Permanent Tooth
                <span className="block text-purple-600">Replacement</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Replace missing teeth with dental implants that look, feel, and function like natural teeth. 
                Restore your confidence and enjoy eating your favorite foods again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Free Consultation
                </Link>
                <a href="tel:9884715109">

                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=dental%20implant%20procedure%20at%20modern%20clinic%2C%20titanium%20dental%20implants%2C%20professional%20implant%20dentistry%2C%20tooth%20replacement%20surgery%2C%20advanced%20dental%20implant%20technology&width=600&height=500&seq=implants-hero&orientation=landscape"
                alt="Dental Implants"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-leaf-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Dental Implants */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What are Dental Implants?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dental implants are titanium posts that are surgically placed into the jawbone to replace 
                the root of a missing tooth. They provide a strong foundation for permanent or removable 
                replacement teeth that are made to match your natural teeth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Looks & Feels Natural</h4>
                    <p className="text-gray-600">Indistinguishable from your natural teeth</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Permanent Solution</h4>
                    <p className="text-gray-600">Lasts a lifetime with proper care</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Preserves Bone Health</h4>
                    <p className="text-gray-600">Prevents jawbone deterioration</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=dental%20implant%20anatomy%20diagram%2C%20implant%20crown%20abutment%20and%20titanium%20post%2C%20educational%20dental%20illustration%2C%20cross%20section%20of%20dental%20implant%20in%20jawbone&width=500&height=400&seq=implant-anatomy&orientation=squarish"
                alt="Dental Implant Anatomy"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Implants */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Implant Solutions</h2>
            <p className="text-xl text-gray-600">Customized options for every situation</p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Single Tooth Implant',
                description: 'Replace one missing tooth without affecting adjacent teeth',
                image: 'single dental implant with crown, individual tooth replacement, titanium implant post with ceramic crown',
                features: ['No damage to healthy teeth', 'Permanent solution', 'Easy to clean', 'Natural appearance'],
                price: 'Starting from ₹35,000',
                color: 'purple'
              },
              {
                title: 'Multiple Implants',
                description: 'Replace several missing teeth with individual implants',
                image: 'multiple dental implants in jaw, several tooth replacements, comprehensive implant dentistry treatment',
                features: ['Individual root support', 'Independent cleaning', 'Strong and stable', 'Long-term solution'],
                price: 'Starting from ₹1,50,000',
                color: 'blue'
              },
              {
                title: 'All-on-4 Implants',
                description: 'Full arch replacement with just four strategically placed implants',
                image: 'all on 4 dental implants, full mouth restoration, complete arch replacement with four implants',
                features: ['Full arch replacement', 'Fewer implants needed', 'Immediate function', 'Cost effective'],
                price: 'Starting from ₹3,50,000',
                color: 'green'
              }
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Boption.image%7D&width=400&height=300&seq=implant-type-${index + 1}&orientation=landscape`}
                    alt={option.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-gray-900">{option.price}</div>
                  </div>
                  
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
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Implant Process</h2>
            <p className="text-xl text-gray-600">Your journey to new teeth</p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Comprehensive exam with 3D imaging to plan your treatment',
                icon: 'ri-search-line',
                duration: 'Day 1'
              },
              {
                step: '02',
                title: 'Implant Placement',
                description: 'Minimally invasive surgery to place the titanium implant',
                icon: 'ri-tools-line',
                duration: '1-2 hours'
              },
              {
                step: '03',
                title: 'Healing Period',
                description: 'Osseointegration process where implant fuses with bone',
                icon: 'ri-time-line',
                duration: '3-6 months'
              },
              {
                step: '04',
                title: 'Crown Placement',
                description: 'Custom crown attached to complete your new tooth',
                icon: 'ri-award-line',
                duration: '2-3 weeks'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-purple-600 text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 mb-3 leading-relaxed">{process.description}</p>
                <div className="text-sm text-purple-600 font-semibold">{process.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Dental Implants?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-heart-line',
                title: 'Natural Feel',
                description: 'Feel and function exactly like your natural teeth'
              },
              {
                icon: 'ri-time-line',
                title: 'Lifetime Solution',
                description: 'With proper care, implants can last a lifetime'
              },
              {
                icon: 'ri-restaurant-line',
                title: 'Eat Anything',
                description: 'Enjoy all your favorite foods without restriction'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Preserve Bone',
                description: 'Prevent bone loss and maintain facial structure'
              },
              {
                icon: 'ri-smile-line',
                title: 'Confident Smile',
                description: 'Smile, speak, and laugh with complete confidence'
              },
              {
                icon: 'ri-brush-line',
                title: 'Easy Care',
                description: 'Clean and maintain just like natural teeth'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-purple-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Successful Transformations</h2>
            <p className="text-xl text-gray-600">See the life-changing results</p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                name: 'Thomas K.',
                treatment: 'Single Tooth Implant',
                issue: 'Lost front tooth in accident',
                beforeImage: 'missing front tooth gap, dental implant candidate, tooth loss after accident, need for tooth replacement',
                afterImage: 'single dental implant with crown, perfect tooth replacement, natural looking implant restoration'
              },
              {
                name: 'Helen R.',
                treatment: 'All-on-4 Implants',
                issue: 'Multiple missing teeth',
                beforeImage: 'multiple missing teeth, full mouth restoration candidate, severe tooth loss, all on 4 implants before',
                afterImage: 'all on 4 dental implants complete restoration, full arch replacement, beautiful smile transformation'
              }
            ].map((case_, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8">
                <div className="relative mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=$%7Bcase_.beforeImage%7D&width=250&height=180&seq=implant-before-${index + 1}&orientation=landscape`}
                        alt="Before Implants"
                        className="rounded-xl shadow-md w-full h-32 object-cover mb-3"
                      />
                      <span className="text-red-600 font-semibold">Before</span>
                    </div>
                    <div className="text-center">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=$%7Bcase_.afterImage%7D&width=250&height=180&seq=implant-after-${index + 1}&orientation=landscape`}
                        alt="After Implants"
                        className="rounded-xl shadow-md w-full h-32 object-cover mb-3"
                      />
                      <span className="text-green-600 font-semibold">After</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-arrow-right-line text-white text-xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-gray-900">{case_.name}</h4>
                  <p className="text-purple-600 font-semibold">{case_.treatment}</p>
                  <p className="text-gray-600"><strong>Issue:</strong> {case_.issue}</p>
                </div>
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
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Are dental implants painful?',
                answer: 'The implant procedure is performed under local anesthesia, so you should not feel pain during the surgery. Post-operative discomfort is usually mild and manageable with over-the-counter pain medication.'
              },
              {
                question: 'How long do dental implants last?',
                answer: 'With proper care and maintenance, dental implants can last a lifetime. The success rate is over 95%, making them one of the most reliable tooth replacement options.'
              },
              {
                question: 'Am I a good candidate for implants?',
                answer: 'Most healthy adults with adequate bone density are good candidates. We will evaluate your oral health, medical history, and bone structure during your consultation.'
              },
              {
                question: 'How do I care for my implants?',
                answer: 'Care for implants just like natural teeth with regular brushing, flossing, and dental checkups. Good oral hygiene is essential for long-term implant success.'
              },
              {
                question: 'What is the success rate of implants?',
                answer: 'Dental implants have a success rate of over 95%. Factors like good oral hygiene, regular dental visits, and not smoking contribute to implant success.'
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
      <section className="py-24 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Replace Your Missing Teeth?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Schedule your free consultation to learn if dental implants are right for you. Discover how we can restore your smile and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Free Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
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
            <p className="text-gray-400 text-sm">2025 Srinivas Dental  All rights reserved Developed By                 <a 
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