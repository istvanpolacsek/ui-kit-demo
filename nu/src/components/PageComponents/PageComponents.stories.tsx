import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageComponents } from "./PageComponents";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "DS Components/.Page Components",
  component: PageComponents,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageComponents>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Footer" } };

export const FooterTypeRendersContentArea: Story = {
  args: { ...Default.args, type: "Footer" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("contentinfo")[0]).toBeVisible();
  },
};
