window.builder = [];
window.output = "";
function add() {
  window.errors = "";
  let friendly_name = document.getElementById("friendly_name").value;
  let data_name = document.getElementById("data_name").value;
  
  
  if (friendly_name === "" || data_name === "") {
    window.errors = "missing field";
    render();
    return;
  }
  
  next = {
    "field_name": friendly_name,
    "data_name": data_name,
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
    </div>\n`;
  }
  window.output += `</dl>\n`;
  
  
  document.getElementById("copyme").value = window.output;
  document.getElementById("preview").innerHTML = window.output;
}

function cls() {
  document.getElementById("friendly_name").value = "";
  document.getElementById("data_name").value = "";
}