/**
 * Get the message and name properties from the original exception
 * @param {Object} event
 */
export declare const getOriginalExceptionProperties: (event: any) => {
    name: any;
    message: any;
} | {
    name?: undefined;
    message?: undefined;
};
