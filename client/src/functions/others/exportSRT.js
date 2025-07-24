const pad = num => String(num).padStart(2, '0')

const toSRTTime = ({ hour, min, sec }) => {
    return `${pad(hour)}:${pad(min)}:${pad(sec)},000`
}

const exportSRT = (notes, originalname = 'captions') => {
    if (!notes || !notes.length) return

    const srtContent = notes.map((note, idx) => {
        const startTime = toSRTTime(note.selectedTime)

        const next = notes[idx + 1]
        const endTime = next
            ? toSRTTime(next.selectedTime)
            : "00:59:59,000" // fallback end time

        return `${idx + 1}
${startTime} --> ${endTime}
${note.document || '-'}\n`
    }).join('\n')

    const blob = new Blob([srtContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${originalname}.srt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

export default exportSRT
