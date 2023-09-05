"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1097],{63648:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"SliderNum","desc":"A field which allows the user to slide a grip to enter a number within a range.\\nYou can ctrl + click to directly input a number, like InputNum.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderNum\\",\\n    Increment: number? = 1,\\n    Min: number? = 0,\\n    Max: number? = 100,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<number>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderNum","tags":["Widget","HasState"],"source":{"line":1148,"path":"src/client/Iris/API.lua"}},{"name":"SliderVector2","desc":"A field which allows the user to slide a grip to enter a Vector2 within a range.\\nYou can ctrl + click to directly input a Vector2, like InputVector2.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderVector2\\",\\n    Increment: Vector2? = { 1, 1 },\\n    Min: Vector2? = { 0, 0 },\\n    Max: Vector2? = { 100, 100 },\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Vector2>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderVector2","tags":["Widget","HasState"],"source":{"line":1179,"path":"src/client/Iris/API.lua"}},{"name":"SliderVector3","desc":"A field which allows the user to slide a grip to enter a Vector3 within a range.\\nYou can ctrl + click to directly input a Vector3, like InputVector3.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderVector3\\",\\n    Increment: Vector3? = { 1, 1, 1 },\\n    Min: Vector3? = { 0, 0, 0 },\\n    Max: Vector3? = { 100, 100, 100 },\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Vector3>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderVector3","tags":["Widget","HasState"],"source":{"line":1210,"path":"src/client/Iris/API.lua"}},{"name":"SliderUDim","desc":"A field which allows the user to slide a grip to enter a UDim within a range.\\nYou can ctrl + click to directly input a UDim, like InputUDim.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderUDim\\",\\n    Increment: UDim? = { 0.01, 1 },\\n    Min: UDim? = { 0, 0 },\\n    Max: UDim? = { 1, 960 },\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<UDim>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderUDim","tags":["Widget","HasState"],"source":{"line":1241,"path":"src/client/Iris/API.lua"}},{"name":"SliderUDim2","desc":"A field which allows the user to slide a grip to enter a UDim2 within a range.\\nYou can ctrl + click to directly input a UDim2, like InputUDim2.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderUDim2\\",\\n    Increment: UDim2? = { 0.01, 1, 0.01, 1 },\\n    Min: UDim2? = { 0, 0, 0, 0 },\\n    Max: UDim2? = { 1, 960, 1, 960 },\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<UDim2>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderUDim2","tags":["Widget","HasState"],"source":{"line":1272,"path":"src/client/Iris/API.lua"}},{"name":"SliderRect","desc":"A field which allows the user to slide a grip to enter a Rect within a range.\\nYou can ctrl + click to directly input a Rect, like InputRect.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderRect\\",\\n    Increment: Rect? = { 1, 1, 1, 1 },\\n    Min: Rect? = { 0, 0, 0, 0 },\\n    Max: Rect? = { 960, 960, 960, 960 },\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Rect>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderRect","tags":["Widget","HasState"],"source":{"line":1303,"path":"src/client/Iris/API.lua"}},{"name":"SliderNum","desc":"A field which allows the user to slide a grip to enter a number within a range.\\nYou can ctrl + click to directly input a number, like InputNum.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"SliderNum\\",\\n    Increment: number? = 1,\\n    Min: number? = 0,\\n    Max: number? = 100,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<number>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.SliderNum","tags":["Widget","HasState"],"private":true,"source":{"line":1335,"path":"src/client/Iris/API.lua"}}],"types":[],"name":"Slider","desc":"Slider Widget API\\n\\nA draggable widget with a visual bar constrained between a min and max for each datatype.\\nAllows direct typing input but also dragging the slider by clicking and holding anywhere in the box.\\n\\nSee [Input] for more details on the arguments.\\n    ","source":{"line":1118,"path":"src/client/Iris/API.lua"}}')}}]);