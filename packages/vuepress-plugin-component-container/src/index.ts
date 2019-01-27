import * as MarkdownIt from 'markdown-it'
import * as yaml from 'js-yaml'

interface Options {
    minMarkers?: number
    markerChar?: string
    alias?: Record<string, string>
    prefix?: string
}

type Token = MarkdownIt.TokenRender extends (token: (infer T)[], ...args: any) => any ? T : any

interface ContainerToken extends Token {
    name: string
    param: string
    data: object
}

export = (options: Options) => ({
    extendMarkdown(md: MarkdownIt) {
        const minMarkers = options.minMarkers || 3
        const markerChar = options.markerChar || '%'
        const alias = options.alias || {}
        const prefix = options.prefix || ''
    
        function container(state, startLine: number, endLine: number, silent: boolean) {
            let autoClosed = false
            let pos, nextLine
            let start = state.bMarks[startLine] + state.tShift[startLine]
            let max = state.eMarks[startLine]
    
            if (markerChar !== state.src[start]) return false
    
            // Check out the rest of the marker string
            for (pos = start + 1; pos <= max; pos++) {
                if (markerChar !== state.src[pos]) {
                    break
                }
            }
    
            const markerCount = pos - start
            if (markerCount < minMarkers) return false
    
            const markup = state.src.slice(start, pos) as string
            const params = state.src.slice(pos, max) as string
    
            // Since start is found, we can report success here in validation mode
            if (silent) return true
    
            // Search for the end of the block
            nextLine = startLine
    
            while (nextLine < endLine) {
                nextLine++
    
                start = state.bMarks[nextLine] + state.tShift[nextLine]
                max = state.eMarks[nextLine]
    
                if (markerChar !== state.src[start]) continue
    
                for (pos = start + 1; pos <= max; pos++) {
                    if (markerChar !== state.src[pos]) {
                        break
                    }
                }
    
                // closing code fence must be at least as long as the opening one
                if (pos - start < markerCount) {
                    continue
                }
    
                // make sure tail has spaces only
                pos = state.skipSpaces(pos)
    
                if (pos < max) {
                    continue
                }
    
                // found!
                autoClosed = true
                break
            }
    
            const oldParent = state.parentType
            const oldLineMax = state.lineMax
    
            // this will prevent lazy continuations from ever going past our end marker
            state.lineMax = nextLine
            state.parentType = 'container'
    
            const content = state.src.split(/\r?\n/g).slice(startLine + 1, nextLine).join('\n')
            const [name, param] = params.trim().split(' ', 2)
    
            const token = state.push('component-container', 'div', 1)
            token.name = name
            token.param = param
            token.markup = markup
            token.block = true
            token.data = yaml.safeLoad(content)
            token.map = [ startLine, nextLine ]
    
            state.parentType = oldParent
            state.lineMax = oldLineMax
            state.line = nextLine + (autoClosed ? 1 : 0)
    
            return true
        }
    
        md.block.ruler.before('fence', 'component-container', container as any, {
            alt: [ 'paragraph', 'reference', 'blockquote', 'list' ],
        })
    
        md.renderer.rules['component-container'] = (tokens, index) => {
            const token = tokens[index] as ContainerToken
            if (!token.name) return ''
            const data = JSON.stringify(token.data || null).replace(/"/g, '\'')
            const name = prefix + (token.name in alias ? alias[token.name] : token.name)
            return `<component is="${name}" param="${token.param || ''}" :data=${JSON.stringify(data)}/>`
        }
    },
})
