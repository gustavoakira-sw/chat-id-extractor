document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("extractButton").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const url = tabs[0].url;
      const numbers = extractNumbersFromUrl(url);
      copyToClipboard(numbers);
    });
  });
});

function extractNumbersFromUrl(url) {
  const regex = /\d+/g;
  const matches = url.match(regex);
  return matches ? matches.join("") : "No numbers found in the URL.";
}

function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
