export default class Rule {
    public static format(value: string) {
        for (const reg in this.rules) {
            value = value.replace(new RegExp(reg, "gi"), this.rules[reg])
        }
        return value
    }

    private static rules: { [index: string]: string } = {
        "\\n": "",
        "\\s+": " ",
        "width": "WIDTH",
        "height": "HEIGHT",
        "style": "STYLE",
    }
}
