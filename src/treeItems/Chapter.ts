import { ThemeIcon, TreeItemCollapsibleState } from 'vscode';
import BasicTreeItem from './BasicTreeItem';
import {LinkNode} from '../types'

export default class Chapter extends BasicTreeItem {
  constructor(
    public readonly title: string,
    public readonly link: string,
    public readonly nestedLinks: LinkNode[],
    public readonly collapsibleState: TreeItemCollapsibleState,
  ) {
    super(title, collapsibleState);
    this.iconPath = new ThemeIcon("file-directory");
  }
}
