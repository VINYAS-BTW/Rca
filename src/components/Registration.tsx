import { CheckCircle2, ExternalLink } from "lucide-react";

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Registration Process
          </h2>

          <div className="space-y-6 mb-12">
            {[
              {
                step: 1,
                title: "Wait for Registration to Open",
                content: "Registration opens on Monday, November 3, 2025 at 5:30 PM IST. You cannot register before this date. Registration closes on Wednesday, November 26, 2025 at 5:30 PM IST. If deemed necessary, registration may close early.",
              },
              {
                step: 2,
                title: "Create a WCA Account",
                content: "If you have not competed before, create a WCA account. If this is not your first competition, associate your WCA ID to your WCA account.",
                link: "https://www.worldcubeassociation.org/users/sign_up",
                linkText: "Create WCA Account",
              },
              {
                step: 3,
                title: "Register on WCA Website",
                content: "Go to the Register link on the competition website. Fill out the events you will be competing in and any comments you may have about your registration, then press register.",
                link: "https://www.worldcubeassociation.org/competitions/RVITMCubeVerse2025/register",
                linkText: "Register Here",
              },
              {
                step: 4,
                title: "Pay Registration Fee",
                content: "After registering on the WCA website, pay your registration fee using the payment button below. Competitors MUST pay their registration fee before being eligible for a spot in the competition.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.content}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
                      >
                        {item.linkText}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="bg-primary/5 border-2 border-primary p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Register?</h3>
              <p className="text-muted-foreground mb-6">
                Complete your registration by paying the fee below
              </p>
              <a
                href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-accent/90 transition-smooth shadow-hover"
              >
                Pay Registration Fee
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-lg mb-4">Registration Fees</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>1-4 Events: <span className="font-bold">₹1,000</span></span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>5-8 Events: <span className="font-bold">₹1,500</span></span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 font-semibold">
                Competitors MUST pay their registration fee before being eligible for a spot in the competition.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Waitlist Information</h3>
            <p className="text-muted-foreground mb-3">
              If the competition is full, a message will be displayed on the competition website. If you register and pay after this time, you will be added to the competition waitlist.
            </p>
            <p className="text-muted-foreground">
              If a competitor cancels their registration, the person at the top of the waitlist will be added to the competitor list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
