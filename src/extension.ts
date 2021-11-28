import { window, commands, ExtensionContext } from 'vscode';
import { DocumentationProvider } from './providers/DocumentationProvider';
import { Configuration } from './configurations';

export async function activate(context: ExtensionContext) {
	const documentationProvider = new DocumentationProvider();
	window.registerTreeDataProvider('documentation-browser', documentationProvider);
	Configuration.configure(context);
	registerCommands(documentationProvider);
}

const registerCommands = (documentationProvider: DocumentationProvider) => {
	commands.registerCommand('documentation-browser.openLink', node =>
		documentationProvider.openExternalURI(node.link)
	)
	commands.registerCommand('documentation-browser.refreshDocumentation', () =>
		documentationProvider.refreshDocumentation()
	)
}

export function deactivate() { }
