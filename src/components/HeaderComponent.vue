<template>
  <div class="navbar">
    <div class="nav-links">
      <a href="#topluluk-olustur">Topluluğum</a>
      <a href="#talepler">Talepler</a>
      <a href="#gerekli-belgeler">Gerekli Belgeler</a>
      <a href="#iletisim">İletişim</a>
    </div>
    <div class="notification">
      <span
        class="icon"
        :data-count="notifications.length"
        @click="toggleDropdown"
      >🔔</span>
      <div
        v-show="dropdownVisible"
        id="notificationDropdown"
        class="dropdown"
      >
        <div
          v-for="(notification, index) in notifications"
          :key="index"
          class="item"
        >
          <a :href="notification.link">
            <span class="title">{{ notification.title }}</span>
            <span
              class="status"
              :class="notification.status === 'onay' ? 'onay' : 'red'"
            >
              {{ notification.status === 'onay' ? 'Onaylandı' : 'Reddedildi' }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownVisible: false,
      notifications: [
        { title: 'Talep Konusu 1', status: 'onay', link: '#talep1' },
        { title: 'Talep Konusu 2', status: 'red', link: '#talep2' },
        { title: 'Talep Konusu 3', status: 'onay', link: '#talep3' },
      ],
    }
  },
  mounted() {
    window.addEventListener('click', this.closeDropdown)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeDropdown)
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    closeDropdown(event) {
      const notificationIcon = this.$el.querySelector('.notification .icon')
      const dropdown = this.$el.querySelector('#notificationDropdown')

      if (
        !dropdown.contains(event.target)
        && !notificationIcon.contains(event.target)
      ) {
        this.dropdownVisible = false
      }
    },
  },
}
</script>

<style>
/* Navbar Stili */
.navbar {
  background: linear-gradient(90deg, #2a5376, #3ba99c);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  color: white;
  font-family: Arial, sans-serif;
}

.nav-links {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.nav-links a {
  color: white;
  text-align: center;
  padding: 12px 18px;
  font-size: 18px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s, transform 0.2s;
}

.nav-links a:hover {
  background-color: #4caf50;
  color: white;
  transform: scale(1.1);
  border-radius: 5px;
}

/* Bildirimler */
.notification {
  position: relative;
  margin-left: 20px;
}

.notification .icon {
  font-size: 28px;
  cursor: pointer;
  position: relative;
}

.notification .icon::after {
  content: attr(data-count);
  position: absolute;
  top: -10px;
  right: -10px;
  background: #a82222;
  color: white;
  font-size: 14px;
  padding: 3px 8px;
  border-radius: 50%;
  min-width: 22px;
  text-align: center;
}

.notification .dropdown {
  position: absolute;
  right: 0;
  top: 50px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow-y: auto;
  max-height: 300px;
  width: 350px;
  z-index: 10;
  animation: fadeIn 0.3s ease-in-out;
}

.notification .dropdown .item {
  padding: 18px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.notification .dropdown .item:hover {
  background-color: #e0f7fa;
}

.notification .dropdown .item:last-child {
  border-bottom: none;
}

.notification .dropdown .item .title {
  font-weight: bold;
  color: #333;
  font-size: 18px;
}

.notification .dropdown .status {
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 5px;
  font-weight: bold;
}

.notification .dropdown .status.onay {
  background-color: #d4edda;
  color: #155724;
}

.notification .dropdown .status.red {
  background-color: #f8d7da;
  color: #721c24;
}

/* Responsive düzenleme */
@media screen and (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    justify-content: flex-start;
  }

  .nav-links a {
    font-size: 16px;
    padding: 10px 14px;
  }

  .notification {
    align-self: flex-end;
  }

  .notification .dropdown {
    width: 100%;
    left: 0;
    right: auto;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
