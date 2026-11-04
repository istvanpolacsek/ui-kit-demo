import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionItem } from "./AccordionItem";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Accordion/Accordion Item",
  component: AccordionItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AccordionItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Title",
    content:
      "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
  },
};
export const Open: Story = { args: { ...Default.args, defaultOpen: true } };

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isDisabled(canvas.getAllByRole("button")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    {
      const hidden = canvas.queryAllByText(
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
      )[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
export const OpensAndCloses: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(
      canvas.getAllByText(
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
      )[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button")[0]);
    {
      const hidden = canvas.queryAllByText(
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
      )[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
export const DefaultOpenClosesOnClick: Story = {
  args: { ...Default.args, defaultOpen: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
      )[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button")[0]);
    {
      const hidden = canvas.queryAllByText(
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
      )[0];
      if (hidden) await expect(hidden).not.toBeVisible();
    }
  },
};
