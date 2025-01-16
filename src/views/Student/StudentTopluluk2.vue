<template>
    <div class="container">
        <CRow>
            <CCol>
                <Topluluklar />
            </CCol>
        </CRow>
    </div>
</template>

<script>
import Etkinlik from '@/components/Student/Etkinlik.vue';
import Topluluklar from "@/components/Student/TopluluklarÜye.vue";

export default {
    components: {
        Etkinlik,
        Topluluklar,
    },
    data() {
        return {
            showMessage: false,
            isButtonDisabled: false,
            buttonText: 'Üye Ol',
        };
    },
    methods: {
        handleJoin() {
            this.isButtonDisabled = true;
            this.buttonText = 'Talep İletildi';
            this.showMessage = true;
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
        },
    },
};
</script>

<style scoped>
.container {
    padding: 20px;
}

.etkinlik,
.topluluk-bilgileri {
    padding: 0;
    /* Card iç boşluklarını kaldırma */
    background-color: transparent;
    /* Beyaz arka planı kaldırma */
    border-radius: 0;
    /* Köşe yuvarlatmaları kaldırma */
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
