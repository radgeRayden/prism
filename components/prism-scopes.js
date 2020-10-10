Prism.languages.scopes = {
    'comment': [
        {
            pattern: /^(?<pad> *)#.*(?:\n|$)(?: (?=\k<pad>).+(?:\n|$))*/gm
        },
        {
            pattern: /#.*$/
        }
    ],
    'string': [
        {
            pattern: /"(?:\\"|(?!["\n]).)*"/,
            greedy: true,
            inside: {
                'escape-code': {
                    pattern: /\\x[0-9A-Fa-f]{2}|\\./,
                    alias: "variable"
                }
            }
        },
        {
            pattern: /(?<pad>(?:    )*)"""".*(?:\n|$)(?:(?:(?:\k<pad>    .+| *))(\n|$))*/
        }
    ]
};
