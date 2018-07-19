export default {
  form: `
<tr ref="row">
  <td>
    {{element}}
  </td>
  {% if (!disabled) { %}
  <td>
    <button type="button" class="btn btn-secondary" ref="removeRow">
      <i class="{{iconClass('remove-circle')}}"></i>
    </button>
  </td>
  {% } %}
</tr>
`,
};