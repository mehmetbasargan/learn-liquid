// Wishlist functionality
class WishlistManager {
	constructor() {
		this.storage = new WishlistStorage();
		this.wishlistItems = [];
		this.init();
	}

	init() {
		// Load wishlist and update heart icons on page load
		this.loadWishlist();
	}

	loadWishlist() {
		this.wishlistItems = this.storage.getWishlist();
		this.updateAllHeartIcons();
	}

	toggleWishlist(productHandle, buttonElement) {
		try {
			const wishlist = this.wishlistItems;
			const isInWishlist = wishlist.includes(productHandle);

			if (isInWishlist) {
				// Remove from wishlist
				this.removeFromWishlist(productHandle);
				this.updateHeartIcon(buttonElement, false);
				showToast('Removed from wishlist');
			} else {
				// Add to wishlist
				this.addToWishlist(productHandle);
				this.updateHeartIcon(buttonElement, true);
				showToast('Added to wishlist');
			}
		} catch (error) {
			console.error('Error toggling wishlist:', error);
			showToast('Error updating wishlist');
		}
	}

	addToWishlist(productHandle) {
		if (!this.wishlistItems.includes(productHandle)) {
			this.wishlistItems.push(productHandle);
			this.storage.updateWishlist(this.wishlistItems);
		}
	}

	removeFromWishlist(productHandle) {
		this.wishlistItems = this.wishlistItems.filter((item) => item !== productHandle);
		this.storage.updateWishlist(this.wishlistItems);
	}

	updateHeartIcon(button, isInWishlist) {
		const svg = button.querySelector('svg');
		if (isInWishlist) {
			svg.style.fill = '#ef4444'; // Red color for active
			svg.classList.add('text-red-500');
		} else {
			svg.style.fill = 'currentColor';
			svg.classList.remove('text-red-500');
		}
	}

	updateAllHeartIcons() {
		document.querySelectorAll('[data-product-handle]').forEach((button) => {
			const productHandle = button.dataset.productHandle;
			const isInWishlist = this.wishlistItems.includes(productHandle);
			this.updateHeartIcon(button, isInWishlist);
		});
	}
}

// Initialize wishlist manager
let wishlistManager;

document.addEventListener('DOMContentLoaded', () => {
	console.log('Initializing wishlist manager...');
	wishlistManager = new WishlistManager();
	console.log('Wishlist manager initialized:', wishlistManager);
});

// Global functions for onclick handlers
function toggleWishlist(productHandle, buttonElement) {
	console.log('Toggle wishlist called:', productHandle, buttonElement);
	if (wishlistManager) {
		wishlistManager.toggleWishlist(productHandle, buttonElement);
	} else {
		console.error('Wishlist manager not initialized');
	}
}

function showToast(message) {
	const container = document.getElementById('toast-container');
	if (!container) return;

	const toast = document.createElement('div');
	toast.className =
		'px-8 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] shadow-2xl translate-y-10 opacity-0 transition-all duration-500 ease-out flex items-center justify-center min-w-[250px] mb-2';
	toast.innerText = message;
	container.appendChild(toast);

	setTimeout(() => {
		toast.classList.replace('translate-y-10', 'translate-y-0');
		toast.classList.replace('opacity-0', 'opacity-100');
	}, 10);

	setTimeout(() => {
		toast.classList.replace('translate-y-0', 'translate-y-10');
		toast.classList.replace('opacity-100', 'opacity-0');
		setTimeout(() => toast.remove(), 500);
	}, 3000);
}
