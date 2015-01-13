var appConfig = {};

appConfig.rootUrl = {
	prod: "http://shanti.outbrain.com\\:3001/",
	dev: "http://localhost\\:3001/"
};
appConfig.flatUrl = {
	prod: "http://shanti.outbrain.com:3001/",
	dev: "http://localhost:3001/"
};
appConfig.esUrl = {
	prod: "http://shanti.outbrain.com:9200/",
	dev: "http://localhost:9200/"
};

appConfig.elasticsearch = {
	filterAuthors: "ciuser",
	aggregationsQuery: {
		aggregations: {
			authors: {
				"terms": {
					"field": "author",
					"size": 0
				}
			},
			modules: {
				"terms": {
					"field": "modules",
					"size": 0
				}
			},
			tags: {
				"terms": {
					"field": "tags",
					"size": 0
				}
			},
			max_revision: {
				"max": {
					"field": "revision"
				}
			}
		}
	},
	searchBaseQuery: {
		index: 'svn-revision',
		type: 'revision',
		body: {
			query: {
				filtered: {}
			},
			aggregations: {
				authors: {
					"terms": {
						"field": "author",
						"size": 5
					}
				},
				modules: {
					"terms": {
						"field": "modules",
						"size": 5
					}
				},
				tags: {
					"terms": {
						"field": "tags",
						"size": 5
					}
				},
				timeline: {
					date_histogram: {
						field: "date",
						interval: "month"
					}
				}
			}
		}
	}
};