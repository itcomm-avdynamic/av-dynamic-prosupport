const url = "https://script.google.com/macros/s/AKfycbxMHiISb7-mnHbpr96ojPUJbeWHkX7EQpwJeCVAW-XyiPExTKSxpUOhCFPQICyXAdGb/exec";

async function check() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'getDashboard',
        userEmail: 'admin@avdynamic.co.in',
        userRole: 'Admin'
      })
    });
    const json = await res.json();
    if (json.success) {
      console.log("SUCCESS! Keys in response data:", Object.keys(json.data));
      if (json.data.serviceRequests && json.data.serviceRequests.length > 0) {
        console.log("Sample serviceRequest:", JSON.stringify(json.data.serviceRequests[0], null, 2));
      } else {
        console.log("No service requests in database.");
      }
    } else {
      console.log("FAIL:", json.message);
    }
  } catch (err) {
    console.error("Error calling API:", err);
  }
}

check();
