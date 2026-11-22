class CyberToast {
    /**
     * @param {Object} options - Configuration options
     */
    constructor(options = {}) {
        this.options = {
            position: 'top-right',
            duration: 4000,
            typingSpeed: 30,
            ...options
        };

        this.initContainer();
        this.injectStyles();
    }

    initContainer() {
        const containerId = `cyber-toast-container-${this.options.position}`;

        if (!document.getElementById(containerId)) {
            const container = document.createElement('div');
            container.id = containerId;
            container.className = `cyber-toast-container ${this.options.position}`;
            document.body.appendChild(container);
            this.container = container;
        } else {
            this.container = document.getElementById(containerId);
        }
    }

    injectStyles() {
        if (document.getElementById('cyber-toast-styles')) return;

        const css = `
            .cyber-toast-container {
                position: fixed;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 15px;
                pointer-events: none;
                font-family: 'Courier New', Courier, monospace;
            }

            .cyber-toast-container.top-right { top: calc(var(--nav-height, 80px) + 18px); right: 24px; }
            .cyber-toast-container.bottom-right { bottom: 30px; right: 30px; }
            .cyber-toast-container.top-left { top: 30px; left: 30px; }
            .cyber-toast-container.bottom-left { bottom: 30px; left: 30px; }

            .cyber-toast {
                --toast-accent: #00d9ff;
                --toast-glow: rgba(0, 217, 255, 0.35);
                min-width: 300px;
                max-width: 400px;
                padding: 20px;
                padding-bottom: 24px;
                background: rgba(10, 10, 15, 0.95);
                border: 1px solid var(--toast-accent);
                color: var(--toast-accent);
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
                position: relative;
                overflow: hidden;
                pointer-events: auto;
                cursor: pointer;
                box-shadow:
                    0 0 15px rgba(0, 0, 0, 0.5),
                    0 0 20px var(--toast-glow),
                    inset 0 0 30px rgba(0, 0, 0, 0.4);
                opacity: 0;
                transform: translateX(60px) scale(0.95);
                filter: blur(2px);
                transition:
                    opacity 0.35s ease,
                    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                    filter 0.35s ease;
                background-image:
                    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                background-size: 100% 2px, 3px 100%;
            }

            .cyber-toast::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    180deg,
                    transparent 0%,
                    rgba(255, 255, 255, 0.03) 48%,
                    rgba(255, 255, 255, 0.08) 50%,
                    rgba(255, 255, 255, 0.03) 52%,
                    transparent 100%
                );
                background-size: 100% 200%;
                animation: scanline-sweep 3s linear infinite;
                pointer-events: none;
                opacity: 0.6;
            }

            .cyber-toast::after {
                content: '';
                position: absolute;
                bottom: -1px;
                right: -1px;
                width: 15px;
                height: 15px;
                background: #000;
                border-top: 1px solid var(--toast-accent);
                border-left: 1px solid var(--toast-accent);
            }

            .cyber-toast.success {
                --toast-accent: #00ff41;
                --toast-glow: rgba(0, 255, 65, 0.35);
            }

            .cyber-toast.error {
                --toast-accent: #ff0055;
                --toast-glow: rgba(255, 0, 85, 0.35);
            }

            .cyber-toast.info {
                --toast-accent: #00d9ff;
                --toast-glow: rgba(0, 217, 255, 0.35);
            }

            .cyber-toast.visible {
                opacity: 1;
                transform: translateX(0) scale(1);
                filter: blur(0);
                animation:
                    glitch-entry 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                    neon-pulse 2.5s ease-in-out infinite 0.55s;
            }

            .cyber-toast.visible .glitch-layer {
                animation: rgb-split 0.55s steps(2) 1;
            }

            .cyber-toast.exiting {
                animation: glitch-exit 0.4s ease-in forwards !important;
                pointer-events: none;
            }

            .cyber-toast.paused .cyber-toast-progress {
                animation-play-state: paused;
            }

            .cyber-toast-header {
                font-size: 0.7em;
                opacity: 0.7;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .cyber-toast-header::before {
                content: '>';
                opacity: 0.9;
            }

            .cyber-toast-body {
                position: relative;
                z-index: 1;
            }

            .glitch-layer {
                position: absolute;
                inset: 0;
                pointer-events: none;
                opacity: 0;
                mix-blend-mode: screen;
            }

            .glitch-layer::before,
            .glitch-layer::after {
                content: attr(data-text);
                position: absolute;
                top: 52px;
                left: 20px;
                right: 20px;
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
                white-space: pre-wrap;
                word-break: break-word;
            }

            .glitch-layer::before {
                color: #ff0055;
                clip-path: inset(0 0 55% 0);
                transform: translateX(-3px);
            }

            .glitch-layer::after {
                color: #00d9ff;
                clip-path: inset(45% 0 0 0);
                transform: translateX(3px);
            }

            .text-content {
                position: relative;
                z-index: 1;
            }

            .cursor {
                display: inline-block;
                width: 8px;
                height: 14px;
                background-color: currentColor;
                animation: blink 0.8s step-end infinite;
                vertical-align: middle;
                margin-left: 4px;
                box-shadow: 0 0 6px currentColor;
            }

            .cyber-toast.typing-done .cursor {
                animation: blink 1.2s step-end infinite;
            }

            .cyber-toast-progress {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2px;
                width: 100%;
                background: linear-gradient(
                    90deg,
                    transparent,
                    var(--toast-accent),
                    transparent
                );
                transform-origin: left center;
                opacity: 0.85;
                box-shadow: 0 0 8px var(--toast-glow);
            }

            .cyber-toast.micro-glitch {
                animation: micro-glitch 0.08s steps(2) 1;
            }

            @keyframes micro-glitch {
                0%, 100% { transform: translateX(0); filter: blur(0); }
                25% { transform: translateX(-2px); filter: blur(0.5px); }
                75% { transform: translateX(2px); filter: blur(0.5px); }
            }

            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }

            @keyframes scanline-sweep {
                0% { background-position: 0 -100%; }
                100% { background-position: 0 200%; }
            }

            @keyframes neon-pulse {
                0%, 100% {
                    box-shadow:
                        0 0 15px rgba(0, 0, 0, 0.5),
                        0 0 18px var(--toast-glow),
                        inset 0 0 30px rgba(0, 0, 0, 0.4);
                }
                50% {
                    box-shadow:
                        0 0 15px rgba(0, 0, 0, 0.5),
                        0 0 28px var(--toast-glow),
                        inset 0 0 30px rgba(0, 0, 0, 0.4);
                }
            }

            @keyframes glitch-entry {
                0% {
                    transform: translateX(60px) scale(0.95) skewX(0deg);
                    filter: blur(2px);
                }
                15% {
                    transform: translateX(-8px) scale(1.02) skewX(-6deg);
                    filter: blur(0);
                }
                30% {
                    transform: translateX(6px) scale(0.99) skewX(4deg);
                }
                45% {
                    transform: translateX(-3px) scale(1.01) skewX(-2deg);
                }
                60% {
                    transform: translateX(2px) scale(1) skewX(1deg);
                }
                75% {
                    transform: translateX(-1px) scale(1) skewX(0deg);
                }
                100% {
                    transform: translateX(0) scale(1) skewX(0deg);
                    filter: blur(0);
                }
            }

            @keyframes rgb-split {
                0%, 100% { opacity: 0; }
                10%, 30%, 50% { opacity: 0.7; }
                20%, 40% { opacity: 0; }
            }

            @keyframes glitch-exit {
                0% {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                    filter: blur(0);
                }
                20% {
                    opacity: 0.9;
                    transform: translateX(-6px) scale(1.02) skewX(8deg);
                    filter: blur(0);
                }
                40% {
                    opacity: 0.7;
                    transform: translateX(8px) scale(0.98) skewX(-6deg);
                }
                60% {
                    opacity: 0.4;
                    transform: translateX(-4px) scale(1.01);
                    filter: blur(1px);
                }
                100% {
                    opacity: 0;
                    transform: translateX(40px) scale(0.92);
                    filter: blur(4px);
                }
            }

            @keyframes progress-shrink {
                from { transform: scaleX(1); }
                to { transform: scaleX(0); }
            }
        `;

        const style = document.createElement('style');
        style.id = 'cyber-toast-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    /**
     * @param {string} message
     * @param {string} type - 'success', 'error', or 'info'
     */
    show(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `cyber-toast ${type}`;
        toast.dataset.dismissed = 'false';

        const header = type === 'error' ? '[CRITICAL ERROR]' : '[SYSTEM MESSAGE]';

        toast.innerHTML = `
            <div class="glitch-layer" data-text=""></div>
            <div class="cyber-toast-header">${header}</div>
            <div class="cyber-toast-body">
                <span class="text-content"></span><span class="cursor"></span>
            </div>
            <div class="cyber-toast-progress"></div>
        `;

        this.container.appendChild(toast);

        const glitchLayer = toast.querySelector('.glitch-layer');
        const textContent = toast.querySelector('.text-content');
        const progressBar = toast.querySelector('.cyber-toast-progress');

        void toast.offsetWidth;
        toast.classList.add('visible');

        const typingDuration = message.length * this.options.typingSpeed;
        const totalDuration = this.options.duration + typingDuration;

        progressBar.style.animation = `progress-shrink ${totalDuration}ms linear forwards`;

        toast._dismissTimer = setTimeout(() => this.dismiss(toast), totalDuration);
        toast._remainingTime = totalDuration;
        toast._activeStart = performance.now();

        this.typewriterEffect(textContent, message, glitchLayer, () => {
            toast.classList.add('typing-done');
        });

        toast.onclick = () => this.dismiss(toast);

        toast.onmouseenter = () => {
            if (toast.dataset.dismissed === 'true') return;

            clearTimeout(toast._dismissTimer);
            toast._remainingTime -= performance.now() - toast._activeStart;
            toast.classList.add('paused');
        };

        toast.onmouseleave = () => {
            if (toast.dataset.dismissed === 'true') return;

            toast.classList.remove('paused');
            toast._activeStart = performance.now();
            toast._dismissTimer = setTimeout(() => this.dismiss(toast), toast._remainingTime);
        };
    }

    typewriterEffect(element, text, glitchLayer, onComplete) {
        let i = 0;

        const interval = setInterval(() => {
            element.textContent += text.charAt(i);

            if (glitchLayer) {
                glitchLayer.setAttribute('data-text', element.textContent);
            }

            if (Math.random() < 0.08) {
                element.closest('.cyber-toast')?.classList.add('micro-glitch');
                setTimeout(() => {
                    element.closest('.cyber-toast')?.classList.remove('micro-glitch');
                }, 80);
            }

            i++;
            if (i > text.length - 1) {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, this.options.typingSpeed);
    }

    dismiss(toastElement) {
        if (!toastElement || toastElement.dataset.dismissed === 'true') return;

        toastElement.dataset.dismissed = 'true';
        clearTimeout(toastElement._dismissTimer);

        toastElement.classList.remove('visible', 'paused');
        toastElement.classList.add('exiting');

        setTimeout(() => {
            if (toastElement.parentElement) toastElement.remove();
        }, 400);
    }
}

if (typeof window !== 'undefined') {
    window.CyberToast = CyberToast;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CyberToast;
}
