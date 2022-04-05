export function highlightString(text: string, searchString: string) : object[] {
    if (!text || !searchString) return [{text, highlighted: false}]
    let start: number = 0
    let stringArray: object[] = []
    while (start < text.length) {
        const index: number = text.toLowerCase().substring(start).indexOf(searchString.toLowerCase())
        if (index > -1) {
            stringArray.push({text: text.substring(start, start + index), highlighted: false})
            stringArray.push({text: text.substring(start + index, start + index + searchString.length), highlighted: true})
            start = start + index + searchString.length
        } else {
            stringArray.push({text: text.substring(start), highlighted: false})
            start = text.length
        }
    }
    return stringArray
}