import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit,amet consectetur adipisicing elit.
    Incidunt enim rerum qui maiores, ea et tempora, placeat,
    non officiis architecto voluptate blanditiis quas necessitatibus dolorem dolor iure minima eligendi dicta!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <TextComponent {...args} />;
