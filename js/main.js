function isLicenseKey() {
    const getInput = document.getElementById('tx0ndev_Input').value;
    const licensekey = "dev";

    if (getInput === licensekey) {
		console.log('success');
		window.location.href = "./ui/main.html"
    } else {
		console.log('error')
    }
}