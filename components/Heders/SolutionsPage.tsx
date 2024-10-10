import { Shield, Sliders, Smartphone, CreditCard, Globe, PieChart, Key, FileText, User, Activity, Banknote } from 'lucide-react'

const solutions = [
  {
    category: "PAYMENTS",
    items: [
      { icon: Shield, title: "PCI Compliance", description: "Become PCI compliant" },
      { icon: Sliders, title: "Payments Optimization", description: "Control your payment data" },
      { icon: Smartphone, title: "3D Secure", description: "Flexible and universal 3DS" },
      { icon: CreditCard, title: "Card Issuing", description: "Provision and manage cards" },
      { icon: Globe, title: "Network Tokens", description: "Modernize your payments" },
      { icon: PieChart, title: "Card Insights", description: "Understand your cardholders" },
      { icon: Key, title: "Key Management", description: "Secure key recovery flows" },
    ]
  },
  {
    category: "BY DATA TYPE",
    items: [
      { icon: CreditCard, title: "Card Data", description: "" },
      { icon: Banknote, title: "Banking Data", description: "" },
      { icon: User, title: "PII", description: "" },
      { icon: Activity, title: "HIPAA & ePHI", description: "" },
      { icon: Key, title: "API Credentials", description: "" },
      { icon: FileText, title: "File Encryption", description: "" },
    ]
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen z-[99999999999] bg-gradient-to-b from-purple-900 to-indigo-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1c1c1c] rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Solutions</h1>
              <p className="text-gray-400 mb-8">
                Customizable security and compliance solutions, robust enough to handle any use case.
              </p>
              <div className="bg-[#2a2a2a] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Evervault Encryption</h3>
                <p className="text-gray-400 mb-4">
                  Flexible enough to secure any type of data in any workflow.
                </p>
                <a href="#" className="text-blue-400 hover:underline">
                  Learn more →
                </a>
              </div>
            </div>

            {solutions.map((category, index) => (
              <div key={index}>
                <h2 className="text-sm font-semibold text-gray-400 mb-4">{category.category}</h2>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="bg-[#2a2a2a] p-2 rounded-lg mr-4">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-8 px-4">
        <p className="text-xl">
          Take control of your payments stack — easily tokenize cards, optimize
        </p>
        <p className="text-xl">
          margins, comply with PCI, avoid gateway lock-in, or spin-up card issuing
        </p>
        <p className="text-xl">
          programs.
        </p>
      </div>
    </div>
  )
}