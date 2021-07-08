const increaseNumberGradually = (
    startNumber: number,
    numberToIncrementWith: number,
    setStartNumber: (num: number) => {},
    timeoutInMs: number,
    maxNumberToIncrementTo: number
) => {
    const updatedNumber = startNumber + numberToIncrementWith;

    const timeout = setTimeout(
        () => setStartNumber(updatedNumber),
        timeoutInMs,
    );

    if (updatedNumber > maxNumberToIncrementTo) {
        return clearTimeout(timeout);
    }
};

export {
    increaseNumberGradually,
}
