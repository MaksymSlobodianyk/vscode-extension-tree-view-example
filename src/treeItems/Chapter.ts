import { ThemeIcon, TreeItem, TreeItemCollapsibleState } from 'vscode';
import {LinkNode} from '../types'

export default class Chapter extends TreeItem {
  constructor(
    public readonly label: string,
    public readonly link: string,
    public readonly nestedLinks: LinkNode[],
    public readonly collapsibleState: TreeItemCollapsibleState,
  ) {
    super(label, collapsibleState);
    this.iconPath = new ThemeIcon("file-directory");
  }
}
