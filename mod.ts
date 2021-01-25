interface size {
    bytesize: number;
    KiB: number;
    MiB: number;
    GiB: number;
    size: string;
}

function formatSize(buff: number): string {
    if (buff < 1024) return buff + "B"
    if (buff < 1024 * 1024) return (buff / 1024).toFixed(2) + "KiB";
    if (buff < 1024 * 1024 * 1024) return (buff / 1024^2).toFixed(2) + "MiB";
    if (buff < 1024 * 1024 * 1024 * 1024) return (buff / 1024^3).toFixed(2) + "GiB";
    throw new Error("buffer was smaller than 0")
}

function sizeof<T>(object: T): size {
    let buffer = 0;
    if (typeof object === "string") {
        buffer += new Blob(object.split("")).size;
    }
    if (typeof object === "number" || typeof object === "bigint") {
        buffer += 8;
    }
    if (typeof object === "boolean") {
        buffer += 4;
    }
    if (typeof object === "object") {
        if (Array.isArray(object)) {
            object.forEach(element => {
                buffer += sizeof(element).bytesize;
            });
        } else {
            Object.entries(object).forEach(element => {
                buffer += sizeof(element[0]).bytesize;
                buffer += sizeof(element[1]).bytesize;
            });
        }
    }
    const returnobj:size = {
        bytesize: buffer,
        KiB: buffer / 1024,
        MiB: buffer / (1024^2),
        GiB: buffer / (1024^3),
        size: formatSize(buffer)
    }
    return returnobj;
}

export default sizeof;