import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

interface Edition {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

interface PurchaseContextType {
  selectedEdition: Edition | null
  setSelectedEdition: (edition: Edition | null) => void
  quantity: number
  setQuantity: (quantity: number) => void
}

export const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined)

interface PurchaseProviderProps {
  children: ReactNode
}

export function PurchaseProvider({ children }: PurchaseProviderProps) {
  const [selectedEdition, setSelectedEdition] = useState<Edition | null>(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <PurchaseContext.Provider
      value={{
        selectedEdition,
        setSelectedEdition,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

export function usePurchase() {
  const context = React.useContext(PurchaseContext)
  if (context === undefined) {
    throw new Error('usePurchase must be used within a PurchaseProvider')
  }
  return context
}
