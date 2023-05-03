function migrate() {
  var out = document.getElementById("code_out");
  var input = document.getElementById("code").value;
  input = input.replaceAll(".click();",'.trigger("click");');
  out.innerHTML = input;
}