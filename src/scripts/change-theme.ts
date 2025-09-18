document.addEventListener("astro:page-load", () => {
  const darkTheme = "dim";
  const lightTheme = "winter";

  const theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if ([darkTheme, lightTheme].includes(localStorageTheme)) {
      return localStorageTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return darkTheme;
    }
    return lightTheme;
  })();

  if (theme === lightTheme) {
    document.documentElement.dataset["theme"] = lightTheme;
    rotateTheme(true);
  } else {
    document.documentElement.dataset["theme"] = darkTheme;
    rotateTheme(false);
  }

  window.localStorage.setItem("theme", theme);

  function rotateTheme(isDark: boolean) {
    const btnLight = document.getElementById("theme-light");
    const btnDark = document.getElementById("theme-dark");

    if (btnLight && btnDark) {
      if (isDark) {
        btnLight.style.display = "none";
        btnDark.style.display = "inherit";
      } else {
        btnLight.style.display = "inherit";
        btnDark.style.display = "none";
      }
    }
  }

  const handleToggleClick = () => {
    if (document.documentElement.dataset["theme"] === darkTheme) {
      document.documentElement.dataset["theme"] = lightTheme;
      localStorage.setItem("theme", lightTheme);
      rotateTheme(true);
    } else {
      document.documentElement.dataset["theme"] = darkTheme;
      localStorage.setItem("theme", darkTheme);
      rotateTheme(false);
    }
  };

  document
    .getElementById("themeToggle")
    ?.addEventListener("click", handleToggleClick);
});
