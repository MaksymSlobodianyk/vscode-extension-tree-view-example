import {
	ConfigurationChangeEvent,
	Event,
	EventEmitter,
	ExtensionContext,
	workspace,
} from 'vscode';

export class Configuration {
	static configure(context: ExtensionContext): void {
		context.subscriptions.push(
			workspace.onDidChangeConfiguration(configuration.onConfigurationChanged, configuration),
		);
	}

    private _onDidChange = new EventEmitter<ConfigurationChangeEvent>();
	get onDidChange(): Event<ConfigurationChangeEvent> {
		return this._onDidChange.event;
	}

    private onConfigurationChanged(e: ConfigurationChangeEvent) {
        this._onDidChange.fire(e);
    }
    
}

export const configuration = new Configuration();