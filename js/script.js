document.addEventListener("DOMContentLoaded", function () {

    const daftarMenu = [
        { id: "1", nama: "Espresso", kategori: "coffee", harga: 15000, gambar: "assets/kopi espresso.png" },
        { id: "2", nama: "Americano", kategori: "coffee", harga: 15000, gambar: "assets/kopi americano.png" },
        { id: "3", nama: "Affogato", kategori: "coffee", harga: 18000, gambar: "assets/kopi affogato.png" },
        { id: "4", nama: "Bulletproof Coffee", kategori: "coffee", harga: 18000, gambar: "assets/kopi affogato.png" },
        { id: "5", nama: "Cappuccino", kategori: "coffee", harga: 18000, gambar: "assets/kopi affogato.png" },
        { id: "6", nama: "Caramel Macchiato", kategori: "coffee", harga: 18000, gambar: "assets/kopi caramel macchiato.png" },
        { id: "7", nama: "Dalgona Coffee", kategori: "coffee", harga: 18000, gambar: "assets/kopi dalgona coffee.png" },
        { id: "8", nama: "Frappuccino", kategori: "coffee", harga: 18000, gambar: "assets/kopi frappuccino.png" },
        { id: "9", nama: "Iced Coffee", kategori: "coffee", harga: 15000, gambar: "assets/kopi iced coffee.png" },
        { id: "10", nama: "Irish Coffee", kategori: "coffee", harga: 18000, gambar: "assets/kopi irish coffee.png" },
        { id: "11", nama: "Latte", kategori: "coffee", harga: 18000, gambar: "assets/kopi latte.png" },
        { id: "12", nama: "Macchiato", kategori: "coffee", harga: 18000, gambar: "assets/kopi macchiato.png" },
        { id: "13", nama: "Turkish Coffee", kategori: "coffee", harga: 18000, gambar: "assets/kopi turkish coffee.png" },
        { id: "14", nama: "Mocha", kategori: "coffee", harga: 18000, gambar: "assets/kopi mocha.png" },
        { id: "15", nama: "White Mocha", kategori: "coffee", harga: 18000, gambar: "assets/kopi white mocha.png" },
        { id: "16", nama: "Whole wheat Bread", kategori: "bread", harga: 20000, gambar: "assets/roti whole wheat bread.png" },
        { id: "17", nama: "Sourdough Bread", kategori: "bread", harga: 20000, gambar: "assets/roti sourdough bread.png" },
        { id: "18", nama: "Croissant", kategori: "bread", harga: 20000, gambar: "assets/roti croissant.png" },
        { id: "19", nama: "French Baguette", kategori: "bread", harga: 20000, gambar: "assets/roti french baguette.png" },
        { id: "20", nama: "Bagel", kategori: "bread", harga: 20000, gambar: "assets/roti bagel.png" },
        { id: "21", nama: "Danish Pastry", kategori: "bread", harga: 25000, gambar: "assets/roti danish pastry.png" },
        { id: "22", nama: "Garlic Bread", kategori: "bread", harga: 18000, gambar: "assets/roti garlic bread.png" },
        { id: "23", nama: "Burger", kategori: "bread", harga: 18000, gambar: "assets/roti hamburger.png" },
        { id: "24", nama: "Hot Dog", kategori: "bread", harga: 18000, gambar: "assets/roti hot dog.png" },
        { id: "25", nama: "Brioche", kategori: "bread", harga: 18000, gambar: "assets/roti brioche.png" },
        { id: "26", nama: "Ciabatta", kategori: "bread", harga: 18000, gambar: "assets/roti ciabatta.png" },
        { id: "27", nama: "Focaccia", kategori: "bread", harga: 18000, gambar: "assets/roti focaccia.png" },
        { id: "28", nama: "Pretzel", kategori: "bread", harga: 18000, gambar: "assets/roti pretzel.png" },
        { id: "29", nama: "Pie", kategori: "bread", harga: 10000, gambar: "assets/roti pie.png" },
        { id: "30", nama: "Churro", kategori: "bread", harga: 18000, gambar: "assets/roti churro.png" },
    ];
    
    const kontainerMenu = document.getElementById('container-menu');
    const judulKategori = document.getElementById('judul-kategori'); 
    const urlHalaman = window.location.pathname.split("/").pop();

    function tampilkanMenu(menuYangDitampilkan) {
        if (!kontainerMenu) return; 
        
        kontainerMenu.innerHTML = ""; 

        if (menuYangDitampilkan.length === 0) {
            kontainerMenu.innerHTML = `<div class="col-12 text-center p-5"><p class="text-muted">Menu tidak ditemukan.</p></div>`;
            return;
        }

        menuYangDitampilkan.forEach(menu => {
            const kartuMenu = `
                <div class="col">
                    <div class="p-3 border rounded bg-light h-100 d-flex flex-column justify-content-between">
                        <div class="rounded-circle bg-secondary text-white mx-auto mb-2 overflow-hidden" style="width: 100px; height: 100px;">
                            <img src="${menu.gambar || 'assets/'}" alt="${menu.nama}" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="mb-2 fw-semibold">${menu.nama}</p>
                        <button class="btn btn-sm btn-secondary mt-auto">Rp ${menu.harga.toLocaleString('id-ID')}</button>
                    </div>
                </div>
            `;
            kontainerMenu.innerHTML += kartuMenu;
        });
    }

    if (urlHalaman === "coffee.html") {
        const menuCoffee = daftarMenu.filter(item => item.kategori === "coffee");
        tampilkanMenu(menuCoffee);
    } else if (urlHalaman === "bread.html") {
        const menuBread = daftarMenu.filter(item => item.kategori === "bread");
        tampilkanMenu(menuBread);
    } 

    
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = document.querySelector('form[role="search"] input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault(); 
            
            const query = searchInput.value.trim().toLowerCase();
            
            if (query === "") {
                alert("Silakan masukkan kata kunci pencarian terlebih dahulu!");
                return;
            }

            if (urlHalaman === "index.html" || urlHalaman === "") {
                if (query.includes('kopi') || query.includes('coffee')) {
                    window.location.href = 'coffee.html?search=' + encodeURIComponent(query);
                } else if (query.includes('roti') || query.includes('bread')) {
                    window.location.href = 'bread.html?search=' + encodeURIComponent(query);
                } else {
                    window.location.href = 'coffee.html?search=' + encodeURIComponent(query);
                }
            } else {

                const hasilCari = daftarMenu.filter(menu => 
                    menu.nama.toLowerCase().includes(query) || 
                    menu.kategori.toLowerCase().includes(query)
                );
                
                if (judulKategori) {
                    judulKategori.innerText = `Hasil Pencarian: "${searchInput.value}"`;
                }
                
                tampilkanMenu(hasilCari);
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const kataKunciUrL = urlParams.get('search');
    
    if (kataKunciUrL) {
        if (searchInput) searchInput.value = kataKunciUrL; 
        
        const hasilCariUrl = daftarMenu.filter(menu => 
            menu.nama.toLowerCase().includes(kataKunciUrL.toLowerCase()) || 
            menu.kategori.toLowerCase().includes(kataKunciUrL.toLowerCase())
        );
        
        if (judulKategori) {
            judulKategori.innerText = `Hasil Pencarian: "${kataKunciUrL}"`;
        }
        
        tampilkanMenu(hasilCariUrl);
    }
});