window.addEventListener("keydown", function(e) {
    const insert = document.querySelector("#insert");
    insert.innerHTML = `<div class="key"><table>
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`;
}
);