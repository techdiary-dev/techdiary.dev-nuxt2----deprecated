<template>
    <client-only>
        <div class="grid grid-cols-2">
            <Container
                orientation="horizontal"
                @drop="handleDropSection($event)"
            >
                <Draggable v-for="section in sections" :key="section.id">
                    <div class="p-4 border">
                        <div class="flex items-center space-x-1">
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="w-4 h-4"
                                >
                                    <path
                                        d="M23.351,10.253c-.233-.263-.462-.513-.619-.67L20.487,7.3a1,1,0,0,0-1.426,1.4l2.251,2.29L21.32,11H13V2.745l2.233,2.194a1,1,0,0,0,1.4-1.426l-2.279-2.24c-.163-.163-.413-.391-.674-.623A2.575,2.575,0,0,0,12.028.006.28.28,0,0,0,12,0l-.011,0a2.584,2.584,0,0,0-1.736.647c-.263.233-.513.462-.67.619L7.3,3.513A1,1,0,1,0,8.7,4.939l2.29-2.251L11,2.68V11H2.68l.015-.015L4.939,8.7A1,1,0,1,0,3.513,7.3L1.274,9.577c-.163.163-.392.413-.624.675A2.581,2.581,0,0,0,0,11.989L0,12c0,.01.005.019.006.029A2.573,2.573,0,0,0,.65,13.682c.233.262.461.512.618.67l2.245,2.284a1,1,0,0,0,1.426-1.4L2.744,13H11v8.32l-.015-.014L8.7,19.062a1,1,0,1,0-1.4,1.425l2.278,2.239c.163.163.413.391.675.624a2.587,2.587,0,0,0,3.43,0c.262-.233.511-.46.669-.619l2.284-2.244a1,1,0,1,0-1.4-1.425L13,21.256V13h8.256l-2.2,2.233a1,1,0,1,0,1.426,1.4l2.239-2.279c.163-.163.391-.413.624-.675A2.589,2.589,0,0,0,23.351,10.253Z"
                                    />
                                </svg>
                            </button>
                            <h2 class="text-lg font-semibold">
                                {{ section.name }}
                            </h2>
                        </div>
                        <Container @drop="handleDropItem($event, section.id)">
                            <Draggable
                                v-for="item in section.children"
                                :key="item.id"
                            >
                                <p>{{ item.name }}</p>
                            </Draggable>
                        </Container>
                    </div>
                </Draggable>
            </Container>
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
                    name: "Series 1",
                    id: 12,
                    children: [
                        {
                            id: 1,
                            name: "Scene 1",
                        },
                        {
                            id: 2,
                            name: "Scene 2",
                        },
                        {
                            id: 3,
                            name: "Scene 3",
                        },
                        {
                            id: 4,
                            name: "Scene 4",
                        },
                        {
                            id: 5,
                            name: "Scene 5",
                        },
                    ],
                },
                {
                    name: "Series 2",
                    id: 23,
                    children: [
                        {
                            id: 6,
                            name: "Scene 6",
                        },
                        {
                            id: 7,
                            name: "Scene 7",
                        },
                        {
                            id: 8,
                            name: "Scene 8",
                        },
                        {
                            id: 9,
                            name: "Scene 9",
                        },
                        {
                            id: 10,
                            name: "Scene 10",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        handleDropSection(dropResult) {
            this.sections = applyDrag(this.sections, dropResult);
        },
        handleDropItem(dropResult, sectionId) {
            if (
                dropResult.removedIndex !== null ||
                dropResult.addedIndex !== null
            ) {
                const sections = [...this.sections];
                const column = sections.find(
                    (section) => section.id === sectionId
                );
                const columnIndex = sections.indexOf(column);
                const newColumn = Object.assign({}, column);
                newColumn.children = applyDrag(newColumn.children, dropResult);
                sections.splice(columnIndex, 1, newColumn);
                this.sections = sections;
            }
        },
    },
};
</script>
