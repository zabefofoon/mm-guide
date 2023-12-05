<template>
  <table class="items-center bg-transparent w-full border-collapse">
    <thead>
      <tr>
        <th
          class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Name
        </th>
        <th
          class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Data
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          saveProject
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <pre>
{
  type: 'saveProject',
  pages: [...],
  widgetGroups: [...]
}          
          </pre>
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          widgetGroupsMutation
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <pre>
{
  type: 'widgetGroupsMutation',
  widgetGroups: [...]
}          
          </pre>
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          pageMutation
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <pre>
{
  type: 'pageMutation',
  pages: [...]
}          
          </pre>
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
