let activeDinoSlide = 0;
let pendingHeroTitleReplay = false;
let activeDetailDinoId = null;
let directoryDinoIds = [];
let allDinoNavigationIds = [];
let dinoCarouselTimer = null;
let dinoSlideTransitionTimer = null;
let pageLoaderTimer = null;
let motionRevealObserver = null;
let viewSwitchTimer = null;
let viewSwitchGeneration = 0;
const savedViewKey = 'ingenLibraryView';
const savedDetailKey = 'ingenLibraryDetail';
const themeStorageKey = 'ingenLibraryTheme';

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
    initializeHeroTitleAnimation();
    initializeThemeToggle();
    initializeDirectoryTransitions();
    initializeMotionReveals();
    initializeComparison();
    initializeNewsStories();
    renderDirectory(dinosaurs);
    initializeDinoCarousel();
    updateHomepageCounts();
    restoreViewAfterReload();
    hidePageLoader(0, () => {
        animatePageChrome();
        const activeView = document.querySelector('.view-section.active, .detail-view.active');
        if (activeView) {
            animateViewElements(activeView);
        }
        startHeroVisualAnimations();
    });
});

function initializeHeroTitleAnimation() {
    const heading = document.querySelector('.dino-carousel-title h2');
    if (!heading) return;

    const words = heading.textContent.trim().split(/\s+/);
    heading.textContent = '';
    heading.setAttribute('aria-label', words.join(' '));

    words.forEach((word, wordIndex) => {
        const wordElement = document.createElement('span');
        wordElement.className = 'title-word';
        wordElement.setAttribute('aria-hidden', 'true');

        Array.from(word).forEach((character, characterIndex) => {
            const characterElement = document.createElement('span');
            characterElement.className = 'title-char';
            characterElement.style.setProperty(
                '--char-delay',
                `${wordIndex * 100 + characterIndex * 20}ms`
            );
            characterElement.textContent = character;
            wordElement.appendChild(characterElement);
        });

        heading.appendChild(wordElement);
        if (wordIndex < words.length - 1) {
            heading.appendChild(document.createTextNode(' '));
        }
    });

}

function replayHeroTitleAnimation() {
    const heading = document.querySelector('.dino-carousel-title h2');
    if (!heading) return;

    heading.classList.remove('is-animating');
    void heading.offsetWidth;
    heading.classList.add('is-animating');
}

function startHeroVisualAnimations(replayTitle = false) {
    const homeView = document.getElementById('view-home');
    const image = homeView.querySelector('.dino-carousel-slide.active img');
    const heading = homeView.querySelector('.dino-carousel-title h2');
    if (!image || !heading) return;

    if (!image.complete || image.naturalWidth === 0) {
        pendingHeroTitleReplay = pendingHeroTitleReplay || replayTitle;
        return;
    }

    image.classList.add('is-ready');
    if (
        !document.documentElement.classList.contains('page-intro-ready') ||
        !homeView.classList.contains('active')
    ) {
        pendingHeroTitleReplay = pendingHeroTitleReplay || replayTitle;
        return;
    }

    image.classList.remove('is-intro-animating');
    void image.offsetWidth;
    image.classList.add('is-intro-animating');

    if (replayTitle || pendingHeroTitleReplay || !heading.classList.contains('is-animating')) {
        replayHeroTitleAnimation();
    }
    pendingHeroTitleReplay = false;
}

function hidePageLoader(delay = 0, onHidden = () => {}) {
    const loader = document.getElementById('pageLoader');
    if (!loader) {
        document.body.classList.remove('page-loading');
        document.documentElement.classList.add('page-intro-ready');
        onHidden();
        return;
    }

    window.clearTimeout(pageLoaderTimer);
    pageLoaderTimer = window.setTimeout(() => {
        loader.classList.remove('is-visible');
        pageLoaderTimer = window.setTimeout(() => {
            if (!loader.classList.contains('is-visible')) {
                loader.hidden = true;
                loader.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('page-loading');
                document.documentElement.classList.add('page-intro-ready');
                onHidden();
            }
        }, 120);
    }, delay);
}

function initializeDirectoryTransitions() {
    const grid = document.getElementById('dinoGrid');
    grid.addEventListener('animationend', event => {
        if (event.target === grid && event.animationName === 'directory-results-in') {
            grid.classList.remove('is-filtering');
        }
    });
}

function initializeMotionReveals() {
    if (!('IntersectionObserver' in window)) return;

    motionRevealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-revealed');
            motionRevealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -24px 0px'
    });
}

function animateViewElements(view) {
    const viewMotionSelectors = {
        'view-home': '.dino-carousel-controls, .hero-content h2, .hero-content p, .hero-content .btn-primary, .stat-item, .section-header, .movie-card',
        'view-encyclopedia': '.directory-section-header, .controls-bar, .dino-card',
        'view-compare': '.compare-header, .compare-controls, .compare-results, .compare-card',
        'view-news': '.news-section-header, .news-card',
        'view-detail': '.back-btn, .detail-header, .detail-grid > *, .detail-video-panel, .detail-extra-grid > .detail-panel'
    };
    const selector = view && viewMotionSelectors[view.id];
    if (!selector) return;

    observeMotionElements(view.querySelectorAll(selector));
}

function animatePageChrome() {
    observeMotionElements(document.querySelectorAll('header .logo-group, header .nav-links > li, footer .footer-container'));
}

function observeMotionElements(elements) {
    elements.forEach((element, index) => {
        if (motionRevealObserver) {
            motionRevealObserver.unobserve(element);
        }

        element.classList.remove('motion-reveal', 'is-revealed');
        element.style.setProperty('--motion-delay', `${(index % 6) * 35}ms`);
        element.classList.add('motion-reveal');

        if (motionRevealObserver) {
            motionRevealObserver.observe(element);
        } else {
            element.classList.add('is-revealed');
        }
    });
}

function updateHomepageCounts() {
    const countElement = document.getElementById('catalogedSpecimenCount');
    if (countElement) {
        countElement.textContent = String(dinosaurs.length);
    }

    const mediaCards = document.querySelectorAll('.movie-card[data-movie]');
    const mediaArchiveCount = document.getElementById('mediaArchiveCount');
    if (mediaArchiveCount) {
        mediaArchiveCount.textContent = String(mediaCards.length);
    }

    mediaCards.forEach(card => {
        const movieName = card.dataset.movie;
        const sourceNames = [movieName];
        const count = dinosaurs.filter(dino =>
            sourceNames.includes(dino.movie) ||
            (Array.isArray(dino.media) && sourceNames.some(sourceName => dino.media.includes(sourceName)))
        ).length;
        const countElementInCard = card.querySelector('.movie-specimen-count');
        if (countElementInCard) {
            countElementInCard.textContent = `${count} Specimen${count === 1 ? '' : 's'}`;
        }
    });
}

function initializeComparison() {
    const specimenA = document.getElementById('compareSpecimenA');
    const specimenB = document.getElementById('compareSpecimenB');
    const sortedDinosaurs = [...dinosaurs].sort((a, b) => a.name.localeCompare(b.name));

    sortedDinosaurs.forEach(dino => {
        [specimenA, specimenB].forEach(select => {
            const option = document.createElement('option');
            option.value = dino.id;
            option.textContent = dino.name;
            select.appendChild(option);
        });
    });

    specimenA.value = 'tyrannosaurus-rex';
    specimenB.value = 'spinosaurus';
    specimenA.addEventListener('change', renderComparison);
    specimenB.addEventListener('change', renderComparison);
    document.getElementById('compareRandom').addEventListener('click', () => {
        const firstIndex = Math.floor(Math.random() * dinosaurs.length);
        let secondIndex = Math.floor(Math.random() * (dinosaurs.length - 1));
        if (secondIndex >= firstIndex) secondIndex += 1;

        specimenA.value = dinosaurs[firstIndex].id;
        specimenB.value = dinosaurs[secondIndex].id;
        renderComparison();
    });

    renderComparison();
}

function initializeNewsStories() {
    const grid = document.getElementById('newsGrid');
    const dialog = document.getElementById('newsStoryDialog');
    const dialogContent = document.getElementById('newsStoryDialogContent');
    const closeButton = dialog && dialog.querySelector('.news-story-close');

    if (!(grid instanceof HTMLElement) ||
        !(dialog instanceof HTMLDialogElement) ||
        !(dialogContent instanceof HTMLElement) ||
        !(closeButton instanceof HTMLButtonElement)) {
        throw new Error('News story dialog markup is incomplete.');
    }

    const openStory = card => {
        const storyId = card.dataset.newsStory;
        const storyTemplate = document.getElementById(`news-story-${storyId}`);
        if (!(storyTemplate instanceof HTMLTemplateElement)) {
            throw new Error(`Missing news story template for "${storyId}".`);
        }

        dialogContent.replaceChildren(storyTemplate.content.cloneNode(true));
        dialog.showModal();
    };

    grid.addEventListener('click', event => {
        const card = event.target instanceof Element
            ? event.target.closest('.news-card[data-news-story]')
            : null;
        if (card) openStory(card);
    });

    grid.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;

        const card = event.target instanceof Element
            ? event.target.closest('.news-card[data-news-story]')
            : null;
        if (!card || event.target !== card) return;

        event.preventDefault();
        openStory(card);
    });

    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && dialog.open) {
            event.preventDefault();
            dialog.close();
        }
    });
}

function renderComparison() {
    const specimenA = dinosaurs.find(dino => dino.id === document.getElementById('compareSpecimenA').value);
    const specimenB = dinosaurs.find(dino => dino.id === document.getElementById('compareSpecimenB').value);
    const results = document.getElementById('compareResults');
    results.replaceChildren();

    if (!specimenA || !specimenB) return;
    if (specimenA.id === specimenB.id) {
        const message = document.createElement('p');
        message.className = 'compare-validation-message';
        message.textContent = 'Choose two different specimens to compare.';
        results.appendChild(message);
        return;
    }

    [specimenA, specimenB].forEach(dino => {
        const knowledge = dinosaurKnowledge[dino.id];
        const card = document.createElement('article');
        card.className = 'comparison-card';

        const image = document.createElement('img');
        image.className = 'comparison-image';
        image.src = dino.image;
        image.alt = dino.name;
        image.loading = 'lazy';
        card.appendChild(image);

        const heading = document.createElement('h4');
        heading.textContent = dino.name;
        card.appendChild(heading);

        const rows = [
            ['Species', dino.species],
            ['Classification', knowledge.classification],
            ['Family', knowledge.family],
            ['Diet', dino.diet],
            ['Era', knowledge.period],
            ['Length', dino.length],
            ['Height', dino.height],
            ['Weight', dino.weight]
        ];
        if (dino.eggBatchSize) {
            rows.push(['Egg batch size', dino.eggBatchSize]);
        }
        const details = document.createElement('dl');
        details.className = 'comparison-data';
        rows.forEach(([label, value]) => {
            const row = document.createElement('div');
            row.className = 'comparison-data-row';
            const term = document.createElement('dt');
            term.textContent = label;
            const description = document.createElement('dd');
            description.textContent = value;
            row.append(term, description);
            details.appendChild(row);
        });
        card.appendChild(details);

        const history = document.createElement('p');
        history.className = 'comparison-history';
        history.textContent = knowledge.history;
        card.appendChild(history);

        const profileButton = document.createElement('button');
        profileButton.type = 'button';
        profileButton.className = 'comparison-profile-button';
        profileButton.textContent = 'Open specimen profile';
        profileButton.addEventListener('click', () => showDetail(dino.id));
        card.appendChild(profileButton);
        results.appendChild(card);
    });
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const applyTheme = theme => {
        const isLight = theme === 'light';
        root.dataset.theme = isLight ? 'light' : 'dark';
        themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        themeToggle.setAttribute('aria-pressed', String(isLight));
        themeToggle.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    };

    applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
    themeToggle.addEventListener('click', () => {
        if (themeToggle.classList.contains('theme-transitioning')) return;

        const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(themeStorageKey, nextTheme);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const backgroundDuration = prefersReducedMotion ? 360 : 550;
        const iconDuration = prefersReducedMotion ? 360 : 750;
        const buttonAnimationClass = `theme-switching-to-${nextTheme}`;
        root.classList.add('theme-background-transitioning');
        themeToggle.classList.add('theme-transitioning', buttonAnimationClass);
        applyTheme(nextTheme);
        window.setTimeout(() => root.classList.remove('theme-background-transitioning'), backgroundDuration);
        window.setTimeout(() => {
            themeToggle.classList.remove(buttonAnimationClass, 'theme-transitioning');
        }, iconDuration);
    });
}

function reloadHome() {
    sessionStorage.setItem(savedViewKey, 'home');
    sessionStorage.removeItem(savedDetailKey);
    window.location.reload();
}

function restoreViewAfterReload() {
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (!navigationEntry || navigationEntry.type !== 'reload') return;

    history.scrollRestoration = 'manual';
    const savedView = sessionStorage.getItem(savedViewKey);
    if (!['home', 'encyclopedia', 'compare', 'news', 'detail'].includes(savedView)) return;

    const detailId = sessionStorage.getItem(savedDetailKey);
    if (savedView === 'detail' && detailId && dinosaurs.some(dino => dino.id === detailId)) {
        showDetail(detailId, false);
    } else {
        switchView(savedView, { scrollToTop: false });
    }
    window.scrollTo(0, 0);
}

function initializeDinoCarousel() {
    const slidesContainer = document.getElementById('dinoCarouselSlides');
    const dotsContainer = document.getElementById('dinoCarouselDots');
    homeSlideImages.forEach((slideData, index) => {
        const slide = document.createElement('article');
        slide.className = `dino-carousel-slide${index === 0 ? ' active' : ''}`;
        slide.dataset.dinoId = slideData.dinoId;
        slide.setAttribute('aria-hidden', String(index !== 0));
        slide.setAttribute('role', 'button');
        slide.setAttribute('aria-label', `Open ${slideData.name} in the Encyclopedia`);
        slide.tabIndex = index === 0 ? 0 : -1;
        slide.addEventListener('click', () => showDetail(slideData.dinoId));
        slide.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                showDetail(slideData.dinoId);
            }
        });

        const image = document.createElement('img');
        image.src = slideData.src;
        image.alt = slideData.name;
        image.loading = 'eager';
        image.addEventListener('animationend', event => {
            if (event.animationName === 'hero-specimen-in') {
                image.classList.remove('is-intro-animating');
            }
        });

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `dino-carousel-dot${index === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Show ${slideData.name}`);
        dot.setAttribute('aria-current', String(index === 0));
        dot.addEventListener('click', () => {
            setDinoSlide(Array.from(dotsContainer.children).indexOf(dot));
            restartDinoCarousel();
        });

        image.addEventListener('load', () => {
            image.classList.add('is-ready');
            if (slide.classList.contains('active')) {
                startHeroVisualAnimations();
            }
            startDinoCarousel();
        });
        image.addEventListener('error', () => {
            console.warn(`Homepage slideshow image could not be loaded: ${slideData.src}`);

            window.clearTimeout(dinoSlideTransitionTimer);
            dinoSlideTransitionTimer = null;

            const slides = Array.from(slidesContainer.children);
            const removedIndex = slides.indexOf(slide);
            const activeIndex = slides.findIndex(item => item.classList.contains('active'));

            slide.remove();
            dot.remove();

            const remainingSlides = slidesContainer.children.length;
            Array.from(dotsContainer.children).forEach((item, dotIndex) => {
                item.setAttribute('aria-label', `Show photo ${dotIndex + 1}`);
            });

            if (remainingSlides === 0) {
                activeDinoSlide = 0;
                pauseDinoCarousel();
                return;
            }

            const nextActiveIndex = activeIndex > removedIndex
                ? activeIndex - 1
                : Math.max(0, Math.min(activeIndex, remainingSlides - 1));
            activeDinoSlide = nextActiveIndex;

            Array.from(slidesContainer.children).forEach((item, slideIndex) => {
                item.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
                const isActive = slideIndex === activeDinoSlide;
                item.classList.toggle('active', isActive);
                item.setAttribute('aria-hidden', String(!isActive));
                item.tabIndex = isActive ? 0 : -1;
            });
            Array.from(dotsContainer.children).forEach((item, dotIndex) => {
                const isActive = dotIndex === activeDinoSlide;
                item.classList.toggle('active', isActive);
                item.setAttribute('aria-current', String(isActive));
            });
            startHeroVisualAnimations();

            if (remainingSlides < 2) {
                pauseDinoCarousel();
            } else {
                startDinoCarousel();
            }
        });

        slide.appendChild(image);
        slidesContainer.appendChild(slide);
        dotsContainer.appendChild(dot);
    });

    const resumeCarousel = () => {
        if (document.getElementById('view-home').classList.contains('active')) {
            startDinoCarousel();
        }
    };

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseDinoCarousel();
        } else {
            resumeCarousel();
        }
    });

    window.setTimeout(startDinoCarousel, 300);
}

function setDinoSlide(index, direction) {
    const slides = document.querySelectorAll('.dino-carousel-slide');
    const dots = document.querySelectorAll('.dino-carousel-dot');
    if (slides.length === 0) {
        activeDinoSlide = 0;
        return;
    }

    const previousIndex = activeDinoSlide;
    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === previousIndex || dinoSlideTransitionTimer) {
        return;
    }

    if (direction !== 1 && direction !== -1) {
        const forwardDistance = (nextIndex - previousIndex + slides.length) % slides.length;
        const backwardDistance = (previousIndex - nextIndex + slides.length) % slides.length;
        direction = forwardDistance <= backwardDistance ? 1 : -1;
    }

    slides.forEach(slide => {
        slide.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
        const image = slide.querySelector('img');
        if (image) {
            image.classList.remove('is-intro-animating');
        }
    });

    const previousSlide = slides[previousIndex];
    const nextSlide = slides[nextIndex];
    previousSlide.classList.remove('active');
    previousSlide.classList.add(direction > 0 ? 'exit-left' : 'exit-right');
    nextSlide.classList.add(direction > 0 ? 'enter-from-right' : 'enter-from-left');
    nextSlide.classList.add('active');

    activeDinoSlide = nextIndex;

    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeDinoSlide;
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.tabIndex = isActive ? 0 : -1;
    });

    dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeDinoSlide;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', String(isActive));
    });

    const transitionDuration = parseFloat(window.getComputedStyle(nextSlide).animationDuration) * 1000;
    dinoSlideTransitionTimer = window.setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
        });
        dinoSlideTransitionTimer = null;
    }, transitionDuration + 50);
}

function changeDinoSlide(direction) {
    setDinoSlide(activeDinoSlide + direction, direction > 0 ? 1 : -1);
    restartDinoCarousel();
}

function restartDinoCarousel() {
    pauseDinoCarousel();
    startDinoCarousel();
}

function startDinoCarousel() {
    if (
        dinoCarouselTimer ||
        document.hidden ||
        !document.getElementById('view-home').classList.contains('active') ||
        document.querySelectorAll('.dino-carousel-slide').length < 2
    ) {
        return;
    }

    dinoCarouselTimer = window.setInterval(() => changeDinoSlide(1), 6000);
}

function pauseDinoCarousel() {
    window.clearInterval(dinoCarouselTimer);
    dinoCarouselTimer = null;
}

function resetDinoCarousel() {
    window.clearTimeout(dinoSlideTransitionTimer);
    dinoSlideTransitionTimer = null;
    activeDinoSlide = 0;

    document.querySelectorAll('.dino-carousel-slide').forEach((slide, index) => {
        slide.classList.remove('exit-left', 'exit-right', 'enter-from-left', 'enter-from-right');
        const isActive = index === 0;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.tabIndex = isActive ? 0 : -1;
    });

    document.querySelectorAll('.dino-carousel-dot').forEach((dot, index) => {
        const isActive = index === 0;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', String(isActive));
    });
}

// Switch Views
function switchView(viewName, { scrollToTop = true, detailId = null } = {}) {
    const targetView = document.getElementById(`view-${viewName}`);
    const isViewChange = targetView && !targetView.classList.contains('active');
    const currentView = document.querySelector('.view-section.active, .detail-view.active');
    const switchGeneration = ++viewSwitchGeneration;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (viewSwitchTimer) {
        window.clearTimeout(viewSwitchTimer);
        viewSwitchTimer = null;
    }
    document.querySelectorAll('.is-view-leaving').forEach(view => {
        view.classList.remove('is-view-leaving');
    });

    if (viewName !== 'detail') {
        stopSpecimenVideo();
    }

    sessionStorage.setItem(savedViewKey, viewName);
    if (detailId) {
        sessionStorage.setItem(savedDetailKey, detailId);
    } else {
        sessionStorage.removeItem(savedDetailKey);
    }

    const updateView = () => {
        const scrollViewToTop = () => {
            if (!scrollToTop) return;
            if (prefersReducedMotion) {
                window.scrollTo(0, 0);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        document.body.classList.toggle('home-mode', viewName === 'home');
        document.body.classList.toggle('encyclopedia-mode', viewName === 'encyclopedia');
        document.body.classList.toggle('compare-mode', viewName === 'compare');
        document.body.classList.toggle('news-mode', viewName === 'news');
        document.body.classList.toggle('detail-mode', viewName === 'detail');

        document.querySelectorAll('.view-section, .detail-view').forEach(el => {
            el.classList.remove('active', 'is-view-leaving');
        });

        document.querySelectorAll('.nav-links button').forEach(btn => {
            btn.classList.remove('active');
        });

        if (viewName === 'home') {
            resetDinoCarousel();
            document.getElementById('view-home').classList.add('active');
            document.getElementById('nav-home').classList.add('active');
            startHeroVisualAnimations(true);
            scrollViewToTop();
        } else if (viewName === 'encyclopedia') {
            document.getElementById('view-encyclopedia').classList.add('active');
            document.getElementById('nav-encyclopedia').classList.add('active');
            scrollViewToTop();
        } else if (viewName === 'compare') {
            document.getElementById('view-compare').classList.add('active');
            document.getElementById('nav-compare').classList.add('active');
            scrollViewToTop();
        } else if (viewName === 'news') {
            document.getElementById('view-news').classList.add('active');
            document.getElementById('nav-news').classList.add('active');
            scrollViewToTop();
        } else if (viewName === 'detail') {
            document.getElementById('view-detail').classList.add('active');
            if (scrollToTop) window.scrollTo(0, 0);
        }

        if (viewName === 'home') {
            startDinoCarousel();
        } else {
            pauseDinoCarousel();
        }

        animateViewElements(targetView);
    };

    if (isViewChange && currentView) {
        currentView.classList.add('is-view-leaving');
        viewSwitchTimer = window.setTimeout(() => {
            viewSwitchTimer = null;
            if (switchGeneration === viewSwitchGeneration) {
                updateView();
            }
        }, 160);
    } else {
        updateView();
    }
}

// Filter by Movie from Homepage cards
function filterByMovie(movieName) {
    switchView('encyclopedia');
    document.getElementById('movieFilter').value = movieName;
    filterDinosaurs();
}

function getDietIcon(dino) {
    if (dino.type === 'Hybrid') {
        return {
            category: 'hybrid',
            label: 'Hybrid',
            emoji: '🧬'
        };
    }

    const diet = dino.diet.toLowerCase();

    if (diet.includes('omnivore')) {
        return {
            category: 'omnivore',
            label: 'Omnivore',
            emoji: '🍽️'
        };
    }

    if (diet.includes('herbivore')) {
        return {
            category: 'herbivore',
            label: 'Herbivore',
            svg: '<path d="M20 4C12 4 6 7 6 13a5 5 0 0 0 5 5c6 0 9-6 9-14Z"/><path d="M4 20c4-5 8-8 13-11"/>'
        };
    }

    if (dino.type === 'Amphibian' || diet.includes('piscivore') || diet.includes('amphibian')) {
        const isAmphibian = dino.type === 'Amphibian' || diet.includes('amphibian');
        return {
            category: isAmphibian ? 'aquatic' : 'piscivore',
            label: isAmphibian ? 'Amphibian' : 'Piscivore',
            svg: '<path d="M12 3s6.5 7.1 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10.1 12 3 12 3Z"/>'
        };
    }

    return {
        category: 'carnivore',
        label: 'Carnivore',
        emoji: '🥩'
    };
}

function setSpecimenImageFallback(image) {
    image.onerror = () => {
        image.onerror = null;
        image.src = 'specimen-image-placeholder.svg';
    };
}

function stopSpecimenVideo() {
    const detailVideo = document.getElementById('detailVideo');
    detailVideo.pause();
    detailVideo.removeAttribute('src');
    detailVideo.load();
    detailVideo.hidden = true;

    const detailVideoEmbed = document.getElementById('detailVideoEmbed');
    detailVideoEmbed.src = 'about:blank';
    detailVideoEmbed.hidden = true;
}

// Render Dinosaur Directory Grid
function renderDirectory(data, { animate = false } = {}) {
    const grid = document.getElementById('dinoGrid');
    if (animate) {
        grid.classList.remove('is-filtering');
        void grid.offsetWidth;
        grid.classList.add('is-filtering');
    }
    grid.innerHTML = '';

    if (data.length === 0) {
        directoryDinoIds = [];
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No specimens match your search criteria.</p>`;
        return;
    }

    const sortOrder = document.getElementById('sortOrder').value;
    const orderedData = [...data].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        }
        if (sortOrder === 'desc') {
            return b.name.localeCompare(a.name);
        }

        const aRank = featuredDinoIds.indexOf(a.id);
        const bRank = featuredDinoIds.indexOf(b.id);
        return (aRank === -1 ? featuredDinoIds.length : aRank)
            - (bRank === -1 ? featuredDinoIds.length : bRank);
    });
    directoryDinoIds = orderedData.map(dino => dino.id);
    if (data.length === dinosaurs.length) {
        allDinoNavigationIds = [...directoryDinoIds];
    }

    orderedData.forEach(dino => {
        const dietIcon = getDietIcon(dino);
        const card = document.createElement('div');
        card.className = 'dino-card';
        card.onclick = () => showDetail(dino.id);
        card.innerHTML = `
            <div class="dino-image-container">
                <h4 class="dino-card-name">${dino.name}</h4>
                <span class="dino-diet-icon dino-diet-icon-${dietIcon.category}" role="img" aria-label="${dietIcon.label}" title="${dietIcon.label}">
                    ${dietIcon.emoji
                        ? `<span class="dino-diet-emoji" aria-hidden="true">${dietIcon.emoji}</span>`
                        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${dietIcon.svg}</svg>`}
                </span>
                <img src="${dino.image}" alt="${dino.name}" data-specimen-id="${dino.id}" loading="lazy">
            </div>
        `;
        setSpecimenImageFallback(card.querySelector('img'));
        grid.appendChild(card);
    });
}

// Filter Logic
function resetDinosaursFilter() {
    document.getElementById('searchInput').value = '';
    document.getElementById('movieFilter').value = '';
    document.getElementById('dietFilter').value = '';
    document.getElementById('sortOrder').value = '';
    filterDinosaurs();

    const resetButton = document.getElementById('resetFilters');
    resetButton.classList.remove('is-spinning');
    void resetButton.offsetWidth;
    resetButton.classList.add('is-spinning');
}

function filterDinosaurs() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const selectedMovie = document.getElementById('movieFilter').value;
    const selectedDiet = document.getElementById('dietFilter').value;

    const filtered = dinosaurs.filter(dino => {
        const matchesQuery = dino.name.toLowerCase().includes(query) || dino.species.toLowerCase().includes(query);
        const selectedMovieSources = [selectedMovie];
        const matchesMovie = selectedMovie === "" || selectedMovieSources.includes(dino.movie) ||
            (Array.isArray(dino.media) && selectedMovieSources.some(sourceName => dino.media.includes(sourceName)));
        const matchesDiet = selectedDiet === "" ||
            (selectedDiet === "Hybrid" ? dino.type === selectedDiet : dino.diet === selectedDiet);
        return matchesQuery && matchesMovie && matchesDiet;
    });

    renderDirectory(filtered, { animate: true });
}

function renderDinosaurFaq(dino, knowledge) {
    const appearances = [...new Set([dino.movie, ...(Array.isArray(dino.media) ? dino.media : [])])];
    const faqItems = [
        {
            question: `What is ${dino.name}'s scientific classification?`,
            answer: `${knowledge.classification} Family: ${knowledge.family}. Genus: ${knowledge.genus}. Recorded species: ${dino.species}.`
        },
        {
            question: `Where did ${dino.name} live, or where have its fossils been found?`,
            answer: knowledge.range
        },
        {
            question: `What did ${dino.name} eat?`,
            answer: knowledge.dietAnswer
        },
        {
            question: `How large was ${dino.name}?`,
            answer: dino.sourceUrl
                ? `The official profile lists a length of ${dino.length}, a height of ${dino.height}, and a weight of ${dino.weight}.`
                : `This archive lists a length of ${dino.length}, a height of ${dino.height}, and a weight of ${dino.weight}. These are approximate reference figures; measurements vary by specimen, and fictional hybrids have no fossil-based measurements.`
        },
        {
            question: `When did ${dino.name} live?`,
            answer: knowledge.period
        },
        {
            question: `Which film, series, or game features ${dino.name}?`,
            answer: `Recorded appearances: ${appearances.join(", ")}. ${knowledge.movieAnswer}`
        }
    ];
    const faqList = document.getElementById('dinoFaqList');
    faqList.replaceChildren();

    faqItems.forEach(item => {
        const entry = document.createElement('details');
        entry.className = 'dino-faq-item';

        const question = document.createElement('summary');
        question.textContent = item.question;

        const answer = document.createElement('p');
        answer.textContent = item.answer;

        entry.append(question, answer);
        faqList.appendChild(entry);
    });
}

function renderContainmentTimeline(dino) {
    const timeline = document.getElementById('containmentTimeline');
    const sources = [...new Set([dino.movie, ...(Array.isArray(dino.media) ? dino.media : [])])];
    const appearances = sources.sort((a, b) => {
        const aIndex = franchiseContainmentOrder.indexOf(a);
        const bIndex = franchiseContainmentOrder.indexOf(b);
        return (aIndex < 0 ? franchiseContainmentOrder.length : aIndex)
            - (bIndex < 0 ? franchiseContainmentOrder.length : bIndex);
    });
    const primaryContext = getContainmentContext(dino, dino.movie);
    document.getElementById('specPrimaryLocation').textContent =
        `${primaryContext.location} (based on ${dino.movie})`;
    timeline.replaceChildren();

    appearances.forEach(source => {
        const context = getContainmentContext(dino, source);
        const item = document.createElement('li');
        item.className = 'containment-timeline-entry';

        const title = document.createElement('h4');
        title.textContent = source;

        const location = document.createElement('p');
        location.className = 'containment-timeline-location';
        location.textContent = context.location;

        const status = document.createElement('p');
        status.textContent = context.status;

        item.append(title, location, status);
        timeline.appendChild(item);
    });
}

function getContainmentContext(dino, source) {
    const speciesContexts = speciesContainmentContexts[dino.id];
    if (speciesContexts && speciesContexts[source]) {
        return speciesContexts[source];
    }

    return franchiseContainmentContexts[source] || {
        location: "Location not established",
        status: "No location or containment details are recorded for this source."
    };
}

function renderDnaSplicing(dino) {
    const panel = document.getElementById('dnaSplicingPanel');
    const componentList = document.getElementById('dnaComponentList');
    panel.hidden = dino.type !== 'Hybrid';
    componentList.replaceChildren();
    if (panel.hidden) return;

    const record = hybridDnaRecords[dino.id];
    document.getElementById('dnaSplicingNote').textContent = record
        ? record.note
        : 'The available story records do not specify this hybrid’s genetic components.';

    const components = record ? record.components : [];
    if (components.length === 0) {
        const unknownComponent = document.createElement('li');
        unknownComponent.className = 'dna-component-undisclosed';
        unknownComponent.textContent = 'Source species not disclosed';
        componentList.appendChild(unknownComponent);
        return;
    }

    components.forEach(component => {
        const item = document.createElement('li');
        const componentContent = component.dinoId
            ? document.createElement('button')
            : document.createElement('span');
        if (component.dinoId) {
            componentContent.type = 'button';
            componentContent.className = 'dna-component-link';
            componentContent.addEventListener('click', () => showDetail(component.dinoId));
        }

        if (component.image) {
            const image = document.createElement('img');
            image.className = 'dna-component-image';
            image.src = component.image;
            image.alt = '';
            image.loading = 'lazy';
            componentContent.appendChild(image);
        }

        const name = document.createElement('span');
        name.textContent = component.name;
        componentContent.appendChild(name);
        item.appendChild(componentContent);
        componentList.appendChild(item);
    });
}

function getEstimatedRiskLevel(dino) {
    if ([
        'therizinosaurus',
        'brachiosaurus',
        'triceratops',
        'stegosaurus',
        'mamenchisaurus',
        'ankylosaurus',
        'stygimoloch',
        'sinoceratops',
        'corythosaurus',
        'parasaurolophus',
        'iguanodon',
        'ouranosaurus',
        'kentrosaurus',
        'spinoceratops',
        'apatosaurus',
        'dreadnoughtus',
        'titanosaurus'
    ].includes(dino.id)) {
        return 'Moderate';
    }

    if ([
        'tyrannosaurus-rex',
        'indominus-rex',
        'indoraptor',
        'velociraptor',
        'spinosaurus',
        'baryonyx',
        'allosaurus',
        'carnotaurus',
        'acrocanthosaurus',
        'carcharodontosaurus',
        'majungasaurus',
        'megalosaurus',
        'suchomimus',
        'mosasaurus',
        'scorpios-rex',
        'monolophosaurus',
        'distortus-rex',
        'mutadon'
    ].includes(dino.id)) {
        return 'Extreme';
    }

    const weight = Number.parseFloat(dino.weight.replace(/,/g, '')) || 0;
    const lengthText = dino.length || '';
    const length = Number.parseFloat(lengthText) || 0;

    if (dino.diet === 'Carnivore') return 'High';

    if (dino.type === 'Hybrid') {
        return 'Moderate';
    }

    if (/wingspan/i.test(lengthText)) {
        if (weight >= 200) return 'High';
        if (weight >= 30) return 'Moderate';
        return 'Low';
    }

    if (dino.diet === 'Piscivore') {
        if (length >= 12 || weight >= 8000) return 'Extreme';
        if (length >= 8 || weight >= 1000) return 'High';
        if (length >= 3 || weight >= 100) return 'Moderate';
        return 'Low';
    }

    if (dino.id === 'pachycephalosaurus') return 'Moderate';
    if (length >= 20 || weight >= 20000) return 'High';
    if (length >= 7 || weight >= 2000) return 'Moderate';
    return 'Low';
}

// Show Specimen Detail View
function showDetail(dinoId, scrollToTop = true) {
    const dino = dinosaurs.find(d => d.id === dinoId);
    if (!dino) return;
    activeDetailDinoId = dino.id;

    const knowledge = dinosaurKnowledge[dino.id];
    const detailName = dino.type === "Hybrid" ? `${dino.name} (fictional hybrid)` : dino.species;
    document.getElementById('detailName').innerText = detailName;
    document.getElementById('detailSub').innerText = `${knowledge.family} • ${knowledge.period}`;
    document.getElementById('specFamily').innerText = knowledge.family;
    document.getElementById('specGenus').innerText = knowledge.genus;
    document.getElementById('specDiet').innerText = knowledge.diet;
    document.getElementById('specLength').innerText = dino.length;
    document.getElementById('specHeight').innerText = dino.height;
    document.getElementById('specWeight').innerText = dino.weight;
    document.getElementById('specEra').innerText = knowledge.period;
    const riskLevel = getEstimatedRiskLevel(dino);
    const riskLevelElement = document.getElementById('specRiskLevel');
    riskLevelElement.innerText = riskLevel;
    riskLevelElement.className = `spec-value spec-status risk-level-${riskLevel.toLowerCase()}`;
    const archiveSources = [dino.movie, ...(Array.isArray(dino.media) ? dino.media : [])];
    document.getElementById('specMovie').innerText = [...new Set(archiveSources)].join(", ");
    renderContainmentTimeline(dino);

    const detailImage = document.getElementById('detailImg');
    setSpecimenImageFallback(detailImage);
    detailImage.src = dino.image.replace('fit=crop', 'fit=clip');
    detailImage.alt = dino.name;
    detailImage.dataset.specimenId = dino.id;
    document.getElementById('detailTitle').innerText = `Archival Record: ${dino.name}`;
    document.getElementById('detailDesc').innerText = dino.description;
    document.getElementById('videoPlaceholderName').textContent = dino.name;

    const detailVideoPanel = document.getElementById('detailVideoPanel');
    const detailVideo = document.getElementById('detailVideo');
    const detailVideoEmbed = document.getElementById('detailVideoEmbed');
    const detailVideoExternalLink = document.getElementById('detailVideoExternalLink');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoHint = videoPlaceholder.querySelector('.video-slot-hint');
    const videoSource = specimenVideoFiles[dino.id];
    const hasSpecimenVideo = !specimensWithoutVideo.has(dino.id);
    detailVideoPanel.hidden = !hasSpecimenVideo;
    stopSpecimenVideo();
    detailVideoExternalLink.hidden = true;
    detailVideoExternalLink.textContent = 'Open video on YouTube';
    videoPlaceholder.hidden = false;
    videoHint.textContent = 'Set an HTTPS MP4/WebM or YouTube watch/share URL in specimenVideoFiles in script.js. YouTube embeds need localhost or HTTPS hosting.';

    if (hasSpecimenVideo) {
        const youtubeEmbedUrl = getYouTubeEmbedUrl(videoSource);
        const isYoutubeUrl = /^https:\/\/(?:(?:www|m)\.)?(?:youtube\.com|youtu\.be)\//i.test(videoSource || '');
        const canEmbedYouTube = window.location.protocol !== 'file:';
        if (youtubeEmbedUrl && canEmbedYouTube) {
            detailVideoEmbed.src = youtubeEmbedUrl;
            detailVideoEmbed.hidden = false;
            detailVideoExternalLink.hidden = false;
            detailVideoExternalLink.href = videoSource;
            videoPlaceholder.hidden = true;
        } else if (youtubeEmbedUrl) {
            detailVideoExternalLink.href = videoSource;
            detailVideoExternalLink.textContent = `Open ${dino.name} video on YouTube`;
            detailVideoExternalLink.hidden = false;
            videoHint.textContent = 'YouTube cannot embed on a local file page. Open the video on YouTube or run this site on localhost/HTTPS.';
        } else if (videoSource && !isYoutubeUrl) {
            detailVideo.src = videoSource;
            detailVideo.hidden = false;
            videoPlaceholder.hidden = true;
        } else if (isYoutubeUrl) {
            if (videoSource.includes('/results?search_query=')) {
                detailVideoExternalLink.href = videoSource;
                detailVideoExternalLink.textContent = `Open ${dino.name} videos on YouTube`;
                detailVideoExternalLink.hidden = false;
                videoHint.textContent = 'Search results are available on YouTube.';
            } else {
                videoHint.textContent = 'YouTube URL not recognized. Use a standard watch, youtu.be, or Shorts link.';
            }
        } else {
            videoHint.textContent = 'YouTube URL not recognized. Use a standard watch, youtu.be, or Shorts link.';
        }
    }

    document.getElementById('dinoHistory').textContent = knowledge.history;
    renderDnaSplicing(dino);
    renderDinosaurFaq(dino, knowledge);

    switchView('detail', { scrollToTop, detailId: dinoId });
}

function navigateSpecimen(direction) {
    if (!activeDetailDinoId) return;

    const navigationIds = directoryDinoIds.includes(activeDetailDinoId)
        ? directoryDinoIds
        : allDinoNavigationIds;
    const currentIndex = navigationIds.indexOf(activeDetailDinoId);
    if (currentIndex < 0 || navigationIds.length === 0) return;

    const nextIndex = (currentIndex + direction + navigationIds.length) % navigationIds.length;
    showDetail(navigationIds[nextIndex]);
}

function getYouTubeEmbedUrl(source) {
    if (typeof source !== 'string') return null;

    const youtubeUrl = source.match(/^https:\/\/(?:(?:www|m)\.)?youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)([a-zA-Z0-9_-]{11})(?:[?&#/].*)?$/i);
    const shortUrl = source.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9_-]{11})(?:[?&#/].*)?$/i);
    const videoId = youtubeUrl ? youtubeUrl[1] : shortUrl ? shortUrl[1] : null;

    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
}