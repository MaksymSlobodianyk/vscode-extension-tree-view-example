import { ThemeIcon, TreeItem, TreeItemCollapsibleState } from 'vscode';
export default class Link extends TreeItem {
  constructor(
    public readonly label: string,
    public readonly link: string,
    public readonly collapsibleState: TreeItemCollapsibleState,
  ) {
    super(label, collapsibleState);
    this.iconPath = new ThemeIcon("link");
  }
}
