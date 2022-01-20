<template>
    <client-only>
        <div class="grid grid-cols-2">
            <Container
                orientation="vertical"
                @drop="handleDropSection($event)"
                drag-handle-selector=".move-handler"
            >
                <Draggable v-for="section in sections" :key="section.id">
                    <div class="p-2 mb-4 border border-dashed">
                        <div class="flex pb-2 space-x-1">
                            <button class="move-handler">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                            <input
                                type="text"
                                v-model="section.content"
                                class="p-0 m-0 font-semibold border-none focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div v-if="section.article">
                            <p>Article: {{ section.article.content }}</p>
                        </div>
                        <div
                            class="p-2 border border-dashed"
                            v-if="section.articles"
                        >
                            <Container drag-handle-selector=".move-handler">
                                <Draggable
                                    v-for="article in section.articles"
                                    :key="article.id"
                                >
                                    <article class="mb-6">
                                        <div>
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <button class="move-handler">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-5 h-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                <p>{{ article.content }}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Draggable>
                            </Container>
                        </div>
                    </div>
                </Draggable>
            </Container>
            <pre class="p-2 border-2 border-dashed rounded-md">
                {{ sections }}
            </pre>
        </div>
    </client-only>
</template>
<script>
import { Container, Draggable } from "vue-smooth-dnd";
export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};
export default {
    layout: "dashboard",
    components: {
        Container,
        Draggable,
    },
    data() {
        return {
            sections: [
                {
                    id: "item-1",
                    content: "পরিচিতি",
                    article: {
                        id: "article-1",
                        content: "পরিচিতি",
                        url: "/articles/1",
                    },
                },
                {
                    id: "item-2",
                    content: "Item 2",
                    articles: [
                        // 5 articles
                        {
                            id: "article-2",
                            content: "পরিচিতি 2",
                            url: "/articles/2",
                        },
                        {
                            id: "article-3",
                            content: "ব্যাসিক কনসেপ্ট",
                            url: "/articles/3",
                        },
                        {
                            id: "article-4",
                            content: "পরিচিতি 4",
                            url: "/articles/4",
                        },
                        {
                            id: "article-5",
                            content: "পরিচিতি 5",
                            url: "/articles/5",
                        },
                        {
                            id: "article-6",
                            content: "পরিচিতি 6",
                            url: "/articles/6",
                        },
                    ],
                },
                {
                    id: "item-3",
                    content: "ইনস্টলেশন",
                    article: {
                        id: "article-7",
                        content: "পরিচিতি 7",
                        url: "/articles/7",
                    },
                },
            ],
        };
    },
    methods: {
        handleDropSection(dropResult) {
            this.sections = applyDrag(this.sections, dropResult);
        },
    },
};
</script>
