let lastOpenedModal = null;

function swipeLeft() {
    document.querySelector('.content').classList.add('swipe-left');
    document.querySelector('.video-background').classList.add('swipe-left');
    document.querySelector('.video-overlay').classList.add('swipe-left');

    setTimeout(() => {
        const productContainer = document.getElementById('productContainer');
        productContainer.style.display = 'flex';

        // Show modal and store it as last opened
        showModal();
        lastOpenedModal = 'productModal'; // Track the modal ID in lastOpenedModal
        sessionStorage.setItem('lastOpenedModal', lastOpenedModal); // Store in sessionStorage
        document.querySelector('.content').style.display = 'none';
    }, 1000);
}
function refreshPage() {
    location.reload(); // Perintah untuk reload halaman
  }
  

function showModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    lastOpenedModal = 'productModal';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';

    // If lastOpenedModal is closed, clear the variable
    if (lastOpenedModal === 'productModal') {
        lastOpenedModal = null;
        sessionStorage.removeItem('lastOpenedModal'); // Clear from sessionStorage
    }
}