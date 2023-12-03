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
            class="flex items-center | px-1 | text-slate-500 border border-slate-500"
            title="Save project">
            <i class="icon text-xl icon-save"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          When using iframe, emit message the page model to the parent window.
          <br /><br />
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
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500"
            title="File upload">
            <i class="icon text-xl icon-upload"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Load the pageModel(=data.json) to make it available for use in the
          editor.
        </td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <div class="flex gap-1">
            <button
              class="flex items-center | px-1 | text-slate-500 border border-slate-500"
              title="File upload">
              <i class="icon text-xl icon-screen-xl"></i>
            </button>
            <button
              class="flex items-center | px-1 | text-slate-500 border border-slate-500"
              title="File upload">
              <i class="icon text-xl icon-screen-l"></i>
            </button>
            <button
              class="flex items-center | px-1 | text-slate-500 border border-slate-500"
              title="File upload">
              <i class="icon text-xl icon-screen-m"></i>
            </button>
            <button
              class="flex items-center | px-1 | text-slate-500 border border-slate-500"
              title="File upload">
              <i class="icon text-xl icon-screen-s"></i>
            </button>
          </div>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Adjusts the horizontal size of the canvas area.
        </td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500"
            title="Toggle spacing">
            <i class="icon text-xl icon-spacing"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Displays a padding area for convenient editing. It does not affect the
          actual pageModel.
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500"
            title="Toggle outline">
            <i class="icon text-xl icon-outline"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Displays a border for convenient editing. It does not affect the
          actual pageModel.<br />
          To remove the border when downloading HTML, long-press the HTML button
          and uncheck 'Show outline.
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500"
            title="Toggle hidden elements">
            <i class="icon text-xl icon-hidden"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Displays a hidden area for convenient editing. It does not affect the
          actual pageModel.
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500"
            title="Toggle marker">
            <i class="icon text-xl icon-marker"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Displays a marker for convenient editing. It does not affect the
          actual pageModel.
        </td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500 hover:bg-slate-200"
            title="Download html">
            <i class="icon text-xl icon-html"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          You can download the HTML. Long-press to access the settings.
        </td>
      </tr>
      <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500 hover:bg-slate-200"
            title="Download html">
            <i class="icon text-xl icon-json"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          You can download the pageModel(json).
        </td>
      </tr>
      <tr class="border-t">
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
          <button
            class="flex items-center | px-1 | text-slate-500 border border-slate-500 hover:bg-slate-200"
            title="Download html">
            <i class="icon text-xl icon-analyze"></i>
          </button>
        </th>
        <td
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          You can display the widgets used on the page.
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
