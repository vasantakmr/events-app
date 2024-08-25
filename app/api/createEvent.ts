import { prisma } from "@/lib/prisma";
import { FormData } from "@/lib/types";

export const createEvent = async (
  formData: FormData,
  event: React.FormEvent
) => {
  event.preventDefault();
  const formValues: FormData = { ...formData };
  const insertEvent = await prisma.event.create({
    data: {
      name: formData?.title,
      description: formData?.description,
    },
  });
  if (insertEvent) {
    console.log(insertEvent?.id);
  } else {
    console.error("Failed to add Event");
  }
};
