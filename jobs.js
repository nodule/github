module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "GetJsonRequest",
      "title": "GetJsonRequest",
      "ns": "superagent",
      "name": "getJsonRequest"
    },
    {
      "id": "Qs",
      "title": "Qs",
      "ns": "qs",
      "name": "stringify"
    },
    {
      "id": "Log",
      "title": "Log",
      "ns": "console",
      "name": "log"
    },
    {
      "id": "UrlTpl",
      "title": "UrlTpl",
      "ns": "template",
      "name": "string"
    },
    {
      "id": "Mustache",
      "title": "Mustache",
      "ns": "template",
      "name": "mustache"
    }
  ],
  "links": [
    {
      "source": {
        "id": "Qs",
        "port": "out"
      },
      "target": {
        "id": "UrlTpl",
        "port": "in",
        "setting": {
          "index": "query"
        }
      },
      "metadata": {
        "title": "Qs out -> in UrlTpl"
      }
    },
    {
      "source": {
        "id": "UrlTpl",
        "port": "out"
      },
      "target": {
        "id": "GetJsonRequest",
        "port": "url"
      },
      "metadata": {
        "title": "UrlTpl out -> url GetJsonRequest"
      }
    },
    {
      "source": {
        "id": "GetJsonRequest",
        "port": "out"
      },
      "target": {
        "id": "Mustache",
        "port": "vars",
        "setting": {
          "index": "jobs"
        }
      },
      "metadata": {
        "title": "GetJsonRequest out -> vars Mustache"
      }
    }
  ],
  "title": "Search Github Jobs",
  "description": "Search the Github jobs api.",
  "providers": {
    "@": {
      "url": "https://api.chix.io/v1/nodes/rhalff/{ns}/{name}"
    }
  },
  "ports": {
    "input": {
      "in": {
        "nodeId": "Qs",
        "title": "In",
        "name": "in"
      }
    },
    "output": {
      "out": {
        "nodeId": "Mustache",
        "title": "Out",
        "name": "out"
      }
    }
  },
  "ns": "github",
  "name": "jobs"
}