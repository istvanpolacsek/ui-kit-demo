import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormLogIn } from "./FormLogIn";
const meta = {
  title: "Forms/Form Log In",
  component: FormLogIn,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormLogIn>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
