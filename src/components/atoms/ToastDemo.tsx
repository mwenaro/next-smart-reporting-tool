"use client";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export const ToastDemo = ({ title }: any) => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Monday, January 1, 2024 at 5:57 PM",
        });
      }}
    >
      {title ?? "Show Toast"}
    </Button>
  );
};
