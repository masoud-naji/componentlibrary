import Counter from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
};

const template = (args) => <Counter {...args} />;

export const Default = template.bind({});
