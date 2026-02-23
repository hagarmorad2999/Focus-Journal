

// read favorites
let favBox = document.getElementById("favData");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
  let cartona = "";
  if (favorites.length === 0) {
    cartona = `<div class="col-12 text-center my-5" ><h4>No favorites yet ⭐</h4></div>`;
    favBox.innerHTML = cartona;
    return;
  }

  for (let i = 0; i < favorites.length; i++) {
    cartona += `
      <div class="col-12 col-md-6 col-lg-3">
        <div style="border:1px solid #ccc; margin:10px; padding:10px">
          <img src="${favorites[i].urlToImage || 'images/hand-drawn-404-error_23-2147746234.avif'}" style="width:100%; height:200px; object-fit:cover;">
          <div style="margin-top:20px; padding:10px; overflow:hidden;">
            <p style="font-family: 'Playfair Display', serif; font-size:18px; font-weight:bold;">${favorites[i].author || 'Unknown'}</p>
            <p style="color:#737070;">${favorites[i].title || ''}</p>
            <a href="${favorites[i].url}" target="_blank">More ...</a>
          </div>
          <!-- هنا زر الحذف المرتبط بالـ index -->
          <button class="btn btn-primary mt-2 deleteBtn w-100" data-index="${i}">Delete</button>
        </div>
      </div>
    `;
  }

  favBox.innerHTML = cartona;
}

// أول رندر
renderFavorites();


// حذف عنصر عند الضغط على Delete
favBox.addEventListener("click", function(e) {
  const btn = e.target.closest(".deleteBtn");
  if (!btn) return;

  const index = Number(btn.dataset.index);
  if (Number.isNaN(index)) return;

  // 1) احذفي العنصر من المصفوفة
  favorites.splice(index, 1);

  // 2) حدّثي session/local storage حسب اللي أنتي مستخدمة
  localStorage.setItem("favorites", JSON.stringify(favorites)); // لو بتستخدمي localStorage
  // sessionStorage.setItem("favorites", JSON.stringify(favorites)); // لو بدّلتي لـ sessionStorage

  // 3) أعدّي العرض
  renderFavorites();
});



 









