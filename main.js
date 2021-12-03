/*
 * Copyright, Masrik Dahir, 2021
 */
const updateBackpack = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(update);
}
const backpack = {
    name: "backpack",
    volume: 30,
    color: "grey",
    pocket_num: 15,
    strap_length: {
        left: 26,
        right: 26,
    },

    lid_open: false,
    toggle_lid: function (lid_status){
        updateBackpack("Lid Status Changed!");
    },

    new_strap_length: function (length_left, length_right){
        this.strap_length.left = length_left;
        this.strap_length.right = length_right;
        updateBackpack("Strap Length Updated");

    }
};
