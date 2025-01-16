<template>
    <div class="event-list-container">
        <div class="event-list">
            <div class="event-item" v-for="event in events" :key="event.id" @click="navigateToEventPage(event.id)">
                <h3 class="event-title">{{ event.title }}</h3>
                <p class="event-date">Tarih: {{ event.date }}</p>
                <p class="event-location">Yer: {{ event.location }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // Örnek etkinlik verisi
            events: [
                { id: 1, title: 'Etkinlik 1', date: '12 Ocak 2025', location: 'Konferans Salonu' },
                { id: 2, title: 'Etkinlik 2', date: '15 Ocak 2025', location: 'Toplantı Odası' },
                { id: 3, title: 'Etkinlik 3', date: '20 Ocak 2025', location: 'Açık Alan' },
            ]
        };
    },
    methods: {
        navigateToEventPage(eventId) {
            // Etkinlik detay sayfasına yönlendiriyor
            this.$router.push(`/etkinlik`);
        }
    }
};
</script>
<style scoped>
.event-list-container {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
}

.event-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.event-item {
    padding: 15px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.event-item:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.event-title {
    font-size: 1.5rem;
    color: #495057;
}

.event-date,
.event-location {
    font-size: 1rem;
    color: #6c757d;
}
</style>
