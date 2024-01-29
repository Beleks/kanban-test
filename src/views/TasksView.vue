<script setup>
import TrashIcon from "@/components/icons/TrashIcon.vue";
import router from "@/router";

import { useBoardStore } from "@/stores/board";
import { ref, computed } from "vue";

const boardStore = useBoardStore();

const columns = computed(() => boardStore.columns);
const newTaskFields = ref({});
const newColumn = ref("");

function openTask(taskId) {
  router.push({ name: "Task", params: { taskId } });
}

function createTask(taskText, columnId) {
  taskText = taskText.trim();

  if (taskText.length === 0) {
    taskText = "Без названия";
  }

  boardStore.createTask(taskText, columnId);
  clearNewTaskField(columnId);
}

function clearNewTaskField(columnId) {
  newTaskFields.value[columnId] = "";
}
</script>

<template>
  <div class="h-full w-full flex">
    <div v-for="column in columns" class="w-[300px] mr-2">
      <div class="px-2.5 py-1.5 flex justify-between items-center bg-zinc-900 rounded">
        <div class="grow mr-2">
          <input
            class="w-full font-bold bg-zinc-900 outline-none"
            type="text"
            v-model="column.title"
            placeholder="Название стадии"
          />
        </div>

        <TrashIcon class="stroke-zinc-400 hover:stroke-zinc-50 cursor-pointer" />
      </div>
      <hr class="my-2" />
      <div>
        <input
          placeholder="Опишите задачу"
          class="w-full rounded bg-zinc-900 outline-none border border-zinc-600 focus:border-yellow-500 px-2.5 py-1.5"
          @keyup.enter="createTask(newTaskFields[column.id], column.id)"
          v-model="newTaskFields[column.id]"
        />
        <div v-show="newTaskFields[column.id]" class="text-xs px-2.5 py-0.5">
          Нажмите <span class="text-yellow-500">Enter</span> чтобы создать
        </div>
      </div>
      <div
        v-for="task in column.tasks"
        class="px-2.5 py-1.5 cursor-pointer shadow-xl bg-zinc-900 rounded mt-2 text-ellipsis overflow-hidden"
        @click="openTask(task.id)"
      >
        {{ task.text }}
      </div>
    </div>
    <div class="w-[300px] mr-2">
      <div class="px-2.5 py-1.5 flex justify-between items-center bg-zinc-900 rounded">
        <input
          class="w-full font-bold bg-zinc-900 outline-none"
          type="text"
          v-model="newColumn"
          placeholder="Название стадии"
        />
      </div>
      <div v-show="newColumn" class="text-xs px-2.5 py-0.5">
        Нажмите <span class="text-yellow-500">Enter</span> чтобы создать
      </div>
    </div>
  </div>
</template>
