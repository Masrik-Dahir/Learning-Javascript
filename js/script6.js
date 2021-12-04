/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
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
    c_l_strap: function (l_left, l_right) {
        this.l_strap.left = l_left;
        this.l_strap.right = l_right;
    },
    c_name: function (name) {
        this.name = name;
    },
    c_volume: function (volume) {
        this.volume = volume;
    },
    c_color: function (color) {
        this.color = color;
    },
    c_n_pocket: function (n_pocket) {
        this.n_pocket = n_pocket;
    },
};

console.log("Before: ", backpack);

// FUnction Calls
backpack.toggle_lid(true);
backpack.c_l_strap(-1,-1);
backpack.c_name("My backpack");
backpack.c_volume(110010);
backpack.c_color("Ash");
backpack.c_n_pocket(50);

console.log("After: ",backpack);