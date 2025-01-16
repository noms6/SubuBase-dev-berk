<template>
    <div class="events-container">
        <div v-for="item in items" :key="item.id" class="event-item">
            <div class="event-header" @click="toggleAccordion(item.id)">
                <div class="event-info">
                    <span class="event-title">{{ item.title }}</span>
                    <span class="event-date">{{ item.date }}</span>
                </div>
                <!-- Sayılı Etkinlik Butonu -->
                <div class="limited-event-button">
                    <button class="small-button" @click="goToEventPage(item.link)">Talebe Git</button>
                </div>
            </div>

            <!-- Accordion Content (Açılır/Kapanır) -->
            <transition name="fade">
                <div v-show="item.isOpen" class="event-details">
                    <div v-html="item.text"></div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: "5d252001",
                    title: "Devreler Topluluğu Etkinliği",
                    date: "09.12.2024 08:22",
                    text: `
              <p><strong>2024-2025 Güz Dönemi - MYO 490 İŞLETMEDE MESLEKİ EĞİTİM - 1. Ara Sınav Not Girişleri Yayınlandı</strong></p>
              <p>Normal Öğretim - B Şubesi 1. Ara Sınav not girişleri yayınlandı.</p>
            `,
                    
                    isOpen: false,
                    link: "a40d630b0"
                },
                {
                    id: "01b2e6c8",
                    title: "Elektrik Topluluğu Etkinliği",
                    date: "09.12.2024 08:22",
                    text: `
              <p><strong>2024-2025 Güz Dönemi - MYO 490 İŞLETMEDE MESLEKİ EĞİTİM - 1. Ara Sınav Not Girişleri Yayınlandı</strong></p>
              <p>Normal Öğretim - B Şubesi 1. Ara Sınav not girişleri yayınlandı.</p>
            `,
                    
                    isOpen: false,
                    link: "af7cfb95f"
                }
            ]
        };
    },
    methods: {
        toggleAccordion(id) {
            const item = this.items.find(item => item.id === id);
            item.isOpen = !item.isOpen;
        },
        goToEventPage(link) {
            this.$router.push(`/Talep`);
        }
    }
};
</script>

<style scoped>
/* Genel Konteyner */
.events-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

/* Etkinlik Item Stili */
.event-item {
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.event-item:hover {
    transform: translateY(-5px);
}

/* Etkinlik Başlığı ve Tarihi */
.event-header {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    border-radius: 10px 10px 0 0;
    transition: background-color 0.3s ease;
}

.event-header:hover {
    background-color: #45a049;
}

.event-info {
    display: flex;
    flex-direction: column;
}

.event-title {
    font-size: 18px;
    font-weight: bold;
}

.event-date {
    font-size: 14px;
    color: #f1f1f1;
}

/* Sayılı Etkinlik Butonu */
.limited-event-button {
    display: flex;
    align-items: center;
}

.small-button {
    background-color: #ff5722;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.small-button:hover {
    background-color: #e64a19;
}

/* Etkinlik Detayları */
.event-details {
    padding: 20px;
    background-color: #fafafa;
    font-size: 14px;
    color: #333;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Fade Animasyonu */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>