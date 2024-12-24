<template>
    <div class="community-info">
        <h1>{{ community.name }}</h1>
        <p><strong>Danışman:</strong> {{ community.advisor }}</p>
        <p><strong>Başkan:</strong> {{ community.president }}</p>
        <p><strong>Açıklama:</strong> {{ community.description }}</p>
        <p><strong>Üye Sayısı:</strong> {{ community.memberCount }}</p>
        <h2>Yapılan Etkinlikler</h2>
        <ul>
            <li v-for="(event, index) in community.events" :key="index">
                {{ event }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CommunityInfo",
    data() {
        return {
            community: {
                name: "Topluluk Adı",
                advisor: "Danışman Adı",
                president: "Başkan Adı",
                description: "Topluluğun kısa açıklaması burada yer alacak.",
                memberCount: 120,
                events: ["Etkinlik 1", "Etkinlik 2", "Etkinlik 3"],
            },
        };
    },
};
</script>

<style scoped>
.community-info {
    font-family: Arial, sans-serif;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    height: 100vh;
    overflow-y: auto;
    margin-left: 16px; /* Sol boşluk */
    margin-right: 16px; /* Sağ boşluk */
}

.community-info h1,
.community-info h2,
.community-info p {
    font-size: 1.5rem; /* Yazı boyutunu büyüttük */
}

.community-info h2 {
    margin-top: 16px;
    font-size: 1.6rem; /* Etkinlik başlığının boyutu büyütüldü */
}

.community-info ul {
    padding-left: 20px;
}

.community-info ul li {
    list-style-type: disc;
}

/* Responsive tasarım */
@media (max-width: 768px) {
    .community-info {
        margin-left: 8px;
        margin-right: 8px;
    }

    .community-info h1,
    .community-info h2,
    .community-info p {
        font-size: 1.2rem; /* Mobilde yazı boyutu biraz küçüldü */
    }
}
</style>
