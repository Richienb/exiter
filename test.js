const test = require("ava")
const exiter = require(".")

test("main", (t) => {
	t.truthy(exiter)
	t.truthy(exiter.sync)
	t.truthy(exiter.restart)
	t.truthy(exiter.restartSync)
})
