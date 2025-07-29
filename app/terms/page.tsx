export default function TermsAndConditions() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Terms & <span className="font-dancing-script text-pink-600">Conditions</span>
          </h1>
          <p className="text-amber-700">
            Please read these terms carefully before placing your order with Stanley's Bakery
          </p>
        </div>

        <div className="space-y-8 text-amber-700">
          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Order Lead Time</h2>
            <p>Orders require at least 48 hours' notice. This may change based on how busy we are.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Delivery Information</h2>
            <p className="mb-2">
              Deliveries are made between 8am–6pm. If you're not home, the driver will wait 10 minutes before returning
              the order to our store in Cosmo City. No redeliveries. Delivery fees are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Delivery Radius & Cost</h2>
            <p>
              Delivery is available within a 50km radius, with a tiered fee based on distance. While your delivery date
              is guaranteed, we can't promise an exact time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Collections</h2>
            <p>
              Collection orders are ready by 9am. Please collect within 24 hours or your order will be discarded without
              a refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Cancellations & Refunds</h2>
            <p>
              Cancel more than 48 hours in advance for a full refund minus a 10% admin fee. No refunds for cancellations
              under 24 hours. Refunds take up to 3 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">After Delivery/Collection</h2>
            <p>
              We are not liable for any damage once the cake leaves our store. Cakes must be transported flat, kept
              cool, and handled with care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Post-Damage Fixes</h2>
            <p>If we agree to repair a damaged cake, labour & ingredient costs will apply.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Collection Refusal</h2>
            <p>We may withhold orders if your transport method is unsafe, until you arrange an alternative.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Allergens</h2>
            <p>
              Products may contain milk, wheat, nuts, edible flowers, etc. We take no responsibility for allergic
              reactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Storage</h2>
            <p>
              Store cakes in a cool, dry place. Best within 3 days. Leftovers in sealed containers. Do not refrigerate;
              freezing is fine for up to 2 weeks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Product Variation</h2>
            <p>Actual products may slightly differ from online images.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Complaints</h2>
            <p>
              Report within 48 hours. For full refunds, return the item to us in its original state within 24 hours. No
              collections for complaints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Privacy</h2>
            <p>
              We follow POPIA to keep your info safe and confidential. Only essential data is collected for service
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Marketing Communication</h2>
            <p>You may opt out of our promotional emails at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Cookies</h2>
            <p>
              We use cookies to improve your online experience. These don't store personal info but help us enhance site
              performance and marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Consent</h2>
            <p>By using our website, you agree to our use of cookies and personal information as stated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Refund Fee</h2>
            <p>All refunds carry a 10% admin fee, unless caused by a mistake or quality issue on our part.</p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-amber-800 text-center">
            <strong>Last Updated:</strong> January 2024
          </p>
          <p className="text-amber-700 text-center mt-2">
            For questions about these terms, please contact us at hello@stanleysbakery.com
          </p>
        </div>
      </div>
    </div>
  )
}
