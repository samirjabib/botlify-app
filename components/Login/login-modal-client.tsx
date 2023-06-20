import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Title } from "@/design-system/index";
import LoginProviders from "./login-providers";
const LoginModalClient = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="bg-blue    mobile-wrapper wrapper  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogHeader>
          <DialogTitle className="text-center text-white w-full border-red-500  ">
            <Title as="h2" size={"textTitle"} className="">
              Login or sign up with your account
            </Title>
          </DialogTitle>
        </DialogHeader>
        <LoginProviders />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModalClient;
