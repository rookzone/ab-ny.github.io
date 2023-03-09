

function render() {
  let output = "";
  if (document.querySelector('input[name="mode"]:checked').value == 'internal') {
    output = 
    `{
  "richContent": [
    [
      {
        "type": "info",
        "title": "<TITLE>",
        "actionLink": "<URL>"
      }
    ]
  ]
}`;

    document.getElementById('survey').style.display = "none";

  } else {
    output = `{
  "mitelCloudLink": {
    "contentType": "application/vnd.mitel.action-card",
    "body": {
      "buttons": [
        {
          "targetUrl": "_top|<URL>?utm_source=nycc%20website&utm_medium=chatbot",
          "action": "open-link",
          "title": "<TITLE>"
        }
      ]
    }
  }
}`;
    document.getElementById('survey').style.display = "inline";

  }
  

  output = output.replace("<URL>",document.getElementById("url").value);

  output = output.replace("<TITLE>",document.getElementById("title").value);
  
  //document.getElementById("preview").innerHTML = window.output;
  document.getElementById("copyme").value = output;
  return;
}

document.addEventListener("DOMContentLoaded", function() {
  render();
});

