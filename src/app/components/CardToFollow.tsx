import { UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardToFollow: React.FC = () => {
  return (
    <div className="rounded-lg bg-black p-4">
      <h2 className="text-white">Who To Follow</h2>

      {/* START CARD TO FOLLOW */}
      <div className="flex items-center justify-between rounded-md bg-white p-2 mt-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black">Gerrard</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD TO FOLLOW */}
      {/* START CARD TO FOLLOW */}
      <div className="flex items-center justify-between rounded-md bg-white p-2 mt-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black">Arthur</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD TO FOLLOW */}
      {/* START CARD TO FOLLOW */}
      <div className="flex items-center justify-between rounded-md bg-white p-2 mt-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black">Jacky</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD TO FOLLOW */}
    </div>
  );
};

export default CardToFollow;
