import {
    Disposable,
    TreeDataProvider,
    EventEmitter,
    Event,
    TreeItem,
    Uri,
    env,
} from 'vscode';
import { configuration } from '../configurations';
import { getChapterLinksItems, getChaptersItems } from '../services/treeItemsService';
import Chapter from '../treeItems/Chapter';

export class DocumentationProvider implements TreeDataProvider<TreeItem>, Disposable {
    private readonly _disposable: Disposable;
    private _onDidChangeTreeData: EventEmitter<Chapter | undefined | null | void> = new EventEmitter<
        Chapter | undefined | null | void
    >();
    readonly onDidChangeTreeData: Event<Chapter | undefined | null | void> = this._onDidChangeTreeData.event;

    constructor() {
        this._disposable = Disposable.from(configuration.onDidChange(this.refreshDocumentation, this));
    }

    dispose() {
        this._disposable.dispose();
    }

    getTreeItem(element: Chapter): TreeItem {
        return element;
    }

    getChildren(element?: TreeItem): Thenable<TreeItem[]> {
        if (element instanceof Chapter) {
            return getChapterLinksItems(element.nestedLinks);
        }
        return getChaptersItems();
    }

    refreshDocumentation() {
        this._onDidChangeTreeData.fire();
    }

    openExternalURI(link: string) {
        env.openExternal(Uri.parse(link));
    }
}
