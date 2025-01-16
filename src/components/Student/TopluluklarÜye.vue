<template>
    <div class="a">
        <h1 id="TopluklarBaslik">Topluluklar</h1>

        <!-- Arama Alanı -->
        <div class="search-bar">
            <input v-model="searchQuery" type="text" placeholder="Topluluk arayın..." @input="filterTopluluklar"
                class="search-input" />
        </div>

        <div class="topluluklar" @click="ToplukGit">
            <div v-for="topluluk in filteredTopluluklar" :key="topluluk.isim" class="topluluk-karti">
                <div class="logo-wrapper">
                    <img :src="topluluk.logo" alt="Logo" class="topluluk-logo" v-if="topluluk.logo" />
                </div>
                <div class="topluluk-bilgi">
                    <h2 class="topluluk-isim">{{ topluluk.isim }}</h2>
                    <p class="topluluk-danisman">{{ topluluk.baskan }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import topluluklarData from "./topluluklar.json";

export default {
    data() {
        return {
            topluluklar: topluluklarData, // JSON verilerini içe aktarıyoruz
            searchQuery: "", // Arama sorgusu
            filteredTopluluklar: topluluklarData, // Başlangıçta tüm topluluklar
        };
    },
    methods: {
        filterTopluluklar() {
            const query = this.normalizeString(this.searchQuery.toLowerCase()); // Kullanıcıdan alınan sorguyu küçük harfe ve normalize edilmiş şekilde çevir
            this.filteredTopluluklar = this.topluluklar.filter((topluluk) => {
                return (
                    this.normalizeString(topluluk.isim.toLowerCase()).includes(query) ||
                    this.normalizeString(topluluk.baskan.toLowerCase()).includes(query)
                );
            });
        },
        ToplukGit() {
            this.$router.push("/Toplulugum");
        },

        // Türkçe karakterleri doğru şekilde küçük harfe dönüştüren normalize fonksiyonu
        normalizeString(str) {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        }


    },
};
</script>

<style scoped>
#TopluklarBaslik {
    text-align: center;
}

/* Arama çubuğu stili */
.search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.search-input {
    width: 300px;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 25px;
    border: 1px solid #ddd;
    background-color: #f0f0f0;
    transition: all 0.3s ease;
    outline: none;
}

.search-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
}

/* Topluluklar Konteyneri */
.topluluklar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
}

/* Topluluk Kartı */
.topluluk-karti {
    flex: 1 1 calc(33.333% - 30px);
    max-width: 350px;
    background: linear-gradient(145deg, #ffffff, #f3f3f3);
    border-radius: 20px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
}

.topluluk-karti:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
}

/* Logo Konteyneri */
.logo-wrapper {
    background: #ffffff;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ffffff;
}

.topluluk-logo {
    max-width: 100px;
    max-height: 100px;
}

/* Topluluk Bilgisi */
.topluluk-bilgi {
    padding: 20px;
    text-align: center;
}

.topluluk-isim {
    font-size: 1.4rem;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
    text-transform: capitalize;
}

.topluluk-danisman {
    font-size: 1rem;
    color: #6c757d;
    margin-top: 0;
    font-style: italic;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
    .topluluk-karti {
        flex: 1 1 100%;
    }

    .search-input {
        width: 80%;
    }
}

@media (max-width: 1200px) {
    h1 {
        font-size: 2.2rem;
    }
}
</style>
