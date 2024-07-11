chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "result") {
      const isDeepfake = message.isDeepfake;
      const statusEl = document.getElementById("status");
      const resultEl = document.getElementById("result");
  
      if (isDeepfake) {
        statusEl.innerText = "Status: Deepfake Detected!";
        resultEl.innerText = "Deepfake Detected!";
      } else {
        statusEl.innerText = "Status: Real Video";
        resultEl.innerText = "Real Video";
      }
    }
  });
  
  chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      if (activeTab.url.startsWith("https://meet.google.com/") || activeTab.url.startsWith("https://*.zoom.us/")) {
        chrome.tabs.sendMessage(activeTab.id, { action: "startDetection" });  // Send message to content script
      } else {
        alert("Deepfake detection is currently only supported on Google Meet and Zoom.");
      }
    });
  });
  