<template>
    <div class="container">
        <div class="header">Son Bildirimler</div>

        <div v-for="(notification, index) in notifications" :key="index" class="notification-item"
            @click="toggleDetails(index)">
            <div class="notification-header">
                <span class="title">{{ notification.title }}</span>
                <span :class="['status', notification.status]">{{ notification.statusText }}</span>
            </div>
            <div v-show="notification.showDetails" class="details">{{ notification.details }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notifications: [
                {
                    title: "Talep Konusu 1",
                    status: "onay",
                    statusText: "Onaylandı",
                    details: "Sebep: Evraklar eksiksiz ve uygun.",
                    showDetails: false
                },
                {
                    title: "Talep Konusu 2",
                    status: "red",
                    statusText: "Reddedildi",
                    details: "Sebep: Belgeler eksik veya yanlış.",
                    showDetails: false
                },
                {
                    title: "Talep Konusu 3",
                    status: "onay",
                    statusText: "Onaylandı",
                    details: "Sebep: Başvuru şartları uygun.",
                    showDetails: false
                }
            ]
        };
    },
    methods: {
        toggleDetails(index) {
            this.notifications[index].showDetails = !this.notifications[index].showDetails;
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 30px auto;
    padding: 30px;
    background: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.header {
    font-size: 2rem;
    font-weight: bold;
    color: #495057;
    text-align: center;
    margin-bottom: 25px;
}

.notification-item {
    padding: 15px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}

.notification-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    background-color: #f1f3f5;
}

.notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #343a40;
    transition: color 0.3s;
}

.status {
    padding: 6px 12px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 12px;
    text-transform: capitalize;
    transition: background-color 0.3s, color 0.3s;
}

.onay {
    background-color: #28a745;
    color: white;
}

.red {
    background-color: #dc3545;
    color: white;
}

.details {
    margin-top: 10px;
    font-size: 1rem;
    color: #6c757d;
    line-height: 1.5;
    transition: opacity 0.3s ease-in-out;
    padding: 10px 0;
}
</style>