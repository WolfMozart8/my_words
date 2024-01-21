/**
 * Get the actual date in YYYY/MM/DD format
 * @returns
 */
export function DateNow(): string {
    const year: number = new Date().getFullYear();
    const month: string = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const day: number = new Date().getFullYear();

    const today: string = `${year}-${month}-${day}`;
    return today;
}
