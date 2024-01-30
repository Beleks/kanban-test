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

  function createTask(taskText, columnId) {
    let currentColumn = columns.value.find((column) => column.id === columnId);
    taskIdCounter.value = taskIdCounter.value + 1;
    currentColumn.tasks.push({
      id: taskIdCounter.value,
      text: taskText,
    });
  }
  function deleteTask(taskId) {
    for (let i = 0; i < columns.value.length; i++) {
      const tasks = columns.value[i].tasks;
      for (let j = 0; j < tasks.length; j++) {
        if (tasks[j].id === taskId) {
          tasks.splice(j, 1);
        }
      }
    }
  }

  function getTask(taskId) {
    for (let i = 0; i < columns.value.length; i++) {
      const tasks = columns.value[i].tasks;
      for (let j = 0; j < tasks.length; j++) {
        if (tasks[j].id === taskId) {
          return tasks[j];
        }
      }
    }
    return null;
  }

  function createColumn(columnTitle) {
    columnIdCounter.value = columnIdCounter.value + 1;
    columns.value.push({
      id: columnIdCounter.value,
      title: columnTitle,
      tasks: [],
    });
  }
  function deleteColumn(columnId) {
    let index = columns.value.findIndex((column) => column.id === columnId);
    columns.value.splice(index, 1);
  }

  return { columns, createColumn, deleteColumn, createTask, deleteTask, getTask };
});
