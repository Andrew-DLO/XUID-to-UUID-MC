window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("xuid-box").addEventListener("submit", function (event) {
        event.preventDefault();
        convertXUID();
    });

    function convertXUID() {
        const xuid = document.getElementById("xuid").value;

        if (xuid.length !== 16 || !/^[0-9A-Fa-f]+$/.test(xuid)) {
            alert("The XUID you entered is not valid.")
            return;
        }

        const uuid = `00000000-0000-0000-${xuid.slice(4, 8)}-${xuid.slice(8)}`;
        const command = `/fwhitelist add ${uuid}`

        document.getElementById("conversionOutput").textContent = uuid;
        document.getElementById("commandOutput").textContent = command;
    }

    document.getElementById("copyButton").addEventListener("click", function () {
        const output = document.getElementById("conversionOutput").textContent;
    
        if (output.trim() === "" || output === "Your converted UUID will appear here.") {
            return;
        }
    
        navigator.clipboard.writeText(output).then(() => {
        }).catch(err => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy the text.");
        });
    });
    
});

