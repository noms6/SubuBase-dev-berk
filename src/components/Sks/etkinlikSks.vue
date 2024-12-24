<template>
    <div class="activity-container">
        <div v-for="(activity, index) in activities" :key="index" class="activity-item">
            <div class="activity-header">
                <p class="activity-date">{{ activity.date }}</p>
                <p class="activity-author">{{ activity.author }}</p>
                <p class="activity-group">{{ activity.group }}</p>
            </div>
            <div class="activity-body">
                <ul class="activity-details">
                    <li v-for="(detail, i) in activity.details" :key="i">{{ detail }}</li>
                </ul>
                <div v-if="activity.count" class="activity-count">
                    <button class="count-btn">Etkinlik Sayısı: {{ activity.count }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ActivityList",
    data() {
        return {
            activities: [
                {
                    date: "09.12.2024 08:22",
                    author: "Doç. Dr. SERKAN DERELİ",
                    group: "Devreler Topluluğu",
                    count: 5,
                    details: [
                        "2024-2025 Güz Dönemi - MYO 490 İŞLETMEDE MESLEKİ EĞİTİM - 1. Ara Sınav Not Girişleri Yayınlandı",
                        "2024-2025 Güz Dönemi - MYO 490 İŞLETMEDE MESLEKİ EĞİTİM - Normal Öğretim - B Şubesi 1. Ara Sınav not girişleri yayınlandı.",
                    ],
                },
                {
                    date: "09.12.2024 08:22",
                    author: "Doç. Dr. SERKAN DERELİ",
                    group: "Elektrik Topluluğu",
                    count: null,
                    details: [
                        "2024-2025 Güz Dönemi - MYO 490 İŞLETMEDE MESLEKİ EĞİTİM - 1. Ara Sınav Not Girişleri Yayınlandı",
                        "2024-2025 Güz Dönemi - MYO 490 İŞLETMEDE MESLEKİ EĞİTİM - Normal Öğretim - B Şubesi 1. Ara Sınav not girişleri yayınlandı.",
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.activity-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.activity-item {
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    background-color: #fff;
    transition: box-shadow 0.2s ease;
}

.activity-item:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.activity-header {
    margin-bottom: 10px;
}

.activity-date {
    font-size: 0.9rem;
    color: #6c757d;
}

.activity-author {
    font-weight: bold;
    font-size: 1rem;
}

.activity-group {
    font-size: 0.95rem;
    color: #17a2b8;
}

.activity-body {
    margin-top: 10px;
}

.activity-details {
    list-style: none;
    padding: 0;
    margin: 0;
}

.activity-details li {
    margin-bottom: 5px;
    color: #343a40;
}

.activity-count {
    margin-top: 10px;
    text-align: right;
}

.count-btn {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;
}

.count-btn:hover {
    background-color: #218838;
}
</style>