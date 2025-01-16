<template>
  <div>
    <deneme/>
  </div>
</template>

<script>
import Etkinlik from '@/components/President/Etkinlik.vue';
import ToplulukBilgileri from '@/components/President/ToplulukBilgileri.vue';
import Notification from '@/components/President/Notification.vue';
import Talep from '@/components/President/Talep.vue';
import Charts from '@/components/Sks/Charts.vue';
import NotificationSks from '@/components/Sks/notificationSks.vue';
import Table1 from '@/components/table1.vue';
import TableCompanents from '@/components/Sks/TableCompanents.vue';
import SosyalMedya from '@/components/President/SosyalMedya.vue';
import topluluklar from '@/components/Sks/Topluluklar.vue';
import deneme from '@/components/deneme.vue';

export default {
  components: {
    Etkinlik,
    ToplulukBilgileri,
    Notification,
    Talep,
    Charts,
    NotificationSks,
    Table1,
    TableCompanents,
    SosyalMedya,
    topluluklar,
    deneme
  },

    };
</script>
