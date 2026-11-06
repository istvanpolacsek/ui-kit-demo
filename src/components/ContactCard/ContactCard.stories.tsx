import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactCard } from "./ContactCard";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Contact Card",
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

export const CustomTitleAndDescription: Story = {
  args: {
    ...Default.args,
    title: "Emergency Contact",
    description: "Courtney Henry – Operations Manager",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Emergency Contact")[0]).toHaveTextContent(
      "Emergency Contact",
    );
    await expect(
      canvas.getAllByText("Courtney Henry – Operations Manager")[0],
    ).toHaveTextContent("Courtney Henry – Operations Manager");
  },
};
