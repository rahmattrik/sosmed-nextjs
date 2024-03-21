import { UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardToFollow: React.FC = () => {
  return (
    <div className="rounded-lg bg-black p-4">
      <h2>Who To Follow</h2>

      {/* START CARD TO FOLLOW */}
      <div className="flex items-center justify-between rounded-md border border-white p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-white">Firza</p>
        </div>

        <UserPlus className="bg-white" />
      </div>
      {/* END CARD TO FOLLOW */}
      {/* START CARD TO FOLLOW */}
      <div className="flex items-center justify-between rounded-md border border-white p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-white">Firza</p>
        </div>

        <UserPlus className="bg-white" />
      </div>
      {/* END CARD TO FOLLOW */}
      {/* START CARD TO FOLLOW */}
      <div className="flex items-center justify-between rounded-md border border-white p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-white">Firza</p>
        </div>

        <UserPlus className="bg-white" />
      </div>
      {/* END CARD TO FOLLOW */}
    </div>
  );
};

export default CardToFollow;
