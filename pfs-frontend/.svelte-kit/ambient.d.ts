
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const BERRY_BIN_FOLDER: string;
	export const COLORTERM: string;
	export const CommandPromptType: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const COREPACK_ROOT: string;
	export const DevEnvDir: string;
	export const DriverData: string;
	export const ExtensionSdkDir: string;
	export const EXTERNAL_INCLUDE: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const Framework40Version: string;
	export const FrameworkDir: string;
	export const FrameworkDir32: string;
	export const FrameworkVersion: string;
	export const FrameworkVersion32: string;
	export const FSHARPINSTALLDIR: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INCLUDE: string;
	export const INIT_CWD: string;
	export const LIB: string;
	export const LIBPATH: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NETFXSDKDir: string;
	export const NODE_ENV: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const OS: string;
	export const PATH: string;
	export const PATHEXT: string;
	export const POWERSHELL_TELEMETRY_OPTOUT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROJECT_CWD: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const PyCharm: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const UCRTVersion: string;
	export const UniversalCRTSdkDir: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VCIDEInstallDir: string;
	export const VCINSTALLDIR: string;
	export const VCToolsInstallDir: string;
	export const VCToolsRedistDir: string;
	export const VCToolsVersion: string;
	export const VisualStudioVersion: string;
	export const VS170COMNTOOLS: string;
	export const VSCMD_ARG_app_plat: string;
	export const VSCMD_ARG_HOST_ARCH: string;
	export const VSCMD_ARG_TGT_ARCH: string;
	export const VSCMD_VER: string;
	export const VSINSTALLDIR: string;
	export const WEZTERM_CONFIG_DIR: string;
	export const WEZTERM_CONFIG_FILE: string;
	export const WEZTERM_EXECUTABLE: string;
	export const WEZTERM_EXECUTABLE_DIR: string;
	export const WEZTERM_PANE: string;
	export const WEZTERM_UNIX_SOCKET: string;
	export const windir: string;
	export const WindowsLibPath: string;
	export const WindowsSdkBinPath: string;
	export const WindowsSdkDir: string;
	export const WindowsSDKLibVersion: string;
	export const WindowsSdkVerBinPath: string;
	export const WindowsSDKVersion: string;
	export const WindowsSDK_ExecutablePath_x64: string;
	export const WindowsSDK_ExecutablePath_x86: string;
	export const WSLENV: string;
	export const __DOTNET_ADD_32BIT: string;
	export const __DOTNET_PREFERRED_BITNESS: string;
	export const __VSCMD_PREINIT_PATH: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		APPDATA: string;
		BERRY_BIN_FOLDER: string;
		COLORTERM: string;
		CommandPromptType: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		COREPACK_ROOT: string;
		DevEnvDir: string;
		DriverData: string;
		ExtensionSdkDir: string;
		EXTERNAL_INCLUDE: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		Framework40Version: string;
		FrameworkDir: string;
		FrameworkDir32: string;
		FrameworkVersion: string;
		FrameworkVersion32: string;
		FSHARPINSTALLDIR: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INCLUDE: string;
		INIT_CWD: string;
		LIB: string;
		LIBPATH: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NETFXSDKDir: string;
		NODE_ENV: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		OS: string;
		PATH: string;
		PATHEXT: string;
		POWERSHELL_TELEMETRY_OPTOUT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROJECT_CWD: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		PyCharm: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		UCRTVersion: string;
		UniversalCRTSdkDir: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VCIDEInstallDir: string;
		VCINSTALLDIR: string;
		VCToolsInstallDir: string;
		VCToolsRedistDir: string;
		VCToolsVersion: string;
		VisualStudioVersion: string;
		VS170COMNTOOLS: string;
		VSCMD_ARG_app_plat: string;
		VSCMD_ARG_HOST_ARCH: string;
		VSCMD_ARG_TGT_ARCH: string;
		VSCMD_VER: string;
		VSINSTALLDIR: string;
		WEZTERM_CONFIG_DIR: string;
		WEZTERM_CONFIG_FILE: string;
		WEZTERM_EXECUTABLE: string;
		WEZTERM_EXECUTABLE_DIR: string;
		WEZTERM_PANE: string;
		WEZTERM_UNIX_SOCKET: string;
		windir: string;
		WindowsLibPath: string;
		WindowsSdkBinPath: string;
		WindowsSdkDir: string;
		WindowsSDKLibVersion: string;
		WindowsSdkVerBinPath: string;
		WindowsSDKVersion: string;
		WindowsSDK_ExecutablePath_x64: string;
		WindowsSDK_ExecutablePath_x86: string;
		WSLENV: string;
		__DOTNET_ADD_32BIT: string;
		__DOTNET_PREFERRED_BITNESS: string;
		__VSCMD_PREINIT_PATH: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
