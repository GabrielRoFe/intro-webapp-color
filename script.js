document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorPicker = document.getElementById('colorPicker');
    const colorBox = document.getElementById('colorBox');
    const hexValue = document.getElementById('hexValue');

    function updateColor() {
        const red = parseInt(redRange.value || redInput.value);
        const green = parseInt(greenRange.value || greenInput.value);
        const blue = parseInt(blueRange.value || blueInput.value);
        const hex = rgbToHex(red, green, blue);

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        hexValue.textContent = `Hex: ${hex}`;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function updateColorFromPicker() {
        const hex = colorPicker.value;
        const rgb = hexToRgb(hex);

        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;
        redRange.value = rgb.r;
        greenRange.value = rgb.g;
        blueRange.value = rgb.b;

        colorBox.style.backgroundColor = hex;
        hexValue.textContent = `Hex: ${hex}`;

        updateColor(); // Actualizar el color cuando se selecciona un nuevo color
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return { r, g, b };
    }

    redRange.addEventListener('input', function() {
        redInput.value = redRange.value;
        updateColor();
    });
    greenRange.addEventListener('input', function() {
        greenInput.value = greenRange.value;
        updateColor();
    });
    blueRange.addEventListener('input', function() {
        blueInput.value = blueRange.value;
        updateColor();
    });
    redInput.addEventListener('input', function() {
        redRange.value = redInput.value;
        updateColor();
    });
    greenInput.addEventListener('input', function() {
        greenRange.value = greenInput.value;
        updateColor();
    });
    blueInput.addEventListener('input', function() {
        blueRange.value = blueInput.value;
        updateColor();
    });

    colorPicker.addEventListener('input', updateColorFromPicker);

    updateColorFromPicker(); // Actualizar el color inicial al cargar la página
});
