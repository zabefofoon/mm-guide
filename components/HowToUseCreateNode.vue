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
        <th
          class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Shortcut
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Select parent">
            <i class="icon icon-select"></i>
            <span class="text-xs">Select Parent</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Select Parent Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Ctrl + ↑ <span class="mx-2">|</span> Meta + ↑
        </td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Add down">
            <i class="icon icon-plus"></i>
            <span class="text-xs">Add</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Node Down
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Enter
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Add up">
            <i class="icon icon-arrow-up"></i>
            <span class="text-xs">Up</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Node Up
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Add child">
            <i class="icon icon-child"></i>
            <span class="text-xs">Child</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Child Node(Into Node)
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Ctrl + Enter
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Add parent">
            <i class="icon icon-child -rotate-180"></i>
            <span class="text-xs">Parent</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Parent Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Remove">
            <i class="icon icon-trash"></i>
            <span class="text-xs">Remove</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Remove Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Delete <span class="mx-2">|</span> Backspace
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Remove parent">
            <span class="relative">
              <i class="icon icon-trash"></i>
              <i class="icon icon-arrow-up text-xs absolute -ml-1"></i>
            </span>
            <span class="text-xs">Parent</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Remove Parent Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Copy">
            <i class="icon icon-copy"></i>
            <span class="text-xs">Copy</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Copy Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Ctrl + C <span class="mx-2">|</span> Meta + C
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Cut">
            <i class="icon icon-cut"></i>
            <span class="text-xs">Cut</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Copy & Remove Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Ctrl + X <span class="mx-2">|</span> Meta + X
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Paste">
            <i class="icon icon-paste"></i>
            <span class="text-xs">Paste</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Paste Node
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Ctrl + V <span class="mx-2">|</span> Meta + V
        </td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Add widget">
            <i class="icon icon-add-widget"></i>
            <span class="text-xs">Widget</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Widget
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Remove widget">
            <span class="relative | flex">
              <i class="icon icon-add-widget"></i>
              <i class="icon icon-line | absolute left-0"></i>
            </span>
            <span class="text-xs">Remove</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Remove Widget
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Add marker">
            <i class="icon icon-marker"></i>
            <span class="text-xs">Marker</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Add Marker(Comment)
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button class="config-button" title="Remove marker">
            <span class="relative | flex">
              <i class="icon icon-marker"></i>
              <i class="icon icon-line | absolute left-0"></i>
            </span>
            <span class="text-xs">Remove</span>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Remove Marker
        </td>
        <td
          class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
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
