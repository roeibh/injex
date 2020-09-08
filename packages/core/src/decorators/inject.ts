import metadataHandlers from "../metadataHandlers";

export function inject(dependencyNameOrType?: any) {
    return function (targetPrototype, dependency: string) {
        metadataHandlers.pushMetadata(targetPrototype.constructor, "dependencies", {
            label: dependency,
            value: dependencyNameOrType || dependency
        });
    }
}