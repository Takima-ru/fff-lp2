"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-gray-600 text-white p-6 rounded-lg shadow-lg">
      <p className="text-sm mb-4">
        This website uses cookies.
        We use cookies to analyze website traffic and optimize your experience.
        By consenting, your data will be aggregated with other user data.
      </p>
      <Button onClick={() => setIsVisible(false)} className="w-full bg-white text-gray-600 hover:bg-gray-100">
        Accept
      </Button>
    </div>
  )
}

