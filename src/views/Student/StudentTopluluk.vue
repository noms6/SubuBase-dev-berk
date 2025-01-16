<template>
    <div class="container">
        <CRow>
            <CCol md="12">
                <div class="topluluk-bilgileri">
                    <ToplulukBilgileri />
                </div>
            </CCol>
        </CRow>
        <CRow>
            <CCol md="12">
                <div class="etkinlik">
                    <Etkinlik />
                </div>
            </CCol>
        </CRow>
        <div v-if="showMessage" class="message">Talebiniz alındı</div>
    </div>
</template>

<script>
import Etkinlik from '@/components/Student/Etkinlik.vue';
import ToplulukBilgileri from '@/components/Student/ToplulukBilgileri.vue';

export default {
    components: {
        Etkinlik,
        ToplulukBilgileri,
    },
    data() {
        return {
            showMessage: false,
            isButtonDisabled: false,
        };
    },
    methods: {},
};
</script>

<style scoped>
.container {
    padding: 20px;
}

.topluluk-bilgileri,
.etkinlik {
    padding: 0;
    /* Card iç boşluklarını kaldırma */
    background-color: transparent;
    /* Beyaz arka planı kaldırma */
    border-radius: 0;
    /* Köşe yuvarlatmalarını kaldırma */
    box-shadow: none;
    /* Gölge efektini kaldırma */
    margin-bottom: 20px;
    /* Satır arası boşluk */
}

.message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
