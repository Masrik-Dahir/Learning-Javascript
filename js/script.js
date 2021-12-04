
import backpack from "./backpack.js"

const markup = (backpack) => {
    return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.n_pocket}</li>
      <li>Strap lengths: L: ${backpack.l_strap.left}, R: ${
        backpack.l_strap.right
    } </li>
      <li>Top lid: ${backpack.lid_open ? "Open" : "Closed"}</li>
      <li>Show Array: ${backpack.array}</li>
      
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);