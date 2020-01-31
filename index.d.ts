const exiter: {
	/**
	 * Shutdown the computer.
	 * @example
	 * ```
	 * const exiter = require("exiter");
	 *
	 * (async () => {
	 * 	exiter();
	 * })();
	 * ```
	*/
	(): Promise<void>

	/**
	 * Shutdown the computer.
	 * @example
	 * ```
	 * const exiter = require("exiter");
	 *
	 * exiter.sync();
	 * ```
	*/
	sync(): void

	/**
	 * Restart the computer.
	 * @example
	 * ```
	 * const exiter = require("exiter");
	 *
	 * (async () => {
	 * 	exiter.restart();
	 * })();
	 * ```
	*/
	restart(): Promise<void>

	/**
	 * Restart the computer.
	 * @example
	 * ```
	 * const exiter = require("exiter");
	 *
	 * exiter.restartSync();
	 * ```
	*/
	restartSync(): void
}

export = exiter
