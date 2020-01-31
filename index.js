"use strict"

const execa = require("execa")
const { platform } = process

function getShutdownParams() {
	if (platform === "win32" || platform === "cygwin") return ["/s", "/t", "00"]
	if (platform === "linux") return ["now"]
	if (platform === "darwin") return ["-h", "now"]
	if (platform === "sunos") return ["-y", "-i5", "-g0"]
	if (platform === "aix") return ["-Fh", "now"]
	if (platform === "openbsd" || platform === "freebsd" || platform === "netbsd") return ["-p", "now"]
	throw new Error("Operating system not supported!")
}

function getRestartParams() {
	if (platform === "win32" || platform === "cygwin") return ["/r", "/t", "00"]
	if (platform === "linux" || platform === "darwin" || platform === "aix" || platform === "openbsd" || platform === "freebsd" || platform === "netbsd") return ["-r", "now"]
	if (platform === "sunos") return ["-y", "-i6", "-g0"]
	throw new Error("Operating system not supported!")
}

module.exports = async () => {
	await execa("shutdown", getShutdownParams())
}

module.exports.sync = () => {
	execa.sync("shutdown", getShutdownParams())
}

module.exports.restart = async () => {
	await execa("shutdown", getRestartParams())
}

module.exports.restartSync = () => {
	execa.sync("shutdown", getRestartParams())
}
