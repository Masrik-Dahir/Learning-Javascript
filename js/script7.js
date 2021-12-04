class Backpack{
    constructor(name, volume, color, n_pocket, l_strap_right, l_strap_left, lid_open) {
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.n_pocket = n_pocket;
        this.l_strap = {
            left: l_strap_left,
            right: l_strap_right,
        };
        this.lid_open = lid_open;
    }
    toggle_lid (lid_status) {
        this.lid_open = lid_status;
    }
    c_l_strap (l_left, l_right) {
        this.l_strap.left = l_left;
        this.l_strap.right = l_right;
    }
    c_name (name) {
        this.name = name;
    }
    c_volume (volume) {
        this.volume = volume;
    }
    c_color (color) {
        this.color = color;
    }
    c_n_pocket (n_pocket) {
        this.n_pocket = n_pocket;
    }
}

export default Backpack;