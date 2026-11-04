import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLinkList } from "./TextLinkList";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text Link List",
  component: TextLinkList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextLinkList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasTitle: true, density: "Default" } };

export const WithTitle: Story = {
  args: { ...Default.args, hasTitle: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
export const TightDensity: Story = {
  args: { ...Default.args, density: "Tight" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
