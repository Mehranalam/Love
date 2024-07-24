function showLoveMessage() {
    const messages = [
        "تو بهترین اتفاق زندگی منی!",
        "هر لحظه با تو بودن، مثل یه رویاست.",
        "دوستت دارم بیشتر از هر چیزی در دنیا!",
        "تو تنها کسی هستی که قلبم برایش می‌تپد.",
        "با تو، دنیا برایم زیباتر می‌شود.",
        "مهران تا همیشه دوستت دارد کاملا صادقانه"
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = message;
}
