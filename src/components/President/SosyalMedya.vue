<template>
    <div class="social-links">
        <a href="https://www.instagram.com" target="_blank" class="social-link social-link1">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="social-link social-link2">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.discord.com" target="_blank" class="social-link social-link3">
            <i class="fab fa-discord"></i>
        </a>
        <a href="https://www.whatsapp.com" target="_blank" class="social-link social-link4">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialLinks",
};
</script>

<style scoped>
.social-links {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin:0;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
}

.social-link1 {
    background-color: #e4405f;
    /* Instagram */
}

.social-link2 {
    background-color: #1da1f2;
    /* Twitter */
}

.social-link3 {
    background-color: #5865f2;
    /* Discord */
}

.social-link4 {
    background-color: #25d366;
    /* WhatsApp */
}

.social-link:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>