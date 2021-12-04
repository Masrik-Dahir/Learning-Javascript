/**
 * Create a Backpack object, populate some HTML to display its properties.
 */

const update_bag = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(update);
};

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    n_pocket: 15,
    l_strap: {
        left: 26,
        right: 26,
    },
    lid_open: false,
    array: [1,2,3,4,5,6,7,8,9],
    toggle_lid: function (lid_status) {
        this.lid_open = lid_status;
        update_bag(`Lid status changed.`);
    },
    new_l_strap: function (l_left, l_right) {
        this.l_strap.left = l_left;
        this.l_strap.right = l_right;
        update_bag(`Strap lengths updated.`);
    },
};
export default backpack;