import BasicTreeItem from "../treeItems/BasicTreeItem";
import Chapter from "../treeItems/Chapter";
import Link from "../treeItems/Link";
import { getDocumentationConfig } from "./documentationService";
import { TreeItemCollapsibleState, window } from "vscode";
import { ChapterNode, LinkNode } from "../types";

export const getChapterLinksItems = async (nestedLinks: LinkNode[]): Promise<BasicTreeItem[]> => {
	const links: Link[] = convertLinksItems(nestedLinks);
	return Promise.resolve([...links]);
};

export const getChaptersItems = async (): Promise<Chapter[]> => {
	try {
		const config = await getDocumentationConfig();
		return Promise.resolve(convertChaptersItems(config.root));
	} catch (e) {
		window.showErrorMessage("Error occurred while fetching documentation config 🥵");
		return Promise.resolve([]);
	}
};

const convertChaptersItems = (chapters: ChapterNode[]): Chapter[] =>
	chapters.map(
		(chapter) =>
			new Chapter(
				chapter.title,
				chapter.link,
				chapter.links,
				TreeItemCollapsibleState.Collapsed
			)
	);

const convertLinksItems = (links: LinkNode[]): Link[] =>
	links.map((link) => new Link(link.title, link.link, TreeItemCollapsibleState.None));
