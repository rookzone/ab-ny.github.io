window.builder = [];
window.output = "";
function add() {
  window.errors = "";
  let fname = document.getElementById("fname").value;
  let dname = document.getElementById("dname").value;
  let sname = document.getElementById("sname").value;

  if (fname === "" || dname === "" || sname === "") {
    window.errors = "missing field";
    render();
    return;
  }

  next = {
  "field_name": fname,
  "data_name": dname,
  "section_name": sname
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
      <a class="govuk-link" href="#" id="change-${window.builder[i].field_name.toLowerCase().replaceAll(' ','-')}">
        Change <span class="govuk-visually-hidden"> ${window.builder[i].field_name}</span>
      </a>
    </dd>
  </div>\n`;
  }
  window.output += `</dl>\n`;
  window.output += `<script>\n`
  for (let i = 0; i < window.builder.length; i += 1) {
    window.output += `  $("#change-${window.builder[i].field_name.toLowerCase().replaceAll(' ','-')}").click(function() {
    $(".sectionsHead")[0].style.display = "block";
    $(".sectionsHead").find("[data-name='${window.builder[i].section_name}']").click();
  });\n`
  }
window.output += `</script>`
  
  document.getElementById("preview").innerHTML = window.output;
  document.getElementById("copyme").value = window.output;
  return;
}

function cls() {
  document.getElementById("fname").value = "";
  document.getElementById("dname").value = "";
  sname = document.getElementById("sname").value = "";
}