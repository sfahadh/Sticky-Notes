export function getColor(color: string) {
    const colors = {
        blue: "bg-primary",
        gray: "bg-secondary",
        green: "bg-success", 
        red: "bg-danger", 
        yellow: "bg-warning", 
        turquoise: "bg-info",
        black: "bg-dark", 
        white: "bg-light"
    }

    for (let key in colors) {
        if (key === color) return colors[key];
        if (colors[key] === color) return key;
    }
}