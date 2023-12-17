document.getElementById('batteryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var rebalance = parseInt(document.getElementById('rebalance').value) || 0;
    var discharge = parseInt(document.getElementById('discharge').value) || 0;
    var temperature = parseInt(document.getElementById('temperature').value) || 0;
    var hours = parseInt(document.getElementById('hours').value) || 0;

    // Calculate the scores
    var totalScore = (rebalance * 2) + (discharge * 5) + (temperature * 3) + (hours * 1);

    // Determine health status
    var healthStatus = "";
    if(totalScore >= 75) {
        healthStatus = "Critical";
    } else if(totalScore >= 50) {
        healthStatus = "Urgent";
    } else if(totalScore >= 25) {
        healthStatus = "Warning";
    } else {
        healthStatus = "OK";
    }

    document.getElementById('result').innerHTML = `Health Status: ${healthStatus} (Score: ${totalScore})`;
});
