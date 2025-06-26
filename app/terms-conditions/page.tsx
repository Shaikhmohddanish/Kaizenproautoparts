import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <p>
              Welcome to Kaizen Pro Services. By accessing or using our website, you agree to comply with these Terms
              and Conditions. If you do not agree, please refrain from using our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p>
              When you sign up to receive SMS messages from Kaizen Pro Services DBA Kaizen Auto Parts, we collect the
              following information: – Your phone number – Any additional information voluntarily provided in the SMS
              subscription form
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How We Use Your Information</h3>
            <p>
              The information you provide is used to: – Send you transactional updates, such as order confirmations and
              shipping notifications – Deliver promotional offers, discounts, and updates – Provide customer support and
              respond to inquiries
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Consent to Receive SMS Messages</h3>
            <p>
              By providing your phone number, you consent to: – Receive recurring SMS messages from Kaizen Pro Services
              DBA Kaizen Auto Parts – Allow us to use your information for the purposes outlined above You can withdraw
              your consent at any time by replying STOP to any message or contacting us directly at
              sales@kaizenproautoparts.com or (888) 926-4978.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Data Sharing</h3>
            <p>
              We do not sell your personal information. We may share your phone number with trusted third-party service
              providers who assist in delivering SMS services. These providers are required to keep your information
              secure and confidential.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Opting Out</h3>
            <p>
              You can opt out of SMS messages at any time by: – Replying STOP to any SMS you receive – Contacting us at
              sales@kaizenproautoparts.com or (888) 926-4978 Once you opt out, you will no longer receive SMS messages,
              but you may still receive emails or other forms of communication unless you opt out of those separately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of the Website</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website for lawful purposes only.</li>
              <li>Provide accurate and complete information when making a purchase or creating an account.</li>
              <li>Not engage in any activity that may harm the website or disrupt its functionality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Product Information</h2>
            <p>
              We strive to provide accurate descriptions and images of our products. However, slight variations in color
              or appearance may occur due to display settings. All products are subject to availability. If a product is
              out of stock, we will notify you and offer alternatives or a refund.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pricing and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are listed in USD and are subject to change without notice.</li>
              <li>Payment must be made at the time of purchase through our secure payment system.</li>
              <li>
                Kaizen Auto Parts reserves the right to cancel orders in case of pricing errors or fraud suspicion.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping and Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We aim to deliver products promptly. However, delivery times may vary based on location and shipping
                carrier delays.
              </li>
              <li>
                Customers are responsible for providing accurate shipping details. Kaizen Pro Services is not liable for
                delays caused by incorrect information.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Returns and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Returns are accepted within 7 days of delivery, provided the item is in its original condition.</li>
              <li>Refunds will be processed to the original payment method after the returned item is inspected.</li>
              <li>Shipping fees are non-refundable unless the return is due to a defect or error on our part.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p>Kaizen Pro Services is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Damages resulting from improper use of our products.</li>
              <li>
                Indirect, incidental, or consequential damages arising from your use of the website or our services.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and trademarks, is the property of Kaizen Pro
              Services. You may not reproduce, distribute, or use any content without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications to the Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Continued use of our website
              constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>For questions about these Terms and Conditions, contact us at:</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> sales@kaizenproautoparts.com
                </p>
                <p>
                  <strong>Phone:</strong> (888) 926-4978
                </p>
                <p>
                  <strong>Address:</strong> 30 N Gould St, STE N, Sheridan, WY 82801
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
