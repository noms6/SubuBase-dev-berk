<template>
    <div>
        <!-- Arama Çubuğu -->
        <div class="search-bar">
            <input type="text" v-model="searchQuery" placeholder="Toplulukları ara..." @input="filterTopluluklar" />
        </div>

        <!-- Filtrelenmiş Topluluklar -->
        <div class="topluluk-listesi">
            <div v-for="topluluk in filteredTopluluklar" :key="topluluk.id" class="topluluk-card">
                <p>{{ topluluk.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Topluluklar from "@/components/Sks/Topluluklar.vue";

export default {
    components: {
        Topluluklar,
    },
    data() {
        return {
            searchQuery: "",
            topluluklar: [
                { id: 1, name: "Vue.js Community" },
                { id: 2, name: "React Developers" },
                { id: 3, name: "Node.js Users" },
                { id: 4, name: "PHP Programmers" },
                { id: 5, name: "CSS Enthusiasts" },
            ],
            filteredTopluluklar: [],
        };
    },
    methods: {
        // Toplulukları arama ve filtreleme fonksiyonu
        filterTopluluklar() {
            const query = this.searchQuery.toLowerCase();
            this.filteredTopluluklar = this.topluluklar.filter((topluluk) =>
                topluluk.name.toLowerCase().includes(query)
            );
        },
    },
    created() {
        // İlk yüklemede tüm toplulukları göster
        this.filteredTopluluklar = this.topluluklar;
    },
};
</script>

<style scoped>
/* Arama çubuğu stili */
.search-bar {
    margin: 20px;
    text-align: center;
}

.search-bar input {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

/* Topluluklar kartı stili */
.topluluk-listesi {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.topluluk-card {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    width: 80%;
    max-width: 400px;
    text-align: center;
}
</style>
