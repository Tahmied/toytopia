import { Award, Gift, Heart, Shield, Sparkles, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#7680fe] to-[#9fa8ff] text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Welcome to Toytopia
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Where imagination comes to life and every child's dream becomes reality
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, Toytopia began with a simple dream: to create a magical destination where children and families could discover the joy of play. What started as a small local shop has grown into a beloved community hub for toy enthusiasts of all ages.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We believe that play is essential to childhood development, creativity, and happiness. That's why we carefully curate every toy in our collection, ensuring quality, safety, and endless fun.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#7680fe] to-[#9fa8ff] rounded-2xl p-6 sm:p-8 text-white">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                To inspire creativity, spark imagination, and bring families together through the timeless magic of play. We're committed to offering toys that educate, entertain, and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-purple-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7680fe] rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Quality First</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Every toy is hand-selected for durability, safety, and educational value.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7680fe] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Community Focus</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We're more than a store – we're a gathering place for families and friends.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7680fe] rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Expert Curation</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our team tests and reviews toys to ensure they meet our high standards.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7680fe] rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Magical Experience</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Shopping with us should feel like an adventure filled with wonder and discovery.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7680fe] rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Safety Guaranteed</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                All products meet or exceed international safety standards and regulations.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7680fe] rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Endless Imagination</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We champion toys that encourage creativity, learning, and boundless play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-[#7680fe] to-[#9fa8ff] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm sm:text-base opacity-90">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-sm sm:text-base opacity-90">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-sm sm:text-base opacity-90">Unique Toys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm sm:text-base opacity-90">Love & Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join the Toytopia Family
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Visit us today and discover why thousands of families trust Toytopia for their toy needs. Whether you're shopping for a birthday, holiday, or just because, we're here to help you find the perfect gift.
          </p>
          <button className="bg-[#7680fe] hover:bg-[#6570ed] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-colors text-sm sm:text-base">
            Visit Our Store
          </button>
        </div>
      </section>
    </main>
  );
}