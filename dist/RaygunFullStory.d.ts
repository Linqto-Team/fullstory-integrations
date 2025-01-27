/**
 * This integration creates a link from the Raygun Error to the FullStory replay.
 * It also creates a link from the FullStory event to the Raygun error.
 */
declare type Options = {
    fsEventName: string;
};
declare class RaygunFullStory {
    static init(client: any, options?: Options): void;
}
export default RaygunFullStory;
