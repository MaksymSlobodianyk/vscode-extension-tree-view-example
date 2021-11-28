export type RootNode = {
    root: ChapterNode[];
}

export type ChapterNode = {
    title: string;
    link: string;
    links: LinkNode[];
    chapters: ChapterNode[];
}

export type LinkNode = {
    title: string;
    link: string;
}