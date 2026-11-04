import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextList } from "./TextList";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Text/Text List",
  component: TextList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasTitle: false, density: "Default", text: "Text Strong" },
};

export const WithTitle: Story = {
  args: { ...Default.args, hasTitle: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("list")[0]).toBeVisible();
  },
};
export const TightDensity: Story = {
  args: { ...Default.args, density: "Tight" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("list")[0]).toBeVisible();
  },
};
