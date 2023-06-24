const exportPDF = (jsPDF, originalname, notes, setProcessing) => {
    setProcessing(true)
    const doc = new jsPDF()
    let position = 20
    const originalNameArray = doc.splitTextToSize(originalname, 92)
    doc.setFontSize(30)
    doc.setFont(undefined, 'bold')
    for (const line of originalNameArray) {
        doc.text(15, position, line)
        position += 12
        if (position >= 285) {
            doc.addPage()
            position = 20
        }
    }
    doc.setFontSize(30)
    doc.setFont(undefined, 'bold')
    doc.text(15, position, '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    position += 8
    if (position >= 285) {
        doc.addPage()
        position = 20
    }
    for (const note of notes) {
        doc.setFontSize(15)
        doc.setFont(undefined, 'bold')
        const titleArray = doc.splitTextToSize(`Title: ${note.title}`, 180)
        for (const line of titleArray) {
            doc.text(15, position, line)
            position += 8
            if (position >= 285) {
                doc.addPage()
                position = 20
            }
        }
        doc.setFontSize(15)
        doc.setFont(undefined, 'normal')
        const descriptionArray = doc.splitTextToSize(`Description: ${note.description}`, 180)
        for (const line of descriptionArray) {
            doc.text(15, position, line)
            position += 7
            if (position >= 285) {
                doc.addPage()
                position = 20
            }
        }
        doc.setFontSize(10)
        doc.setFont(undefined, 'italic')
        const selectedTimeArray = doc.splitTextToSize(`At: ${note.selectedTime.hour}:${note.selectedTime.min}:${note.selectedTime.sec}`, 180)
        for (const line of selectedTimeArray) {
            doc.text(15, position, line)
            position += 6
            if (position >= 285) {
                doc.addPage()
                position = 20
            }
        }

        doc.setFontSize(15)
        doc.setFont(undefined, 'normal')
        doc.text(15, position, '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        position += 8
    }
    doc.save()
    setProcessing(false)
}

export default exportPDF