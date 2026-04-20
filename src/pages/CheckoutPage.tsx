import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiCheck,
  FiCreditCard,
  FiChevronDown,
} from 'react-icons/fi'
import { usePurchase } from '../context/PurchaseContext'
import '../styles/checkout.css'

export default function CheckoutPage() {
  const { selectedEdition, quantity } = usePurchase()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
  })

  const [sameAsShipping, setSameAsShipping] = useState(true)

  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
  })

  const [selectedPayment, setSelectedPayment] = useState<'card' | 'paypal' | 'apple'>('card')
  const [showOrderSuccess, setShowOrderSuccess] = useState(false)
  const [showSummaryOnMobile, setShowSummaryOnMobile] = useState(true)

  if (!selectedEdition) {
    return (
      <div className="checkout-no-edition">
        <div className="checkout-no-edition-content">
          <h1 className="checkout-no-edition-title">No Edition Selected</h1>
          <p className="checkout-no-edition-message">
            Please go back and select an edition before proceeding to checkout.
          </p>
          <Link to="/purchase" className="checkout-no-edition-link">
            Return to Product Page
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = selectedEdition.price * quantity
  const tax = subtotal * 0.08
  const shipping = 0
  const total = subtotal + tax + shipping

  const handlePlaceOrder = () => {
    setShowOrderSuccess(true)
    setTimeout(() => setShowOrderSuccess(false), 3000)
  }

  const handleShippingChange = (field: string, value: string) => {
    setShippingInfo({ ...shippingInfo, [field]: value })
  }

  const handleBillingChange = (field: string, value: string) => {
    setBillingInfo({ ...billingInfo, [field]: value })
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Left Column - Forms */}
        <div className="checkout-forms">
          {/* Shipping Form */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">Shipping Information</h2>
            <div className="checkout-form-row">
              <div className="checkout-form-group">
                <label className="checkout-label">First Name</label>
                <input
                  type="text"
                  className="checkout-input"
                  value={shippingInfo.firstName}
                  onChange={(e) => handleShippingChange('firstName', e.target.value)}
                  placeholder="John"
                />
              </div>
              <div className="checkout-form-group">
                <label className="checkout-label">Last Name</label>
                <input
                  type="text"
                  className="checkout-input"
                  value={shippingInfo.lastName}
                  onChange={(e) => handleShippingChange('lastName', e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Email</label>
              <input
                type="email"
                className="checkout-input"
                value={shippingInfo.email}
                onChange={(e) => handleShippingChange('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Address</label>
              <input
                type="text"
                className="checkout-input"
                value={shippingInfo.address}
                onChange={(e) => handleShippingChange('address', e.target.value)}
                placeholder="123 Main St"
              />
            </div>
            <div className="checkout-form-row checkout-form-row-city-zip">
              <div className="checkout-form-group">
                <label className="checkout-label">City</label>
                <input
                  type="text"
                  className="checkout-input"
                  value={shippingInfo.city}
                  onChange={(e) => handleShippingChange('city', e.target.value)}
                  placeholder="New York"
                />
              </div>
              <div className="checkout-form-group">
                <label className="checkout-label">ZIP Code</label>
                <input
                  type="text"
                  className="checkout-input"
                  value={shippingInfo.zip}
                  onChange={(e) => handleShippingChange('zip', e.target.value)}
                  placeholder="10001"
                />
              </div>
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Country</label>
              <select
                className="checkout-select"
                value={shippingInfo.country}
                onChange={(e) => handleShippingChange('country', e.target.value)}
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          {/* Billing Form */}
          <div className="checkout-section">
            <div className="checkout-checkbox-group">
              <label className="checkout-checkbox-label">
                <input
                  type="checkbox"
                  checked={sameAsShipping}
                  onChange={(e) => setSameAsShipping(e.target.checked)}
                />
                <span>Same as Shipping</span>
              </label>
            </div>

            {!sameAsShipping && (
              <>
                <h2 className="checkout-section-title">Billing Information</h2>
                <div className="checkout-form-row">
                  <div className="checkout-form-group">
                    <label className="checkout-label">First Name</label>
                    <input
                      type="text"
                      className="checkout-input"
                      value={billingInfo.firstName}
                      onChange={(e) => handleBillingChange('firstName', e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">Last Name</label>
                    <input
                      type="text"
                      className="checkout-input"
                      value={billingInfo.lastName}
                      onChange={(e) => handleBillingChange('lastName', e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">Address</label>
                  <input
                    type="text"
                    className="checkout-input"
                    value={billingInfo.address}
                    onChange={(e) => handleBillingChange('address', e.target.value)}
                    placeholder="123 Main St"
                  />
                </div>
                <div className="checkout-form-row checkout-form-row-city-zip">
                  <div className="checkout-form-group">
                    <label className="checkout-label">City</label>
                    <input
                      type="text"
                      className="checkout-input"
                      value={billingInfo.city}
                      onChange={(e) => handleBillingChange('city', e.target.value)}
                      placeholder="New York"
                    />
                  </div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">ZIP Code</label>
                    <input
                      type="text"
                      className="checkout-input"
                      value={billingInfo.zip}
                      onChange={(e) => handleBillingChange('zip', e.target.value)}
                      placeholder="10001"
                    />
                  </div>
                </div>
                <div className="checkout-form-group">
                  <label className="checkout-label">Country</label>
                  <select
                    className="checkout-select"
                    value={billingInfo.country}
                    onChange={(e) => handleBillingChange('country', e.target.value)}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Payment Options */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">Payment Method</h2>

            <div className="checkout-payment-options">
              <label className="checkout-payment-label">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === 'card'}
                  onChange={() => setSelectedPayment('card')}
                />
                <FiCreditCard size={18} style={{ display: 'inline', marginRight: '8px' }} />
                Credit Card
              </label>

              {selectedPayment === 'card' && (
                <div className="checkout-payment-fields">
                  <div className="checkout-payment-field">
                    <label className="checkout-label">Card Number</label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="1234 5678 9012 3456"
                      disabled
                    />
                  </div>
                  <div className="checkout-payment-row">
                    <div>
                      <label className="checkout-label">Expiry Date</label>
                      <input
                        type="text"
                        className="checkout-input"
                        placeholder="MM/YY"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="checkout-label">CVV</label>
                      <input
                        type="text"
                        className="checkout-input"
                        placeholder="123"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="checkout-payment-options">
              <label className="checkout-payment-label">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === 'paypal'}
                  onChange={() => setSelectedPayment('paypal')}
                />
                PayPal
              </label>

              {selectedPayment === 'paypal' && (
                <div className="checkout-payment-fields">
                  <div className="checkout-payment-field">
                    <label className="checkout-label">PayPal Email</label>
                    <input
                      type="email"
                      className="checkout-input"
                      placeholder="your@paypal.email"
                      disabled
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="checkout-payment-options">
              <label className="checkout-payment-label">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === 'apple'}
                  onChange={() => setSelectedPayment('apple')}
                />
                Apple Pay
              </label>

              {selectedPayment === 'apple' && (
                <div className="checkout-payment-fields">
                  <p className="checkout-payment-message">
                    Apple Pay will be processed securely on submission.
                  </p>
                </div>
              )}
            </div>
          </div>

          {showOrderSuccess && (
            <div className="checkout-success-message">
              ✓ Thank you! This is a demo. Order processing would occur here.
            </div>
          )}
        </div>

        {/* Right Column - Order Summary */}
        <div className="checkout-summary">
          <div className="checkout-summary-header" onClick={() => setShowSummaryOnMobile(!showSummaryOnMobile)}>
            <span className="checkout-summary-header-text">Order Summary</span>
            <span className="checkout-summary-header-amount">${total.toFixed(2)}</span>
            <FiChevronDown className={`checkout-summary-header-chevron ${showSummaryOnMobile ? 'expanded' : ''}`} size={20} />
          </div>

          <div className={`checkout-summary-body ${showSummaryOnMobile ? 'expanded' : ''}`}>
            <div className="checkout-summary-content">
              <div className="checkout-summary-item">
                <p className="checkout-item-name">{selectedEdition.name}</p>
                <p className="checkout-item-description">{selectedEdition.description}</p>
              </div>

              <div className="checkout-quantity-display">
                <label className="checkout-quantity-label">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  disabled
                  className="checkout-quantity-input"
                />
              </div>
            </div>

            <div className="checkout-summary-row">
              <span className="checkout-summary-row-label">Subtotal</span>
              <span className="checkout-summary-row-value">${subtotal.toFixed(2)}</span>
            </div>

            <div className="checkout-summary-row">
              <span className="checkout-summary-row-label">Tax (estimated)</span>
              <span className="checkout-summary-row-value">${tax.toFixed(2)}</span>
            </div>

            <div className="checkout-summary-row">
              <span className="checkout-summary-row-label">Shipping</span>
              <span className="checkout-summary-row-value highlight">FREE</span>
            </div>

            <div className="checkout-summary-total">
              <span className="checkout-summary-total-label">Total</span>
              <span className="checkout-summary-total-amount">${total.toFixed(2)}</span>
            </div>

            <Link to="/purchase" className="checkout-back-link">
              ← Back to Product
            </Link>

            {/* Place Order Button */}
            <button
              className="primary checkout-cta-button"
              onClick={handlePlaceOrder}
            >
              <FiCheck size={20} />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
