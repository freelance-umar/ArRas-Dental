export function initModal () {
    // Modal
  const mobileModal = document.getElementById('mobileServiceModal');
  const mobileModalBody = document.getElementById('mobileModalBody');

  const overlay = document.getElementById('modalOverlay');
  const modalContentDesktop = document.getElementById('cardModalContent');
  const backdrop = document.getElementById('modalBackdrop');

  const closeBtns = document.querySelectorAll('.close-button');

  const serviceDescriptions = {
    "Pencabutan Gigi": "Pencabutan dengan topical dan local anastesi untuk meminimalisir nyeri.",
    "Gigi Palsu": "Semua jenis gigi palsu siap dalam waktu maksimal 2 hari.",
    "Tambal Gigi": "Tambal gigi untuk mengatasi kerusakan akibat karies atau trauma.",
    "Bleaching": "Pemutihan gigi dengan metode terbaik, dengan atau tanpa sinar.",
    "Karang Gigi": "Membersihkan karang gigi secara menyeluruh dan efektif.",
    "Perawatan Saluran Akar": "Menjaga dan merawat jaringan akar gigi secara profesional.",
    "Lab Pembuatan Gigi Palsu": "Klinik pertama di Kalimantan dengan lab pembuatan gigi sendiri.",
    "Layanan Lainnya": "Hubungi kami untuk layanan khusus lainnya yang tersedia."
  };
  document.querySelectorAll('.services__card').forEach(card => {
    card.addEventListener('click', () => {
      const rect = card.getBoundingClientRect();

      modalContentDesktop.innerHTML = `
         <button class="button button-primary">Hubungi Admin 1</button>
         <button class="button button-secondary">Hubungi Admin 2</button>
      `;

      // Position modal near the card (e.g., below it)
      modalContentDesktop.style.top = `${rect.bottom + 10}px`;
      modalContentDesktop.style.left = `${rect.left + 250}px`;
      if (window.innerWidth >= 1920) {
        overlay.classList.add('active');
        overlay.style.display = 'block';
        document.body.classList.add('modal-open');
      }
    })
  });
  document.querySelectorAll('.services__bottom__card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h1')?.innerText?.trim() || '';
      const desc = card.querySelector('p')?.innerText?.trim() || serviceDescriptions[title] || '';
      const img = card.querySelector('.image-wrap img');
      const imgSrc = img ? img.getAttribute('src') : '';
      const imgAlt = img ? img.getAttribute('alt') || title : '';

      const modalContent = `
        <div class="mobile__modal__head">
          <img class="mobile__modal__head__img" src="${imgSrc}" alt="${imgAlt}"/>
          <div>
            <h2>${title}</h2>
            <p>${desc}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <button class="button button-primary button-full button-sm">Hubungi Admin 1</button>
          <button class="button button-secondary button-full button-sm">Hubungi Admin 2</button>
        </div>
      `;

      const rect = card.getBoundingClientRect();

      modalContentDesktop.innerHTML = `
         <button class="button button-primary">Hubungi Admin 1</button>
         <button class="button button-secondary">Hubungi Admin 2</button>
      `;

      // Position modal near the card (e.g., below it)
      modalContentDesktop.style.top = `${rect.bottom + 10}px`;
      modalContentDesktop.style.left = `${rect.left}px`;


      
      // Responsive logic
      if (window.innerWidth <= 640) {
        mobileModalBody.innerHTML = modalContent;
        mobileModal.style.display = 'block';
        document.body.classList.add('modal-open');
      } 
      else if (window.innerWidth >= 1920) {
        overlay.classList.add('active');
        overlay.style.display = 'block';
        document.body.classList.add('modal-open');
      }
    });
  });

  // Close both modals
  closeBtns.forEach(btn => {
    btn.onclick = () => {
      mobileModal.style.display = 'none';
      // desktopModal.style.display = 'none';
      document.body.classList.remove('modal-open');
    };
  });

  window.onclick = (e) => {
    if (e.target === mobileModal) {
      mobileModal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  };
  // Close when clicking outside
  backdrop.addEventListener('click', () => {
    overlay.classList.remove('active');
    overlay.style.display = 'none';
    document.body.classList.remove('modal-open');
  });
}