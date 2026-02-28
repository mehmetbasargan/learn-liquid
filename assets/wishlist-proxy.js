// Simple wishlist data storage using localStorage only
// No external API calls to avoid CORS issues

class WishlistStorage {
	constructor() {
		this.storageKey = 'luvia_wishlist';
	}

	getWishlist() {
		// Get from localStorage synchronously
		return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
	}

	updateWishlist(wishlistItems) {
		// Save to localStorage synchronously
		localStorage.setItem(this.storageKey, JSON.stringify(wishlistItems));
	}
}

// Extend the original WishlistManager to use this storage
window.WishlistStorage = WishlistStorage;
