/**
 * Create a Backpack object.
 */

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
    toggle_lid: function (lid_status) {
        this.lid_open = lid_status;
    },
    new_l_strap: function (l_left, l_right) {
        this.l_strap.left = l_left;
        this.l_strap.right = l_right;
    },
};

console.log("The backpack object: ", backpack);

console.log("The n_pocket value: ",backpack.n_pocket);

var query = "n_pocket";
console.log("The n_pocket value: ",backpack[query]);