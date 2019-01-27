const macroMap = {
    // Arrow
    '|->': '\\mapsto',
    '<->': '\\leftrightarrow',
    '<=>': '\\Leftrightarrow',
    '==>': '\\Longrightarrow',
    '->': '\\rightarrow',
    '=>': '\\Rightarrow',
    // Dots
    '...': '\\cdots',
    // Arithmatic
    '+-': '\\pm',
    '-+': '\\mp',
    '==': '\\equiv',
    '!=': '\\ne',
    '>=': '\\leq',
    '<=': '\\geq',
    '<<': '\\ll',
    '>>': '\\gg',
    '\\dd': '\\mathrm{d}',
    '\\e': '\\mathrm{e}',
    '\\arccot': '\\operatorname{arccot}',
    '\\arcsec': '\\operatorname{arcsec}',
    '\\arccsc': '\\operatorname{arccsc}',
} as Record<string, string>

const escapedCharacters = '^$()[]{}*.?+\\|'

function toEscapedString(source: string) {
    return source.split('').map(char => {
        return escapedCharacters.includes(char) ? '\\' + char : char
    }).join('') + '\\b'
}

const macroRegex = new RegExp(Object.keys(macroMap).map(toEscapedString).join('|'), 'g')

export default function parseMacro(source: string) {
    return source.replace(macroRegex, matched => macroMap[matched])
}
