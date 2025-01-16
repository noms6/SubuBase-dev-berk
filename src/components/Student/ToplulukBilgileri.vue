<template>
    <div class="community-info">
        <b-card no-body class="modern-card h-100">
            <b-card-header class="bg-gradient-info">
                <h3 class="mb-0 text-white d-flex align-items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    {{ community.name }}
                </h3>
            </b-card-header>
            <b-card-body class="px-4">
                <b-list-group flush>
                    <b-list-group-item class="d-flex align-items-center">
                        <i class="fas fa-user-tie mr-3 text-info"></i>
                        <div>
                            <small class="text-muted d-block">Danışman</small>
                            <strong>{{ community.advisor }}</strong>
                        </div>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex align-items-center">
                        <i class="fas fa-crown mr-3 text-warning"></i>
                        <div>
                            <small class="text-muted d-block">Başkan</small>
                            <strong>{{ community.president }}</strong>
                        </div>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex align-items-center">
                        <i class="fas fa-info mr-3 text-primary"></i>
                        <div>
                            <small class="text-muted d-block">Açıklama</small>
                            <strong>{{ community.description }}</strong>
                        </div>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex align-items-center">
                        <i class="fas fa-users mr-3 text-success"></i>
                        <div>
                            <small class="text-muted d-block">Üye Sayısı</small>
                            <strong>{{ community.memberCount }}</strong>
                        </div>
                    </b-list-group-item>
                </b-list-group>

                <h4 class="mt-4 mb-3 d-flex align-items-center">
                    <i class="fas fa-calendar-check mr-2 text-info"></i>
                    Yapılan Etkinlikler
                </h4>
                <b-list-group>
                    <b-list-group-item v-for="(event, index) in community.events" :key="index"
                        class="d-flex align-items-center event-item">
                        <i class="fas fa-star mr-3 text-warning"></i>
                        {{ event }}
                    </b-list-group-item>
                </b-list-group>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "ToplulukBilgileri",
    data() {
        return {
            community: {
                name: "Topluluk Adı",
                advisor: "Prof. Dr. Ahmet Yılmaz",
                president: "Mehmet Kaya",
                description: "Teknoloji ve inovasyon odaklı öğrenci topluluğu",
                memberCount: 120,
                events: [
                    "Yapay Zeka Konferansı",
                    "Yazılım Geliştirme Atölyesi",
                    "Kariyer Günleri"
                ],
            },
        };
    },
};
</script>

<style scoped>
.community-info {
    height: 100%;
    padding: 1rem;
}

.bg-gradient-info {
    background: linear-gradient(135deg, #00F5A0 0%, #00D9F5 100%);
    border-radius: 15px 15px 0 0;
    padding: 1.5rem;
}

.modern-card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.modern-card:hover {
    transform: translateY(-5px);
}

.event-item {
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
}

.event-item:hover {
    border-left: 3px solid #00D9F5;
    background-color: rgba(0, 217, 245, 0.05);
}

.text-info {
    color: #00D9F5 !important;
}

.text-warning {
    color: #FFB400 !important;
}

.text-success {
    color: #28c76f !important;
}

@media (max-width: 768px) {
    .community-info {
        padding: 0.5rem;
    }
}
</style>