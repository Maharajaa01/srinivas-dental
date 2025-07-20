'use client';

import Link from 'next/link';

export default function BracesPage() {
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
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <i className="ri-arrow-right-line mx-3 text-gray-400"></i>
                <span className="text-blue-600 font-semibold">Braces & Aligners</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Smile with
                <span className="block text-blue-600">Modern Orthodontics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Achieve the perfect smile with our advanced orthodontic treatments. 
                From traditional braces to invisible aligners, we have the solution for every smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Free Consultation
                </Link>
                <a href="tel:98884715109">

                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=beautiful%20young%20woman%20with%20perfect%20straight%20teeth%20smile%20after%20orthodontic%20treatment%2C%20clear%20aligners%20and%20braces%20transformation%2C%20modern%20dental%20clinic%20setting%2C%20confident%20happy%20expression&width=600&height=500&seq=braces-hero&orientation=landscape"
                alt="Braces Treatment Results"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12-18</div>
                    <div className="text-sm text-gray-600">Months Average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Orthodontic Options</h2>
            <p className="text-xl text-gray-600">Choose the perfect treatment for your lifestyle</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Metal Braces',
                description: 'Traditional and most effective option for complex cases',
                image: 'traditional metal braces on teeth, orthodontic treatment, dental clinic setting, professional dental care',
                features: ['Most cost-effective', 'Suitable for all cases', 'Durable and reliable', '12-24 months treatment'],
                color: 'blue'
              },
              {
                title: 'Ceramic Braces',
                description: 'Tooth-colored braces that blend with your natural teeth',
                image: 'ceramic clear braces on woman teeth, aesthetic orthodontic treatment, invisible dental braces, modern dentistry',
                features: ['Less visible', 'Comfortable fit', 'Effective treatment', '15-24 months treatment'],
                color: 'purple'
              },
              {
                title: 'Clear Aligners',
                description: 'Nearly invisible, removable aligners for discreet treatment',
                image: 'clear invisible aligners invisalign treatment, removable orthodontic device, modern dental technology, smile transformation',
                features: ['Virtually invisible', 'Removable design', 'Easy maintenance', '12-18 months treatment'],
                color: 'green'
              }
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Boption.image%7D&width=400&height=300&seq=braces-option-${index + 1}&orientation=landscape`}
                    alt={option.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  
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
                  
                  <button className={`w-full bg-${option.color}-600 hover:bg-${option.color}-700 text-white py-3 rounded-xl font-semibold transition-colors cursor-pointer`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Orthodontic Journey</h2>
            <p className="text-xl text-gray-600">Step-by-step process to your perfect smile</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Complete examination with digital X-rays and 3D imaging',
                icon: 'ri-search-line'
              },
              {
                step: '02',
                title: 'Treatment Plan',
                description: 'Customized plan with timeline and treatment options',
                icon: 'ri-file-list-3-line'
              },
              {
                step: '03',
                title: 'Application',
                description: 'Comfortable placement of braces or aligner delivery',
                icon: 'ri-tools-line'
              },
              {
                step: '04',
                title: 'Monitoring',
                description: 'Regular adjustments and progress tracking',
                icon: 'ri-calendar-check-line'
              }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-blue-600 text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Amazing Transformations</h2>
            <p className="text-xl text-gray-600">Real results from our orthodontic treatments</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {[
              {
                name: 'Sarah M.',
                treatment: 'Clear Aligners - 14 months',
                beforeImage: 'before orthodontic treatment crooked teeth, dental case study, patient transformation, misaligned smile',
                afterImage: 'after orthodontic treatment perfect straight teeth, beautiful smile transformation, successful dental case'
              },
              {
                name: 'Michael R.',
                treatment: 'Metal Braces - 18 months', 
                beforeImage: 'before braces treatment severe malocclusion, orthodontic case study, crowded teeth, dental alignment issues',
                afterImage: 'after braces treatment perfect bite alignment, straight teeth smile, successful orthodontic results'
              }
            ].map((case_, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=$%7Bcase_.beforeImage%7D&width=250&height=200&seq=before-${index + 1}&orientation=landscape`}
                      alt="Before Treatment"
                      className="rounded-xl shadow-lg w-full h-32 object-cover mb-3"
                    />
                    <span className="text-red-600 font-semibold">Before</span>
                  </div>
                  <div className="text-center">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=$%7Bcase_.afterImage%7D&width=250&height=200&seq=after-${index + 1}&orientation=landscape`}
                      alt="After Treatment"
                      className="rounded-xl shadow-lg w-full h-32 object-cover mb-3"
                    />
                    <span className="text-green-600 font-semibold">After</span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{case_.name}</h4>
                  <p className="text-blue-600 font-semibold">{case_.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Orthodontic Treatment?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-smile-line',
                title: 'Beautiful Smile',
                description: 'Achieve the confident smile you have always wanted'
              },
              {
                icon: 'ri-heart-line',
                title: 'Better Oral Health',
                description: 'Straight teeth are easier to clean and maintain'
              },
              {
                icon: 'ri-user-smile-line',
                title: 'Boost Confidence',
                description: 'Feel confident in social and professional situations'
              },
              {
                icon: 'ri-restaurant-line',
                title: 'Improved Function',
                description: 'Better chewing, speaking, and overall oral function'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Prevent Problems',
                description: 'Avoid future dental issues and complications'
              },
              {
                icon: 'ri-time-line',
                title: 'Long-term Results',
                description: 'Permanent improvement that lasts a lifetime'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Smile Transformation Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Book your free consultation and discover which orthodontic treatment is perfect for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Free Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
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