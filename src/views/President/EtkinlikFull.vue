<template>
    <div class="container">
        <div class="header">Etkinlikler</div>

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

        <b-table striped hover responsive :per-page="perPage" :current-page="currentPage" :items="events"
            :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
            :filter-included-fields="filterOn" @row-clicked="navigateToEventPage">
            <template #cell(date)="data">
                <span>{{ formatDate(data.item.date) }}</span>
            </template>
        </b-table>

        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="center" size="sm" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            perPage: 5,
            pageOptions: [3, 5, 10],
            totalRows: 0,
            currentPage: 1,
            sortBy: "",
            sortDesc: false,
            filter: null,
            filterOn: ["title", "location"],
            fields: [
                { key: "title", label: "Etkinlik Adı", sortable: true },
                { key: "date", label: "Tarih", sortable: true },
                { key: "location", label: "Yer" },
            ],
            events: [
                { id: 1, title: "Etkinlik 1", date: "2025-01-12", location: "Konferans Salonu" },
                { id: 2, title: "Etkinlik 2", date: "2025-01-15", location: "Toplantı Odası" },
                { id: 3, title: "Etkinlik 3", date: "2025-01-20", location: "Açık Alan" },
            ],
        };
    },
    mounted() {
        this.totalRows = this.events.length;
    },
    methods: {
        navigateToEventPage(event) {
            this.$router.push(`/etkinlik`);
        },
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("tr-TR", options);
        },
    },
    computed: {
        sortOptions() {
            return this.fields.filter((f) => f.sortable).map((f) => ({
                text: f.label,
                value: f.key,
            }));
        },
    },
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

.b-table {
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.b-pagination {
    margin-top: 15px;
}

.b-table tr:hover {
    background-color: #f1f3f5;
}
</style>
