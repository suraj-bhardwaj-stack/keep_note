import { NavLink } from "react-router-dom"

function Sidebar() {

    const getStyles = ({isActive}) => {
        const styles = `flex items-center gap-1 p-2 my-2  rounded-r-full`
        return isActive ? `bg-[#085fcb] text-white ${styles}` 
        : `hover:bg-[#085fcb] hover:text-white  ${styles}`
    }

  return (
    <aside className="w-[140px] flex flex-col  h-screen shadow-md p-2"  >
        <NavLink className={getStyles} to="/">
        <span class="material-symbols-outlined">home</span>
        <span> Home</span>
        </NavLink>
        <NavLink className={getStyles} to="/archive">
        <span class="material-symbols-outlined">archive</span>
        <span>Archive</span>
        </NavLink>
        <NavLink className={getStyles} to="/important">
        <span class="material-symbols-outlined">label_important</span>
        <span>Important</span>
        </NavLink>
        <NavLink className={getStyles} to="/bin">
        <span class="material-symbols-outlined">auto_delete</span>
        <span>Bin</span>
        </NavLink>
    </aside>
  )
}

export default Sidebar