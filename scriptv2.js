
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const numSnowflakes = 100;

    function createSnowflakes() {
        for (let i = 0; i < numSnowflakes; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                density: Math.random() * numSnowflakes
            });
        }
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let i = 0; i < numSnowflakes; i++) {
            const snowflake = snowflakes[i];
            ctx.moveTo(snowflake.x, snowflake.y);
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveSnowflakes();
    }

    function moveSnowflakes() {
        for (let i = 0; i < numSnowflakes; i++) {
            const snowflake = snowflakes[i];
            snowflake.y += Math.cos(snowflake.density) + 1 + snowflake.radius / 2;
            snowflake.x += Math.sin(snowflake.density) * 2;

            if (snowflake.x > canvas.width + 5 || snowflake.x < -5 || snowflake.y > canvas.height) {
                if (i % 3 > 0) {
                    snowflakes[i] = { x: Math.random() * canvas.width, y: -10, radius: snowflake.radius, density: snowflake.density };
                } else {
                    if (Math.sin(snowflake.density) > 0) {
                        snowflakes[i] = { x: -5, y: Math.random() * canvas.height, radius: snowflake.radius, density: snowflake.density };
                    } else {
                        snowflakes[i] = { x: canvas.width + 5, y: Math.random() * canvas.height, radius: snowflake.radius, density: snowflake.density };
                    }
                }
            }
        }
    }

    function animateSnow() {
        drawSnowflakes();
        requestAnimationFrame(animateSnow);
    }

    createSnowflakes();
    animateSnow();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.querySelector('.toggle-sidebar');
        const sidebar = document.querySelector('.sidebar');

        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('show');
        });
    });
    document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});
