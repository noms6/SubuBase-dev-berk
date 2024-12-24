<template>
    <div class="notification-container">
        <!-- Bildirim Simgesi -->
        <feather-icon icon="BellIcon" size="21" class="text-primary" badge="4" @click="toggleRequest"
            />

            <!-- Talepler Bölümü -->
            <div v-if="isRequestOpen" class="request-dropdown">
                <div class="request-item" v-for="(request, index) in requests" :key="index">
                    <span class="status-badge">Düzenlendi</span>
                    <!-- Tıklanabilir başlık -->
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
        };
    },
    methods: {
        toggleRequest() {
            this.isRequestOpen = !this.isRequestOpen; // Taleplerin açılmasını/kapanmasını sağlar
        },
        handleRequestClick(request) {
            alert(`Talep seçildi: ${request.title}`); // Talep başlığına tıklandığında işlem
        },
    },
};
</script>

<style scoped>
.notification-container {
    position: relative;
    display: inline-block;
}

.request-dropdown {
    position: absolute;
    top: 30px;
    left: 0;
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
    /* Yeşil arka plan */
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
    /* Tıklanabilir link rengi */
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
}

.request-title:hover {
    color: #0056b3;
    /* Hover sırasında koyu mavi */
}
</style>