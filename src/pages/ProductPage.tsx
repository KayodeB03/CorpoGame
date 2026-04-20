import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiShoppingCart,
  FiUsers,
  FiCheck,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiCopy,
  FiBriefcase,
  FiRotateCcw,
  FiTrendingUp,
  FiStar,
} from 'react-icons/fi'
import { usePurchase } from '../context/PurchaseContext'
import '../styles/product.css'

interface Edition {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

export default function ProductPage() {
  const navigate = useNavigate()
  const { selectedEdition, setSelectedEdition, quantity, setQuantity } = usePurchase()

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [copyLinkMessage, setCopyLinkMessage] = useState(false)

  const editions: Edition[] = [
    {
      id: 'standard',
      name: 'Standard Edition',
      price: 49.99,
      description: 'Complete game with board, cards, and rulebook',
      features: ['Game Board', 'Card Decks', 'Player Tokens', 'Rulebook', 'Quick Start Guide'],
    },
    {
      id: 'deluxe',
      name: 'Deluxe Edition',
      price: 79.99,
      description: 'Premium components with custom dice and storage',
      features: ['Deluxe Board', 'Premium Cards', 'Custom Dice', 'Player Tokens', 'Storage Box', 'Extended Rules'],
    },
  ]

  const productImages = [
    { id: 1, label: 'Front View' },
    { id: 2, label: 'Box Detail' },
    { id: 3, label: 'Components' },
    { id: 4, label: 'Gameplay' },
  ]

  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: 'March 15, 2026',
      text: 'Fantastic strategic game! Perfect balance of complexity and accessibility. My friends loved it!',
    },
    {
      id: 2,
      author: 'James T.',
      rating: 4,
      date: 'March 10, 2026',
      text: 'Great components and engaging gameplay. Takes about an hour to learn, but worth it.',
    },
    {
      id: 3,
      author: 'Elena R.',
      rating: 5,
      date: 'March 5, 2026',
      text: 'Best board game purchase this year. Highly replayable with different strategies.',
    },
  ]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopyLinkMessage(true)
    setTimeout(() => setCopyLinkMessage(false), 2000)
  }

  const handleProceedCheckout = () => {
    if (selectedEdition) {
      navigate('/purchase/checkout')
    }
  }

  return (
    <div className="product-page">
      {/* Hero Section */}
      <div className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-text">
            <h1 className="product-hero-title">CorpoGame: The Board Game</h1>
            <p className="product-hero-subtitle">
              Strategic workplace simulation board game for 2-4 players. Navigate corporate challenges,
              manage resources, and compete for victory.
            </p>
            <div className="product-hero-rating">
              <div className="product-hero-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FiStar
                    key={i}
                    size={18}
                    fill="#1a73e8"
                    color="#1a73e8"
                  />
                ))}
              </div>
              <span className="product-hero-rating-text">
                4.8 out of 5 (120 reviews)
              </span>
            </div>
            <button
              className="primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onClick={() => {
                // Add to cart action
              }}
            >
              <FiShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="product-gallery">
        <div className="product-gallery-container">
          <h2 className="product-gallery-title">Product Gallery</h2>
          <div className="product-hero-image">
            <div className="product-hero-image-placeholder">
              Product Image: {productImages[activeImageIndex].label}
            </div>
          </div>
          <div className="product-thumbnails">
            {productImages.map((img, idx) => (
              <div
                key={img.id}
                className={`product-thumbnail ${activeImageIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <span>{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="product-section">
        <div className="product-section-container">
          <h2 className="product-section-title">About the Game</h2>
          <p className="product-description-text">
            CorpoGame is a strategic board game that simulates the dynamic world of corporate management.
            Players take on roles within a fictional company and must navigate challenges, manage Worker Points,
            strategically invest in audit cards, and compete for market dominance. The game combines elements of
            resource management, strategic planning, and negotiation.
          </p>
          <p className="product-description-text">
            Perfect for game nights with friends or family, CorpoGame offers replayability through randomized
            card draws and multiple winning strategies. Each game typically takes 45-60 minutes and supports 2-4
            players of ages 14 and up.
          </p>
        </div>
      </div>

      {/* Technical Sheet */}
      <div className="product-section">
        <div className="product-section-container">
          <h2 className="product-section-title">Technical Specifications</h2>
          <table className="product-table">
            <tbody>
              {[
                { label: 'Dimensions', value: '12" x 10" x 2"' },
                { label: 'Weight', value: '2.5 lbs' },
                { label: 'Player Count', value: '2-4' },
                { label: 'Suggested Age', value: '14+' },
                { label: 'Game Time', value: '45-60 minutes' },
                { label: 'Components', value: 'Board, Cards, Tokens, Dice, Rulebook' },
                { label: 'Material', value: 'Cardboard, Wood, Paper' },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Characteristics */}
      <div className="product-section">
        <div className="product-section-container">
          <h2 className="product-section-title">Game Characteristics</h2>
          <div className="product-grid">
            {[
              { icon: FiBriefcase, label: 'Strategic Gameplay', desc: 'Deep decision-making' },
              {
                icon: FiRotateCcw,
                label: 'Highly Replayable',
                desc: 'Different outcomes each game',
              },
              { icon: FiUsers, label: 'Social Experience', desc: 'Perfect for groups' },
              { icon: FiTrendingUp, label: 'Skill-Based', desc: 'Strategy matters' },
            ].map((char, idx) => {
              const IconComponent = char.icon
              return (
                <div key={idx} className="product-grid-item">
                  <IconComponent size={32} className="product-grid-icon" />
                  <h4 className="product-grid-title">{char.label}</h4>
                  <p className="product-grid-description">{char.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="product-section">
        <div className="product-section-container">
          <h2 className="product-section-title">Customer Reviews</h2>
          <div className="product-reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="product-review-card">
                <div className="product-review-rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar
                      key={i}
                      size={16}
                      fill={i <= review.rating ? '#1a73e8' : '#dadce0'}
                      color={i <= review.rating ? '#1a73e8' : '#dadce0'}
                    />
                  ))}
                </div>
                <p className="product-review-text">{review.text}</p>
                <div>
                  <p className="product-review-author">{review.author}</p>
                  <p className="product-review-date">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Sharing */}
      <div className="product-section">
        <div className="product-section-container">
          <h2 className="product-section-title">Share This Product</h2>
          <div className="product-social-buttons">
            <button className="product-social-btn" title="Share on Facebook">
              <FiFacebook size={18} />
              Facebook
            </button>
            <button className="product-social-btn" title="Share on Twitter">
              <FiTwitter size={18} />
              Twitter
            </button>
            <button className="product-social-btn" title="Share on LinkedIn">
              <FiLinkedin size={18} />
              LinkedIn
            </button>
            <button
              className="product-social-btn"
              onClick={handleCopyLink}
              title="Copy link"
            >
              <FiCopy size={18} />
              {copyLinkMessage ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </div>

      {/* Edition Selection */}
      <div className="product-section">
        <div className="product-section-container">
          <h2 className="product-section-title">Choose Your Edition</h2>
          <div className="product-edition-grid">
            {editions.map((edition) => (
              <div
                key={edition.id}
                className={`product-edition-card ${selectedEdition?.id === edition.id ? 'active' : ''}`}
                onClick={() => setSelectedEdition(edition)}
              >
                <h3 className="product-edition-name">{edition.name}</h3>
                <p className="product-edition-price">${edition.price.toFixed(2)}</p>
                <p className="product-edition-description">{edition.description}</p>
                <div>
                  <p className="product-edition-features-label">Includes:</p>
                  {edition.features.map((feature, idx) => (
                    <div key={idx} className="product-edition-feature">
                      <FiCheck size={16} color="#1a73e8" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity Selector & CTA Footer */}
      <div className="product-cta-footer">
        <div className="product-cta-container">
          <div className="product-quantity-section">
            <label className="product-quantity-label">Quantity</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
              className="product-quantity-input"
            />
          </div>

          {selectedEdition && (
            <div className="product-total-section">
              <div>
                <p className="product-total-label">Total:</p>
                <p className="product-total-amount">
                  ${(selectedEdition.price * quantity).toFixed(2)}
                </p>
              </div>
              <button
                className="primary"
                onClick={handleProceedCheckout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FiShoppingCart size={20} />
                Proceed to Checkout
              </button>
            </div>
          )}

          {!selectedEdition && (
            <p className="product-no-edition-message">
              Please select an edition above
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
