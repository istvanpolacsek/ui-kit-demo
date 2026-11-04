import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileTextFieldCountryCode2 } from "./MobileTextFieldCountryCode2";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Input Field/Mobile / Text Field / Country Code 2",
  component: MobileTextFieldCountryCode2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileTextFieldCountryCode2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };

export const ErrorState: Story = {
  args: { ...Default.args, state: "Error" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("group")[0]).toBeVisible();
  },
};
