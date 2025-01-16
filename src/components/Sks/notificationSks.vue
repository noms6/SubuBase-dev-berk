<template>
    <div class="notification-container" @mouseleave="startCloseTimer" @mouseover="clearCloseTimer">
        <!-- Bildirim Simgesi -->
        <feather-icon icon="BellIcon" size="21" class="text-primary" :badge="requests.length" @click="toggleRequest" />

        <!-- Talepler Bölümü -->
        <div v-if="isRequestOpen" class="request-dropdown">
            <div @click.prevent="handleRequestClick(request)" class="request-item" v-for="(request, index) in requests"
                :key="index">
                <span class="status-badge">Düzenlendi</span>
                <a href="#" @click.prevent="handleRequestClick(request)" class="request-title">
                    {{ request.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isRequestOpen: false, // Taleplerin görünür olup olmadığını kontrol eder
            requests: [
                { id: 1, title: "Talep Konusu 1" },
                { id: 2, title: "Talep Konusu 2" },
                { id: 3, title: "Talep Konusu 3" },
            ],
            closeTimer: null, // Kapanma zamanlayıcısı
        };
    },
    methods: {
        toggleRequest() {
            this.isRequestOpen = !this.isRequestOpen; // Taleplerin açılmasını/kapanmasını sağlar
            if (!this.isRequestOpen) {
                this.clearCloseTimer(); // Kapanmaya dair zamanlayıcıyı temizle
            }
        },
        handleRequestClick() {
            this.$router.push('/NotificationFull'); // Talep başlığına tıklandığında işlem
        },
        startCloseTimer() {
            if (this.isRequestOpen) {
                this.closeTimer = setTimeout(() => {
                    this.isRequestOpen = false; // 2 saniye sonra talepleri kapat
                }, 1000);
            }
        },
        clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer); // Zamanlayıcıyı temizle
                this.closeTimer = null;
            }
        },
        addRequest() {
            // Yeni talep ekler
            this.requests.push({
                id: this.requests.length + 1,
                title: `Talep Konusu ${this.requests.length + 1}`,
            });
        },
        removeRequest() {
            // Son talebi siler
            if (this.requests.length > 0) {
                this.requests.pop();
            }
        },
    },
};
</script>

<style scoped>
.notification-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.request-dropdown {
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 10;
    min-width: 250px;
}

.request-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #f8f9fa;
    transition: transform 0.2s ease;
}

.request-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.status-badge {
    background-color: #28a745;
    color: #fff;
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
}

.request-title {
    margin: 0;
    font-size: 0.9rem;
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
}

.request-title:hover {
    color: #0056b3;
}
</style>
