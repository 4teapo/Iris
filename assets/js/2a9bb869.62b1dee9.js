"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3157],{70781:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"Text","desc":"A text label to display the text argument.\\nThe Wrapped argument will make the text wrap around if it is cut off by its parent.\\nThe Color argument will change the color of the text, by default it is defined in the configuration file.\\n\\n```lua\\nhasChildren = false\\nhasState = false\\nArguments = {\\n    Text: string,\\n    Wrapped: boolean? = false, -- whether the text will wrap around inside the parent container.\\n    Color: Color3? = Iris._config.TextColor -- the colour of the text.\\n}\\nEvents = {\\n    hovered: () -> boolean\\n}\\n```\\n    ","lua_type":"Iris.Text","tags":["Widget"],"source":{"line":334,"path":"src/client/Iris/API.lua"}},{"name":"TextWrapped","desc":"An alias for [Iris.Text](Text#Text) with the Wrapped argument set to true, and the text will wrap around if cut off by its parent.\\n\\n```lua\\nhasChildren = false\\nhasState = false\\nArguments = {\\n    Text: string,\\n}\\nEvents = {\\n    hovered: () -> boolean\\n}\\n```\\n    ","lua_type":"Iris.Text","tags":["Widget"],"source":{"line":354,"path":"src/client/Iris/API.lua"}},{"name":"TextColored","desc":"An alias for [Iris.Text](Text#Text) with the color set by the Color argument.\\n\\n```lua\\nhasChildren = false\\nhasState = false\\nArguments = {\\n    Text: string,\\n    Color: Color3 -- the colour of the text.\\n}\\nEvents = {\\n    hovered: () -> boolean\\n}\\n```\\n    ","lua_type":"Iris.Text","tags":["Widget"],"source":{"line":378,"path":"src/client/Iris/API.lua"}},{"name":"SeparatorText","desc":"Similar to [Iris.Separator](Format#Separator) but with a text label to be used as a header\\nwhen an [Iris.Tree](Tree#Tree) or [Iris.CollapsingHeader](Tree#CollapsingHeader) is not appropriate.\\n\\nVisually a full width thin line with a text label clipping out part of the line.\\n\\n```lua\\nhasChildren = false\\nhasState = false\\nArguments = {\\n    Text: string\\n}\\n```\\n    ","lua_type":"Iris.SeparatorText","tags":["Widget"],"source":{"line":402,"path":"src/client/Iris/API.lua"}},{"name":"InputText","desc":"A field which allows the user to enter text.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputText\\",\\n    TextHint: string? = \\"\\" -- a hint to display when the text box is empty.\\n}\\nEvents = {\\n    textChanged: () -> boolean, -- whenever the textbox looses focus and a change was made.\\n    hovered: () -> boolean\\n}\\nStates = {\\n    text: State<string>?\\n}\\n```\\n    ","lua_type":"Iris.InputText","tags":["Widget","HasState"],"source":{"line":428,"path":"src/client/Iris/API.lua"}}],"types":[],"name":"Text","desc":"Text Widget API\\n    ","source":{"line":311,"path":"src/client/Iris/API.lua"}}')}}]);