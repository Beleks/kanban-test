import { ref } from "vue";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", () => {
  const taskIdCounter = ref(2);
  const columnIdCounter = ref(1);
  const columns = ref([
    {
      id: 0,
      title: "To Do",
      tasks: [
        {
          id: 0,
          text: "Какая-то задачаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа",
        },
        {
          id: 1,
          text: "Some text",
        },
      ],
    },
    {
      id: 1,
      title: "In Progress",
      tasks: [
        {
          id: 2,
          text: "Обновить документацию",
        },
      ],
    },
  ]);

  function createColumn(params) {}
  function deleteColumn(params) {}
  function createTask(taskText, columnId) {
    let currentColumn = columns.value.find((column) => column.id === columnId);
    taskIdCounter.value = taskIdCounter.value + 1;
    currentColumn.tasks.push({
      id: taskIdCounter.value,
      text: taskText,
    });
  }
  function createColumn(columnTitle) {
    columnIdCounter.value = columnIdCounter.value + 1;
    columns.value.push({
      id: columnIdCounter.value,
      title: columnTitle,
      tasks: [],
    });
  }
  function deleteTask(params) {}

  return { columns, createColumn, deleteColumn, createTask, deleteTask };
});
