const willy = {
    Name: "Water Bottle",
    mass: 16.9,
    unit: "oz",
    shape: "bottle",
    type: "liquid",
    content: {
        inside: ["water", "germs"],
        outside: ["wrap", "bottle cap", "other aesthetics"],
        text: [true, "company name", "address", "process"],
    },
    benefits: ["just water, mate", "good health I guess!"],
    drinkable: true,
    purity: 99,
}

var contents = "content.inside.toString()";

console.log("willy is best water bottle because this %s %s " +
    "has %i\% purity. Its contents: %s",willy["mass"],
    willy["unit"], willy["purity"], willy.content.inside.toString());