import { ThemeIcon, TreeItemCollapsibleState } from 'vscode';
import BasicTreeItem from './BasicTreeItem';

export default class Link extends BasicTreeItem {
  constructor(
    public readonly title: string,
    public readonly link: string,
    public readonly collapsibleState: TreeItemCollapsibleState,
  ) {
    super(title, collapsibleState);
    this.iconPath = new ThemeIcon("link");
  }
}
