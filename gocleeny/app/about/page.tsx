import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-green-800 mb-4">About GoCleeny</h1>
            <p className="text-gray-600 md:text-xl">
              We're on a mission to provide eco-friendly cleaning services that make your space shine while protecting
              our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                GoCleeny was founded in 2018 with a simple yet powerful vision: to transform the cleaning industry by
                proving that effective cleaning doesn't have to come at the expense of our environment.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate cleaners has grown into a trusted cleaning service provider
                across the UK, but our core values remain unchanged.
              </p>
              <p className="text-gray-600">
                As a proud member of the SAMBIC Group, we leverage industry expertise and resources to deliver
                exceptional cleaning services while maintaining our commitment to sustainability.
              </p>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=400&width=500" alt="GoCleeny team" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Founded in 2018</p>
                <p>Part of SAMBIC Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at GoCleeny, from the products we use to the way we treat our
              customers and team members.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Responsibility",
                description:
                  "We use eco-friendly products and sustainable practices to minimize our environmental footprint.",
              },
              {
                title: "Excellence in Service",
                description:
                  "We're committed to delivering exceptional cleaning results that exceed our customers' expectations.",
              },
              {
                title: "Integrity & Transparency",
                description:
                  "We operate with honesty and clarity in all our business practices and customer interactions.",
              },
              {
                title: "Continuous Improvement",
                description: "We constantly seek better ways to serve our customers and protect the environment.",
              },
              {
                title: "Community Impact",
                description:
                  "We actively contribute to the communities we serve through various initiatives and partnerships.",
              },
              {
                title: "Team Empowerment",
                description: "We invest in our team's growth and well-being, ensuring they have the tools to succeed.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Approach */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Eco-friendly cleaning products"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Eco-Friendly Approach</h2>
              <p className="text-gray-600 mb-4">
                At GoCleeny, sustainability isn't just a buzzword—it's at the heart of everything we do. Our
                eco-friendly approach includes:
              </p>
              <ul className="space-y-3">
                {[
                  "Using biodegradable and non-toxic cleaning products",
                  "Minimizing water usage through efficient cleaning techniques",
                  "Reducing waste with reusable cleaning tools and materials",
                  "Optimizing travel routes to decrease our carbon footprint",
                  "Educating customers on sustainable home maintenance practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SAMBIC Group Affiliation */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SAMBIC Group Affiliation</h2>
            <p className="text-gray-600 mb-6">
              As a proud member of the SAMBIC Group, GoCleeny benefits from industry-leading expertise, resources, and
              best practices. This affiliation allows us to maintain the personal touch of a local business while
              delivering the reliability and quality standards of a larger organization.
            </p>
            <div className="p-6 bg-white rounded-lg shadow-sm inline-block">
              <img src="/placeholder.svg?height=100&width=200" alt="SAMBIC Group logo" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind GoCleeny who drive our mission forward every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Thompson",
                role: "Founder & CEO",
                bio: "With over 15 years in the cleaning industry, Emma founded GoCleeny to revolutionize how cleaning services impact the environment.",
              },
              {
                name: "David Chen",
                role: "Operations Director",
                bio: "David ensures our cleaning teams deliver consistent, high-quality service while optimizing our eco-friendly practices.",
              },
              {
                name: "Sarah Williams",
                role: "Sustainability Manager",
                bio: "Sarah leads our environmental initiatives, constantly researching and implementing greener cleaning solutions.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

