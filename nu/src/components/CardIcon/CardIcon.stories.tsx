import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardIcon } from "./CardIcon";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Cards/Card Icon",
  component: CardIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { mode: "Dark", variant: "Blue", device: "Desktop" },
};

export const DarkModeAquaVariant: Story = {
  args: { ...Default.args, mode: "Dark", variant: "Aqua" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("region")[0]);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
