"use strict"

const execa = require("execa")
const platform = process.platform

function getShutdownParams() {
	if (platform === "win32" || platform === "cygwin") return ["/s", "/t", "00"]
	else if (platform === "linux") return ["now"]
	else if (platform === "darwin") return ["-h", "now"]
	else if (platform === "sunos") return ["-y", "-i5", "-g0"]
	else if (platform === "aix") return ["-Fh", "now"]
	else if (platform === "openbsd" || platform === "freebsd" || platform === "netbsd") return ["-p", "now"]
	else throw new Error("Operating system not supported!")
}

// function getRestartParams() {
// 	if (platform === "win32" || platform === "cygwin") return ["/r", "/t", "00"]
// 	else if (platform === "linux") return ["-r", "now"]
// 	else if (platform === "darwin") return ["-r", "now"]
// 	else if (platform === "sunos") return ["-y", "-i5", "-g0"]
// 	else if (platform === "aix") return ["-Fh", "now"]
// 	else if (platform === "openbsd" || platform === "freebsd" || platform === "netbsd") return ["-p", "now"]
// 	else throw new Error("Operating system not supported!")
// }

module.exports = async () => {
	await execa("shutdown", getShutdownParams())
}

module.exports.sync = () => {
	execa.sync("shutdown", getShutdownParams())
}
