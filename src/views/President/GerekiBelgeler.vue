<template>
    <div class="">
        <div class="container">
            <div class="content-grid">
                <!-- Stant ve İlan İşlemleri Card -->
                <div class="content-card">
                    <h2>Stant ve İlan İşlemleri</h2>
                    <div class="divider"></div>
                    <ul>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=29852493">
                                Stant Açma ve Diğer Tanıtıcı Faaliyetler Alt Detay Süreci
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=999640744">
                                Afiş, İlan, Duyuru, Stant Talep ve Onay Formu
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=152209765">
                                Stant Bilgi ve Taahhüt Formu
                            </a>
                        </li>
                        <li>
                            <a
                                href="/sites/sks.subu.edu.tr/files/inline-files/2023-2024%20Stant%20A%C3%A7ma%20%C3%9Ccretleri%20Tablosu.pdf">
                                Stant ve İlan Ücretleri
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=1782209408">
                                Ticari Reklam, İlan, Afiş, Stant ve Tanıtım Araçları Uygulama Yönergesi
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Öğrenci Toplulukları Card -->
                <div class="content-card">
                    <h2>Öğrenci Toplulukları</h2>
                    <div class="divider"></div>
                    <ul>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=878951896">
                                Öğrenci Topluluğu Kuruluş Üst Yazı Düzeni (Genel)
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=1357710503">
                                Öğrenci Topluluğu Kuruluş Üst Yazı Düzeni (Bölüm)
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=-48097366">
                                Öğrenci Topluluğu Yönetim Kurulu Listesi
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=1934405877">
                                Öğrenci Topluluğu Kuruluş Onayı Dilekçesi
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=143161082">
                                Topluluk Faaliyet Raporu Formu
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=1084334709">
                                Topluluk Faaliyet Programı Formu
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=-477352535">
                                Öğrenci Toplulukları Etkinlik Talep Formu
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Teknik Gezi İşlemleri Card -->
                <div class="content-card">
                    <h2>Teknik Gezi İşlemleri</h2>
                    <div class="divider"></div>
                    <ul>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=-768933589">
                                Teknik Gezi ve Uygulamalı Ders Aracı Tahsis Edilmesi Alt Detay Süreci
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=-1489077725">
                                Teknik Gezi ve Uygulamalı Ders Aracı Talep Formu
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=1990393611">
                                Teknik Gezi ve Uygulamalı Ders Araç Tahsisi Öğrenci-Personel Katılım Tablosu
                            </a>
                        </li>
                        <li>
                            <a href="https://qdms.subu.edu.tr/QDMSNET/BSAT/SL.aspx?L=-586383010">
                                Teknik Gezi ve Uygulamalı Ders Aracı Tahsis Formu
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentPage'
}
</script>

<style scoped>
.content {
    padding: 40px 20px;
    background-color: #f8f9fa;
    min-height: 100vh;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    margin-top: 20px;
}

.content-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

h2 {
    color: #333;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    font-weight: 600;
}

.divider {
    height: 3px;
    background-color: #007bff;
    margin: 15px 0 25px 0;
    width: 100%;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul li {
    margin-bottom: 15px;
}

ul li a {
    text-decoration: none;
    color: #555;
    font-size: 0.95rem;
    display: block;
    padding: 8px 0;
    transition: all 0.2s ease;
}

ul li a:hover {
    color: #007bff;
    padding-left: 10px;
}

@media (max-width: 768px) {
    .content-grid {
        grid-template-columns: 1fr;
    }

    .content-card {
        padding: 20px;
    }
}
</style>