<template>
    <div class="nasıl-topluluk-oluşturulur">
        <header class="header">
            <h1>Nasıl Topluluk Oluşturulur?</h1>
        </header>
        <div class="content-container">
            <p>
                Sakarya Uygulamalı Bilimler Üniversitesi öğrencileri tarafından bilim, kültür, spor ve sanat alanlarında
                faaliyet göstermek üzere topluluklar kurulabilir. En az bir akademisyenin başkanlığında iki öğrencinin
                girişimde bulunması gerekmektedir.
            </p>
            <p>
                <strong>Fakülte/Yüksek Okula Bağlı Topluluklar:</strong> Bölüme bağlı olacak olan topluluklar
                Fakülte/Yüksek Okulundan Akademik Danışman belirleyip başvuru evraklarını hazırladıktan sonra kurulma
                işlemini topluluğun bağlı olduğu Fakülte/Yüksek Okula yazı işlerine teslim eder. Fakülte/Yüksek Okul
                Spor, Kültür ve Sanat Kurullarında görüşülerek uygun görüldüğü takdirde Sağlık, Kültür ve Spor Dairesi
                Başkanlığı’na sevk edilir. Tüzük taslağı SKS Mevzuat bölümünde sunulmuştur.
            </p>
            <p>
                <strong>Spor Kültür ve Sanat Birliğine Bağlı Topluluklar:</strong> Topluluk kurulma işlemlerini başvuru
                evraklarını hazırladıktan sonra Genel Evrak Şube Müdürlüğü aracılığıyla Sağlık, Kültür ve Spor Dairesi
                Başkanlığı’na ulaştıracaklardır. Tüzük taslağı SKS Mevzuat bölümünde sunulmuştur.
            </p>
            <p>
                SKS Yönetim Kurulu tarafından da uygun görüldüğü takdirde SKS Birlik Başkanlığı Yönetim Kurulu Kararı
                ile topluluk kurulur ve kurulduğuna dair bir üst yazı ile ilgili birime bilgi verilir.
            </p>
            <p>
                Aynı isim, benzer faaliyet alanı ve amaç için kurulacak topluluklarla ilgili olarak talepte bulunulurken
                dikkat edilmesi gerekmektedir.
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nasıl-topluluk-oluşturulur {
    background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
    height: 72vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
    text-align: center;
    margin-bottom: 25px;
}

.header h1 {
    font-size: 2.8rem;
    color: #2c3e50;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.content-container {
    height: auto;
    width: 100%;
    text-align: justify;
    line-height: 1.6;
    font-size: 1.2rem;
    color: #34495e;
    overflow-y: auto;
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

strong {
    color: #16a085;
    font-weight: 700;
}

p {
    margin-bottom: 20px;
}
</style>
