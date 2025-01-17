<template>
    <div class="container">
        <div class="header">Taleplerim</div>

        <div class="controls">
            <div class="control-group">
                <label for="perPageSelect">Sayfa Başına</label>
                <b-form-select id="perPageSelect" v-model="perPage" size="sm" :options="pageOptions" />
            </div>

            <div class="control-group">
                <label for="sortBySelect">Sırala</label>
                <div class="inline-group">
                    <b-form-select id="sortBySelect" v-model="sortBy" :options="sortOptions">
                        <template v-slot:first>
                            <option value="">-- Seçim Yok --</option>
                        </template>
                    </b-form-select>
                    <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy">
                        <option :value="false">Artan</option>
                        <option :value="true">Azalan</option>
                    </b-form-select>
                </div>
            </div>

            <div class="control-group">
                <label for="filterInput">Filtrele</label>
                <div class="inline-group">
                    <b-form-input id="filterInput" v-model="filter" type="search" placeholder="Arama yapın" />
                    <b-button :disabled="!filter" @click="filter = ''">Temizle</b-button>
                </div>
            </div>
        </div>

        <div v-for="(notification, index) in filteredNotifications" :key="index" class="notification-item"
            @click="toggleDetails(index)">
            <div class="notification-header">
                <span class="title">{{ notification.title }}</span>
                <span :class="['status', notification.status]">{{ notification.statusText }}</span>
            </div>
            <div v-show="notification.showDetails" class="details">{{ notification.details }}</div>
        </div>

        <b-pagination v-model="currentPage" :total-rows="filteredNotifications.length" :per-page="perPage"
            align="center" size="sm" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            perPage: 5,
            pageOptions: [3, 5, 10],
            currentPage: 1,
            filter: null,
            filterOn: ["title", "status"],
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
                    status: "beklemede",
                    statusText: "Beklemede",
                    details: "Sebep: Onay bekleniyor.",
                    showDetails: false
                }
            ],
            sortBy: "",
            sortDesc: false,
        };
    },
    computed: {
        sortOptions() {
            return [
                { text: "Duruma Göre", value: "status" },
                { text: "Başlığa Göre", value: "title" },
            ];
        },
        filteredNotifications() {
            let notifications = this.notifications;

            if (this.filter) {
                notifications = notifications.filter(notification =>
                    notification.title.toLowerCase().includes(this.filter.toLowerCase()) ||
                    notification.statusText.toLowerCase().includes(this.filter.toLowerCase())
                );
            }

            if (this.sortBy) {
                notifications = notifications.sort((a, b) => {
                    const aValue = a[this.sortBy];
                    const bValue = b[this.sortBy];
                    return this.sortDesc
                        ? bValue.localeCompare(aValue)
                        : aValue.localeCompare(bValue);
                });
            }

            return notifications.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
        }
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
    padding: 20px;
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

.controls {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.control-group {
    padding: 10px;
    margin-bottom: 15px;
    flex: 1 1 calc(33.333% - 10px);
    display: flex;
    flex-direction: column;
}

label {
    font-weight: 600;
    margin-bottom: 5px;
    color: #343a40;
}

.inline-group {
    display: flex;
    gap: 10px;
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
}

.status {
    padding: 6px 12px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 12px;
    text-transform: capitalize;
}

.onay {
    background-color: #28a745;
    color: white;
}

.red {
    background-color: #dc3545;
    color: white;
}

.beklemede {
    background-color: #ffc107;
    color: white;
}

.details {
    margin-top: 10px;
    font-size: 1rem;
    color: #6c757d;
    line-height: 1.5;
}

.b-pagination {
    margin-top: 15px;
}
</style>
