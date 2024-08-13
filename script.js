document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const phoneNumber = '601159754638'; // Replace with your WhatsApp phone number
        const message = `Hai Ka Saya Mau Beli ${product}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const audio = document.getElementById("background-audio");

            // Cek apakah posisi waktu simpan sebelumnya ada
            if (localStorage.getItem("audioTime")) {
                audio.currentTime = localStorage.getItem("audioTime");
            }

            // Simpan posisi waktu audio setiap detik
            setInterval(() => {
                localStorage.setItem("audioTime", audio.currentTime);
            }, 1000);