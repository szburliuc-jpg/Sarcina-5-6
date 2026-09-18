export function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

export function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    return calculateSum(numbers) / numbers.length;
}