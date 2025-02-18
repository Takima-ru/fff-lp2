import Image from "next/image"
import Link from "next/link"
import { LinkedinIcon} from "lucide-react"
import { FaDiscord } from "react-icons/fa";

const DiscordIcon = ({ className }: { className?: string }) => {
    return <FaDiscord size={32} color="#5865F2" className={className} />;
};

import { Button } from "@/components/ui/button"
import { CookieConsent } from "./cookie-consent"

export default function ConferencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/DALL·E.jpg" alt="FFF 2025" width={120} height={60} className="h-[60px] w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-white">
            <Link href="#" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-200">
              About FFF
            </Link>
            <Link href="#discord" className="hover:text-gray-200">
              Discord
            </Link>
            <Link href="#festival" className="hover:text-gray-200">
              Festival in Japan
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <div className="relative h-screen">
          <Image
            src="image_fx_.jpg"
            alt="コンテナターミナル"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Freight Forwarder's Festival in Japan <br></br>
              Energizing Logistics Industry
              </h1>
            </div>
          </div>
        </div>

        <section id="about" className="py-20 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center text-gray-600 mb-16">
            A place for forwarders to connect, learn, and enjoy
          </h2>

          <div className="text-center">
            <h3 className="text-2xl text-gray-600 mb-8">Tokyo - Japan - September 2025</h3>
            <p className="max-w-3xl mx-auto text-gray-600 mb-6">
              FFF is an international logistics community that fosters real networking, learning, and cultural exchange.
              Join us to expand your network, explore the future of logistics, and experience Japanese culture
              <br></br>— all in one place.
            </p>
            <ul className="max-w-3xl mx-auto mb-20 text-gray-600 list-disc list-inside">
              <li>Network with global logistics professionals</li>
              <li>Learn about the latest industry trends</li>
              <li>Experience Japanese hospitality</li>
            </ul>

            <h2 id="discord" className="text-3xl text-center text-gray-600 mb-12">Join our Community</h2>
            <div className="text-center mb-16">
              <Button 
                variant="secondary" 
                className="bg-gray-600 text-white hover:bg-gray-700"
                onClick={() => window.open('https://discord.gg/74H2tDVmEd', '_blank')}
              >
                Discord
              </Button>
            </div>
          </div>
        </section>

        <section id="festival" className="py-20 bg-gray-50 container mx-auto px-4">
          <h2 className="text-3xl text-center text-gray-600 mb-12">What We Offer in FFF</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-white">
              <h5 className="font-semibold mb-4">🚢 Freight Forwarder Community</h5>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Strengthen your global network</li>
                <li>✅ Exchange insights across generations</li>
                <li>✅ Open discussions in a closed environment</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-white">
              <h5 className="font-semibold mb-4">💡 Future-Oriented Learning</h5>
              <ul className="space-y-2 text-gray-600">
                <li>✅ AI, Web3.0, and DX trends</li>
                <li>✅ The latest in logistics technology</li>
                <li>✅ Innovation & idea creation</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-white">
              <h5 className="font-semibold mb-4">🎌 Japanese Cultural Experience</h5>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Traditional tea ceremony & calligraphy</li>
                <li>✅ Tokyo sightseeing & hospitality</li>
                <li>✅ Cross-cultural inspiration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-gray-600 mb-8">Contact</h2>
            <div className="flex justify-center gap-4">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <LinkedinIcon className="w-8 h-8" />
              </Link>
              <Link href="https://discord.gg/74H2tDVmEd" target="_blank" className="hover:opacity-80">
                <DiscordIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">FFF2025 | Tokyo | Japan</p>
          <p>Copyright © FFF2025 - All Rights Reserved.</p>
        </div>
      </footer>

      <CookieConsent />
    </div>
  )
}

