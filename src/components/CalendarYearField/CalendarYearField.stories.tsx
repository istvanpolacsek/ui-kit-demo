import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarYearField } from "./CalendarYearField";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Calendar/Calendar Year Field",
  component: CalendarYearField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarYearField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { value: "2025" } };

export const TypeANewYear: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("textbox")[0].focus();
    await userEvent.clear(canvas.getAllByRole("textbox")[0]);
    await userEvent.type(canvas.getAllByRole("textbox")[0], "2030");
    await expect(canvas.getAllByRole("textbox")[0]).toHaveValue("2030");
  },
};
