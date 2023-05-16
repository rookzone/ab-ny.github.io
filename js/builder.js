window.builder = [];
window.output = "";
function add() {
  window.errors = "";
  let friendly_name = document.getElementById("friendly_name").value;
  let data_name = document.getElementById("data_name").value;
  let section_name = document.getElementById("section_name").value;
  
  if (section_name === "") {
    section_name = friendly_name;
  }
  
  if (friendly_name === "" || data_name === "" || section_name === "") {
    window.errors = "missing field";
    render();
    return;
  }
  
  next = {
    "field_name": friendly_name,
    "data_name": data_name,
    "section_name": section_name,
    "id": self.crypto.randomUUID().slice(0,8),
  }
  window.builder.push(next);
  cls();
  render();
}

function render() {
  if (window.errors && window.errors != "") {
    document.getElementById("errors").style.display = "block";
    document.getElementById("errors").innerHTML = window.errors;
  } else {
    document.getElementById("errors").style.display = "block";
  }
  window.output = `<dl class="govuk-summary-list">\n`;
  let lb = "{"
  let rb = "}"
  
  for (let i = 0; i < window.builder.length; i += 1) {
    window.output += `  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
    ${window.builder[i].field_name}
    </dt>
    <dd class="govuk-summary-list__value">
    ${lb + window.builder[i].data_name + rb}
    </dd>
    <dd class="govuk-summary-list__actions">
    <a class="govuk-link" href="#" id="change-${window.builder[i].id.toLowerCase().replaceAll(' ','-')}">
    Change <span class="govuk-visually-hidden"> ${window.builder[i].field_name}</span>
    </a>
    </dd>
    </div>\n`;
  }
  window.output += `</dl>\n`;
  window.output += `<script>\n`
  for (let i = 0; i < window.builder.length; i += 1) {
    window.output += `  $("#change-${window.builder[i].id.toLowerCase().replaceAll(' ','-')}").click(function() {
      $(".sectionsHead")[0].style.display = "block";
      $(".sectionsHead").find("[data-name='${window.builder[i].section_name}']").trigger("click");
    });\n`
  }
  window.output += `</script>`;
  
  document.getElementById("copyme").value = window.output;
  document.getElementById("preview").innerHTML = window.output;
}

function cls() {
  document.getElementById("friendly_name").value = "";
  document.getElementById("data_name").value = "";
  document.getElementById("section_name").value = "";
}