// Reveal on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
            });
            navLinks.forEach(a => {
                a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
            });
        });

        /* Script caixa de texto */

        const form = document.getElementById("contato-form");
        const mensagem = document.getElementById("mensagem-sucesso");

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            fetch(form.action, {
                method: "POST",
                body: new FormData(form)
            })
                .then(response => {

                    form.reset();

                    mensagem.style.display = "block";

                })
                .catch(error => {

                    alert("Erro ao enviar mensagem.");

                });

        });