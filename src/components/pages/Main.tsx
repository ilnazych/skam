import { Card, Button, Avatar } from "@nextui-org/react";

export function Main() {
  return (
    <>
      <Card className="p-4 flex flex-col items-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="lg"
        />
        <p>username</p>
        <Button className="w-full" size="lg" color="primary">
          Start Farming {}
        </Button>
      </Card>
    </>
  );
}
