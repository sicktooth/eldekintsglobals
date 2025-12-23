function showMobileNav() {
                const nav = document.getElementById('mobileNav');
                const btn = document.getElementById('mobileNavBtn');
                const icon = document.getElementById('mobileNavIcon');
                if (!nav || !btn || !icon) return;
                // toggle visibility
                nav.classList.toggle('hidden');
                const open = !nav.classList.contains('hidden');
                btn.setAttribute('aria-expanded', open);
                icon.setAttribute('name', open ? 'close' : 'menu');
            }

            // Click outside to close
            document.addEventListener('click', (e) => {
                const nav = document.getElementById('mobileNav');
                const btn = document.getElementById('mobileNavBtn');
                const icon = document.getElementById('mobileNavIcon');
                if (!nav || !btn) return;
                if (nav.classList.contains('hidden')) return;
                if (e.target === btn || btn.contains(e.target) || nav.contains(e.target)) return;
                nav.classList.add('hidden');
                btn.setAttribute('aria-expanded', false);
                if (icon) icon.setAttribute('name', 'menu');
            });

            // Close on Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const nav = document.getElementById('mobileNav');
                    const btn = document.getElementById('mobileNavBtn');
                    const icon = document.getElementById('mobileNavIcon');
                    if (nav && !nav.classList.contains('hidden')) {
                        nav.classList.add('hidden');
                        if (btn) btn.setAttribute('aria-expanded', false);
                        if (icon) icon.setAttribute('name', 'menu');
                    }
                }
            });

            // Close when a mobile nav link is clicked (for SPA or same-page behavior)
            document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('#mobileNav a').forEach(a => {
                    a.addEventListener('click', () => {
                        const nav = document.getElementById('mobileNav');
                        const btn = document.getElementById('mobileNavBtn');
                        const icon = document.getElementById('mobileNavIcon');
                        if (nav) nav.classList.add('hidden');
                        if (btn) btn.setAttribute('aria-expanded', false);
                        if (icon) icon.setAttribute('name', 'menu');
                    });
                });
            });