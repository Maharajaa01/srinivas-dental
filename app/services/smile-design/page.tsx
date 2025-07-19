'use client';

import Link from 'next/link';

export default function SmileDesignPage() {
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
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <i className="ri-arrow-right-line mx-3 text-gray-400"></i>
                <span className="text-blue-600 font-semibold">Smile Design</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Complete Smile
                <span className="block text-indigo-600">Makeover</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your entire smile with our comprehensive cosmetic dentistry approach. 
                Combining art and science to create the perfect smile that enhances your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Free Smile Analysis
                </Link>
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=beautiful%20woman%20with%20perfect%20smile%20after%20cosmetic%20dentistry%20makeover%2C%20smile%20design%20transformation%2C%20professional%20dental%20veneers%20and%20whitening%20results%2C%20confident%20radiant%20smile&width=600&height=500&seq=smile-design-hero&orientation=landscape"
                alt="Smile Design Transformation"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <i className="ri-magic-line text-indigo-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3D</div>
                    <div className="text-sm text-gray-600">Preview Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Smile Design */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Smile Design?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Smile Design is a comprehensive cosmetic dental treatment that analyzes and improves 
                the aesthetic appearance of your smile. We consider facial features, lip line, gum 
                display, and tooth proportions to create a harmonious, natural-looking smile.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Digital Smile Preview</h4>
                    <p className="text-gray-600">See your new smile before treatment begins</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customized Treatment Plan</h4>
                    <p className="text-gray-600">Tailored approach based on your unique features</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Natural Results</h4>
                    <p className="text-gray-600">Enhancement that complements your natural beauty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=digital%20smile%20design%20technology%2C%20computer%20aided%20smile%20makeover%20planning%2C%203D%20dental%20imaging%20for%20cosmetic%20dentistry%2C%20modern%20smile%20design%20software%20interface&width=500&height=400&seq=smile-design-tech&orientation=squarish"
                alt="Smile Design Technology"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Smile Design Treatments</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for every smile concern</p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: 'ri-contrast-line',
                title: 'Porcelain Veneers',
                description: 'Ultra-thin shells that cover front teeth for instant transformation',
                benefits: ['Stain resistant', 'Natural appearance', 'Durable results', 'Minimal prep'],
                color: 'indigo'
              },
              {
                icon: 'ri-star-line',
                title: 'Teeth Whitening',
                description: 'Professional whitening for a brighter, more radiant smile',
                benefits: ['Immediate results', 'Safe procedure', 'Long lasting', 'Confidence boost'],
                color: 'yellow'
              },
              {
                icon: 'ri-heart-add-line',
                title: 'Dental Bonding',
                description: 'Cosmetic resin to repair chips, gaps, and imperfections',
                benefits: ['Same-day results', 'Conservative', 'Cost effective', 'Reversible'],
                color: 'blue'
              },
              {
                icon: 'ri-scissors-cut-line',
                title: 'Gum Contouring',
                description: 'Reshape gum line for better proportions and symmetry',
                benefits: ['Improved symmetry', 'Better proportions', 'Minimally invasive', 'Quick healing'],
                color: 'green'
              },
              {
                icon: 'ri-award-line',
                title: 'Dental Crowns',
                description: 'Full coverage restorations for damaged or misshapen teeth',
                benefits: ['Complete restoration', 'Natural looking', 'Strong and durable', 'Functional'],
                color: 'purple'
              },
              {
                icon: 'ri-layout-grid-line',
                title: 'Orthodontics',
                description: 'Straighten teeth for proper alignment and function',
                benefits: ['Better function', 'Easier cleaning', 'Improved health', 'Enhanced beauty'],
                color: 'pink'
              }
            ].map((treatment, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-${treatment.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${treatment.icon} text-${treatment.color}-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{treatment.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">{treatment.description}</p>
                
                <div className="space-y-2">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-4 h-4 bg-${treatment.color}-100 rounded-full flex items-center justify-center mr-3`}>
                        <i className={`ri-check-line text-${treatment.color}-600 text-xs`}></i>
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Smile Design Journey</h2>
            <p className="text-xl text-gray-600">Step by step to your perfect smile</p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Comprehensive analysis of your smile and facial features',
                icon: 'ri-user-smile-line'
              },
              {
                step: '02',
                title: 'Digital Design',
                description: '3D imaging and digital preview of your new smile',
                icon: 'ri-computer-line'
              },
              {
                step: '03',
                title: 'Treatment Plan',
                description: 'Customized plan with timeline and treatment options',
                icon: 'ri-file-list-3-line'
              },
              {
                step: '04',
                title: 'Transformation',
                description: 'Execute the plan and reveal your beautiful new smile',
                icon: 'ri-magic-line'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-indigo-600 text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-4">{process.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Smile Transformations</h2>
            <p className="text-xl text-gray-600">Real patients, remarkable results</p>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                name: 'Jennifer M.',
                treatment: 'Porcelain Veneers + Whitening',
                concern: 'Chipped and stained teeth',
                beforeImage: 'woman before smile makeover with chipped discolored teeth, dental veneers candidate, cosmetic dentistry before photo',
                afterImage: 'woman after porcelain veneers and whitening, beautiful bright white smile, perfect dental transformation results'
              },
              {
                name: 'Robert T.',
                treatment: 'Complete Smile Design',
                concern: 'Crooked and worn teeth',
                beforeImage: 'man before complete smile makeover, worn down crooked teeth, comprehensive dental restoration candidate',
                afterImage: 'man after complete smile design treatment, perfect straight white teeth, confident professional smile'
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="relative mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=$%7Bcase_.beforeImage%7D&width=250&height=180&seq=smile-before-${index + 1}&orientation=landscape`}
                        alt="Before Smile Design"
                        className="rounded-xl shadow-md w-full h-32 object-cover mb-3"
                      />
                      <span className="text-gray-600 font-semibold">Before</span>
                    </div>
                    <div className="text-center">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=$%7Bcase_.afterImage%7D&width=250&height=180&seq=smile-after-${index + 1}&orientation=landscape`}
                        alt="After Smile Design"
                        className="rounded-xl shadow-md w-full h-32 object-cover mb-3"
                      />
                      <span className="text-indigo-600 font-semibold">After</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-arrow-right-line text-white text-xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-gray-900">{case_.name}</h4>
                  <p className="text-indigo-600 font-semibold">{case_.treatment}</p>
                  <p className="text-gray-600"><strong>Concern:</strong> {case_.concern}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Dream Smile?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Schedule your free smile analysis and discover how we can transform your smile with our comprehensive smile design approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-calendar-line mr-2"></i>
              Free Smile Analysis
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
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
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
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