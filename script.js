/* =========================================
   CAREERBOOST
   MAIN JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle(
                "mobile-open"
            );


            if (
                navLinks.classList.contains(
                    "mobile-open"
                )
            ) {

                menuBtn.textContent = "✕";

            } else {

                menuBtn.textContent = "☰";

            }

        });


        const navigationLinks =
            navLinks.querySelectorAll("a");


        navigationLinks.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove(
                    "mobile-open"
                );

                menuBtn.textContent = "☰";

            });

        });

    }



    /* =========================================
       FAQ ACCORDION
    ========================================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");


        if (!question || !answer) {
            return;
        }


        question.addEventListener("click", () => {

            const alreadyOpen =
                item.classList.contains("active");


            /* Close every FAQ */

            faqItems.forEach(otherItem => {

                otherItem.classList.remove(
                    "active"
                );


                const otherAnswer =
                    otherItem.querySelector(
                        ".faq-answer"
                    );


                if (otherAnswer) {

                    otherAnswer.style.maxHeight =
                        null;

                }

            });


            /* Open selected FAQ */

            if (!alreadyOpen) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });



    /* =========================================
       PACKAGE SELECTION
    ========================================= */

    const pricingButtons =
        document.querySelectorAll(
            ".pricing-btn"
        );


    pricingButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedPlan =
                button.getAttribute("data-plan");


            if (selectedPlan) {

                localStorage.setItem(
                    "careerboostPlan",
                    selectedPlan
                );


                console.log(
                    "Selected package:",
                    selectedPlan
                );

            }

        });

    });



    /* =========================================
       SHOW SELECTED PACKAGE IN BOOKING
    ========================================= */

    const bookingPrice =
        document.querySelector(
            ".booking-price"
        );

    const bookingPackage =
        document.querySelector(
            ".booking-package"
        );


    function updateBookingPackage() {

        const selectedPlan =
            localStorage.getItem(
                "careerboostPlan"
            );


        if (!selectedPlan) {
            return;
        }


        if (bookingPackage) {

            if (selectedPlan === "Resume Fix") {

                bookingPackage.textContent =
                    "Resume Enhancement Package";


                if (bookingPrice) {

                    bookingPrice.textContent =
                        "₹799";

                }

            }


            else if (
                selectedPlan === "CareerBoost"
            ) {

                bookingPackage.textContent =
                    "Complete CareerBoost Package";


                if (bookingPrice) {

                    bookingPrice.textContent =
                        "₹2,499";

                }

            }


            else if (
                selectedPlan === "CareerBoost Pro"
            ) {

                bookingPackage.textContent =
                    "Advanced CareerBoost Package";


                if (bookingPrice) {

                    bookingPrice.textContent =
                        "₹3,499";

                }

            }

        }

    }


    updateBookingPackage();



    /* =========================================
       PROFILE SCORE ANIMATION
    ========================================= */

    const scoreElement =
        document.querySelector(
            ".score-number"
        );


    if (scoreElement) {

        const targetScore = 82;

        let currentScore = 0;

        const duration = 1200;

        const intervalTime = 20;

        const totalSteps =
            duration / intervalTime;

        const increment =
            targetScore / totalSteps;


        const scoreAnimation =
            setInterval(() => {

                currentScore += increment;


                if (
                    currentScore >=
                    targetScore
                ) {

                    currentScore =
                        targetScore;


                    clearInterval(
                        scoreAnimation
                    );

                }


                scoreElement.textContent =
                    Math.floor(
                        currentScore
                    ) + "%";


            }, intervalTime);

    }



    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .step, .benefit, .pricing-card"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(element => {

            element.classList.add(
                "reveal"
            );


            revealObserver.observe(
                element
            );

        });

    }



    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar =
        document.querySelector(
            ".navbar"
        );


    if (navbar) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 30
                ) {

                    navbar.classList.add(
                        "navbar-scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "navbar-scrolled"
                    );

                }

            }
        );

    }



    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });



    /* =========================================
       CURRENT YEAR
    ========================================= */

    const yearElement =
        document.getElementById(
            "currentYear"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }



    /* =========================================
       BOOKING BUTTON
    ========================================= */

    const bookingButton =
        document.querySelector(
            ".booking-btn"
        );


    if (bookingButton) {

        bookingButton.addEventListener(
            "click",
            () => {

                const selectedPlan =
                    localStorage.getItem(
                        "careerboostPlan"
                    );


                if (selectedPlan) {

                    console.log(
                        "Booking:",
                        selectedPlan
                    );

                }

            }
        );

    }



    /* =========================================
       CONSOLE MESSAGE
    ========================================= */

    console.log(
        "CareerBoost loaded successfully 🚀"
    );

});