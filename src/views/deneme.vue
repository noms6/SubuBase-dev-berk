<template>
  <div>
  <Contact/>
  </div>
</template>

<script>
import Etkinlik from '@/components/President/Etkinlik.vue';
import ToplulukBilgileri from '@/components/President/ToplulukBilgileri.vue';
import Gerekli from '@/components/President/GerekiBelgeler.vue';
import Notification from '@/components/President/Notification.vue';
import Talep from '@/components/President/Talep.vue';
import Contact from '@/components/Contact.vue';
import Charts from '@/components/Sks/Charts.vue';
import NotificationSks from '@/components/Sks/notificationSks.vue';
import EtkinlikSks from '@/components/Sks/etkinlikSks.vue';
import Table1 from '@/components/table1.vue';
import TableCompanents from '@/components/Sks/TableCompanents.vue';
import SosyalMedya from '@/components/President/SosyalMedya.vue';

export default {
  components: {
    Etkinlik,
    ToplulukBilgileri,
    Gerekli,
    Notification,
    Talep,
    Contact,
    Charts,
    NotificationSks,
    EtkinlikSks,
    Table1,
    TableCompanents,
    SosyalMedya,
  },

    };
</script>
