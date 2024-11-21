function displayBrowserInfo() {
    const browserName = navigator.appName; //deprecated, but still seem to work
    const browserVersion = navigator.appVersion; //deprecated, but still seem to work
    const osName = navigator.platform; //deprecated, but still seem to work

    document.getElementById('browserName').textContent = browserName;
    document.getElementById('browserVersion').textContent = browserVersion;
    document.getElementById('osName').textContent = osName;
}

function displayScreenInfo() {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const colorDepth = screen.colorDepth;

    document.getElementById('screenWidth').textContent = screenWidth;
    document.getElementById('screenHeight').textContent = screenHeight;
    document.getElementById('colorDepth').textContent = colorDepth;
}

function displayWindowInfo() {
    const windowWidth = window.outerWidth;
    const windowHeight = window.outerHeight;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    document.getElementById('windowWidth').textContent = windowWidth;
    document.getElementById('windowHeight').textContent = windowHeight;
    document.getElementById('innerWidth').textContent = innerWidth;
    document.getElementById('innerHeight').textContent = innerHeight;
}

function displayDeviceInfo() {
    const isOnline = navigator.onLine ? "Yes" : "No";
    const language = navigator.language;
    const geolocation = "Unavailable";

    document.getElementById('isOnline').textContent = isOnline;
    document.getElementById('language').textContent = language;
    document.getElementById('geolocation').textContent = geolocation;
}

function displayBatteryInfo() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            const batteryLevel = Math.round(battery.level * 100) + '%';
            const chargingStatus = battery.charging ? "Yes" : "No";

            document.getElementById('batteryLevel').textContent = batteryLevel;
            document.getElementById('chargingStatus').textContent = chargingStatus;
        });
    } else {
        document.getElementById('batteryLevel').textContent = "Battery information unavailable";
        document.getElementById('chargingStatus').textContent = "Battery information unavailable";
    }
}

function displayDeviceMemory() {
    if ('deviceMemory' in navigator) {
        const memory = navigator.deviceMemory;
        document.getElementById('deviceMemory').textContent = memory + " GB";
    } else {
        document.getElementById('deviceMemory').textContent = "Device memory information unavailable";
    }
}

function displayNetworkInfo() {
    if ('connection' in navigator) {
        const connectionType = navigator.connection.type;
        const effectiveType = navigator.connection.effectiveType;

        document.getElementById('connectionType').textContent = connectionType || "N/A";
        document.getElementById('effectiveType').textContent = effectiveType || "N/A";
    } else {
        document.getElementById('connectionType').textContent = "Network information unavailable";
        document.getElementById('effectiveType').textContent = "Network information unavailable";
    }
}

function init() {
    displayBrowserInfo();
    displayScreenInfo();
    displayWindowInfo();
    displayDeviceInfo();
    displayBatteryInfo();
    displayDeviceMemory();
    displayNetworkInfo();
}

window.onload = init;
