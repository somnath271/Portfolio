document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for animations
  const sections = document.querySelectorAll("section");

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // form validation

  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", contactForm.action, true);
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onload = function () {
        if (xhr.status === 200) {
          formMessage.innerHTML =
            '<p class="text-success">Message sent successfully!</p>';
          contactForm.reset();
        } else {
          formMessage.innerHTML =
            '<p class="text-danger">Failed to send message. Please try again later.</p>';
        }
      };

      xhr.send(formData);
    });
  });

  // Trigger progress bar animations on scroll
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    bar.style.width = "0";
  });

  const progressOptions = {
    threshold: 0.5,
  };

  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width") + "%";
        bar.style.width = width;
        observer.unobserve(bar);
      }
    });
  }, progressOptions);

  progressBars.forEach((bar) => {
    progressObserver.observe(bar);
  });
});

// CV download

document.getElementById("getCvBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let userConfirmation = confirm("Do you want to download the CV?");
  if (userConfirmation) {
    window.location.href = "Resume-Somnath-Bhattarai.pdf";
  }
});
