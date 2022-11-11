export const getDate = (date) => {
    const tempDate = new Date(date);
    return {
        day: tempDate.toLocaleString('id-ID', { day: "2-digit" }),
        month: tempDate.toLocaleString('id-ID', { month: "short" }),
        year: tempDate.getFullYear()
    }
}