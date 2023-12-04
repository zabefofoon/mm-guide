<template>
  <table class="items-center bg-transparent w-full border-collapse">
    <thead>
      <tr>
        <th
          class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Button
        </th>
        <th
          class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="border border-dashed border-slate-400 text-slate-500 flex items-center justify-center self-start p-2">
            <span class="icon icon-add text-sm"> add_circle_outline </span>
            <span class="caption ml-2">Group</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Widget Groups (Enter the group name to differentiate)
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="w-12 aspect-square | border border-dashed border-slate-400 | text-slate-500 | flex items-center justify-center self-start">
            <span class="icon icon-add text-xl"> add_circle_outline </span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Widget
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="w-12 aspect-square | border shadow-md"></button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Open widget settings window (Enter the widget name, description, html,
          css)
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="border border-solid border-slate-200 shadow-lg h-fit p-2 bg-white rounded-full active">
            <span class="text-lg icon icon-widgets"></span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Display widgets as thumbnails
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="inline-block border border-solid border-slate-200 shadow-lg h-fit p-2 bg-white rounded-full">
            <span class="text-lg icon icon-bullet"></span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Display widgets as list
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="border border-solid border-slate-200 shadow-lg h-fit p-2 bg-white rounded-full active">
            <span class="text-lg icon icon-code"></span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Display CSS code for widgets
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="border border-solid border-slate-200 shadow-lg h-fit p-2 bg-white rounded-full">
            <span class="text-lg icon icon-save"></span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Save the widget model to include the widgets in the widget list of the
          page configuration mode.
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.config-button {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem 12px;

  border: 1px solid #cbd5e1;
}
</style>
