<template>
    <div>
        <div class="container">
            <div class="b">
                <etkinlik-sks />
            </div>
        </div>
        <div  class="full-width">
            <topluluklar  />
        </div>
    </div>
</template>

<script>

import EtkinlikSks from "@/components/Student/Etkinlik.vue";
import Topluluklar from "@/components/Student/Topluluklar.vue";

export default {
    components: {
        EtkinlikSks,
        Topluluklar,
    },
};
</script>

<style scoped>
/* Container düzeni */
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px;
}

/* .a ve .b öğelerinin eşit genişlikte olması */
.a,
.b {
    flex: 1;
    /* Her iki öğeyi de aynı genişlikte yapar */
}


/* Topluluklar kartının tam genişlikte olmasını sağlama */
.full-width {
    width: 100%;
}

/* Mobil uyumlu tasarım */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        /* Küçük ekranlarda öğeleri dikey sıralar */
    }

    .a,
    .b {
        width: 100%;
        /* Küçük ekranlarda öğeler tam genişlikte olacak */
    }
}
</style>
