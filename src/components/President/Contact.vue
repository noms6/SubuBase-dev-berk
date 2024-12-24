<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <!-- İletişim Bilgileri -->
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="contact-info">
                        <h1>İletişim Bilgileri</h1>
                        <p><b>Adres:</b> Sakarya Uygulamalı Bilimler Üniversitesi<br />T1 Blok Teknoloji Fakültesi Zemin
                            Kat Serdivan / SAKARYA</p>
                        <p><b>E-Posta:</b> sks@subu.edu.tr</p>
                        <p><b>Telefon:</b> +90 (264) 616 00 54</p>
                        <p><b>Faks:</b> +90 (264) 616 00 14</p>
                    </div>
                </div>
                <!-- Harita -->
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.7343119983851!2d30.332226274867786!3d40.7406890523096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccadf28147d949%3A0x3c6a29713b5062a5!2sT1%20Blok%20Teknoloji%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1660724275758!5m2!1str!2str"
                            frameborder="0" allowfullscreen=""></iframe>
                    </div>
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
.main {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.contact-info h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.contact-info p {
    margin: 0.5rem 0;
}

.map-container iframe {
    width: 100%;
    height: 400px;
    border: none;
}
</style>