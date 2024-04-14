import { FaBookmark, FaStar, FaStream } from "react-icons/fa"
import { IoHome } from "react-icons/io5"
import { MdOutlineTravelExplore } from "react-icons/md"

 export const stats =[
    {
        id : 1,
        name : 'Post',
        stats : 1000
        
    },
    {
        id : 1,
        name : 'Follwers',
        stats : 1000
        
    },
    {
        id : 1,
        name : 'Following',
        stats : 1000
        
    },
]
export const navigations = [
    {
        id: 1,
        name: 'Feed',
        icon: <IoHome/>
    },
    {
        id: 2,
        name: 'Explore',
        icon: < MdOutlineTravelExplore/>
    },
    {
        id: 3,
        name: 'Direct',
        icon: <FaBookmark />
    },
    {
        id: 4,
        name: 'Status',
        icon: <IconGridDots/>
    },
    {
        id: 5,
        name: 'Setting',
        icon: <IconSetting/>
    },
]
