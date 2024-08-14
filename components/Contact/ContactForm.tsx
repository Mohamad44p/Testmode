import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="h-screen p-6 space-y-8">
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-[13px] font-bold mb-6 flex items-center">
          <span className="w-3 h-3 bg-black rounded-full mr-2"></span>
          CONTACT Be Found Online
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-3xl font-light leading-tight">
            Start your software
            <br />
            development journey today.
          </h3>
          <ul className="space-y-6">
            {[
              {
                title: "Secure and compliant:",
                desc: "We maintain GDPR, CCPA, HIPAA, and ISO 13485 compliance.",
              },
              {
                title: "Healthcare expertise:",
                desc: "We focus exclusively on the healthcare market, so we know your needs.",
              },
              {
                title: "Interoperable and flexible:",
                desc: "Seamless connectivity across your organization's ecosystem.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 12L10 15L17 8"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name*
              </label>
              <Input id="firstName" required />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name*
              </label>
              <Input id="lastName" required />
            </div>
          </div>
          <div>
            <label
              htmlFor="workEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Work Email*
            </label>
            <Input id="workEmail" type="email" required />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <Input id="company" />
          </div>
          <div>
            <label
              htmlFor="help"
              className="block text-sm font-medium text-gray-700"
            >
              How Can We Help You?
            </label>
            <Textarea id="help" rows={4} />
          </div>
          <p className="text-xs text-gray-500">
            Significo needs the contact information you provide to us to contact
            you about our products and services. You may unsubscribe from these
            communications at any time. For information on how to unsubscribe,
            as well as our privacy practices and commitment to protecting your
            privacy, please review our Privacy Policy.
          </p>
          <Button
            type="submit"
            className="w-full bg-[#f5f19c] hover:bg-[#f5f19c] text-black font-semibold"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}
