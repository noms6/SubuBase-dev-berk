<template>
    <div class="notification-container">
        <h2 class="notification-title">Bildirim Ekranı</h2>
        <div v-for="(item, index) in requests" :key="index" class="notification-item" :class="item.statusClass">
            <div class="notification-header">
                <span class="notification-title">{{ item.title }}</span>
                <button class="edit-button">Düzenle</button>
            </div>
            <p class="notification-status">{{ item.status }}</p>
            <p class="notification-reason"><strong>Sebep:</strong> {{ item.reason }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationList',
    data() {
        return {
            requests: [
                {
                    title: 'Talep Konusu 1',
                    status: 'Onaylandı',
                    reason: 'Evraklar eksiksiz ve uygun.',
                    statusClass: 'approved',
                },
                {
                    title: 'Talep Konusu 2',
                    status: 'Reddedildi',
                    reason: 'Belgeler eksik veya yanlış.',
                    statusClass: 'rejected',
                },
            ],
        };
    },
};
</script>

<style scoped>
.notification-container {
    margin: 20px;
    padding: 10px;
    border: 1px solid #0066cc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.notification-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #333;
}

.notification-item {
    background-color: #f1f1f1;
    border-radius: 5px;
    margin: 10px 0;
    padding: 15px;
}

.notification-item.approved {
    background-color: #e6f7e6;
    border-left: 5px solid #4CAF50;
}

.notification-item.rejected {
    background-color: #f8d7da;
    border-left: 5px solid #dc3545;
}

.notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notification-header .notification-title {
    font-size: 18px;
    font-weight: bold;
}

.edit-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
}

.edit-button:hover {
    background-color: #45a049;
}

.notification-status {
    font-size: 16px;
    margin: 5px 0;
    font-weight: bold;
}

.notification-reason {
    font-size: 14px;
    margin: 5px 0;
    color: #555;
}
</style>