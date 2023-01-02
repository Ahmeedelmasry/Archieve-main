window.onload = () => {
  //Toggle Nav Menu
  const navMenuBtn = document.querySelector(".menu-pop-btn");
  navMenuBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active-link");
  });

  //Close Toolbar Menus
  function closeMenu(closeBtn) {
    let btn = document.querySelector(closeBtn.dataset.btn);
    btn.setAttribute("aria-expanded", false);
    btn.parentElement.classList.remove("show");
    btn.parentElement.querySelector(".dropdown-menu").classList.remove("show");
  }
  const dateCloseBtn = document.querySelector(".close-date-menu");
  dateCloseBtn.addEventListener("click", (e) => {
    closeMenu(e.currentTarget);
  });
  //Charts Lines
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "بدون",
        "الامانة",
        "الامانة",
        "الحصر(لجنة الحصر)",
        "الحرس الجمهوري (قسم التدريب)",
      ],
      datasets: [
        {
          data: [2, 1, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: [
            "#19689C",
            "#423CAC",
            "#502884",
            "#0280FE",
            "#29CB97",
          ],
          barPercentage: 0.1,
          borderRadius: 20,
          barThickness: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      aspectRatio: 2.5,
    },
  });

  //Charts Circle
  const ctx_2 = document.getElementById("circleCharts");

  new Chart(ctx_2, {
    type: "doughnut",
    data: {
      labels: ["بدون", "الامانة", "الحصر(لجنة الحصر)"],
      datasets: [
        {
          data: [3, 3, 3],
          backgroundColor: ["#502884", "#0280FE", "#29CB97"],
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "86%",
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  //Customize Chart Line Shadow
  class Custom extends Chart.LineController {
    //Call the line controller method to draw points
    draw() {
      super.draw(arguments);

      //Custom Drawing
      const ctx_3 = this.chart.ctx;
      const _stroke = ctx_3.stroke;
      ctx_3.stroke = function () {
        ctx_3.save();
        ctx_3.shadowColor = "#686868";
        ctx_3.shadowBlur = 17;
        ctx_3.shadowOffsetX = 0;
        ctx_3.shadowOffsetY = 4;
        _stroke.apply(this, arguments);
        ctx_3.restore();
      };
    }
  }
  Custom.id = "shadowLine";
  Custom.defaults = Chart.LineController.defaults;

  //Register
  Chart.register(Custom);
  //Charts Last Section
  const ctx_3 = document.getElementById("LastCharts");
  new Chart(ctx_3, {
    type: "shadowLine",
    data: {
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "اغسطس",
        "سبتمبر",
        "سبتمبر",
        "سبتمبر",
        "سبتمبر",
      ].reverse(),
      datasets: [
        {
          data: [5, 3, 1, 5, 3, 5, 3, 1, 5, 3, 2, 4].reverse(),
          backgroundColor: "#502884",
          tension: 0.4,
          fill: false,
          label: "First",
          borderWidth: 2,
          borderColor: "#502884",
          label: "المكاتبات الصادرة",
        },
        {
          data: [1, 4, 2, 1, 5, 1, 4, 2, 1, 5, 1, 3].reverse(),
          backgroundColor: "red",
          tension: 0.4,
          fill: false,
          label: "المكاتبات الواردة",
          borderWidth: 2,
          borderColor: "#868686",
        },
        {
          data: [4, 3, 5, 5, 1, 4, 3, 5, 5, 1, 3, 1].reverse(),
          backgroundColor: "green",
          tension: 0.4,
          fill: false,
          label: "المكاتبات الهامة",
          borderWidth: 2,
          borderColor: "#29cb97",
        },
      ],
    },
    options: {
      responsive: true,
      aspectRatio: 3,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
  //Update Footer
  const year = new Date().getFullYear();
  document.querySelector("footer p").innerText = `©${year}-All Rights Reserved`;
};
