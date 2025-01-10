export const container: HTMLElement | null = document.querySelector(".container");

document.querySelector(".open-navbar-icon")?.addEventListener("click", () => {
  container?.classList.add("change");
});

document.querySelector(".close-navbar-icon")?.addEventListener("click", () => {
  container?.classList.remove("change");
});

export const colors: string[] = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i: number = 0;

Array.from(document.querySelectorAll<HTMLElement>(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll<HTMLElement>(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement?.parentElement?.classList.toggle("change");
  };
});