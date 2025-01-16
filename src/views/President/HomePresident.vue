<template>
    <div class="card custom-card">
        <!-- Sosyal Medya İkonları (Sol Üst) -->
        <sosyal-medya class="social-media-top-left" />

        <div class="row no-gutters">
            <!-- Sol Bölüm -->
            <div class="col-md-6 left-section overflow-auto">
                <div class="logo-box text-center">
                    <img src="http://sks.subu.edu.tr/sites/sks.subu.edu.tr/files/gbb-uploads/geleceğin mühendisleri-jyi2m9.jpg"
                        alt="Logo" class="img-fluid" />
                </div>
                <div class="community-info">
                    <h1 class="text-primary mb-4">Topluluk Adı</h1>
                    <p><strong>Danışman:</strong> Danışman Adı</p>
                    <p><strong>Başkan:</strong> Başkan Adı</p>
                    <p><strong>Açıklama:</strong> Topluluğun kısa açıklaması burada yer alacak.</p>
                    <p @click="Member" ><strong>Üye Sayısı:</strong> 120</p>
                    <p><strong>Yapılan Etkinlikler:</strong></p>
                    <ul>
                        <li>Etkinlik 1</li>
                        <li>Etkinlik 2</li>
                        <li>Etkinlik 3</li>
                    </ul>

                </div>
            </div>

            <!-- Sağ Bölüm -->
            <div @click="EtkinlikFull" class="col-md-6 d-flex align-items-center justify-content-center">
                <Etkinlik />
            </div>
        </div>

        <!-- Talep Oluştur Butonu -->
        <div class="button-container">
            <button @click="TalepEt" class="btn btn-primary btn-lg"  >
                <i class="fas fa-plus-circle"></i> Talep Oluştur
            </button>
        </div>
    </div>
</template>

<script>
import Etkinlik from "@/components/President/Etkinlik.vue";
import SosyalMedya from "@/components/President/SosyalMedya.vue";

export default {
    components: {
        Etkinlik,
        SosyalMedya,
    },
    methods: {
        TalepEt() {
            this.$router.push('/TalepEt');
            },
        EtkinlikFull(){
            
            this.$router.push('/EtkinlikFull');

        },
        Member(){
            this.$router.push('/Member');
        },

    },
};
</script>

<style scoped>
/* Genel Kart Tasarımı */
.custom-card {
    background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    margin: auto;
    max-width: 1200px;
    height: 72vh;
    /* Yüksekliği 72vh olarak ayarladık */
    transition: none;
    /* Hoverda hareketi engellemek için */
}

/* Sosyal Medya İkonları */
.social-media-top-left {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
}

/* Sol Bölüm */
.left-section {
    padding: 20px;
    max-height: calc(72vh - 40px);
    /* Yüksekliği ayarladık, padding'i de göz önünde bulundurduk */
    overflow-y: auto;
    /* İçerik kaydırılabilir */
    
}

.logo-box {
    margin-top: 20px;
    /* Üst boşlukları azaltarak daha uygun hale getirdik */
    text-align: center;
}

.logo-box img {
    display: block;
    margin: 0 auto;
    max-width: 100px;
}

.community-info h1 {
    color: #495057;
    font-size: 2rem;
    /* Font boyutunu biraz küçültüyoruz */
    font-weight: bold;
    text-align: center;
}

.community-info p,
.community-info ul {
    color: #6c757d;
    font-size: 1rem;
    /* Font boyutunu optimize ediyoruz */
    margin-bottom: 10px;
}

.community-info ul {
    list-style-type: disc;
    padding-left: 20px;
}

/* Sağ Bölüm */
.right-section {
    background-color: #f1f3f5;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
}

/* Talep Oluştur Butonu */
.button-container {
    position: absolute;
    top: 95%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: 5;
}

.btn-primary {
    background: linear-gradient(to right, #007bff, #0056b3);
    border: none;
    border-radius: 8px;
    padding: 12px 30px;
    font-size: 1.2rem;
    color: #fff;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.btn-primary i {
    font-size: 1.5rem;
}

.btn-primary:hover {
    background: linear-gradient(to right, #0056b3, #003f7f);
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
}

/* Responsive Tasarım */
@media (max-width: 768px) {
    .custom-card {
        padding: 10px;
        height: auto;
        /* Mobilde otomatik yükseklik */
    }

    .row {
        flex-direction: column;
    }

    .left-section {
        border-right: none;
        border-bottom: 1px solid #e9ecef;
    }

    .social-media-top-left {
        top: 10px;
        left: 10px;
    }
}
</style>
