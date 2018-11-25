function drawAnimation() {
    window.requestAnimationFrame(drawAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(move);
    circles.forEach(draw);
}