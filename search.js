console.time("search")

const search_term = process.argv[2]
const search_path = process.argv[3]

const search = require('rx-text-search')

search
.findAsPromise(search_term, search_path)
.then(function(result){
	console.log(JSON.stringify(result))

	console.timeEnd("search")
})
