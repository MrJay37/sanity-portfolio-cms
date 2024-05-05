import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'software',
    title: 'Software',
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: "Title"
        }),
        defineField({
            type: "image",
            name: 'picture',
            title: "Picture"
        }),
        defineField({
            type: "array",
            name: 'tech_stack',
            title: "Tech Stack",
            of: [{
                type: "string", 
                name: "artForm", 
                title: 'Art Form' 
            }]
        }),
        defineField({
            type: "array",
            name: 'members',
            title: "Members",
            of: [
                defineField({
                    type: 'reference',
                    name: 'member',
                    title: 'Member',
                    to: [{
                        type: 'members'
                    }]
                })
            ]
        }),
        defineField({
            type: "array",
            name: 'links',
            title: "Project Media Links",
            of: [
                defineField({
                    type: 'document',
                    name: 'socialMediaLink',
                    name: 'Link',
                    fields: [
                        defineField({
                            type: 'string',
                            name: 'app',
                            title: 'App'
                        }),
                        defineField({
                            type: 'url',
                            name: 'url',
                            title: 'URL'
                        })
                    ]
                })
            ]
        }),
        defineField({
            type: 'text',
            name: 'description',
            title: 'Description'
        }),
        defineField({
            type: 'date',
            name: 'startDate',
            title: 'Start Date'
        }),
        defineField({
            type: 'date',
            name: 'endDate',
            title: 'End Date'
        })
    ]
})
