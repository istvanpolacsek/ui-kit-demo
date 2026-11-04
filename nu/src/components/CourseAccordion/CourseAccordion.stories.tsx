import type { Meta, StoryObj } from "@storybook/react-vite";
import { CourseAccordion } from "./CourseAccordion";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Accordion/Course Accordion",
  component: CourseAccordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CourseAccordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed", device: "Desktop" } };

export const OpensOnClick: Story = {
  args: { ...Default.args, state: "Closed" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
  },
};
export const FocusedStateOnMobile: Story = {
  args: { ...Default.args, state: "Focused", device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const OpenStateOnDesktop: Story = {
  args: { ...Default.args, state: "Open", device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
  },
};
