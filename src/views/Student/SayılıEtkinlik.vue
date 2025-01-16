<template>
    <div class="special-event-container">
        <div class="event-header">
            <h2>Etkinliğe Katılma Talebi</h2>
        </div>
        <div class="event-content">
            <div class="event-details">
                <p><strong>Etkinlik Adı:</strong> Yazılım Geliştirme Atölyesi</p>
                <p><strong>Etkinlik Tarihi:</strong> 15 Aralık 2024</p>
                <p><strong>Katılım Durumu:</strong> 10/20</p>
                <p><strong>Etkinlik Gereksinimleri</strong></p>
                <ul>
                    <li>Yazılım geliştirme ile ilgili temel bilgi</li>
                    <li>İlgili programlama dilinde deneyim</li>
                    <li>Etkinliğe aktif katılım</li>
                </ul>
            </div>
            <div class="event-actions">
                <button class="btn btn-primary" :disabled="isRequestSent" @click="sendJoinRequest">
                    {{ buttonText }}
                </button>
            </div>
            <p v-if="isRequestSent" class="success-message">
                Mail olarak gönderilebilir. Katıldınız! Etkinliğe başarıyla kaydoldunuz. Eğer katılamayacak
                olursanız, en az etkinlikten 1 gün önce talep oluşturup belirtmelisiniz.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isRequestSent: false,
            buttonText: 'Katılım Talebi Gönder',
        };
    },
    methods: {
        sendJoinRequest() {
            this.isRequestSent = true;
            this.buttonText = 'Talep Alındı!';
        },
    },
};
</script>

<style scoped>
.special-event-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

.event-header h2 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
}

.event-content {
    color: #555;
    line-height: 1.6;
}

.event-details p {
    margin: 0.5rem 0;
}

.event-details ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
}

.event-details ul li {
    list-style-type: disc;
    margin: 0.3rem 0;
}

.event-actions {
    text-align: center;
    margin-top: 1.5rem;
}

.event-actions .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.event-actions .btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

.success-message {
    margin-top: 1.5rem;
    color: #28a745;
    font-weight: bold;
    text-align: center;
    font-size: 0.9rem;
}
</style>
