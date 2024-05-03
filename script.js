  // Menambah kelas 'active' ke elemen Beranda saat halaman dimuat
  document.addEventListener('DOMContentLoaded', function() {
    const homeNavItem = document.querySelector('.home');
    homeNavItem.classList.add('active');
    homeNavItem.querySelector('span').style.fontWeight = 'bold';
    homeNavItem.style.transform = "translateY(-5px)";
  });

  const navigationItems = document.querySelectorAll('.navigation div');

  navigationItems.forEach(item => {
    item.addEventListener('click', () => {
      // Menghapus kelas 'active' dari semua item navigasi
      navigationItems.forEach(navItem => {
        navItem.classList.remove('active');
        navItem.querySelector('span').style.fontWeight = 'normal'; // Mengatur teks kembali normal
        navItem.style.transform = "translateY(0)";
      });

      // Menambah kelas 'active' pada item yang diklik
      item.classList.add('active');

      // Mengatur konten span menjadi bold
      item.querySelector('span').style.fontWeight = 'bold';
      item.style.transform = "translateY(-5px)";
    });
  });

  // DOMContentLoaded ---

  document.addEventListener("DOMContentLoaded", () => {
    boxCalendar.style.display = "none";
    boxFavorit.style.display = "none";
    boxRiwayat.style.display = "none";
  });



  // ---

  const boxBeranda = document.querySelector(".container-beranda");

  const boxCalendar = document.querySelector(".container-calendar");

  const boxFavorit = document.querySelector(".container-favorit");

  const boxRiwayat = document.querySelector(".container-riwayat");

  // ---

  const beranda = document.querySelectorAll(".home");

  const jadwal = document.querySelectorAll(".jadwal");

  const favorit = document.querySelectorAll(".favorit");

  const riwayat = document.querySelectorAll(".time");
  alert, (riwayat);

  // ---
  
/*  beranda.forEach(i => {
    i.addEventListener("click", () => {
      boxBeranda.style.display = "block";
      
      // ---
      
      boxFavorit.style.display = "none";
      boxRiwayat.style.display = "none";
      boxCalendar.style.display = "none";
    });
  });
  
  // ---
  
  jadwal.forEach(i => {
  i.addEventListener("click", () => {
    boxCalendar.style.display = "block";

    // ---

    boxFavorit.style.display = "none";
    boxRiwayat.style.display = "none";
    boxBeranda.style.display = "none";
  })
})

*/

beranda.forEach(i => {
  i.addEventListener("click", () => {
    boxBeranda.style.display = "block";
    boxFavorit.style.display = "none";
    boxRiwayat.style.display = "none";
    boxCalendar.style.display = "none";
  })
})

jadwal.forEach(i => {
  i.addEventListener("click", () => {
    boxCalendar.style.display = "block";
    boxFavorit.style.display = "none";
    boxRiwayat.style.display = "none";
    boxBeranda.style.display = "none";
  })
})