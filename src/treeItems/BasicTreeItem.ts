import { TreeItemCollapsibleState, TreeItem } from 'vscode';

export default class BasicTreeItem extends TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: TreeItemCollapsibleState,
  ) {
    super(label, collapsibleState);
  }
}
