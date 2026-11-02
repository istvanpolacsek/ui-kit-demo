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
    title: "Jane Doe",
    description: "Jane Doe – Software Engineer",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Jane Doe")[0]).toHaveTextContent(
      "Jane Doe",
    );
    await expect(
      canvas.getAllByText("Jane Doe – Software Engineer")[0],
    ).toHaveTextContent("Jane Doe – Software Engineer");
  },
};
export const HoverRevealsContactInfo: Story = {
  args: {
    ...Default.args,
    title: "Primary Contact",
    description: "Arlene McCoy – Business Executive",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByText("Primary Contact")[0]);
    await expect(
      canvas.getAllByText("Arlene McCoy – Business Executive")[0],
    ).toBeVisible();
  },
};
