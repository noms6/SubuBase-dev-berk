<template>
    <div>
        <b-table bordered striped hover :items="tableItems" :fields="tableFields">
            <template v-slot:cell(actions)="data">
                <b-button variant="success" class="mr-2" @click="approve(data.item)">Onayla</b-button>
                <b-button variant="danger" @click="reject(data.item)">Reddet</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    name: "BTableComponent",
    data() {
        return {
            tableFields: ['name', 'number', 'club', 'event', 'actions'],
            tableItems: [
                {
                    name: 'Ali Yılmaz',
                    number: '12345',
                    club: 'Yazılım Kulübü',
                    event: 'Vue.js Workshop'
                }
            ]
        };
    },
    methods: {
        approve(item) {
            alert(`${item.name} onaylandı.`);
        },
        reject(item) {
            alert(`${item.name} reddedildi.`);
        }
    }
};
</script>

<style scoped>
.b-table {
    margin-top: 20px;
}
</style>