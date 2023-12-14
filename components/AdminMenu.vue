<!-- Please remove this file from your project -->
<template>
  <div
    class="sidebar bg-[#0A7194] text-white flex h-full pr-12 pl-6 py-8 flex-col items-between justify-between"
  >
    <div class="pb-12 flex justify-center">
      <img src="../static/img/logo.png" alt="Logo" />
    </div>
    <!-- <svg style="display: none" width="10" height="10">
      <symbol fill="none" id="vector-1" viewBox="0 0 24 24">
        <path
          d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="vector-2" viewBox="0 0 24 24">
        <path
          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
          stroke="#A2F1FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="vector-3" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_566_4106)">
          <path
            d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_566_4106">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="vector-4" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_566_4115)">
          <path
            d="M3.00002 8L9.00303 2H19.998C20.55 2 21 2.455 21 2.992V21.008C20.9998 21.2712 20.895 21.5235 20.7088 21.7095C20.5226 21.8955 20.2702 22 20.007 22H3.99302C3.8617 21.9991 3.73185 21.9723 3.61087 21.9212C3.48989 21.8701 3.38017 21.7957 3.28796 21.7022C3.19575 21.6087 3.12286 21.4979 3.07346 21.3762C3.02406 21.2545 2.9991 21.1243 3.00002 20.993V8ZM10 4V9H5.00002V20H19V4H10Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_566_4115">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="vector-5" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_566_4124)">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.622 8.415L15.501 11.667C15.5559 11.7035 15.6009 11.753 15.632 11.8111C15.6631 11.8692 15.6794 11.9341 15.6794 12C15.6794 12.0659 15.6631 12.1308 15.632 12.1889C15.6009 12.247 15.5559 12.2965 15.501 12.333L10.621 15.585C10.5608 15.6249 10.491 15.6477 10.4189 15.6512C10.3468 15.6546 10.2751 15.6384 10.2114 15.6043C10.1477 15.5703 10.0945 15.5197 10.0573 15.4578C10.02 15.396 10.0003 15.3252 10 15.253V8.747C10.0001 8.67465 10.0199 8.60369 10.0572 8.54168C10.0944 8.47967 10.1478 8.42893 10.2116 8.39486C10.2755 8.36079 10.3473 8.34467 10.4196 8.34822C10.4919 8.35177 10.5618 8.37485 10.622 8.415Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_566_4124">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="vector-6" viewBox="0 0 24 24">
        <g clip-path="url(#clip0_566_4131)">
          <path
            d="M5 11H13V13H5V16L0 12L5 8V11ZM4 18H6.708C7.86269 19.0183 9.28669 19.6819 10.8091 19.9109C12.3316 20.14 13.8878 19.9249 15.291 19.2915C16.6942 18.6581 17.8849 17.6332 18.7201 16.3398C19.5553 15.0465 19.9995 13.5396 19.9995 12C19.9995 10.4604 19.5553 8.95354 18.7201 7.66019C17.8849 6.36683 16.6942 5.34194 15.291 4.7085C13.8878 4.07506 12.3316 3.85998 10.8091 4.08906C9.28669 4.31815 7.86269 4.98167 6.708 6H4C4.93066 4.75718 6.13833 3.74851 7.52707 3.05414C8.91581 2.35978 10.4473 1.99884 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.4473 22.0012 8.91581 21.6402 7.52707 20.9459C6.13833 20.2515 4.93066 19.2428 4 18V18Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_566_4131">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </symbol>
    </svg> -->
    <div class="h-full">
      <div class="sidebar_navigation">
        <nav>
          <ul>
            <li class="pb-8 flex gap-5" v-for="(nav, index) in navigation">
              <nuxt-link class="flex gap-x-4" :to="nav.url">
                <!-- <svg>
                  <use :xlink:href="nav.icon"></use>
                </svg> -->
                <img :src="`/img/vector${index + 1}.svg`" alt="Icon" />
                <span class="text-lg font-semibold whitespace-nowrap">{{
                  nav.title
                }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="sidebar_exit">
      <div>
        <div
          class="flex cursor-pointer text-lg font-semibold"
          @click="onLogout"
        >
          <img :src="logout.icon" alt="icon" class="pr-4" /><span>{{
            logout.title
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtSidebar',
  data() {
    return {
      navigation: [
        {
          title: 'Главная',
          url: '/admin/users',
          icon: '#vector-1',
        },
        {
          title: 'Пользователи',
          url: '/admin/help',
          icon: '#vector-2',
        },
        {
          title: 'Организации',
          url: '/admin/employees',
          icon: '#vector-3',
        },
        {
          title: 'Скрининг',
          url: '/admin/articles/',
          icon: '#vector-4',
        },
        {
          title: 'Клиенты',
          url: '/admin/videos',
          icon: '#vector-5',
        },
        {
          title: 'Купоны',
          url: '/admin/videos',
          icon: '#vector-6',
        },
        {
          title: 'Отчеты',
          url: '/admin/videos',
          icon: '#vector-6',
        },
        {
          title: 'Логирование',
          url: '/admin/videos',
          icon: '#vector-7',
        },
        {
          title: 'Справочники',
          url: '/admin/videos',
          icon: '#vector-8',
        },
        {
          title: 'Настройки',
          url: '/admin/videos',
          icon: '#vector-9',
        },
      ],
      logout: {
        title: 'Выход',
        url: '/',
        icon: '/img/vector7.svg',
      },
    };
  },
  methods: {
    async onLogout() {
      await this.$auth.logout();
    },
  },
};
</script>
<style>
svg {
  fill: #b3b9c9 !important;
  width: 24px !important;
  height: 28px !important;
}

.active a svg {
  fill: #727abe !important;
}

a.nuxt-link-active {
  color: #727abe;
}

a.nuxt-link-active svg {
  fill: #727abe !important;
}

a:hover {
  /* background: #125B78; */
}

a:hover svg {
  fill: #727abe !important;
}
symbol path {
  stroke: currentColor;
}
</style>
