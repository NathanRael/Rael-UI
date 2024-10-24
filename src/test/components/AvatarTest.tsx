import {Avatar} from "../../components/ui/avatar";
import {AvatarFallback, AvatarImage} from "../../components/ui/avatar/Avatar.tsx";

const AvatarTest = () => {
    return (
        <Avatar size="md">
            <AvatarImage src={"https://github.com/shadcn.png"} alt={"placeholder image"}/>
            <AvatarFallback>N</AvatarFallback>
        </Avatar>
    )
}

export default AvatarTest