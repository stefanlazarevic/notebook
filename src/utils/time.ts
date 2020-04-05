export function timestampToHuman(timestamp: number): string {
    const date = new Date(timestamp);
    const yyyy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    let HH = hours % 12;
    HH = HH ? HH : 12; // the hour '0' should be '12'
    let MM = minutes < 10 ? "0" + minutes : minutes;

    const strTime = HH + ":" + MM + " " + ampm;

    return `${dd}/${mm}/${yyyy} ${strTime}`;
}
