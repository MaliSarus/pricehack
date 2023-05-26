<script lang="ts">
export default {
  name: 'BreadcrumbSection'
};
</script>
<script setup lang="ts">
import { LongArrowRightIcon12 } from 'ui-layer/assets/icons';
</script>
<template>
  <section class="section breadcrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-section__block">
            <el-scrollbar>
              <el-breadcrumb :separator-icon="LongArrowRightIcon12">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >Главная
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }"
                  >Каталог
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }"
                  >Мебель
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">
                  Мягкая мебель
                </el-breadcrumb-item>
                <el-breadcrumb-item> Диваны </el-breadcrumb-item>
              </el-breadcrumb>
            </el-scrollbar>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
