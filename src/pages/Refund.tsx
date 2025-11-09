import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Refund & Cancellation Policy
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">No Refund Policy</h2>
              <p className="text-lg leading-relaxed">
                <strong>All registration fees for RVITM CubeVerse 2025 are non-refundable.</strong>
              </p>
              <p className="mt-4">
                Once you have completed your registration and payment, the fees cannot be refunded under any circumstances, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Personal reasons or change of plans</li>
                <li>Inability to attend the competition</li>
                <li>Disqualification due to violation of WCA regulations or event rules</li>
                <li>Voluntary withdrawal before or on the day of the competition</li>
                <li>Waitlist placement (if competition reaches capacity)</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Registration Fee</h2>
              <p>
                The registration fee for RVITM CubeVerse 2025 is:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>₹1,000 for 1-4 events</li>
                <li>₹1,500 for 5-8 events</li>
              </ul>
              <p className="mt-4">
                Payment must be completed through the official Razorpay payment link to confirm your registration. Once payment is made, it is final and non-refundable.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment Disclaimer</h2>
              <p>
                By proceeding with the registration payment, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You have read and understood this no-refund policy</li>
                <li>The registration fee is non-refundable under all circumstances</li>
                <li>You are committed to attending the competition on the scheduled dates</li>
                <li>Any payment gateway charges are non-refundable</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment Issues</h2>
              <p>
                In case of technical payment issues only:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Duplicate payments:</strong> If you are charged multiple times for the same registration, the duplicate amount will be refunded</li>
                <li><strong>Payment failed but amount debited:</strong> If the payment fails but the amount is debited from your account, it will be automatically refunded by the payment gateway within 5-7 business days</li>
              </ul>
              <p className="mt-4">
                For payment-related issues, please contact us immediately with your transaction details.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p>
                For any queries regarding the refund policy or payment issues, please contact:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:cubing_rca.rvitm@rvei.edu.in" className="text-accent hover:underline">
                    cubing_rca.rvitm@rvei.edu.in
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+918073294215" className="text-accent hover:underline">
                    +91-8073294215
                  </a>
                </p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm font-semibold text-foreground">
                Important: Please ensure you are certain about your participation before making the payment, as all fees are non-refundable.
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: November 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
