<script setup>
import Navbar from "@/ui/element/Navbar/Navbar.vue"
import SideNav from "@/ui/element/SideNav/SideNav.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Layout, { Content, Header, Side } from "@/ui/layout/Layout"

// 定義 props
const props = defineProps({
  isGridSystem: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
})

const dataSource = [
  {
    label: "Home",
    prefix: "SvgHome",
    path: "/Home",
    order: 1,
  },
  {
    label: "User",
    prefix: "SvgUser",
    path: "/users",
    order: 2,
    children: [
      {
        label: "Profile",
        path: "/user/profile",
        order: 1,
      },
      {
        label: "Account",
        path: "/user/account",
        order: 2,
      },
    ],
  },
  {
    label: "Chart",
    prefix: "SvgBarChart",
    path: "/chart",
    order: 3,
    children: [
      {
        label: "Profile",
        path: "/chart/profile",
        order: 1,
      },
      {
        label: "Account",
        path: "/chart/account",
        order: 2,
      },
      {
        label: "Account",
        path: "/chart/account",
        order: 3,
      },
      {
        label: "Account",
        path: "/chart/account",
        order: 4,
      },
    ],
  },
  {
    label: "Database",
    prefix: "SvgDatabase",
    path: "/database",
    order: 4,
  },
  {
    label: "Favorite",
    prefix: "SvgFavorite",
    path: "/favorite",
    order: 5,
  },
  {
    label: "Calendar",
    prefix: "SvgCalendar",
    path: "/calendar",
    order: 6,
  },
  {
    label: "Notification",
    prefix: "SvgNotification",
    path: "/notification",
    order: 7,
  },
  {
    label: "Language",
    prefix: "SvgLanguage",
    path: "/language",
    order: 8,
  },
]
</script>

<template>
  <template v-if="props.isGridSystem">
    <Layout :class="{ [ props.className ]: !!props.className }">
      <!-- Navbar -->
      <Grid fluid>
        <Row :has-gap="false">
          <Column sm="12">
            <Header>
              <Navbar
                :data-source="[
                  {
                    href: '#solutions',
                    label: 'Solutions',
                    order: 2,
                  },
                  {
                    href: '#products',
                    label: 'Products',
                    order: 1,
                  },
                  {
                    href: '#technologies',
                    label: 'Technologies',
                    order: 4,
                  },
                  {
                    href: '#about',
                    label: 'About',
                    order: 3,
                  },
                ]"
                logo-src="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
              />
            </Header>
          </Column>
        </Row>
      </Grid>

      <!-- 下方區塊 -->
      <Layout>
        <Grid fluid>
          <Row :has-gap="false">
            <!-- Side Nav -->
            <Column sm="3">
              <Side>
                <SideNav
                  theme-color="blue"
                  mobile-logo-src="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
                  desktop-logo-src="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg"
                  logo-link="https://www.auo.com"
                  :has-logo="false"
                  :has-r-w-d="false"
                  user-name="John Doe"
                  caption="Software Engineer"
                  user-status="online"
                  :has-search="true"
                  :data-source="dataSource"
                  style="height: 100vh;"
                />
              </Side>
            </Column>
            <!-- Content -->
            <Column sm="9">
              <Content>
                <div
                  style="
                                    align-items: center;
                                    background-color: #0958d9;
                                    color: #fff;
                                    display: flex;
                                    height: 100vh;
                                    justify-content: center;
                                    width: 100%;"
                >
                  content
                </div>
              </Content>
            </Column>
          </Row>
        </Grid>
      </Layout>
    </Layout>
  </template>
  <template v-else>
    <Layout :class="{ [ props.className ]: !!props.className }">
      <!-- Navbar -->
      <Header>
        <Navbar
          :data-source="[
            {
              href: '#solutions',
              label: 'Solutions',
              order: 2,
            },
            {
              href: '#products',
              label: 'Products',
              order: 1,
            },
            {
              href: '#technologies',
              label: 'Technologies',
              order: 4,
            },
            {
              href: '#about',
              label: 'About',
              order: 3,
            },
          ]"
          logo-src="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
        />
      </Header>

      <!-- 下方區塊 -->
      <Layout>
        <!-- Side Nav -->
        <Side>
          <SideNav
            theme-color="blue"
            mobile-logo-src="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
            desktop-logo-src="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg"
            logo-link="https://www.auo.com"
            :has-logo="false"
            :has-r-w-d="false"
            user-name="John Doe"
            caption="Software Engineer"
            user-status="online"
            :has-search="true"
            :data-source="dataSource"
            style="height: 100vh;"
          />
        </Side>

        <!-- Content -->
        <Content>
          <div
            style="
                        align-items: center;
                        background-color: #0958d9;
                        color: #fff;
                        display: flex;
                        height: 100vh;
                        justify-content: center;
                        width: 100%;"
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  </template>
</template>

<style scoped lang="scss">

</style>
