<template>
  <div class="category-modal modal"
    v-if="visible" @click.self="closeModal">
    <div class="category-modal-dialog modal-dialog">
      <header class="category-modal-header">
        <a class="close" @click.self="closeModal">×</a>
        <h4>필터</h4>
      </header>
      <div class="category-modal-body">
        <ul>
          <li v-for="category in categories" :key="category.no">
            <input type="radio" :value="category.no" :id="category.no" v-model="checkedCategory">
            <label>{{ category.name }}</label>
          </li>
        </ul>
      </div>
      <div class="category-modal-footer">
        <button class="save" @click.self="saveCategories">저장</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryModal',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    categories: {
      type: Array,
      require: true,
    },
    selectedCategory: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      checkedCategory: this.selectedCategory
    }
  },
  methods: {
    closeModal () {
      this.$emit('update:visible', false)
    },
    saveCategories () {
      this.$emit('update:selectedCategory', this.checkedCategory)
      this.$emit('update:visible', false)
      this.$router.push({ query: {...this.$route.query, category: this.checkedCategory } })
      this.$emit('resetData')
    }
  }
}
</script>

<style scoped lang="less">
.category-modal {
  .category-modal-dialog {
    background: #fff;
  }
  .category-modal-header {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
    padding: 16px 16px 0 25px;
    position: relative;
    .close {
      float: right;
      font-size: 24px;
    }
    h4 {
      text-align: left;
    }
  }
  .category-modal-body {
    padding: 25px;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        float: left;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
  .category-modal-footer {
    padding: 0 10px 10px 10px;
    text-align: right;
    button {
      margin-right: 15px;
      font-size: 12px;
    }
  }
}
</style>