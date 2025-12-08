import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'haiku',
  title: 'Haiku',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A brief title or first line of the haiku',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'line1',
      title: 'Line 1',
      type: 'string',
      description: 'First line (5 syllables)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'line2',
      title: 'Line 2',
      type: 'string',
      description: 'Second line (7 syllables)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'line3',
      title: 'Line 3',
      type: 'string',
      description: 'Third line (5 syllables)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this haiku (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      line1: 'line1',
      order: 'order',
    },
    prepare(selection) {
      const {title, line1, order} = selection
      return {
        title: title,
        subtitle: `Order: ${order} | ${line1}`,
      }
    },
  },
})
