export const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
];

export const advancedBtnValues = ["sin", "cos", "tan", "log"];

export const getStyleName = (btn: string) => {
    const className: any = {
        "=": "equals",
        "x": "opt",
        "-": "opt",
        "+": "opt",
        "/": "opt",
    };

    return className[btn];
};
