const icon = "images/icons/icon-24x24.png";

Notification.requestPermission().then(perm => {
    if (perm === "granted") {
        new Notification("Oche sushi", {
            body: "Hello, there!",
            icon
        });
    }
});

let notification;
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        notification = new Notification("Oche sushi", {
            body: "Come back, pleaseeeeeeee",
            icon
        })
    } else {
        notification.close();
    }
});