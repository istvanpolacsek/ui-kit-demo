import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactCard } from "./ContactCard";
const meta = {
  component: ContactCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ContactCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Primary Contact",
    description: "Arlene McCoy – Business Executive",
    actions: [
      {
        iconName: "mail",
        hasText: true,
        hasIcon: true,
        text: "Button",
        mode: "Light",
        size: "L",
      },
      {
        iconName: "phone",
        hasText: true,
        hasIcon: true,
        text: "Call",
        mode: "Light",
        size: "L",
      },
    ],
  },
};
