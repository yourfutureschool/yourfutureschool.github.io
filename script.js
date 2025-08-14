document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const schoolCards = document.querySelectorAll(".bg-white.rounded-lg.shadow-md.p-4");

  if (!searchInput || !schoolCards.length) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    schoolCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
});
if (!/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Redirect to the desktop version
    window.location.href = "/presentation.html";
}