<template>
    <div class="container">
        <CRow>
            <CCol md="12">
                <div class="topluluk-bilgileri">
                    <ToplulukBilgileri />
                    <div class="join">
                        <button :disabled="isButtonDisabled" @click="handleJoin">
                            {{ buttonText }}
                        </button>
                    </div>
                </div>
            </CCol>
        </CRow>
        <div v-if="showMessage" class="message">Talebiniz alındı</div>
    </div>
</template>
<script>
import ToplulukBilgileri from '@/components/Student/ToplulukBilgileri.vue';

export default {
    components: {
        ToplulukBilgileri,
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

.topluluk-bilgileri {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    /* Space between rows */
}

.join {
    margin-top: 20px;
    /* Üst boşluk */
    text-align: center;
}

.join button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    /* Geçiş efekti */
    font-size: 16px;
    /* Yazı boyutu */
}

.join button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

.join button:hover:not(:disabled) {
    background-color: #0056b3;
}

.etkinlik {
    width: 100%;
    max-width: 600px;
    /* Maksimum genişlik ayarı */
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
