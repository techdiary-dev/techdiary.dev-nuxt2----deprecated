<template>
    <div>
        <contest-banner />
        <Navbar />
        <div class="layout wrapper">
            <aside class="layout__aside layout__aside--left">
                <div class="layout__aside__inner">
                    <slot name="left-sidebar-top" />
                    <sidebar-left />
                    <slot name="left-sidebar-bottom" />
                </div>
            </aside>

            <main class="layout__main app-border-color">
                <slot />
            </main>

            <aside class="overflow-y-auto layout__aside layout__aside--right">
                <div class="layout__aside__inner">
                    <slot name="right-sidebar-top" />
                    <sidebar-right />
                    <slot name="right-sidebar-bottom" />
                </div>
            </aside>
        </div>
        <SlideOverSidebar />
    </div>
</template>

<style scoped lang="scss">
.layout {
    @apply grid grid-cols-12 overflow-hidden;
    height: calc(100vh - theme("spacing.14"));

    &__main {
        @apply px-3 pt-3 md:pt-6 overflow-y-auto;
        @apply col-span-12 md:col-span-9 lg:col-span-6;
        @apply md:border-l lg:border-r;
    }

    &__aside {
        @apply overflow-y-hidden px-6 max-h-screen;

        &__inner {
            @apply h-full overflow-y-auto;
        }

        &--left {
            @apply hidden md:block;
            @apply col-span-3 pt-6 lg:col-span-2;
        }

        &--right {
            @apply hidden lg:block;
            @apply col-span-3 pt-6 lg:col-span-3;
        }
    }
}
</style>
