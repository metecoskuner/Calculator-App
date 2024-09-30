// Karakter ekleme fonksiyonu
function appendChar(char) {
    const display = document.getElementById('display');
    display.value += char;
}

// Display'i temizleme fonksiyonu
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Display'den bir karakter silme fonksiyonu
function deleteChar() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = display.value.slice(0, -1);
    }
}

// Sonucu hesaplama fonksiyonu
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Boş veya geçersiz bir ifade girilmesi durumunda hata mesajı
        display.value = display.value ? eval(display.value) : "Error";
    } catch (error) {
        display.value = "Error";
    }
}

// Tema değiştirme fonksiyonu
function changeTheme() {
    const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
    const calculator = document.querySelector('.calculator');

    // Tüm temaları temizle
    document.body.classList.remove('theme-1', 'theme-2', 'theme-3');
    calculator.classList.remove('theme-1', 'theme-2', 'theme-3');

    // Seçilen temayı ekle
    document.body.classList.add(`theme-${selectedTheme}`);
    calculator.classList.add(`theme-${selectedTheme}`);
}

// Tema değişikliği için başlangıç teması ayarla
document.addEventListener('DOMContentLoaded', () => {
    changeTheme(); // Sayfa yüklendiğinde mevcut temayı uygula

    // Tema değiştirme butonlarına olay dinleyici ekle
    const themeButtons = document.querySelectorAll('input[name="theme"]');
    themeButtons.forEach(button => {
        button.addEventListener('change', changeTheme);
    });
});
