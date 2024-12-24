<template>
    <div class="container">
        <div class="topluluk-bilgileri">
            <ToplulukBilgileri />
            <div class="join">
                <button>Üye Ol</button>
            </div>
        </div>
        <div class="etkinlik">
            <Etkinlik />
        </div>
    </div>
</template>

<script>
import Etkinlik from '@/components/President/Etkinlik.vue';
import ToplulukBilgileri from '@/components/President/ToplulukBilgileri.vue';

export default {
    components: {
        Etkinlik,
        ToplulukBilgileri,
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    /* Öğeleri yatayda hizalamak için */
    justify-content: flex-start;
    /* Sola hizalama */
    gap: 20px;
    /* Öğeler arasına boşluk */
    height: 100vh;
    /* Sayfa yüksekliğini kapsar */
}

.topluluk-bilgileri {
    flex: 1;
    /* Bu öğe genişliği dolduracak */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    /* İçeriklere boşluk ekler */
    position: relative;
    /* Butonun konumlandırılabilmesi için */
}

.etkinlik {
    width: 600px;
    /* Etkinlik bileşeni için genişlik artırıldı */
    max-height: 500px;
    /* Etkinlik bileşeninin yüksekliği sabit */
    overflow-y: auto;
    /* Taşan içeriği kaydırmak için */
    background-color: #f9f9f9;
    border: 2px solid #007bff;
    /* Etkinlik bileşenine kenarlık eklendi */
    padding: 16px;
    border-radius: 8px;
}

.join {
    margin-top: 20px;
    /* Üye ol butonunun altındaki boşluk */
}

.join button {
    padding: 15px 30px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    /* Butonu üzerine yerleştir */
    top: 50%;
    /* Dikeyde ortala */
    left: 50%;
    /* Yatayda ortala */
    transform: translate(-50%, -50%);
    /* Tam ortalama */
}

.join button:hover {
    background-color: #0056b3;
}

/* Kenarlıkların olmaması */
.topluluk-bilgileri {
    border: none;
}

.etkinlik {
    border: 2px solid #3e4143;
    /* Etkinlik bileşenine kenarlık eklendi */
}
</style>