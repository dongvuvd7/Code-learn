function maskify(s) {
    if (s.length <= 4) return s;

    return s
        .split("")
        .map((char, index) => (index < s.length - 4 ? "#" : char))
        .join("");
}
