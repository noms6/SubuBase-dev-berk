<template>
    <div>
        <!-- Gelen Talepler Tablosu -->
        <h3>Gelen Talepler</h3>
        <b-table bordered striped hover :items="incomingRequests" :fields="tableFields">
            <template v-slot:cell(actions)="data">
                <b-button variant="success" class="mr-2" @click="approveRequest(data.item)">Onayla</b-button>
                <b-button variant="danger" @click="rejectRequest(data.item)">Reddet</b-button>
            </template>
        </b-table>

        <!-- Onaylanan Talepler Tablosu -->
        <h3 class="mt-4">Onaylanan Talepler</h3>
        <b-table bordered striped hover :items="approvedRequests" :fields="approvedTableFields">
            <template v-slot:cell(actions)="data">
                <b-button variant="danger" @click="removeRequest(data.item)">Çıkar</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    name: "RequestManager",
    data() {
        return {
            // Alanlar
            tableFields: ["name", "number", "club", "event", "actions"],
            approvedTableFields: ["name", "number", "club", "event", "actions"],

            // Gelen talepler
            incomingRequests: [
                { name: "Ali Yılmaz", number: "12345", club: "Yazılım Kulübü", event: "Vue.js Workshop" },
                { name: "Ayşe Demir", number: "67890", club: "Robotik Kulübü", event: "Robotik Yarışması" },
            ],

            // Onaylanan talepler
            approvedRequests: [],
        };
    },
    methods: {
        // Talep onayla
        approveRequest(item) {
            this.approvedRequests.push(item); // Onaylanan talepler listesine ekle
            this.incomingRequests = this.incomingRequests.filter(req => req !== item); // Gelen taleplerden çıkar
        },
        // Talep reddet
        rejectRequest(item) {
            this.incomingRequests = this.incomingRequests.filter(req => req !== item); // Gelen taleplerden çıkar
            alert(`${item.name} talebi reddedildi.`);
        },
        // Onaylı talepten çıkar
        removeRequest(item) {
            this.approvedRequests = this.approvedRequests.filter(req => req !== item); // Onaylanan taleplerden çıkar
        },
    },
};
</script>

<style scoped>
h3 {
    margin-top: 20px;
}

.b-table {
    margin-top: 10px;
}
</style>