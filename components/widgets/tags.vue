<template>
  <div>
    <h3 class="text-base font-bold text-gray-600">নির্বাচিত ট্যাগ সমূহ</h3>
    <div class="mt-2 tags">
      <div
        class="tag"
        v-for="tag in limitedTags"
        :key="tag.label"
        :title="tag.label"
      >
        <nuxt-link
          :to="{ name: 'tags-name', params: { name: tag.label } }"
          class="tag__link"
        >
          <img class="tag__icon" :src="tag.icon" :alt="tag.label" />
          <span class="tag__label"># {{ tag.label }}</span>
        </nuxt-link>
      </div>

      <button
        v-if="length == 10"
        @click="more"
        class=" self-start text-gray-500 text-sm hover:text-gray-600"
      >
        More...
      </button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    limitedTags() {
      return this.tags.slice(0, this.length);
    }
  },
  methods: {
    more() {
      this.length = this.tags.length;
    }
  },
  data: () => ({
    length: 10,
    tags: [
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782237/static-assets/tag-icons/nbws9ynczmavj86ontfz.svg",
        label: "nodejs"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782240/static-assets/tag-icons/kvyqqabeipmca7utxf8e.svg",
        label: "ts"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782237/static-assets/tag-icons/na8zbg5d1tuxt5yp6kay.svg",
        label: "js"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782235/static-assets/tag-icons/tritkwhlognysckvztmw.svg",
        label: "java"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782237/static-assets/tag-icons/w9zqspigpdgdmglbjo1g.svg",
        label: "python"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782233/static-assets/tag-icons/zydwlue3nnnbeyyl8pum.svg",
        label: "dart"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782235/static-assets/tag-icons/qcbazadpuxskoaacu6mn.svg",
        label: "go"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782237/static-assets/tag-icons/akx8gxzfgqdyvcffpadi.svg",
        label: "php"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782239/static-assets/tag-icons/uruwktd4r0g7chwf7f3g.svg",
        label: "ruby"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782235/static-assets/tag-icons/ivz6wh9hmtynuug99gcl.svg",
        label: "html"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782233/static-assets/tag-icons/qap8jcvbl5dvjbktnnxo.svg",
        label: "css"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782236/static-assets/tag-icons/hcddvgvejmha0hr8emkz.svg",
        label: "laravel"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782235/static-assets/tag-icons/wtxrrpsfqguomzqjavam.svg",
        label: "graphql"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782239/static-assets/tag-icons/erfbu54l2mquphszheck.svg",
        label: "react"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782240/static-assets/tag-icons/rh7xfiz28bxklfzymftd.svg",
        label: "vue"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782240/static-assets/tag-icons/wsunggfipja7edqsybg5.svg",
        label: "svelte"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782232/static-assets/tag-icons/xbazdwl9wpdqi1naqtib.svg",
        label: "angular"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782233/static-assets/tag-icons/jb9r6xjy7yi1gkeqqvnh.svg",
        label: "flutter"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782237/static-assets/tag-icons/odut7ffl8spzdkbhceeu.svg",
        label: "kubernetes"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782233/static-assets/tag-icons/kow5csrider7v1eizt1q.svg",
        label: "docker"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782233/static-assets/tag-icons/jkepqds7ziutsnle1e4a.svg",
        label: "aws"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782234/static-assets/tag-icons/vvx5vhoos8jgkutp48ll.svg",
        label: "git"
      },
      {
        icon:
          "https://res.cloudinary.com/techdiary-dev/image/upload/v1620782234/static-assets/tag-icons/hwsbp19pfifwr367xtoh.svg",
        label: "github"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.tags {
  @apply flex flex-col space-y-2;
}
.tag {
  &__link {
    @apply flex space-x-2 items-center mb-2;
  }
  &__icon {
    @apply w-6;
  }
  &__label {
    @apply text-gray-700 dark:text-gray-50;
  }
}
</style>
