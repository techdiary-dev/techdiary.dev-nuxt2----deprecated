<template>
    <div>
        <Navbar />

        <div class="layout wrapper">
            <aside class="layout__aside layout__aside--left">
                <div class="overflow-y-auto">
                    <slot name="left-sidebar-top" />
                    <sidebar-left />
                    <slot name="left-sidebar-bottom" />
                </div>
            </aside>

            <main class="layout__main app-border-color">
                <slot />
            </main>

            <aside class="overflow-y-auto layout__aside layout__aside--right">
                <div class="relative min-h-full">
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
    @apply grid grid-cols-12;

    &__aside {
        @apply overflow-y-hidden;
        @apply sticky top-[50px];
        @apply self-start;
        @apply px-6;

        &--left {
            @apply hidden md:block;
            @apply col-span-3 pt-6 lg:col-span-2;
        }

        &--right {
            @apply hidden lg:block;
            @apply col-span-3 pt-6 lg:col-span-3;
        }
    }

    &__main {
        @apply px-3 pt-3 md:pt-6;
        @apply col-span-12 md:col-span-9 lg:col-span-6;
        @apply md:border-l lg:border-r;
    }
}
</style>
