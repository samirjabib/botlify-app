import * as Avatar from "@radix-ui/react-avatar";

  const AvatarProfile = ({
  image,
  name,
}: {
  image: string | null;
  name: string | null;
}) => (
  <div className="flex gap-5">
    <Avatar.Root className="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={image ? image : ""}
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        {name ? name : ""}
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarProfile;
