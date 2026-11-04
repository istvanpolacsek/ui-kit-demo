import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageAccordion } from "./PageAccordion";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Page Accordion",
  component: PageAccordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageAccordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobilePlatformView: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
