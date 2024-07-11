chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "startDetection") {
      // Code to analyze video feed for deepfakes (replace with your deep learning model or logic)
  
      // Example simulating analysis (replace with actual detection logic)
      setTimeout(() => {
        const isDeepfake = Math.random() > 0.5; // Randomly simulate detection
        chrome.runtime.sendMessage({ action: "result", isDeepfake: isDeepfake });
      }, 2000); // Simulate processing time
    } 
else if (message.action === "stopDetection") {
    // Code to stop the deepfake detection process in the video call window (if applicable)
  }}
);

  