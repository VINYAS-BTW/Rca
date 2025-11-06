import { ExternalLink, Github } from "lucide-react";
import rcaLogo from "@/assets/rca-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={rcaLogo} alt="RCA Speedcubing" className="h-12 w-12" />
                <span className="font-bold text-lg">RCA Speedcubing</span>
              </div>
              <p className="text-sm opacity-80">
                Organizing official WCA speedcubing competitions across India
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.worldcubeassociation.org/competitions/RVITMCubeVerse2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1 opacity-80 hover:opacity-100"
                  >
                    WCA Competition Page
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.worldcubeassociation.org/regulations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1 opacity-80 hover:opacity-100"
                  >
                    WCA Regulations
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://pages.razorpay.com/pl_RZIOpv3dXxZ0Eg/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1 opacity-80 hover:opacity-100"
                  >
                    Payment Page
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm opacity-80 mb-4">
                For any queries, reach out to the organization team through the WCA competition page.
              </p>
              <div className="text-sm opacity-80">
                <p className="font-semibold">Organizers:</p>
                <p>CubeX RVCE</p>
                <p>RVITM Cubing Association</p>
                <p>Speed Cubing Bangalore</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm opacity-80">
              © {currentYear} RCA Speedcubing. All rights reserved. | RVITM CubeVerse 2025
            </p>
            <p className="text-xs opacity-60 mt-2">
              This is an official World Cube Association competition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
