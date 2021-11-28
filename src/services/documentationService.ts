import fetch from 'node-fetch'
import { RootNode } from '../types'

export const getDocumentationConfig = async (): Promise<RootNode> => {
    const response = await fetch('https://maksymslobodianyk.github.io/vscode-extension-tree-view-example/data.json');
    return await response.json();
}