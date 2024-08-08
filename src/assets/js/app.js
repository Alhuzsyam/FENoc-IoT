export function SideJs() {
    const sides = document.querySelector("#sides");
    if (!sides) {
      console.error('Side element not found');
      return;
    }

    const sidebar = sides.querySelector("nav");
    const toggle = sides.querySelector(".custom-toggle");
    // const searchBtn = sides.querySelector(".custom-search-box");
    const modeSwitch = sides.querySelector(".custom-toggle-switch");
    const modeText = sides.querySelector(".custom-mode-text");
    const logo = sides.querySelector(".logo");
    const body = document.body;

    if (!sidebar || !toggle || !modeSwitch || !modeText || !body) {
      console.error('One or more elements not found');
      return;
    }

    toggle.addEventListener("click", () => {
      logo.classList.toggle("logo-hide");
    });
    
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    // searchBtn.addEventListener("click", () => {
    //   sidebar.classList.remove("close");
    // });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        // Dark mode
        modeText.innerText = "Light mode";
      } else {
        // Light mode
        modeText.innerText = "Dark mode";
      }
    });
}
