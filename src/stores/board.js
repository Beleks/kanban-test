import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("tasks", () => {
  const board = ref([
    {
      id: 0,
      title: "To Do",
      tasks: [
        {
          id: 0,
          text: "Какая-то задача",
        },
      ],
    },
  ]);

  function addColumn(params) {}
  function deleteColumn(params) {}
  function addTask(params) {}
  function deleteTask(params) {}

  return { board, addColumn, deleteColumn, addTask, deleteTask };
});
