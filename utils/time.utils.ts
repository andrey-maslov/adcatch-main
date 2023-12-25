export const convertToTargetTimeZone = (date: string, timeZone: string) => {
    const originalDate = new Date(date);

    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        dateStyle: 'full',
        timeStyle: 'long',
    });

    return  formatter.format(originalDate);
}