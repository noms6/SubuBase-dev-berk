<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link class="nav-link" @click="toggleVerticalMenuActive">
          <feather-icon icon="MenuIcon" size="21"/>
        </b-link>
      </li>
    </ul>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-nav-item-dropdown class="dropdown-user" right toggle-class="d-flex align-items-center dropdown-user-link">
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ username }}
            </p>
            <span class="user-status">
              <strong>{{ Array.isArray(roleNames) ? roleNames[0] : roleNames }}</strong>
            </span>
          </div>
          <b-avatar :src="picture" badge badge-variant="success" class="badge-minimal" size="40"
                    variant="light-primary">
            <feather-icon v-if="!username" icon="UserIcon" size="22"/>
          </b-avatar>
        </template>

        <b-dropdown-item link-class="d-flex align-items-center" @click="logout">
          <feather-icon class="mr-50" icon="LogOutIcon" size="16"/>
          <span>Çıkış Yap</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {BAvatar, BDropdownDivider, BDropdownItem, BLink, BNavbarNav, BNavItemDropdown, BNavItem, BImg} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import {mapGetters} from 'vuex'
import subuAxios from "@/libs/subu-axios";

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    BNavItem,
    BImg,
    // Navbar Components
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {
      },
    },
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      roleNames: 'subu/getRoleNames',
      username: 'subu/getUserName',
      picture: 'subu/getPicture',
    })
  },
  created() {

  },
  methods: {
    logout() {
      this.$store.getters['subu/deleteLocalStorageToken']()
      location.reload()
    }
  },
  watch: {

  }
}
</script>
