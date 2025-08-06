import {  UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    icon: UserIcon,
    fields:[
          defineField({
            name:'title',
            type:'string',

        }),
        defineField({
            name:'slug',
            type:'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },

        }),
        defineField({
            name:'author',
            type:'reference',
            to: [{type: 'author'}],

        }),
        defineField({
            name:'views',
            type:'number',

        }),
        defineField({
            name:'description',
            type:'text',

        }),
        defineField({
            name:'category',
            type:'string',
            validation: (Rule) => Rule.required().min(3).max(50).error('Category must be between 3 and 50 characters long.'),
        }),
        defineField({
            name:'image',
            type:'url',
            validation: (Rule) =>Rule.required().error('Image must be a valid URL.'),
        }),
        defineField({
            name:'pitch',
          type:'markdown',
            
        }),
    ],
   
});
