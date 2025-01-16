<template>
    <div class="main b">
        <div class="container">
            <div class="a">
                <!-- İletişim Bilgileri -->
                <div class="contact-info ">
                    <h1>İLETİŞİM BİLGİLERİ</h1>
                    <p><b>Adres:</b> Sakarya Uygulamalı Bilimler Üniversitesi<br />T1 Blok Teknoloji Fakültesi Zemin
                        Kat Serdivan / SAKARYA</p>
                    <p>
                        <b>E-Posta:</b>
                        <a href="mailto:sks@subu.edu.tr">sks@subu.edu.tr</a>
                    </p>
                    <p>
                        <b>Telefon:</b>
                        <a href="tel:+902646160054">+90 (264) 616 00 54</a>
                    </p>
                    <p><b>Faks:</b> +90 (264) 616 00 14</p>
                </div>
                <!-- Harita -->
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.7343119983851!2d30.332226274867786!3d40.7406890523096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccadf28147d949%3A0x3c6a29713b5062a5!2sT1%20Blok%20Teknoloji%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1660724275758!5m2!1str!2str"
                        frameborder="0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IletisimBilgileri",
};
</script>

<style scoped>
.b {
    height: 72vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main {
    font-family: 'Arial', sans-serif;
    padding: 20px;
    background-color: #f9f9f9;
}

.container {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 100%;
    max-width: 1200px;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.a {
    display: flex;
    align-items: flex-start; /* İçeriği üstten hizalar */
    justify-content: flex-start; /* İçeriği sola hizalar */
    gap: 20px;
    flex-wrap: wrap; /* Elemanları taşır */
}

.contact-info {
    flex: 0 0 auto;
    width: 320px;
    height: auto; /* Sabit yükseklik kaldırıldı */
    padding: 20px;
    background-color: #f0f0f5;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-right: auto; /* Sola yaslama */
}

.contact-info h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333333;
    text-transform: uppercase;
}

.contact-info p {
    margin: 1rem 0;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555555;
}

.contact-info b {
    color: #222222;
}

.contact-info a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.contact-info a:hover {
    text-decoration: underline;
}

.map-container {
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
    width: 100%;
    height: 410px;
    border: none;
}

/* Ekran boyutu 768px'den küçük olduğunda */
@media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    .a {
        flex-direction: column; /* Elemanları dikey hizalar */
        gap: 20px; /* Aradaki boşluğu korur */
    }

    .contact-info,
    .map-container {
        width: 100%; /* Tam genişlik */
    }

    .contact-info p {
        font-size: 1rem; /* Yazıyı küçült */
    }
}

/* Ekran boyutu 480px'den küçük olduğunda */
@media (max-width: 480px) {
    .contact-info h1 {
        font-size: 1.5rem; /* Başlık boyutunu küçült */
    }

    .contact-info p {
        font-size: 0.9rem; /* Paragraf boyutunu küçült */
    }

    .container {
        padding: 10px;
    }
}
</style>

