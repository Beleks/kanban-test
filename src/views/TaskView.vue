<script setup>
import TrashIcon from "@/components/icons/TrashIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useBoardStore } from "@/stores/board";

const route = useRoute();
const router = useRouter();
const boardStore = useBoardStore();

const taskId = ref();
const task = computed(() => boardStore.getTask(taskId.value));

function backToBoard() {
  router.push({ name: "Tasks" });
}

function deleteTask(taskId) {
  boardStore.deleteTask(taskId);
  backToBoard();
}

onMounted(() => {
  taskId.value = parseInt(route.params.taskId);
});
</script>

<template>
  <div class="flex justify-center">
    <div v-if="task" class="w-[1000px]">
      <div class="text-lg flex justify-between items-center">
        <div>
          Задача <span class="text-sm py-0.5 px-2 bg-yellow-600 rounded-md">id:{{ task.id }}</span>
        </div>
        <div class="flex">
          <TrashIcon
            :size="26"
            class="stroke-zinc-400 hover:stroke-zinc-50 cursor-pointer mr-4"
            @click="deleteTask(task.id)"
          />
          <CloseIcon :size="26" class="stroke-zinc-400 hover:stroke-zinc-50 cursor-pointer" @click="backToBoard" />
        </div>
      </div>
      <div class="mt-4 flex justify-between">
        <input
          class="w-[800px] grow bg-zinc-900 outline-none rounded border border-zinc-600 focus:border-yellow-500 px-2.5 py-1.5"
          v-model="task.text"
        />
        <!-- <div
          class="px-2.5 py-1.5 grow ml-4 text-center cursor-pointer bg-green-700 hover:bg-green-600 transition rounded"
        >
          Сохранить
        </div> -->
      </div>
    </div>
    <div v-else class="text-center">
      <div>Нет такой задачи</div>
      <div @click="backToBoard" class="underline cursor-pointer">Вернуться к задачам</div>
    </div>
  </div>
</template>
