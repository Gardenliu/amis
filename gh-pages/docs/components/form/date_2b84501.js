amis.define('docs/components/form/date.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Date 日期",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Date",
    "icon": null,
    "order": 13,
    "html": "<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\"\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F\" href=\"#%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示格式</h2><p>选中任意日期，可以看到默认显示日期的格式是像<code>2020-04-14</code>这样的格式，如果你想要自定义显示格式，那么可以配置<code>inputFormat</code>。</p>\n<p>例如你想显示<code>2020年04月14日</code>这样的格式，查找 moment 文档可知配置格式应为 <code>YYYY年MM月DD日</code>，即：</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\",\n            \"inputFormat\": \"YYYY年MM月DD日\"\n        }\n    ]\n}\n</script></div>\n<p>选中任意日期，观察显示格式</p>\n<h2><a class=\"anchor\" name=\"%E5%80%BC%E6%A0%BC%E5%BC%8F\" href=\"#%E5%80%BC%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>值格式</h2><p>选中任意日期，可以看到默认表单项的值格式是像<code>1591862818</code>这样的时间戳格式。</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\"\n        }\n    ]\n}\n</script></div>\n<p>如果你想要其他格式的日期值，，那么可以配置<code>format</code>参数用于调整表单项的值格式。</p>\n<p>例如你调整值为<code>2020-04-14</code>这样的格式，查找 moment 文档可知配置格式应为 <code>YYYY-MM-DD</code>，即：</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\",\n            \"format\": \"YYYY-MM-DD\"\n        }\n    ]\n}\n</script></div>\n<p>选中任意日期，观察数据域中表单项值的变化</p>\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E5%80%BC\" href=\"#%E9%BB%98%E8%AE%A4%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认值</h2><p>可以设置<code>value</code>属性，设置日期选择器的默认值</p>\n<h3><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" href=\"#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本配置</h3><p>配置符合当前 <a href=\"./date#%E5%80%BC%E6%A0%BC%E5%BC%8F\">值格式</a> 的默认值。</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\",\n            \"value\": \"1591862818\"\n        }\n    ]\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E7%9B%B8%E5%AF%B9%E5%80%BC\" href=\"#%E7%9B%B8%E5%AF%B9%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>相对值</h3><p><code>value</code> 还支持类似像<code>&quot;+1days&quot;</code>这样的相对值，更加便捷的配置默认值</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\",\n            \"value\": \"+1days\"\n        }\n    ]\n}\n</script></div>\n<p>上例中配置了<code>&quot;value&quot;: &quot;+1days&quot;</code>，默认就会选中明天。</p>\n<p>支持的相对值关键字有：</p>\n<ul>\n<li><code>today</code>: 当前日期</li>\n<li><code>day</code>或<code>days</code>: 天</li>\n<li><code>week</code>或<code>weeks</code>: 日</li>\n<li><code>month</code>或<code>months</code>: 月</li>\n<li><code>year</code>或<code>years</code>: 年</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4\" href=\"#%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制范围</h2><p>可以通过配置<code>maxDate</code>和<code>minDate</code>显示可选范围</p>\n<h3><a class=\"anchor\" name=\"%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC\" href=\"#%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>固定时间值</h3><p>[[7]] </p>\n<h3><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC\" href=\"#%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持相对值</h3><p>范围限制也支持设置 <a href=\"./date#%E7%9B%B8%E5%AF%B9%E5%80%BC\">相对值</a>。</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"start\",\n            \"label\": \"开始时间\",\n            \"minDate\": \"-1days\",\n            \"description\": \"限制可选最小日期是昨天\"\n        }\n    ]\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF\" href=\"#%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持模板</h3><p>也支持通过<a href=\"./template\">模板</a>，设置自定义值。</p>\n<p>来一个常见例子，配置两个选择<code>开始时间</code>和<code>结束时间</code>的时间选择器，需要满足：<code>开始时间</code>不能小于<code>结束时间</code>，<code>结束时间</code>也不能大于<code>开始时间</code>，。</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"start\",\n            \"label\": \"开始日期\",\n            \"maxDate\": \"$end\"\n        },\n        {\n            \"type\": \"date\",\n            \"name\": \"end\",\n            \"label\": \"结束日期\",\n            \"minDate\": \"$start\"\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%BF%AB%E6%8D%B7%E9%94%AE\" href=\"#%E5%BF%AB%E6%8D%B7%E9%94%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>快捷键</h2><p>你也可以配置<code>shortcuts</code>属性支持快捷选择日期</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"日期\",\n            \"shortcuts\": [\"yesterday\" ,\"today\", \"tomorrow\"]\n        }\n    ]\n}\n</script></div>\n<p>上例中我们配置了<code>&quot;shortcuts&quot;: [&quot;yesterday&quot; ,&quot;today&quot;, &quot;tomorrow&quot;]</code>，选择器顶部有将会显示快捷键<code>昨天</code>，<code>今天</code>和<code>明天</code></p>\n<p>支持的快捷键有</p>\n<ul>\n<li><code>today</code>: 今天</li>\n<li><code>yesterday</code>: 昨天</li>\n<li><code>thisweek</code>: 本周一</li>\n<li><code>thismonth</code>: 本月初</li>\n<li><code>prevmonth</code>: 上个月初</li>\n<li><code>prevquarter</code>: 上个季节初</li>\n<li><code>thisquarter</code>: 本季度初</li>\n<li><code>tomorrow</code>: 明天</li>\n<li><code>endofthisweek</code>: 本周日</li>\n<li><code>endofthismonth</code>:本月底 </li>\n<li><code>{n}daysago</code> : n天前，例如：<code>1daysago</code>，下面用法相同</li>\n<li><code>{n}dayslater</code>: n天后</li>\n<li><code>{n}weeksago</code>: n周前</li>\n<li><code>{n}weekslater</code>: n周后</li>\n<li><code>{n}monthsago</code>: n月前</li>\n<li><code>{n}monthslater</code>: n月后</li>\n<li><code>{n}quartersago</code>: n季度前</li>\n<li><code>{n}quarterslater</code>: n季度后</li>\n</ul>\n<h2><a class=\"anchor\" name=\"utc\" href=\"#utc\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>UTC</h2><div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"date\",\n            \"name\": \"date\",\n            \"label\": \"普通日期\",\n            \"format\": \"YYYY-MM-DD\"\n        },\n        {\n            \"type\": \"date\",\n            \"name\": \"date-utc\",\n            \"label\": \"UTC日期\",\n            \"utc\": true,\n            \"format\": \"YYYY-MM-DD\"\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td><code>string</code></td>\n<td></td>\n<td><a href=\"./date#%E9%BB%98%E8%AE%A4%E5%80%BC\">默认值</a></td>\n</tr>\n<tr>\n<td>format</td>\n<td><code>string</code></td>\n<td><code>X</code></td>\n<td>日期选择器值格式，更多格式类型请参考 <a href=\"http://momentjs.com/\">moment</a></td>\n</tr>\n<tr>\n<td>inputFormat</td>\n<td><code>string</code></td>\n<td><code>YYYY-DD-MM</code></td>\n<td>日期选择器显示格式，即时间戳格式，更多格式类型请参考 <a href=\"http://momentjs.com/\">moment</a></td>\n</tr>\n<tr>\n<td>closeOnSelect</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>点选日期后，是否马上关闭选择框</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>string</code></td>\n<td><code>&quot;请选择日期&quot;</code></td>\n<td>占位文本</td>\n</tr>\n<tr>\n<td>shortcuts</td>\n<td><code>string</code></td>\n<td></td>\n<td>日期快捷键</td>\n</tr>\n<tr>\n<td>minDate</td>\n<td><code>string</code></td>\n<td></td>\n<td>限制最小日期</td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td><code>string</code></td>\n<td></td>\n<td>限制最大日期</td>\n</tr>\n<tr>\n<td>utc</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>保存utc值</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否可清除</td>\n</tr>\n<tr>\n<td>timeConstrainst</td>\n<td><code>object</code></td>\n<td><code>true</code></td>\n<td>请参考： <a href=\"https://github.com/YouCanBookMe/react-datetime\">react-datetime</a></td>\n</tr>\n</tbody>\n</table>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "显示格式",
          "fragment": "%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "值格式",
          "fragment": "%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "默认值",
          "fragment": "%E9%BB%98%E8%AE%A4%E5%80%BC",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E5%80%BC",
          "level": 2,
          "children": [
            {
              "label": "基本配置",
              "fragment": "%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
              "fullPath": "#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
              "level": 3
            },
            {
              "label": "相对值",
              "fragment": "%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "fullPath": "#%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "level": 3
            }
          ]
        },
        {
          "label": "限制范围",
          "fragment": "%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4",
          "fullPath": "#%E9%99%90%E5%88%B6%E8%8C%83%E5%9B%B4",
          "level": 2,
          "children": [
            {
              "label": "固定时间值",
              "fragment": "%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC",
              "fullPath": "#%E5%9B%BA%E5%AE%9A%E6%97%B6%E9%97%B4%E5%80%BC",
              "level": 3
            },
            {
              "label": "支持相对值",
              "fragment": "%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "fullPath": "#%E6%94%AF%E6%8C%81%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "level": 3
            },
            {
              "label": "支持模板",
              "fragment": "%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF",
              "fullPath": "#%E6%94%AF%E6%8C%81%E6%A8%A1%E6%9D%BF",
              "level": 3
            }
          ]
        },
        {
          "label": "快捷键",
          "fragment": "%E5%BF%AB%E6%8D%B7%E9%94%AE",
          "fullPath": "#%E5%BF%AB%E6%8D%B7%E9%94%AE",
          "level": 2
        },
        {
          "label": "UTC",
          "fragment": "utc",
          "fullPath": "#utc",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
