import HookUseEffect from "./components/HookUseEffect"
import HookUseReducer from "./components/HookUseReducer"
import HookUseState from "./components/HookUseState"

import { useContext } from "react"
import { SomeContext } from "./components/HookUseContext"
import HookUseRef from "./components/HookUseRef"
import HookUseCallBack from "./components/HookUseCallBack"
import HookUseMemo from "./components/HookUseMemo"
import HookUseLayoutEffect from "./components/HookUseLayoutEffect"
import HookUseImperativeHandle from "./components/HookUseImperativeHandle"
import HooksCustom from "./components/HooksCustom"

function App() {
  const {contextValue} = useContext(SomeContext)

  return (
    <>
      <HookUseState/>
      <HookUseReducer/>
      <HookUseEffect/>
      <HookUseRef/>
      <hr />
      <h2>useContext</h2>
      <p>valor do context: {contextValue}</p>
      <hr />
      <HookUseCallBack/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
      <HookUseImperativeHandle/>
      <HooksCustom/>
    </>
  )
}

export default App
