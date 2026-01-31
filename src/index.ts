export function hello(): string {
	return "Hello from setup_tools_createNewWorkspace!";
}

if (typeof require !== 'undefined' && require.main === module) {
	// Run as CLI
	// eslint-disable-next-line no-console
	console.log(hello());
}
