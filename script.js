document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    function showNotification() {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Create the notification
                const notification = new Notification('You have successfully started your journey. Enjoy it!');
                
                // Set timeout to close the notification after 2 seconds
                setTimeout(() => {
                    notification.close();
                }, 4000); // 2000 milliseconds = 2 seconds
            } else {
                alert('Permission Denied');
            }
        });
    }

    // Attach the event listener to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', showNotification);
    });
});
